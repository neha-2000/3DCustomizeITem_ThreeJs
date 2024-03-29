import React, { useRef, useState } from "react";
import { easing } from "maath";
import { useFrame } from "@react-three/fiber";
import { Decal, useGLTF, useTexture ,OrbitControls} from "@react-three/drei";
import { useSnapshot } from "valtio";
import state from "../store";


const Shirt = () => {
  const snap = useSnapshot(state);
  const { nodes, materials } = useGLTF("/shirt_baked.glb");

  const logoTexture = useTexture(snap.logoDecal);
  const fullTexture = useTexture(snap.fullDecal);
  const groupRef = useRef();
  const [isDragging, setDragging] = useState(false);
  const previousMousePosition = useRef({ x: 0, y: 0 });


  useFrame((state,delta)=>{
    // set the color and properties of tshirt
    easing.dampC(materials.lambert1.color,snap.color,0.25,delta)
    // groupRef.current.rotation.y += 0.009; // Adjust the rotation speed as needed
    // Rotate the shirt model only when dragging
    if (isDragging) {
      const deltaX = state.mouse.x - previousMousePosition.current.x;
      groupRef.current.rotation.y += deltaX * 5; // Adjust rotation speed as needed
      previousMousePosition.current = { x: state.mouse.x, y: state.mouse.y };
    }

  })
  const handlePointerDown = (event) => {
    event.stopPropagation();
    event.preventDefault();
    setDragging(true);
    previousMousePosition.current = { x: event.clientX, y: event.clientY };
  };

  const handlePointerUp = () => {
    setDragging(false);
  };
  const sateString=JSON.stringify(snap);

  return (
    <group ref={groupRef} key={sateString} 
    onPointerDown={handlePointerDown}
    onPointerUp={handlePointerUp}
  >
      <mesh
        castShadow
        geometry={nodes.T_Shirt_male.geometry}
        material={materials.lambert1}
        material-roughness={1}
        dispose={null}

        onPointerDown={handlePointerDown}
      onPointerUp={handlePointerUp}
      >
        {snap.isFullTexture && (
          <Decal
            position={[0, 0, 0]}
            rotation={[0, 0, 0]}
            scale={1}
            map={fullTexture}
          />
        )}
        {snap.isLogoTexture && (
          <Decal
            position={[0, 0.04, 0.15]}
            rotation={[0, 0, 0]}
            scale={0.15}
            map={logoTexture}
            // map-anisotropy={16}
            depthTest={false}
            customDepthMaterial={""}
            depthWrite={true}
        

            />
        )}
      </mesh>
    </group>
  );
};

export default Shirt;
