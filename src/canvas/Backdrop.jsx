import React, { useRef } from "react";
import { easing } from "maath";
import { useFrame } from "@react-three/fiber";
import {
  Decal,
  useGLTF,
  useTexture,
  AccumulativeShadows,
  RandomizedLight,
} from "@react-three/drei";
import { useSnapshot } from "valtio";
import state from "../store";

// This component for baclground shadow
const Backdrop = () => {
  const shadows = useRef();
  return (
    <AccumulativeShadows 
    ref={shadows} 
    temporal
    frames={60}
    alphaTest={0.85}
    scale={1.5}
    rotation={[Math.PI / 2,0,0]}
    position={[0, 0, -0.14]}
    >
      <RandomizedLight 
      amount={4} 
      radius={9} 
      // intensity={13}
      intensity={3}
      ambient={0.25}
      position={[5,5,-10]}
       />
      
 
      <RandomizedLight 
      amount={4} 
      radius={5}
      intensity={0.25}
      ambient={0.55}
      position={[-5,5,-9]}
      />

{/* <RandomizedLight 
      amount={4} 
      radius={5}
      intensity={0.25}
      ambient={0.55}
      position={[-5,5,-9]}
      />    */}
       </AccumulativeShadows>
  );
};

export default Backdrop;
