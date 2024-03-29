import React from 'react';
import './style.css';
import { motion, AnimatePresence } from "framer-motion";

import state from '../../store';
import { headContainerAnimation } from '../../config/motion';

const CusionTextureChange = () => {
  const cusionTextures=["/image.png","/cusion.jpg","/cuson1.png",'/cusion3.png',"/cusion22.png",'/cusion23.png',"/cusion24.png","/cusion5.png"]

  return ( <div className='textureContainer'>
  {
    cusionTextures.map((i,index)=>{
      return <button key={index}  className='rounded  brightness-100 drop-shadow-xl m-1' 
      // className='textureContainerBtn 	'
      onClick={()=>state.cusionTexture =i} >
        <img src={i} alt='img'  className='H_ColorBox rounded  brightness-100 drop-shadow-xl m-1'/>
      </button>
    })
  }
  </div>
  
  )
}

export default CusionTextureChange