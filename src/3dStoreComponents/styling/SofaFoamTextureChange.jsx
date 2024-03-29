import React from 'react';
import './style.css'
import state from '../../store';
import { useSnapshot } from 'valtio';
import { headContainerAnimation } from '../../config/motion';
import { motion, AnimatePresence } from "framer-motion";


const SofaFoamTextureChange = () => {
  const snap=useSnapshot(state);
  const sofaTextures=["/darkSofaCover.jpg",'/SofaTexturegraywhite.jpg','/sofaTextureGreen.jpeg','/sofatexture4.png','/sofa_Texture1.png','/SofaTexturegraywhite.jpg','/sofaTexture5.png',]
  return (     <div className='textureContainer '>
  {
    sofaTextures.map((i,index)=>{
      return <button key={index}  
      // className='rounded H_ColorBox brightness-100 drop-shadow-xl m-1'
      onClick={()=>state.couchTexture =i} >
        <img src={i} alt='img' className='rounded H_ColorBox brightness-100 drop-shadow-xl m-1'/>
      </button>
    })
  }
  </div>
   
  )
}

export default SofaFoamTextureChange