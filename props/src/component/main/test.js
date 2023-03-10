import * as THREE from 'three';
import {OrbitControls} from 'three/addons/controls/OrbitControls.js';
import './main.css';

function Main() {
  const canvas = document.querySelector('#c');
  const renderer = new THREE.WebGLRenderer({canvas : canvas, antialias: true, alpha: true});

  // 카메라 설정
  const fov = 75;
  const aspect = window.innerWidth / window.innerHeight;  // 캔버스 비율
  const near = 0.1;
  const far = 10;
  const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
  camera.position.z = 2.5;

  // 컨트롤러 설정
  const controls = new OrbitControls(camera, canvas);
  controls.enableDamping = true;
  controls.enablePan = false;
  controls.enableZoom = false;
  controls.minDistance = 1.2;
  controls.maxDistance = 4;
  controls.update();

  // 씬
  const scene = new THREE.Scene();
  scene.background = new THREE.Color('#08162D');

  // 선택 씬
  const pickingScene = new THREE.Scene();
  pickingScene.background = new THREE.Color(0);

  // 색상 함수
  const tempColor = new THREE.Color();
  function get255BasedColor(color) {
    tempColor.set(color);
    const base = tempColor.toArray().map(v => v * 255);
    base.push(255); // alpha
    return base;
  }
/********************************************************************************** Main **********************************************************************************/
  const maxNumCountries = 512;
  const paletteTextureWidth = maxNumCountries;
  const paletteTextureHeight = 1;
  const palette = new Uint8Array(paletteTextureWidth * 4);
  const paletteTexture = new THREE.DataTexture(palette, paletteTextureWidth, paletteTextureHeight);
  paletteTexture.minFilter = THREE.NearestFilter;
  paletteTexture.magFilter = THREE.NearestFilter;

  const selectedColor = get255BasedColor('red');
  const unselectedColor = get255BasedColor('#444');
  const oceanColor = get255BasedColor('rgb(100,200,255)');
  resetPalette();

  // 팔레트 색상 지정 함수
  function setPaletteColor(index, color) {
    palette.set(color, index * 4);
  }

  // 팔레트 초기화 함수
  function resetPalette() {
    // 모든 팔레트의 색상을 unselectedColor로 바꿉니다.
    for (let i = 1; i < maxNumCountries; ++i) {
      setPaletteColor(i, unselectedColor);
    }

    // 바다의 색을 지정합니다. (index #0)
    setPaletteColor(0, oceanColor);
    paletteTexture.needsUpdate = true;
  }

  {
    const loader = new THREE.TextureLoader();
    const geometry = new THREE.SphereGeometry(1, 64, 32);

    const indexTexture = loader.load('https://threejs.org/manual/examples/resources/data/world/country-index-texture.png', render);
    indexTexture.minFilter = THREE.NearestFilter;
    indexTexture.magFilter = THREE.NearestFilter;

    const pickingMaterial = new THREE.MeshBasicMaterial({map: indexTexture});
    pickingScene.add(new THREE.Mesh(geometry, pickingMaterial));

    const fragmentShaderReplacements = [
      {
        from: '#include <common>',
        to: `
          #include <common>
          uniform sampler2D indexTexture;
          uniform sampler2D paletteTexture;
          uniform float paletteTextureWidth;
        `,
      },
      {
        from: '#include <color_fragment>',
        to: `
          #include <color_fragment>
          {
            vec4 indexColor = texture2D(indexTexture, vUv);
            float index = indexColor.r * 255.0 + indexColor.g * 255.0 * 256.0;
            vec2 paletteUV = vec2((index + 0.5) / paletteTextureWidth, 0.5);
            vec4 paletteColor = texture2D(paletteTexture, paletteUV);
            // diffuseColor.rgb += paletteColor.rgb;   // white outlines
            diffuseColor.rgb = paletteColor.rgb - diffuseColor.rgb;  // black outlines
          }
        `,
      },
    ];

    const texture = loader.load('https://threejs.org/manual/examples/resources/data/world/country-outlines-4k.png', render);
    const material = new THREE.MeshBasicMaterial({map: texture});
    material.onBeforeCompile = function(shader) {
      fragmentShaderReplacements.forEach((rep) => {
        shader.fragmentShader = shader.fragmentShader.replace(rep.from, rep.to);
      });
      shader.uniforms.paletteTexture = {value: paletteTexture};
      shader.uniforms.indexTexture = {value: indexTexture};
      shader.uniforms.paletteTextureWidth = {value: paletteTextureWidth};
    };
    scene.add(new THREE.Mesh(geometry, material));
  }

  async function loadJSON(url) {
    const req = await fetch(url);
    return req.json();
  }

  let numCountriesSelected = 0;
  let countryInfos;
  async function loadCountryData() {
    countryInfos = await loadJSON('https://threejs.org/manual/examples/resources/data/world/country-info.json');  

    const lonFudge = Math.PI * 1.5;
    const latFudge = Math.PI;
    // 아래 헬퍼 Object3D는 육면체들의 위치 변화를 간단하게 만들어줍니다.
    // lonHelper를 Y축으로 돌려 경도(longitude)를 맞출 수 있습니다.
    const lonHelper = new THREE.Object3D();
    // latHelper를 X축으로 돌려 위도(latitude)를 맞출 수 있습니다.
    const latHelper = new THREE.Object3D();
    lonHelper.add(latHelper);
    // positionHelper는 다른 요소의 기준축을 구체의 끝에 맞추는 역할을 합니다.
    const positionHelper = new THREE.Object3D();
    positionHelper.position.z = 1;
    latHelper.add(positionHelper);

    const labelParentElem = document.querySelector('#labels');
    for (const countryInfo of countryInfos) {
      const {lat, lon, min, max, name} = countryInfo;
      // 헬퍼가 위도와 경도를 가리키게 바꿉니다.
      lonHelper.rotation.y = THREE.MathUtils.degToRad(lon) + lonFudge;
      latHelper.rotation.x = THREE.MathUtils.degToRad(lat) + latFudge;

      // 위도와 경도를 구합니다.
      positionHelper.updateWorldMatrix(true, false);
      const position = new THREE.Vector3();
      positionHelper.getWorldPosition(position);
      countryInfo.position = position;

      // 각 나라의 영영 크기를 계산합니다.
      const width = max[0] - min[0];
      const height = max[1] - min[1];
      const area = width * height;
      countryInfo.area = area;

      // 각 나라마다 텍스트 요소를 추가합니다.
      const elem = document.createElement('div');
      elem.textContent = name;
      labelParentElem.appendChild(elem);
      countryInfo.elem = elem;
    }
    requestRenderIfNotRequested();
  }
  
  loadCountryData();

  const tempV = new THREE.Vector3();
  const cameraToPoint = new THREE.Vector3();
  const cameraPosition = new THREE.Vector3();
  const normalMatrix = new THREE.Matrix3();

  const settings = {
    minArea: 20,
    maxVisibleDot: -0.2,
  };
  
  var v3position = {x : 0.589, y:-0.186, z:784};
  // *****************************
  function getPositionValeu(v3position){
    if (!countryInfos) {
      return;
    }

    const large = settings.minArea * settings.minArea;
    // 카메라의 상대 방향을 나타내는 행렬 좌표를 가져옵니다.
    normalMatrix.getNormalMatrix(camera.matrixWorldInverse);
    // 카메라의 위치를 가져옵니다.
    camera.getWorldPosition(cameraPosition);
    for (const countryInfo of countryInfos) {
      if(countryInfo.name === "Brazil"){
        var setveposition = countryInfo.position;
        camera.position.x = setveposition.x;
        camera.position.y = setveposition.y;
      }

      const {position, elem, area, selected} = countryInfo;
      const largeEnough = area >= large;
      const show = selected || (numCountriesSelected === 0 && largeEnough);
      if (!show) {
        elem.style.display = 'none';
        continue;
      }


      // 카메라의 방향에 기반해 위치를 조정합니다.
      // 구체는 중점에 있고 구체의 반지름이 한 칸이기에 아래는
      // 카메라에 상대적인 위치 벡터를 반환합니다.
      tempV.copy(position);
      tempV.applyMatrix3(normalMatrix);

       // 카메라로부터 이 위치까지의 거리를 계산합니다.
      cameraToPoint.copy(position);
      cameraToPoint.applyMatrix4(camera.matrixWorldInverse).normalize();

      // 카메라에서 현재 위치의 방향(벡터)값으로 카메라에서 지구본 위 위치값까지의
      // 방향값을 구한 뒤, 이 값들로 스칼라곱을 구합니다.
      // 1 = 카메라를 바라봄
      // 0 = 카메라가 구체를 바라봤을 때 구체의 탄젠트(tangent) 지점에 있음
      // < 0 = 다른 쪽을 바라봄
      const dot = tempV.dot(cameraToPoint);

      

    }
  }

  function updateLabels() {
    // JSON 파일을 아직 불러오지 않았을 경우
    if (!countryInfos) {
      return;
    }

    const large = settings.minArea * settings.minArea;
    // 카메라의 상대 방향을 나타내는 행렬 좌표를 가져옵니다.
    normalMatrix.getNormalMatrix(camera.matrixWorldInverse);
    // 카메라의 위치를 가져옵니다.
    camera.getWorldPosition(cameraPosition);
    for (const countryInfo of countryInfos) {
      const {position, elem, area, selected} = countryInfo;
      const largeEnough = area >= large;
      const show = selected || (numCountriesSelected === 0 && largeEnough);
      if (!show) {
        elem.style.display = 'none';
        continue;
      }

      // 카메라의 방향에 기반해 위치를 조정합니다.
      // 구체는 중점에 있고 구체의 반지름이 한 칸이기에 아래는
      // 카메라에 상대적인 위치 벡터를 반환합니다.
      tempV.copy(position);
      tempV.applyMatrix3(normalMatrix);

       // 카메라로부터 이 위치까지의 거리를 계산합니다.
      cameraToPoint.copy(position);
      cameraToPoint.applyMatrix4(camera.matrixWorldInverse).normalize();

      // 카메라에서 현재 위치의 방향(벡터)값으로 카메라에서 지구본 위 위치값까지의
      // 방향값을 구한 뒤, 이 값들로 스칼라곱을 구합니다.
      // 1 = 카메라를 바라봄
      // 0 = 카메라가 구체를 바라봤을 때 구체의 탄젠트(tangent) 지점에 있음
      // < 0 = 다른 쪽을 바라봄
      const dot = tempV.dot(cameraToPoint);

      // 카메라를 바라보지 않는다면 이름표를 숨깁니다.
      if (dot > settings.maxVisibleDot) {
        elem.style.display = 'none';
        continue;
      }

      // 이름표 요소에 기존 display 스타일이 적용되도록 합니다.
      elem.style.display = '';

      // 정규화(normalize)된 화면 상의 현재 좌표값을 가져옵니다.
      // x와 y의 범위는 -1에서 +1까지로, x = -1은 왼쪽, y = -1은 아래쪽입니다.
      tempV.copy(position);
      tempV.project(camera);

      // 정규화된 위치값을 CSS 좌표로 바꿉니다.
      const x = (tempV.x *  .5 + .5) * canvas.clientWidth;
      const y = (tempV.y * -.5 + .5) * canvas.clientHeight;

      // 이름표 요소를 해당 좌표로 옮깁니다.
      elem.style.transform = `translate(-50%, -50%) translate(${x}px,${y}px)`;

      // 정렬을 위해 z-index 값을 설정합니다.
      elem.style.zIndex = (-tempV.z * .5 + .5) * 100000 | 0;

    }
  }

  class GPUPickHelper {
    constructor() {
      // 1x1 픽셀 크기의 렌더 타겟을 생성합니다
      this.pickingTexture = new THREE.WebGLRenderTarget(1, 1);
      this.pixelBuffer = new Uint8Array(4);
    }
    pick(cssPosition, scene, camera) {
      const {pickingTexture, pixelBuffer} = this;

      // view offset을 마우스 포인터 아래 1픽셀로 설정합니다
      const pixelRatio = renderer.getPixelRatio();
      camera.setViewOffset(
          renderer.getContext().drawingBufferWidth,   // full width
          renderer.getContext().drawingBufferHeight,  // full top
          cssPosition.x * pixelRatio | 0,             // rect x
          cssPosition.y * pixelRatio | 0,             // rect y
          1,                                          // rect width
          1,                                          // rect height
      );
      // 장면을 렌더링합니다
      renderer.setRenderTarget(pickingTexture);
      renderer.render(scene, camera);
      renderer.setRenderTarget(null);
      // view offset을 정상으로 돌려 원래의 화면을 렌더링하도록 합니다
      camera.clearViewOffset();
      // 픽셀을 감지합니다
      renderer.readRenderTargetPixels(
          pickingTexture,
          0,   // x
          0,   // y
          1,   // width
          1,   // height
          pixelBuffer);

      const id =
          (pixelBuffer[0] <<  0) |
          (pixelBuffer[1] <<  8) |
          (pixelBuffer[2] << 16);

      return id;
    }
  }

  const pickHelper = new GPUPickHelper();

  const maxClickTimeMs = 200;
  const maxMoveDeltaSq = 5 * 5;
  const startPosition = {};
  let startTimeMs;

  function getCanvasRelativePosition(event) {
    const rect = canvas.getBoundingClientRect();
    return {
      x: (event.clientX - rect.left) * canvas.width  / rect.width,
      y: (event.clientY - rect.top ) * canvas.height / rect.height,
    };
  }

  function recordStartTimeAndPosition(event) {
    startTimeMs = performance.now();
    const pos = getCanvasRelativePosition(event);
    startPosition.x = pos.x;
    startPosition.y = pos.y;
  }

  function pickCountry(event) {
    // 아직 데이터를 불러오지 않았을 경우
    if (!countryInfos) {
      return;
    }

    // 포인터를 누른 후 떼기까지 일정 시간 이상 걸렸다면
    // 선택 액션이 아닌 드래그 액션으로 간주합니다.
    const clickTimeMs = performance.now() - startTimeMs;
    if (clickTimeMs > maxClickTimeMs) {
      return;
    }

    // 포인터가 움직였다면 드래그로 간주합니다.
    const position = getCanvasRelativePosition(event); // {x : ㅁㅁㅁ, y : aaa}
    const moveDeltaSq = (startPosition.x - position.x) ** 2 +
                        (startPosition.y - position.y) ** 2;
    if (moveDeltaSq > maxMoveDeltaSq) {
      return;
    }

    const id = pickHelper.pick(position, pickingScene, camera);
    
    if (id > 0) {
      const countryInfo = countryInfos[id - 1];
      const selected = !countryInfo.selected; // true

      if (selected && !event.shiftKey && !event.ctrlKey && !event.metaKey) {
        unselectAllCountries();
      }
      numCountriesSelected += selected ? 1 : -1;
      console.log(countryInfo.selected);
      countryInfo.selected = selected;
      setPaletteColor(id, selected ? selectedColor : unselectedColor);
      paletteTexture.needsUpdate = true;
    } else if (numCountriesSelected) {
      unselectAllCountries();
    }
    requestRenderIfNotRequested();
  }

  function unselectAllCountries() {
    numCountriesSelected = 0;
    countryInfos.forEach((countryInfo) => {
      countryInfo.selected = false;
    });
    resetPalette();
  }

  canvas.addEventListener('pointerdown', recordStartTimeAndPosition);
  canvas.addEventListener('pointerup', pickCountry);

  function resizeRendererToDisplaySize(renderer) {
    const canvas = renderer.domElement;
    const width = canvas.clientWidth;
    const height = canvas.clientHeight;
    const needResize = canvas.width !== width || canvas.height !== height;
    if (needResize) {
      // renderer.setSize(width, height, false);
      renderer.setSize(window.innerWidth, window.innerHeight);
    }
    return needResize;
  }

  let renderRequested = false;

  function render() {
    renderRequested = undefined;

    if (resizeRendererToDisplaySize(renderer)) {
      const canvas = renderer.domElement;
      camera.aspect = canvas.clientWidth / canvas.clientHeight;
      camera.updateProjectionMatrix();
    }

    controls.update();

    updateLabels();

    renderer.render(scene, camera);
  }
  render();

  // 반응형 처리
  function OnWindowResize(){
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  }

  function requestRenderIfNotRequested() {
    if (!renderRequested) {
      renderRequested = true;
      requestAnimationFrame(render);
    }
  }

  controls.addEventListener('change', requestRenderIfNotRequested);
  window.addEventListener('resize', requestRenderIfNotRequested);
  window.addEventListener('resize', OnWindowResize);
}

export default Main;


    // camera.position.x = -0.23725055379260815;
    // camera.position.y = 0.5507721234212171;
    // camera.position.z = -0.8002263697149605;
    // camera.position.x = -0.11526210938713571;
    // camera.position.y = 0.6377197985985376;
    // camera.position.z = 0.7615957619466307;