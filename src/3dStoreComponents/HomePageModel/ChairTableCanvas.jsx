import { Canvas } from "@react-three/fiber";
import React from "react";
import CouchCameraRig from "../couchSide/CouchCameraRig";
import { Center, Environment, OrbitControls, useGLTF } from "@react-three/drei";
import CouchModel from "../couchSide/CouchModel";

const ChairTableCanvas = () => {
  return (
    <Canvas
      shadows={false}
      camera={{
        position: [0, 0, 2.5],
        fov: 5,
      }}
    >
      <ambientLight intensity={0.3} />
      <Environment preset="city" />
      <CouchCameraRig>
        <Center>
          <ChairTableModel />
          <OrbitControls
            enableRotate
            enablePan={true}
            enableZoom={false}
            zoomToCursor={false}
            // maxPolarAngle={Math.PI / 2}
            // minPolarAngle={Math.PI / 2}
            enableDamping={true} // Enable damping for smooth rotation
            dampingFactor={0.25} // Adjust damping factor as needed
          />
        </Center>
      </CouchCameraRig>
    </Canvas>
  );
};

export default ChairTableCanvas;

const ChairTableModel = (props) => {
  const { nodes, materials } = useGLTF("/Chair_and_Table11.glb");
  console.log("materials", materials, "nodes", nodes);

  const chairAndTableMaterial = materials["Chair and table"];
  return (
    <group {...props}>
      {[
        nodes.Wood_02,
        nodes.Wood_01,
        nodes.Seat,
        nodes.Pot,
        nodes.iron_04,
        nodes.iron_03,
        nodes.iron_02,
        nodes.iron_01,
        nodes.Dirt,
        nodes.Aloe,
      ].map((node, index) => (
        <mesh
          key={index}
          castShadow
          receiveShadow
          geometry={node.geometry}
          material={chairAndTableMaterial}
          position={node.position}
        />
      ))}
    </group>
    //   <group {...props} dispose={null}>
    //   <mesh
    //     castShadow
    //     receiveShadow
    //     geometry={nodes.Wood_02.geometry}
    //     material={materials['Chair and table']}
    //     position={[0.034, 0, 0.003]}
    //   />
    //   <mesh
    //     castShadow
    //     receiveShadow
    //     geometry={nodes.Wood_01.geometry}
    //     material={materials['Chair and table']}
    //     position={[0.034, 0, 0.003]}
    //   />
    //   <mesh
    //     castShadow
    //     receiveShadow
    //     geometry={nodes.Seat.geometry}
    //     material={materials['Chair and table']}
    //     position={[-0.029, 0, -0.002]}
    //   />
    //   <mesh
    //     castShadow
    //     receiveShadow
    //     geometry={nodes.Pot.geometry}
    //     material={materials['Chair and table']}
    //     position={[0.034, 0, 0.003]}
    //   />
    //   <mesh
    //     castShadow
    //     receiveShadow
    //     geometry={nodes.iron_04.geometry}
    //     material={materials['Chair and table']}
    //     position={[0.034, 0, 0.003]}
    //   />
    //   <mesh
    //     castShadow
    //     receiveShadow
    //     geometry={nodes.iron_03.geometry}
    //     material={materials['Chair and table']}
    //     position={[0.034, 0, 0.003]}
    //   />
    //   <mesh
    //     castShadow
    //     receiveShadow
    //     geometry={nodes.iron_02.geometry}
    //     material={materials['Chair and table']}
    //     position={[-0.029, 0, -0.002]}
    //   />
    //   <mesh
    //     castShadow
    //     receiveShadow
    //     geometry={nodes.iron_01.geometry}
    //     material={materials['Chair and table']}
    //     position={[-0.029, 0, -0.002]}
    //   />
    //   <mesh
    //     castShadow
    //     receiveShadow
    //     geometry={nodes.Dirt.geometry}
    //     material={materials['Chair and table']}
    //     position={[0.034, 0, 0.003]}
    //   />
    //   <mesh
    //     castShadow
    //     receiveShadow
    //     geometry={nodes.Aloe.geometry}
    //     material={materials['Chair and table']}
    //     position={[0.034, 0, 0.003]}
    //   />
    // </group>
  );
};
