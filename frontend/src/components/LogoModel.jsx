import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  OrbitControls,
  useTexture,
} from "@react-three/drei";

function ImageCircle() {
  const meshRef = useRef();

  // Image Texture
  const texture = useTexture("/3d.png");

  // Floating Animation
  useFrame((state) => {
    const time = state.clock.getElapsedTime();

    if (meshRef.current) {
      meshRef.current.position.y =
        Math.sin(time * 1.5) * 0.08;
    }
  });

  return (
    <mesh
      ref={meshRef}
      rotation={[Math.PI / 2, 0, 0]}
    >
      {/* Thick Circle */}
      <cylinderGeometry
        args={[1.8, 1.8, 0.22, 128]}
      />

      {/* Material */}
      <meshStandardMaterial
        map={texture}
        color="#f7f6ef"
        metalness={0.18}
        roughness={0.3}
      />
    </mesh>
  );
}

export default function App() {
  return (
    <div
      className="
        relative
        w-full
        h-full
        overflow-hidden
      "
    >
      {/* Background Glow */}
      <div
        className="
          absolute
          top-1/2
          left-1/2
          w-[350px]
          h-[350px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-orange-200/40
          blur-[100px]
          z-0
        "
      />

      {/* Bottom Shadow */}
      <div
        className="
          absolute
          bottom-[160px]
          left-1/2
          -translate-x-1/2
          w-[180px]
          h-[25px]
          rounded-full
          bg-black/10
          blur-[18px]
          z-0
        "
      />

      {/* Canvas */}
      <Canvas
        className="relative z-10"
        camera={{
          position: [0, 0, 5],
          fov: 45,
        }}
      >
        {/* Main Light */}
        <ambientLight intensity={1.5} />

        {/* Front White Light */}
        <directionalLight
          position={[0, 3, 5]}
          intensity={2}
        />

        {/* Right Blue Light */}
        <pointLight
          position={[3, 2, 3]}
          intensity={1.3}
          color="#c4b5fd"
        />

        {/* Left Orange Light */}
        <pointLight
          position={[-3, -2, -2]}
          intensity={1}
          color="#fdba74"
        />

        {/* Top Soft Pink Light */}
        <pointLight
          position={[0, 5, 2]}
          intensity={0.7}
          color="#f9a8d4"
        />

        {/* 3D Model */}
        <ImageCircle />

        {/* Drag Rotate */}
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate={false}
          rotateSpeed={0.8}
        />
      </Canvas>
    </div>
  );
}