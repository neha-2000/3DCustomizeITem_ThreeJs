import { motion, AnimatePresence } from "framer-motion";
import React from "react";
import { slideAnimation } from "../../config/motion";
import { Canvas } from "@react-three/fiber";
import { Center, Environment, OrbitControls } from "@react-three/drei";
import CouchCameraRig from "../couchSide/CouchCameraRig";
import WodenSofaModel from "./WodenSofaModel";

const WodenSofaCanvas = () => {
  return (
    <AnimatePresence>
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
            <WodenSofaModel />
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
    </AnimatePresence>
  );
};

export default WodenSofaCanvas;
