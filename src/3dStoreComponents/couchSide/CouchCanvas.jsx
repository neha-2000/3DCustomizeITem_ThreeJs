import { Center, Environment, OrbitControls, useGLTF } from "@react-three/drei";
import { Canvas, useThree } from "@react-three/fiber";
import React, { Suspense, useContext, useRef, useState } from "react";
import CouchCameraRig from "./CouchCameraRig";
import CouchBackdrop from "./CouchBackdrop";
import CouchModel from "./CouchModel";
import "../styling/style.css";
import { CouchContext } from "../context/CouchContext";
import state from "../../store";
import { useSnapshot } from "valtio";



const LoadingScreen = ({ progress }) => {
  
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "200px",
        width: "200px",
      }}
    >
      <p>Loading...</p>
      <progress value={progress} max="100" />
    </div>
  );
};

const CouchCanvas = () => {
  const snap=useSnapshot(state);

  const modelLoaded = useRef(false);

  // const [modelLoaded, setModelLoaded] = useState(false);

  const isMobile = window.innerWidth <= 600; // Adjust the breakpoint as needed

  const { progress } = useGLTF("/Coach_model.glb");


  // Check if progress is 100, meaning the model is loaded
  if (progress === 100 && !modelLoaded) {
    modelLoaded.current = true;

  }


  

  return ( 
    <>
     <Suspense fallback={<LoadingScreen progress={progress} />}>
        <Canvas
          shadows={isMobile ? false : true}
          camera={{
            position: [0, 0, 2.5],
            fov:46
          }}         
        >
          <ambientLight intensity={0.3} />
          <Environment preset="city" />
          <CouchCameraRig>
            <Center>
              <CouchBackdrop />
              <CouchModel />
              <OrbitControls
                enableRotate
                enablePan={false}
                enableZoom={true}
                zoomToCursor={false}
                maxPolarAngle={Math.PI / 2}
                minPolarAngle={Math.PI / 2}
                enableDamping={true} // Enable damping for smooth rotation
                dampingFactor={0.25} // Adjust damping factor as needed
              />
            </Center>
          </CouchCameraRig>
        </Canvas>
      </Suspense>
    </>
   );
};

export default CouchCanvas;
useGLTF.preload("/Coach_model.glb");
