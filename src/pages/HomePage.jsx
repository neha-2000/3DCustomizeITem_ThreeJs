import React, { useState } from "react";
import ChairTableCanvas from "../3dStoreComponents/HomePageModel/ChairTableCanvas";
import "../assets/Home.css";
import FirstComponent from "./FirstComponent";
import SecondComponent from "./SecondComponent";
import { headContainerAnimation, headTextAnimation, slideAnimation } from "../config/motion";
import { motion, AnimatePresence } from "framer-motion";

const HomePage = () => {
  const [tabIndex, setTabIndex] = useState(0);
  let tabs = [
    { name: "Sofa", img: "/sofa.png" },
    { name: "Chair", img: "/Chair.png" },
  ];
  const handleTabClick = (index) => {
    setTabIndex(index);
  };

  const renderView = () => {
    switch (tabIndex) {
      case 0:
        return <FirstComponent />;
      case 1:
        return <SecondComponent />;
     
      default:
        return null;
    }
  };

  return (
  <React.Fragment>
      <AnimatePresence>
      <section className="H_home" >
        <div className="H_homeContent">
          <div>
            {/*  */}
            <motion.div {...headTextAnimation}>
            <div
               className="H_title">Perfect Harmony: Comfort & Style</div>
              <div className="H_description">
                Explore furniture that harmoniously combines comfort and style
                to elevate your home
              </div>
            </motion.div>
            <br />
            <motion.div className="H_flex"    {...headContainerAnimation}>
              <div className="offerBtn">Explor Our Offers</div>
              <div className="offerBtnv2">Watch Video</div>
            </motion.div>
          </div>
          <div className="H_canvas">
            <ChairTableCanvas />
          </div>
        </div>
      </section>
      </AnimatePresence>
      <section className="H_Item_Container_section H_shadow">
        <div className="H_Item_Container">
          <div className="H_Item_Container_left">
            {tabs.map((i, index) => {
              return (
                <div
                  key={index}
                  // H_ItemBox
                  className={`tab ${
                    index === tabIndex
                      ? "H_ItemBox_active H_ItemBox"
                      : "H_ItemBox"
                  }`}
                  onClick={() => handleTabClick(index)}
                >
                  <img className="H_ItemBox_img" src={i.img} />
                </div>
              );
            })}
          </div>
          {renderView()}
        </div>
      </section>
      </React.Fragment>
  );
};

export default HomePage;
