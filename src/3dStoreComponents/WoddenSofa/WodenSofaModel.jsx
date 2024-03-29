import { Decal, useGLTF, useTexture } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { easing } from "maath";
import React from "react";
import { useSnapshot } from "valtio";
import * as THREE from "three";
import state from "../../store";

const WodenSofaModel = (props) => {
  const { nodes, materials } = useGLTF("/Chair_and_Table11.glb");
  // console.log("materials2",JSON.stringify(materials))
  console.log("materials2", materials, nodes);
  const chairAndTableMaterial = materials["Chair and table"];
  const snap = useSnapshot(state);
  const sateString = JSON.stringify(snap);

  const texture = useTexture(snap.chairTextTure);

  texture.wrapS = texture.wrapT = THREE.ClampToEdgeWrapping;
  // texture.repeat.set(5,5);

  useFrame((state, delta) => {
    easing.dampC(
      materials["Chair and table"].color, // target
      "pink", // source color
      0.25, // damping factor
      delta
    );
  });
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Wood_02.geometry}
        material={materials["Chair and table"]}
        position={[0.034, 0, 0.003]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Wood_01.geometry}
        material={materials["Chair and table"]}
        position={[0.034, 0, 0.003]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Seat.geometry}
        material={materials["Chair and table"]}
        position={[-0.029, 0, -0.002]}
      >
        <Decal
          map={texture}
          geometry={nodes.Seat.geometry}
          scale={1}
          position={[0, 0, 0]}
          renderOrder={1}
          // rotation={[Math.PI, 0, Math.PI]}
        />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Pot.geometry}
        material={materials["Chair and table"]}
        position={[0.034, 0, 0.003]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.iron_04.geometry}
        material={materials["Chair and table"]}
        position={[0.034, 0, 0.003]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.iron_03.geometry}
        material={materials["Chair and table"]}
        position={[0.034, 0, 0.003]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.iron_02.geometry}
        material={materials["Chair and table"]}
        position={[-0.029, 0, -0.002]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.iron_01.geometry}
        material={materials["Chair and table"]}
        position={[-0.029, 0, -0.002]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Dirt.geometry}
        material={materials["Chair and table"]}
        position={[0.034, 0, 0.003]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Aloe.geometry}
        material={materials["Chair and table"]}
        position={[0.034, 0, 0.003]}
      />
    </group>
  );
};

export default WodenSofaModel;
