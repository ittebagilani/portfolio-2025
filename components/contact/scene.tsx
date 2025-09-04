'use client';

import { Canvas } from "@react-three/fiber"
import { Suspense, useState, useCallback } from "react";
import * as THREE from "three";
import Model from "./model";
import { Environment, OrbitControls } from "@react-three/drei";

export default function Scene() {
    const [contextLost, setContextLost] = useState(false);

    const handleContextLost = useCallback(() => {
        console.log('WebGL context lost, attempting recovery...');
        setContextLost(true);
        
        // Try to recover after a short delay
        setTimeout(() => {
            setContextLost(false);
        }, 1000);
    }, []);

    if (contextLost) {
        return (
            <div style={{ 
                height: '100vh', 
                background: '#666666', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                color: 'white',
                fontSize: '18px'
            }}>
                Recovering 3D scene...
            </div>
        );
    }

    return (
        <div style={{ width: '50%', height: '100vh', background: '#666666' }}>
            <Canvas 
                gl={{ 
                    preserveDrawingBuffer: false,
                    powerPreference: "default",
                    antialias: false,
                    alpha: false,
                    failIfMajorPerformanceCaveat: false
                }}
                dpr={[1, 2]}
                camera={{ position: [0, 0, 5], fov: 75 }}
                onCreated={({ gl, scene }) => {
                    // Force background color multiple ways
                    gl.setClearColor(new THREE.Color('#666666'));
                    scene.background = new THREE.Color('#666666');
                    gl.clear();
                    
                    // Configure renderer
                    gl.setPixelRatio(Math.min(window.devicePixelRatio, 2));
                    
                    // Context loss handlers
                    gl.domElement.addEventListener('webglcontextlost', (event) => {
                        event.preventDefault();
                        handleContextLost();
                    });

                    gl.domElement.addEventListener('webglcontextrestored', () => {
                        console.log('WebGL context restored');
                        setContextLost(false);
                    });
                }}
            >
                <color attach="background" args={['#ffffff']} />
                
                <Suspense fallback={null}>
                    <OrbitControls 
                        enablePan={true}
                        enableZoom={true}
                        enableRotate={true}
                        minDistance={1}
                        maxDistance={20}
                    />
                    <Model />
                    <ambientLight intensity={0.8} />
                    <directionalLight intensity={2} position={[5, 5, 5]} />
                    <directionalLight intensity={1} position={[-5, -5, -5]} />
                    <directionalLight intensity={3} position={[5, 0, 0]} />
                    <pointLight position={[10, 10, 10]} intensity={1} />
                </Suspense>
            </Canvas>
        </div>
    )
}