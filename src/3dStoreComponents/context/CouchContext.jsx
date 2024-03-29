import React, { createContext, useState } from 'react'




const CouchContext = createContext();

function CouchContextProvider({ children }) { 
    // const texture = useTexture("/darkSofaCover.jpg");

    const [couchData,setcouchData]=useState({
        couchTexture:"/darkSofaCover.jpg"
    })
  
    const changeCouchTexture=()=>{
        alert("hii")
        setcouchData((prev)=>({couchTexture:"sofa_Texture1.jpg"}))
    }
    
    return (
        <CouchContext.Provider value={{ couchData,setcouchData ,
            changeCouchTexture}}>
            {children}
        </CouchContext.Provider>
    )

}


export {CouchContext,CouchContextProvider}