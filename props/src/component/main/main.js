import "./main.css";
import * as THREE from "three";
import earth from "../images/earthmap.jpg";

function Main() {

    console.log("안녕하시와요")
    // 장면
    const scene = new THREE.Scene();

    // 카메라
    const camera = new THREE.PerspectiveCamera(
        75,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
    );
    camera.position.z = 2; // 카메라 Z축 위치

    // 렌더러
    const renderer = new THREE.WebGLRenderer({
        // canvas : canvas,
        alpha: true,
        antialias: true, // 안티앨리어싱 여부
    });
    renderer.setSize(window.innerWidth, window.innerHeight); // 랜더러 사이즈

    document.body.appendChild(renderer.domElement);

    // 빛
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.5);
    // pointLight.position.set(0, 2, 12);
    ambientLight.position.set(0, 0, 0);
    scene.add(ambientLight);

    // 텍스트 추가
    const textureLoader = new THREE.TextureLoader();
    const textureBaseColor = textureLoader.load(earth);
    // const textureBaseColor = textureLoader.load('../static/img/stone_basecolor.jpg');

    // 도형 추가
    const geometry = new THREE.SphereGeometry(0.7, 64, 32);
    const material01 = new THREE.MeshStandardMaterial({
        map: textureBaseColor,
        emissive : 0x000000
    });
    const obj01 = new THREE.Mesh(geometry, material01);
    obj01.position.x = 0;
    scene.add(obj01);

    function render(time) {
        time *= 0.001; // convert time to seconds

        // obj01.rotation.x += 0.01;
        obj01.rotation.y += 0.001;

        renderer.render(scene, camera);
        requestAnimationFrame(render);
    }
    requestAnimationFrame(render);

    // 반응형 처리
    function OnWindowResize() {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    }
    window.addEventListener("resize", OnWindowResize);

}

export default Main;
