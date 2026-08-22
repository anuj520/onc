import { useEffect, useRef } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

export const SomethingNew = () => {
  const con = useRef();

  useEffect(() => {
    if (!con.current) return;

    const scene = new THREE.Scene();

    const textureLoader = new THREE.TextureLoader();
    const textground = textureLoader.load("/earth.jpg");

    const planeGeometry = new THREE.SphereGeometry(20, 20, 20);
    const material = new THREE.MeshPhongMaterial({ map: textground});

    const ground = new THREE.Mesh(planeGeometry, material);
    ground.rotation.x = -Math.PI / 2; // Horizontal ground
    scene.add(ground);

    const axesHelper = new THREE.AxesHelper(5);
    scene.add(axesHelper);

    // Adding light
 const light = new THREE.AmbientLight("#e3e6eeff",0.3);
scene.add(light)

const pointlight = new THREE.PointLight("#e3e6eeff",113)
pointlight.position.set(5,5,5);
scene.add(pointlight)

    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.set(0, 15, 15);
    camera.lookAt(0, 0, 0);

    const renderer = new THREE.WebGLRenderer({
      canvas: con.current,
      antialias: true,
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
   renderer.setPixelRatio(Math.min(window.devicePixelRatio,2))

    const controls = new OrbitControls(camera, con.current);
    controls.enableDamping = true;

    window.addEventListener("resize", () => {
      camera.aspect = window.innerWidth / window.innerHeight; // सही
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    });

    const renderLoop = () => {
      controls.update();
      renderer.render(scene, camera);
      requestAnimationFrame(renderLoop);
    };

    renderLoop();

    return () => {
      window.removeEventListener("resize", () => {});
      renderer.dispose();
    };
  }, []);  // dependency array खाली रखें

  return <canvas className="three" ref={con}></canvas>;
};
