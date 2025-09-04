import { useRef, useEffect } from "react";
import { useGLTF, Text } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { Group } from "three";

// Preload the model
useGLTF.preload("/models/scene.gltf");

export default function Model() {
  const { nodes, scene } = useGLTF("/models/scene.gltf");
  const { viewport } = useThree();
  const groupRef = useRef<Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      // More stable rotation using state.clock
      groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime) * 0.1;
      groupRef.current.rotation.y += 0.01;
    }
  });

  // Clean up on unmount
  useEffect(() => {
    return () => {
      // Dispose of geometries and materials
      Object.values(nodes).forEach((node: any) => {
        if (node.geometry) node.geometry.dispose();
        if (node.material) {
          if (Array.isArray(node.material)) {
            node.material.forEach((mat: any) => mat.dispose());
          } else {
            node.material.dispose();
          }
        }
      });
    };
  }, [nodes]);

  return (
    <group ref={groupRef} scale={1.5} position={[0, -2, 0]}>
      {/* <Text
        position={[0, 3, 0]}
        fontSize={0.3}
        color="black"
        anchorX="center"
        anchorY="middle"
      >
        talk to me
      </Text> */}
      
      {/* Use the entire scene or specific nodes */}
      <primitive object={scene} scale={1} />
    </group>
  );
}