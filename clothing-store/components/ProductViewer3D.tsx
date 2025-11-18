'use client';

import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera, Environment } from '@react-three/drei';
import { Suspense } from 'react';

interface ProductViewer3DProps {
  category: string;
  color: string;
}

function DetailedClothingMesh({ category, color }: { category: string; color: string }) {
  switch (category) {
    case 'tshirt':
      return (
        <group scale={1.5}>
          <mesh position={[0, 0, 0]} castShadow>
            <boxGeometry args={[1.5, 2, 0.2]} />
            <meshStandardMaterial color={color} roughness={0.4} metalness={0.1} />
          </mesh>
          <mesh position={[-1, 0.3, 0]} rotation={[0, 0, -0.3]} castShadow>
            <boxGeometry args={[0.6, 0.8, 0.2]} />
            <meshStandardMaterial color={color} roughness={0.4} metalness={0.1} />
          </mesh>
          <mesh position={[1, 0.3, 0]} rotation={[0, 0, 0.3]} castShadow>
            <boxGeometry args={[0.6, 0.8, 0.2]} />
            <meshStandardMaterial color={color} roughness={0.4} metalness={0.1} />
          </mesh>
          <mesh position={[0, 1, 0]} castShadow>
            <cylinderGeometry args={[0.25, 0.25, 0.25, 32]} />
            <meshStandardMaterial color={color} roughness={0.3} metalness={0.15} />
          </mesh>
        </group>
      );
    
    case 'jacket':
      return (
        <group scale={1.5}>
          <mesh position={[0, 0, 0]} castShadow>
            <boxGeometry args={[1.8, 2.2, 0.3]} />
            <meshStandardMaterial color={color} roughness={0.6} metalness={0.2} />
          </mesh>
          <mesh position={[-1.1, 0.2, 0]} rotation={[0, 0, -0.2]} castShadow>
            <boxGeometry args={[0.7, 1.2, 0.3]} />
            <meshStandardMaterial color={color} roughness={0.6} metalness={0.2} />
          </mesh>
          <mesh position={[1.1, 0.2, 0]} rotation={[0, 0, 0.2]} castShadow>
            <boxGeometry args={[0.7, 1.2, 0.3]} />
            <meshStandardMaterial color={color} roughness={0.6} metalness={0.2} />
          </mesh>
          <mesh position={[0, 1.1, 0.05]} castShadow>
            <boxGeometry args={[1.2, 0.3, 0.25]} />
            <meshStandardMaterial color={color} roughness={0.5} metalness={0.3} />
          </mesh>
          {[...Array(5)].map((_, i) => (
            <mesh key={i} position={[0, 0.8 - i * 0.4, 0.16]}>
              <cylinderGeometry args={[0.05, 0.05, 0.1, 16]} />
              <meshStandardMaterial color="#FFD700" roughness={0.2} metalness={0.8} />
            </mesh>
          ))}
        </group>
      );
    
    case 'pants':
      return (
        <group scale={1.5}>
          <mesh position={[-0.4, 0, 0]} castShadow>
            <boxGeometry args={[0.6, 2.5, 0.3]} />
            <meshStandardMaterial color={color} roughness={0.5} metalness={0.1} />
          </mesh>
          <mesh position={[0.4, 0, 0]} castShadow>
            <boxGeometry args={[0.6, 2.5, 0.3]} />
            <meshStandardMaterial color={color} roughness={0.5} metalness={0.1} />
          </mesh>
          <mesh position={[0, 1.1, 0]} castShadow>
            <boxGeometry args={[1.4, 0.4, 0.3]} />
            <meshStandardMaterial color={color} roughness={0.5} metalness={0.1} />
          </mesh>
          <mesh position={[-0.5, 1.1, 0.16]}>
            <cylinderGeometry args={[0.04, 0.04, 0.08, 16]} />
            <meshStandardMaterial color="#C0C0C0" roughness={0.3} metalness={0.7} />
          </mesh>
          <mesh position={[0.5, 1.1, 0.16]}>
            <cylinderGeometry args={[0.04, 0.04, 0.08, 16]} />
            <meshStandardMaterial color="#C0C0C0" roughness={0.3} metalness={0.7} />
          </mesh>
        </group>
      );
    
    case 'dress':
      return (
        <group scale={1.5}>
          <mesh position={[0, 0.5, 0]} castShadow>
            <boxGeometry args={[1.4, 1.5, 0.2]} />
            <meshStandardMaterial color={color} roughness={0.3} metalness={0.05} />
          </mesh>
          <mesh position={[0, -0.8, 0]} castShadow>
            <cylinderGeometry args={[1.2, 1.5, 1.8, 32]} />
            <meshStandardMaterial color={color} roughness={0.3} metalness={0.05} />
          </mesh>
          <mesh position={[-0.9, 0.7, 0]} rotation={[0, 0, -0.4]} castShadow>
            <boxGeometry args={[0.4, 0.6, 0.2]} />
            <meshStandardMaterial color={color} roughness={0.3} metalness={0.05} />
          </mesh>
          <mesh position={[0.9, 0.7, 0]} rotation={[0, 0, 0.4]} castShadow>
            <boxGeometry args={[0.4, 0.6, 0.2]} />
            <meshStandardMaterial color={color} roughness={0.3} metalness={0.05} />
          </mesh>
        </group>
      );
    
    case 'hoodie':
      return (
        <group scale={1.5}>
          <mesh position={[0, 0, 0]} castShadow>
            <boxGeometry args={[1.7, 2.3, 0.35]} />
            <meshStandardMaterial color={color} roughness={0.7} metalness={0.05} />
          </mesh>
          <mesh position={[-1.1, 0.3, 0]} rotation={[0, 0, -0.25]} castShadow>
            <boxGeometry args={[0.7, 1, 0.35]} />
            <meshStandardMaterial color={color} roughness={0.7} metalness={0.05} />
          </mesh>
          <mesh position={[1.1, 0.3, 0]} rotation={[0, 0, 0.25]} castShadow>
            <boxGeometry args={[0.7, 1, 0.35]} />
            <meshStandardMaterial color={color} roughness={0.7} metalness={0.05} />
          </mesh>
          <mesh position={[0, 1.2, 0.1]} castShadow>
            <sphereGeometry args={[0.5, 32, 32, 0, Math.PI]} />
            <meshStandardMaterial color={color} roughness={0.7} metalness={0.05} />
          </mesh>
          <mesh position={[0, 0.5, 0.18]}>
            <boxGeometry args={[0.15, 0.8, 0.1]} />
            <meshStandardMaterial color={color} roughness={0.6} metalness={0.1} />
          </mesh>
        </group>
      );
    
    default:
      return (
        <mesh castShadow>
          <boxGeometry args={[2, 2.5, 0.3]} />
          <meshStandardMaterial color={color} />
        </mesh>
      );
  }
}

function LoadingBox() {
  return (
    <mesh>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="#9CA3AF" wireframe />
    </mesh>
  );
}

export default function ProductViewer3D({ category, color }: ProductViewer3DProps) {
  return (
    <div className="w-full h-[500px] bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg overflow-hidden">
      <Canvas shadows>
        <PerspectiveCamera makeDefault position={[0, 0, 6]} />
        <OrbitControls 
          enableZoom={true}
          minDistance={4}
          maxDistance={10}
          autoRotate
          autoRotateSpeed={1}
        />
        
        <ambientLight intensity={0.5} />
        <directionalLight 
          position={[10, 10, 5]} 
          intensity={1.2} 
          castShadow
          shadow-mapSize-width={2048}
          shadow-mapSize-height={2048}
        />
        <pointLight position={[-10, -10, -5]} intensity={0.5} color="#3B82F6" />
        <spotLight position={[0, 10, 0]} intensity={0.5} angle={0.3} penumbra={1} />
        
        <Suspense fallback={<LoadingBox />}>
          <DetailedClothingMesh category={category} color={color} />
          <Environment preset="studio" />
        </Suspense>
        
        <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -3, 0]} receiveShadow>
          <planeGeometry args={[20, 20]} />
          <shadowMaterial opacity={0.3} />
        </mesh>
      </Canvas>
    </div>
  );
}
