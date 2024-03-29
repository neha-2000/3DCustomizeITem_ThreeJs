import {proxy} from 'valtio';

// valtio is like react context

const state=proxy({
    intro:true,
    color:'#EFBD48',
    isLogoTexture:true,
    isFullTexture:false,
    logoDecal:'./threejs.png',
    fullDecal:'./react.png',
    couchTexture:'/darkSofaCover.jpg',
    cusionTexture:'/cusion.jpg',
    chairTextTure:'/cusion.jpg'

})

export default state;
