import { Decal, useGLTF, useTexture } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { easing } from "maath";
import React, { useContext, useMemo, useRef } from "react";
import * as THREE from "three";
import { CouchContext } from "../context/CouchContext";
import { snapshot, useSnapshot } from "valtio";
import state from "../../store";

const CouchModel = (props) => {
 
  const { nodes, materials } = useGLTF("/Coach_model.glb");
  const snap = useSnapshot(state);

  // Sofa overall textures
  const texture = useTexture(snap.couchTexture);
  texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
  texture.repeat.set(20, 20);

   // Sofa side cusions textures
  const textureSofaBack = useTexture("/skyblue_sofaFabric.jpg");
  textureSofaBack.wrapS = textureSofaBack.wrapT = THREE.ClampToEdgeWrapping;

  // cusion textures
  const cusiontexture = useTexture(snap.cusionTexture); //useTexture("/cusion.jpg");
  cusiontexture.wrapS = cusiontexture.wrapT = THREE.RepeatWrapping;
  cusiontexture.repeat.set(1, 1); // Adjust the values as needed


  // const towelFabric = useTexture("/towelFabric.jpg");
  // towelFabric.wrapS = towelFabric.wrapT = THREE.ClampToEdgeWrapping;
  // towelFabric.repeat.set(7, 7); // Adjust the values as needed

  // Damping animation for materials
  // const dampingAnimation = (material, sourceColor) => {
  //   material.color.lerp(new THREE.Color(sourceColor), 0.25);
  // };

  // // Animation frame loop for damping effect
  // const materialRef = useRef([materials.Fabrick, materials.Metal, materials["fabrick pillow"]]);
  // useFrame((state, delta) => {
  //   materialRef.current.forEach((material) => {
  //     dampingAnimation(material, material === materials["fabrick pillow"] ? "red" : "gray");
  //   });
  // });

  // useFrame((state, delta) => {
  //   easing.dampC(
  //     materials.Fabrick.color, // target
  //     "gray", // source color
  //     0.25, // damping factor
  //     delta
  //   );

  //   // wood color
  //   easing.dampC(
  //     materials.Metal.color, // target
  //     "gray", // source color
  //     0.25, // damping factor
  //     delta
  //   );

  //   easing.dampC(
  //     materials["fabrick pillow"].color, // target
  //     "red", // source color
  //     0.25, // damping factor
  //     delta
  //   );
  // });

  return (
    <group {...props} dispose={null}>
      <mesh
        renderOrder={1}
        castShadow
        receiveShadow
        geometry={nodes.Coach.geometry}
        material={materials.Fabrick}
        position={[0.005, 0.218, -0.447]}
      >
        <Decal
          map={texture}
          geometry={nodes.Coach.geometry}
          scale={4}
          position={[0, 0, 0]}
          renderOrder={1}
          rotation={[Math.PI, 0, Math.PI]}
        />
        <mesh
          renderOrder={2}
          castShadow
          receiveShadow
          geometry={nodes.Coushion_1.geometry}
          material={materials.Fabrick}
          position={[-0.983, 0.339, 0.055]}
          rotation={[Math.PI, 0, Math.PI]}
        >
          {/* left first side cusion */}
          <Decal
            map={texture}
            geometry={nodes.Coushion_1.geometry}
            opacity={0.7}
            renderOrder={3}
            scale={5}
            position={[0, 0, 0]}
            rotation={[Math.PI, 0, Math.PI]}
          />
        </mesh>
        <mesh
          renderOrder={3}
          castShadow
          receiveShadow
          geometry={nodes.Coushion_2.geometry}
          material={materials.Fabrick}
          position={[0.988, 0.341, 0.057]}
          rotation={[Math.PI, 0, Math.PI]}
        >
          {" "}
          {/* right first side cusion */}
          <Decal
            map={texture}
            geometry={nodes.Coushion_2.geometry}
            scale={4}
            position={[0, 0, 0]}
            renderOrder={3}
            rotation={[Math.PI, 0, Math.PI]}
          />
        </mesh>
        <mesh
          renderOrder={3}
          castShadow
          receiveShadow
          geometry={nodes.Legs.geometry}
          material={materials.Metal}
          position={[0, -0.084, 0]}
          rotation={[0, Math.PI / 4, 0]}
        >
          {" "}
        </mesh>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pillow_1.geometry}
          material={materials["fabrick pillow"]}
          position={[-0.728, 0.447, -0.033]}
          rotation={[1.255, 0.238, -0.625]}
          scale={0.235}
        >
          {/* cusion 1 */}

          <Decal
            renderOrder={3}
            map={cusiontexture}
            // position={[0, 0, 0]}
            geometry={nodes.pillow_1.geometry}
            rotation={[1.255, 0.238, -0.625]}
            position={[-0.728, 0.447, -0.033]}
            scale={3.2}
          />
        </mesh>
        <mesh
          renderOrder={5}
          castShadow
          receiveShadow
          geometry={nodes.pillow_2.geometry}
          material={materials["fabrick pillow 2"]}
          position={[-0.38, 0.447, -0.092]}
          rotation={[1.312, 0.137, -0.477]}
          scale={0.202}
        >
          {/* cusion 2 */}
          <Decal
            renderOrder={3}
            map={cusiontexture}
            // position={[0, 0, 0]}
            geometry={nodes.pillow_2.geometry}
            rotation={[1.312, 0.137, -0.477]}
            position={[-0.38, 0.447, -0.092]}
            scale={3.2}
          />
          {/* <Decal map={cusiontexture}
          rotation={[1.255, 0.238, -0.625]}
          scale={3.2}
       /> */}
        </mesh>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pillow_3.geometry}
          material={materials["fabrick pillow 3"]}
          position={[0.778, 0.405, -0.058]}
          rotation={[1.428, -0.125, 0.711]}
          scale={0.198}
        >
          {/* cusion 3 */}

          <Decal
            renderOrder={3}
            map={cusiontexture}
            position={[0, 0, 0]}
            scale={3.2}
            geometry={nodes.pillow_3.geometry}

            // position={[0.778, 0.405, -0.058]}
          />
        </mesh>
        <mesh
          renderOrder={5}
          castShadow
          receiveShadow
          geometry={nodes.Seat_1.geometry}
          material={texture}
          // material={new THREE.MeshStandardMaterial({ map: texture, metalness: 0.5, roughness: 0.8, /* other properties */ })}

          position={[-0.695, 0.124, 0.033]}
          rotation={[Math.PI, 0, Math.PI]}
        >
          {/* <Decal map={texture} position={[0, 0, 0]}  scale={3.2} depthTest={false}
                        material={new THREE.MeshStandardMaterial({ overrideMap: texture , })}
/> */}
          {/* Bottom seat 1 */}
          <Decal
            renderOrder={2}
            map={texture}
            // position={[0, 0, 0]}
            geometry={nodes.Seat_1.geometry}
            position={[-0.695, 0.124, 0.033]}
            scale={3.2}
          />
        </mesh>

        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Seat_2.geometry}
          material={materials.Fabrick}
          position={[0.003, 0.123, 0.033]}
          rotation={[Math.PI, 0, Math.PI]}
        >
          <Decal
            renderOrder={2}
            map={texture}
            // position={[0, 0, 0]}
            geometry={nodes.Seat_2.geometry}
            position={[0.003, 0.123, 0.033]}
            scale={3.2}
          />
        </mesh>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Seat_3.geometry}
          material={materials.Fabrick}
          position={[0.698, 0.122, 0.034]}
          rotation={[Math.PI, 0, Math.PI]}
        >
          <Decal
            renderOrder={2}
            map={texture}
            //  position={[0, 0, 0]}
            geometry={nodes.Seat_3.geometry}
            position={[0.698, 0.122, 0.034]}
            scale={3.2}
          />
        </mesh>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Spine_1.geometry}
          material={materials.Fabrick}
          position={[-0.711, 0.416, -0.304]}
          rotation={[Math.PI, 0, Math.PI]}
        >
          {/* Seat top 1 */}
          <Decal
            renderOrder={3}
            geometry={nodes.Spine_1.geometry}
            position={[-0.711, 0.416, -0.304]}
            map={texture}
            // position={[0, 0, 0]}
            scale={3.2}
          />
        </mesh>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Spine_2.geometry}
          material={materials.Fabrick}
          position={[-0.001, 0.417, -0.303]}
          rotation={[Math.PI, 0, Math.PI]}
        >
          {/* Seat top 2 */}

          <Decal
            renderOrder={3}
            map={texture}
            // position={[0, 0, 0]}
            geometry={nodes.Spine_2.geometry}
            position={[-0.001, 0.417, -0.303]}
            scale={3.2}
          />
        </mesh>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Spine_3.geometry}
          material={materials.Fabrick}
          position={[0.709, 0.418, -0.307]}
          rotation={[Math.PI, 0, Math.PI]}
        >
          {/* Seat top 3 */}

          <Decal
            renderOrder={3}
            map={texture}
            // position={[0, 0, 0]}
            geometry={nodes.Spine_3.geometry}
            position={[0.709, 0.418, -0.307]}
            scale={3.2}
          />
        </mesh>
        {/* <mesh
        castShadow
        receiveShadow
        geometry={nodes.Towel.geometry}
        material={materials.Plaid}
        position={[0.976, 0.324, 0.12]}
        rotation={[1.231, 0, 0]}
        scale={0.254}
      > 
       <Decal  renderOrder={3.3} map={towelFabric} position={[0, 0, 0]} scale={3.2} />
       </mesh> */}
      </mesh>
    </group>
  );
};

export default CouchModel;
