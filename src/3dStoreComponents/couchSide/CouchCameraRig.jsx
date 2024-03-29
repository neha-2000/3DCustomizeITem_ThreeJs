import React, { useRef } from 'react'

const CouchCameraRig = ({ children }) => {
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
  
  return (
    <group ref={group}>{children}</group>
  )
}

export default CouchCameraRig