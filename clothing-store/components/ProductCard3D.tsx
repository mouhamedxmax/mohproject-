'use client';

import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import { Suspense, useState } from 'react';
import Link from 'next/link';
import { Product } from '@/lib/products';

interface ProductCard3DProps {
  product: Product;
}

function ClothingMesh({ category, color }: { category: string; color: string }) {
  switch (category) {
    case 'tshirt':
      return (
        <group>
          <mesh position={[0, 0, 0]}>
            <boxGeometry args={[1.5, 2, 0.2]} />
            <meshStandardMaterial color={color} roughness={0.4} metalness={0.1} />
          </mesh>
          <mesh position={[-1, 0.3, 0]} rotation={[0, 0, -0.3]}>
            <boxGeometry args={[0.6, 0.8, 0.2]} />
            <meshStandardMaterial color={color} roughness={0.4} metalness={0.1} />
          </mesh>
          <mesh position={[1, 0.3, 0]} rotation={[0, 0, 0.3]}>
            <boxGeometry args={[0.6, 0.8, 0.2]} />
            <meshStandardMaterial color={color} roughness={0.4} metalness={0.1} />
          </mesh>
        </group>
      );
    
    case 'jacket':
      return (
        <group>
          <mesh position={[0, 0, 0]}>
            <boxGeometry args={[1.8, 2.2, 0.3]} />
            <meshStandardMaterial color={color} roughness={0.6} metalness={0.2} />
          </mesh>
          <mesh position={[-1.1, 0.2, 0]} rotation={[0, 0, -0.2]}>
            <boxGeometry args={[0.7, 1.2, 0.3]} />
            <meshStandardMaterial color={color} roughness={0.6} metalness={0.2} />
          </mesh>
          <mesh position={[1.1, 0.2, 0]} rotation={[0, 0, 0.2]}>
            <boxGeometry args={[0.7, 1.2, 0.3]} />
            <meshStandardMaterial color={color} roughness={0.6} metalness={0.2} />
          </mesh>
          <mesh position={[0, 1.1, 0.05]}>
            <boxGeometry args={[1.2, 0.3, 0.25]} />
            <meshStandardMaterial color={color} roughness={0.5} metalness={0.3} />
          </mesh>
        </group>
      );
    
    case 'pants':
      return (
        <group>
          <mesh position={[-0.4, 0, 0]}>
            <boxGeometry args={[0.6, 2.5, 0.3]} />
            <meshStandardMaterial color={color} roughness={0.5} metalness={0.1} />
          </mesh>
          <mesh position={[0.4, 0, 0]}>
            <boxGeometry args={[0.6, 2.5, 0.3]} />
            <meshStandardMaterial color={color} roughness={0.5} metalness={0.1} />
          </mesh>
          <mesh position={[0, 1.1, 0]}>
            <boxGeometry args={[1.4, 0.4, 0.3]} />
            <meshStandardMaterial color={color} roughness={0.5} metalness={0.1} />
          </mesh>
        </group>
      );
    
    case 'dress':
      return (
        <group>
          <mesh position={[0, 0.5, 0]}>
            <boxGeometry args={[1.4, 1.5, 0.2]} />
            <meshStandardMaterial color={color} roughness={0.3} metalness={0.05} />
          </mesh>
          <mesh position={[0, -0.8, 0]}>
            <cylinderGeometry args={[1.2, 1.5, 1.8, 32]} />
            <meshStandardMaterial color={color} roughness={0.3} metalness={0.05} />
          </mesh>
          <mesh position={[-0.9, 0.7, 0]} rotation={[0, 0, -0.4]}>
            <boxGeometry args={[0.4, 0.6, 0.2]} />
            <meshStandardMaterial color={color} roughness={0.3} metalness={0.05} />
          </mesh>
          <mesh position={[0.9, 0.7, 0]} rotation={[0, 0, 0.4]}>
            <boxGeometry args={[0.4, 0.6, 0.2]} />
            <meshStandardMaterial color={color} roughness={0.3} metalness={0.05} />
          </mesh>
        </group>
      );
    
    case 'hoodie':
      return (
        <group>
          <mesh position={[0, 0, 0]}>
            <boxGeometry args={[1.7, 2.3, 0.35]} />
            <meshStandardMaterial color={color} roughness={0.7} metalness={0.05} />
          </mesh>
          <mesh position={[-1.1, 0.3, 0]} rotation={[0, 0, -0.25]}>
            <boxGeometry args={[0.7, 1, 0.35]} />
            <meshStandardMaterial color={color} roughness={0.7} metalness={0.05} />
          </mesh>
          <mesh position={[1.1, 0.3, 0]} rotation={[0, 0, 0.25]}>
            <boxGeometry args={[0.7, 1, 0.35]} />
            <meshStandardMaterial color={color} roughness={0.7} metalness={0.05} />
          </mesh>
          <mesh position={[0, 1.2, 0.1]}>
            <sphereGeometry args={[0.5, 32, 32, 0, Math.PI]} />
            <meshStandardMaterial color={color} roughness={0.7} metalness={0.05} />
          </mesh>
        </group>
      );
    
    default:
      return (
        <mesh>
          <boxGeometry args={[1.5, 2, 0.2]} />
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

export default function ProductCard3D({ product }: ProductCard3DProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link href={`/product/${product.id}`}>
      <div 
        className="bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:scale-105 cursor-pointer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="h-64 bg-gradient-to-br from-gray-100 to-gray-200 relative">
          <Canvas>
            <PerspectiveCamera makeDefault position={[0, 0, 5]} />
            <OrbitControls 
              enableZoom={false} 
              autoRotate={isHovered}
              autoRotateSpeed={4}
              enablePan={false}
            />
            
            <ambientLight intensity={0.6} />
            <directionalLight position={[5, 5, 5]} intensity={0.8} />
            <pointLight position={[-5, -5, -5]} intensity={0.3} color="#3B82F6" />
            
            <Suspense fallback={<LoadingBox />}>
              <ClothingMesh category={product.category} color={product.colors[0]} />
            </Suspense>
          </Canvas>
        </div>
        
        <div className="p-4">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">{product.name}</h3>
          <p className="text-sm text-gray-600 mb-3 line-clamp-2">{product.description}</p>
          
          <div className="flex items-center justify-between">
            <span className="text-2xl font-bold text-blue-600">${product.price}</span>
            
            <div className="flex gap-1">
              {product.colors.slice(0, 4).map((color, index) => (
                <div
                  key={index}
                  className="w-6 h-6 rounded-full border-2 border-gray-300"
                  style={{ backgroundColor: color }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
