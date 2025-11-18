'use client';

import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera, Environment } from '@react-three/drei';
import { Suspense } from 'react';
import * as THREE from 'three';

function TShirt3D() {
  return (
    <group>
      {/* T-Shirt Body */}
      <mesh position={[0, 0, 0]} castShadow>
        <boxGeometry args={[2, 2.5, 0.3]} />
        <meshStandardMaterial color="#3B82F6" roughness={0.4} metalness={0.1} />
      </mesh>
      
      {/* Left Sleeve */}
      <mesh position={[-1.3, 0.5, 0]} rotation={[0, 0, -0.3]} castShadow>
        <boxGeometry args={[0.8, 1, 0.3]} />
        <meshStandardMaterial color="#3B82F6" roughness={0.4} metalness={0.1} />
      </mesh>
      
      {/* Right Sleeve */}
      <mesh position={[1.3, 0.5, 0]} rotation={[0, 0, 0.3]} castShadow>
        <boxGeometry args={[0.8, 1, 0.3]} />
        <meshStandardMaterial color="#3B82F6" roughness={0.4} metalness={0.1} />
      </mesh>
      
      {/* Collar */}
      <mesh position={[0, 1.3, 0]} castShadow>
        <cylinderGeometry args={[0.3, 0.3, 0.3, 32]} />
        <meshStandardMaterial color="#2563EB" roughness={0.4} metalness={0.1} />
      </mesh>
    </group>
  );
}

function LoadingBox() {
  return (
    <mesh>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="#6B7280" wireframe />
    </mesh>
  );
}

export default function Hero3D() {
  return (
    <div className="w-full h-[600px] relative">
      <Canvas shadows>
        <PerspectiveCamera makeDefault position={[0, 0, 8]} />
        <OrbitControls 
          enableZoom={false} 
          autoRotate 
          autoRotateSpeed={2}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 3}
        />
        
        <ambientLight intensity={0.5} />
        <directionalLight 
          position={[10, 10, 5]} 
          intensity={1} 
          castShadow
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
        />
        <pointLight position={[-10, -10, -5]} intensity={0.5} color="#3B82F6" />
        
        <Suspense fallback={<LoadingBox />}>
          <TShirt3D />
          <Environment preset="city" />
        </Suspense>
        
        {/* Ground plane for shadows */}
        <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -2, 0]} receiveShadow>
          <planeGeometry args={[20, 20]} />
          <shadowMaterial opacity={0.3} />
        </mesh>
      </Canvas>
      
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-6xl font-bold text-white mb-4 drop-shadow-lg">
            Fashion in 3D
          </h1>
          <p className="text-xl text-white drop-shadow-md">
            Experience clothing like never before
          </p>
        </div>
      </div>
    </div>
  );
}
