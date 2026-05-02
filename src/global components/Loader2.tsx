'use client';

import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import { useRef, useState } from 'react';
import * as THREE from 'three';

export default function Plant3D() {
  const { scene } = useGLTF('/plant.glb'); // your exported model
  const groupRef = useRef<THREE.Group>(null);
  const [isTopDown, setIsTopDown] = useState(false);

  useFrame(() => {
    if (groupRef.current) {
      const targetRotation = isTopDown ? -Math.PI / 2 : 0;
      groupRef.current.rotation.x = THREE.MathUtils.lerp(
        groupRef.current.rotation.x,
        targetRotation,
        0.1
      );
    }
  });

  return (
    <div style={{ width: '100vw', height: '100vh', background: '#0f1a12' }}>
      <Canvas camera={{ position: [0, 2, 5], fov: 50 }}>
        <ambientLight intensity={0.6} />
        <directionalLight position={[5, 5, 5]} intensity={1.2} />
        
        <group ref={groupRef}>
          <primitive object={scene} scale={1.2} />
        </group>

        <OrbitControls enableZoom={true} enablePan={false} />
      </Canvas>

      <button
        onClick={() => setIsTopDown(!isTopDown)}
        style={{
          position: 'absolute',
          bottom: '40px',
          left: '50%',
          transform: 'translateX(-50%)',
          padding: '14px 36px',
          fontSize: '18px',
          background: '#20422A',
          color: 'white',
          border: '2px solid #578565',
          borderRadius: '12px',
          cursor: 'pointer',
          zIndex: 100,
        }}
      >
        {isTopDown ? 'Back to Lateral View' : 'Move Camera to Top-Down'}
      </button>
    </div>
  );
}