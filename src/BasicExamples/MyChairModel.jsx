import {
  AccumulativeShadows,
  Center,
  Decal,
  Environment,
  OrbitControls,
  RandomizedLight,
  useGLTF,
  useTexture,
} from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import React, { useRef } from "react";
import { easing } from "maath";
import { stringify } from "postcss";
import * as THREE from "three";

const MyChairModel = () => {
  return (
    <Canvas
      // gl={{ preserveDrawingBuffer: true }}
      shadows
      camera={{ position: [0, 0, 2.5], fov: 50 }}
      // eventSource={document.getElementById("root")}
      // eventPrefix="client"
    >
      <ambientLight intensity={0.3} />
      <Environment preset="city" />
      <CameraRig>
        <Center>
          <Backdrop />
          <ChairModel />
          <OrbitControls  enableRotate
        enablePan={false}
        enableZoom={false}
        zoomToCursor={false}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 2}/>
        </Center>
      </CameraRig>
    </Canvas>
  );
};

export default MyChairModel;

const ChairModel = (props) => {
  const { nodes, materials } = useGLTF("/Coach_model.glb");
  console.log("aa-------materials", JSON.stringify(materials));

  // const texture = useTexture("/sofaTexture2.jpeg");
  // texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
  // texture.repeat.set(10,10); // Adjust the values as needed


  const texture = useTexture("/SofaTexturegraywhite.jpg");
  texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
  texture.repeat.set(17,17); // Adjust the values as needed


  const cusiontexture = useTexture("/cusion.jpg");
  const towelFabric = useTexture("/towelFabric.jpg");
  towelFabric.wrapS = towelFabric.wrapT = THREE.RepeatWrapping;
  towelFabric.repeat.set(7,7); // Adjust the values as needed

  
  
  useFrame((state, delta) => {
    easing.dampC(
      materials.Fabrick.color, // target
      "gray", // source color
      0.25, // damping factor
      delta
    );
    // Change the fabric texture
    // const fabricTexture1 = new THREE.TextureLoader().load(process.env.PUBLIC_URL + '/sofaTexture.jpeg');
    // materials.Fabrick.map = fabricTexture1;

    // wood color
    easing.dampC(
      materials.Metal.color, // target
      "gray", // source color
      0.25, // damping factor
      delta
    );

    easing.dampC(
      materials["fabrick pillow"].color, // target
      "red", // source color
      0.25, // damping factor
      delta
    );
    // materials["fabrick pillow"].map = new THREE.TextureLoader().load('path/to/fabric_diffuse.jpg');
    // materials["fabrick pillow"].normalMap = new THREE.TextureLoader().load('path/to/fabric_normal.jpg');
    // materials["fabrick pillow"].roughnessMap = new THREE.TextureLoader().load('path/to/fabric_roughness.jpg');

    // const fabricTexture = new THREE.TextureLoader().load('https://resources.commerceup.io/?key=https://prod-admin-images.s3.amazonaws.com/QuCz8cmLZYbOsIAexD/product/1010133220900481-002.jpg&width=800&resourceKey=QuCz8cmLZYbOsIAexD');

    // Apply the fabric texture to the material
    // materials["fabrick pillow"].map = fabricTexture;
  });

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
            position={[0, 0, 0]}
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
            position={[0, 0, 0]}
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
          <Decal
            renderOrder={3}
            map={cusiontexture}
            position={[0, 0, 0]}
            scale={3.2}
          />

          {/* cusion 3 */}
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
          <Decal
            renderOrder={1}
            map={texture}
            position={[0, 0, 0]}
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
            renderOrder={1}
            map={texture}
            position={[0, 0, 0]}
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
          <Decal map={texture} position={[0, 0, 0]} scale={3.2} />
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
            map={texture}
            position={[0, 0, 0]}
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
            position={[0, 0, 0]}
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
            position={[0, 0, 0]}
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
         <Decal renderOrder={3} map={towelFabric} position={[0, 0, 0]} scale={3.2} />
         </mesh> */}
      </mesh>
    </group>
  );
};

function Backdrop() {
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
  );
}

const CameraRig = ({ children }) => {
  const group = useRef();

  // useFrame((state,delta)=>{

  //   // easing.damp3(group.current.rotation,
  //   //   [state.pointer.y /15 ,-state.pointer.x /10 ,0,
  //   // 0.25,delta])
    
  // })
  // useFrame((state, delta) => {
  //   easing.damp3(
  //     group.current.rotation,
  //     [0, state.pointer.x / 180, 0], // Rotate around the Y-axis based on horizontal mouse movement
  //     0.25,
  //     delta
  //   );
  // });

  return <group ref={group}>{children}</group>;
};
useGLTF.preload("/Coach_model.glb");
