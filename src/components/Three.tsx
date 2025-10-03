"use client";

import * as THREE from "three";
import { GLTF, GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { useEffect } from "react";

export default function Three() {
  useEffect(() => {
    const container = document.getElementById("three-container");
    if (!container) return;

    // Set renderer size to match container
    const getSize = () => ({
      width: container.clientWidth,
      height: container.clientHeight,
    });

    const { width, height } = getSize();

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(35, width / height, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    container?.appendChild(renderer.domElement);

    const loader = new GLTFLoader();

    let model: THREE.Object3D | undefined; // Declare the variable to store the model

    loader.load(
      "/borzoi_centered.glb", // Path to the .glb file
      (gltf: GLTF) => {
        model = gltf.scene; // Assign the loaded scene to the `model` variable
        scene.add(model); // Add the model to the scene
        console.log("Model loaded successfully:", model);
      },
      undefined
    );

    // const geometry = new THREE.BoxGeometry(3, 2, 2);
    // const material = new THREE.MeshBasicMaterial({ color: 0xaaaaaa });
    // const model = new THREE.Mesh(geometry, material);

    // loader.load("/Guitar.glb");

    camera.position.z = 8;
    // camera.up.set(0, -1, 0);

    const ambientLight = new THREE.AmbientLight(0x404040, 1);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 3);
    directionalLight.position.set(1, 0.2, 1).normalize();
    scene.add(directionalLight);

    let mouseX = 0;
    let mouseY = 0;

    // Helper to check if screen is mobile
    const isMobile = () => window.innerWidth < 1024;

    document.addEventListener("mousemove", (event) => {
      if (isMobile()) return;
      mouseX = (event.clientX / window.innerWidth) * 2;
      mouseY = -(event.clientY / window.innerWidth) * 2;

      if (model) {
        model.rotation.y = (mouseX - Math.PI) * Math.PI;
        model.rotation.x = (mouseY - Math.PI / 2) * Math.PI;
      }
    });

    function animate() {
      requestAnimationFrame(animate);

      if (model && isMobile()) {
        model.rotation.y += 0.006;
      }

      renderer.render(scene, camera);
    }

    animate();

    // window.addEventListener("resize", () => {
    //   camera.aspect = window.innerWidth / window.innerHeight;
    //   camera.updateProjectionMatrix();
    //   renderer.setSize(width, height);
    // });

    return () => {
      if (container) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div className='h-[400px] lg:h-full overflow-visible'>
      <div
        id="three-container"
        className={`h-full overflow-visible`}
      ></div>
    </div>
  );
}