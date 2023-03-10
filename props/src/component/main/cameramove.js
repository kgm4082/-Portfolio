import * as THREE from "three";
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { InteractionManager } from "three.interactive";
import * as TWEEN from '@tweenjs/tween.js'

let scene, renderer, camera;
let interactiveManager;
// init();

function Init(){
    const container = document.body;
    
    scene = new THREE.Scene();
    scene.background = new THREE.Color(0xa0a0a0);
    //scene.fog = new THREE.Fog(0xa0a0a0, 10, 50);

    const light = new THREE.PointLight(0xffffff, 1, 1000);
    light.position.set(0, 0, 10);
    scene.add(light);

    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 5;
    
    renderer = new THREE.WebGLRenderer({antialias : true});
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.outputEncoding = THREE.sRGBEncoding;
    renderer.shadowMap.enabled = true;
    container.appendChild(renderer.domElement);
    
    const cubes = {
        pink: createCube({ color: 0xff00ce, x: -1, y: -1 }),
        purple: createCube({ color: 0x9300fb, x: 1, y: -1 }),
        blue: createCube({ color: 0x0065d9, x: 1, y: 1 }),
        cyan: createCube({ color: 0x00d7d0, x: -1, y: 1 })
    }

    for(const geocube of Object.values(cubes)){
        scene.add(geocube);
    }
    
    interactiveManager = new InteractionManager(
        renderer, camera, renderer.domElement
    );
    for(const [name, object] of Object.entries(cubes)) {
        object.addEventListener("click", (event) => {
            event.stopPropagation();
            const cube = event.target;
            const coords = {x: camera.position.x, y : camera.position.y};
            new TWEEN.Tween(coords).to({x:cube.position.x, y:cube.position.y})
            .onUpdate(() => camera.position.set(coords.x, coords.y, camera.position.z)
            ).start();
            //camera.position.set(cube.position.x, cube.position.y, camera.position.z);
        });
        interactiveManager.add(object);
        scene.add(object);
    }
    
    // const controls = new OrbitControls(camera, renderer.domElement);
    // controls.enablePan = false;
    // controls.enableZoom = false;
    // controls.target.set(0, 1, 0);
    // controls.update();

    animate();

    window.addEventListener('resize', onWindowResize);
}

function createCube(obj){
    const varr = Object.values(obj);
    const color = varr[0];
    const geometry = new THREE.BoxGeometry();
    const material = new THREE.MeshLambertMaterial({ color });
    const cube = new THREE.Mesh(geometry, material);
    cube.position.set(varr[1], varr[2], 0);
    
    return cube;
}

function animate() {
    // Render loop
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
    interactiveManager.update();
    TWEEN.update();
}

function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    renderer.setSize(window.innerWidth, window.innerHeight);
}

export default Init;