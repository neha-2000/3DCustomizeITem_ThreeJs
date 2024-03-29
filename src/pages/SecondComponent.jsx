import React from "react";
import WodenSofaCanvas from "../3dStoreComponents/WoddenSofa/WodenSofaCanvas";
import state from "../store";

const SecondComponent = () => {
  const chairTextures = [
    "/cusion.jpg",

    "/cusion22.png",
    "/cusion23.png",
    "/cusion24.png",
    "/cusion5.png",
  ];

  return (
    // </>
    <div className="H_Item_Container_right">
      <div className="H_Item_Container_right1">
        <WodenSofaCanvas />
      </div>

      <div className="H_Item_Container_right2 flex-col	">
        <div className="H_label">Chair</div>
        <div className="H_Price">200 Rs</div>
        <div style={{ color: "#FFC728" }}>
          <i class="bi bi-star-fill" style={{ padding: "2px" }}></i>
          <i class="bi bi-star-fill " style={{ padding: "2px" }}></i>
          <i class="bi bi-star-fill" style={{ padding: "2px" }}></i>
        </div>

        <div className="H_desc">Material</div>
        <div>
          <div className="textureContainer">
            {chairTextures.map((i, index) => {
              return (
                <button
                  key={index}
                  className="rounded  brightness-100 drop-shadow-xl m-1"
                  // className='textureContainerBtn 	'
                  onClick={() => (state.chairTextTure = i)}
                >
                  <img
                    src={i}
                    alt="img"
                    className="H_ColorBox rounded  brightness-100 drop-shadow-xl m-1"
                  />
                </button>
              );
            })}
          </div>
        </div>
        {/* <div> <CusionTextureChange/> </div> */}
      </div>
    </div>
  );
};

export default SecondComponent;
