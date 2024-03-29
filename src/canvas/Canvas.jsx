import React, { Suspense } from 'react';
import {Canvas} from '@react-three/fiber';
import {Environment,Center,OrbitControls, useGLTF} from '@react-three/drei';
import CameraRig from './CameraRig';
import Backdrop from './Backdrop';
import Shirt from './Shirt';



const CanvasModel = () => {
  return (
   <Canvas 
   shadows
  //  increased height of shirt model
   camera={{position:[0,0,0],fov:25}}
 

   gl={{preserveDrawingBuffer:true}}
   className='w-full max-w-full h-full  transition-all ease-in'
   
   >
    <ambientLight intensity={0.5}/>
    <Environment preset="city"/>
    <Suspense fallback={null}>
      <CameraRig>
        <Backdrop />
        <Center>
          <Shirt/>
          {/* OrbitControls rotates full model 360*/}
          {/* <OrbitControls/> */}
        </Center>
         
      </CameraRig>
      </Suspense>
   </Canvas>
  )
}

export default CanvasModel
useGLTF.preload("/shirt_baked.glb");
