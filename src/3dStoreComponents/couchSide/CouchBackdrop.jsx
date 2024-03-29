import { AccumulativeShadows, RandomizedLight } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { easing } from 'maath';
import React, { useRef } from 'react'

const CouchBackdrop = () => {
    const shadows = useRef();
    useFrame((state, delta) =>
    // easing.dampC(materials.lambert1.color,snap.color,0.25,delta)

    easing.dampC(shadows.current.getMesh().material.color, "gray", 0.25, delta)
  );
  return (
    <AccumulativeShadows
    ref={shadows}
    temporal
    frames={70}
    alphaTest={0.5}
    scale={3}
    // rotation={[-Math.PI / 2, 0, 0]}
    position={[0, 0, -0.14]}
    resolution={512} 
    blur={1} // Adjust blur as needed
    kernelSize={4}
  >
    <RandomizedLight
      amount={8}
      radius={9}
      intensity={1.8}
      ambient={0.25}
      position={[5, 5, 10]}
    />
    <RandomizedLight
      amount={4}
      radius={5}
      intensity={1.4}
      ambient={0.55}
      position={[5, 5, -9]}
    />
  </AccumulativeShadows>
  )
}

export default CouchBackdrop