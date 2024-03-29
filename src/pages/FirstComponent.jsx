import React from "react";
import CouchCanvas from "../3dStoreComponents/couchSide/CouchCanvas";
import SofaFoamTextureChange from "../3dStoreComponents/styling/SofaFoamTextureChange";
import CusionTextureChange from "../3dStoreComponents/styling/CusionTextureChange";

const FirstComponent = () => {
  return (
    <div className="H_Item_Container_right">
      <div className="H_Item_Container_right1">
        <CouchCanvas />
      </div>

      <div className="H_Item_Container_right2 flex-col	">
        <div className="H_label">Fabric 3 Seater Sofa</div>
        <div className="H_Price">200 Rs</div>
        <div style={{ color: "#FFC728" }}>
          <i class="bi bi-star-fill" style={{ padding: "2px" }}></i>
          <i class="bi bi-star-fill " style={{ padding: "2px" }}></i>
          <i class="bi bi-star-fill" style={{ padding: "2px" }}></i>
        </div>
        <div className="H_desc">Couch Material </div>
        <div>
          <SofaFoamTextureChange />
        </div>
        <div className="H_desc">Cusion Material</div>
        <div>
          <CusionTextureChange />
        </div>
      </div>
    </div>
  );
};

export default FirstComponent;
