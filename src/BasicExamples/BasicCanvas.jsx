import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  AccumulativeShadows,
  Center,
  Environment,
  // OrbitControls,
  RandomizedLight,
  useGLTF,
} from "@react-three/drei";
import { easing } from "maath";

const BasicCanvas = ({ position = [-1, 0, 2.5] }, fov = 25) => {
  return (
    <Canvas
      gl={{ preserveDrawingBuffer: true }}
    shadows
      camera={{ position: [0, 0, 2.5] , fov: 25 }}
      eventSource={document.getElementById("root")}
      eventPrefix="client"
    >
      <ambientLight intensity={0.5} />
      <Environment preset="city" />
      <CameraRig>     
      <Center>
        <ShirtModel />
        <BackdropShirtModel />
      </Center>         
      </CameraRig>

      {/* <OrbitControls  /> */}
    </Canvas>
  );
};

export default BasicCanvas;

const ShirtModel = (props) => {
  const { nodes, materials } = useGLTF("/shirt_baked.glb");
  console.log("materials", materials, "nodes", nodes);
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.T_Shirt_male.geometry}
        // material-roughness={1}
        material={materials.lambert1}
      />
    </group>
  );
};

const BackdropShirtModel = (props) => {
  const { nodes, materials } = useGLTF("/shirt_baked.glb");
  console.log("materials", materials, "nodes", nodes);
  return (
    <AccumulativeShadows
      temporal
      frames={60}
      alphaTest={0.85}
      scale={10}
      rotation={[Math.PI / 2, 0, 0]}
      position={[0, 0, -0.14]}
    >
      <RandomizedLight
        amount={4}
        radius={9}
        intensity={0.55}
        ambient={0.25}
        position={[5, 5, -10]}
      />
       <RandomizedLight
        amount={4}
        radius={9}
        intensity={0.55}
        ambient={0.25}
        position={[5, 5, -9]}
      />
    </AccumulativeShadows>
  );
};

const CameraRig=({children})=>{
  const group=useRef();
  
  // 👇 Used for moving model based on cursor position
  useFrame((state,delta)=>{

    easing.damp3(group.current.rotation,
      [state.pointer.y /10 ,-state.pointer.x /5 ,0,
    0.25,delta])
  })

return <group ref={group}>{children}</group>
}
useGLTF.preload("/shirt_baked.glb");
