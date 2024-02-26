import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useSnapshot } from "valtio";
import {
  fadeAnimation,
  headContainerAnimation,
  headTextAnimation,
  headContentAnimation,
  slideAnimation,
  transition,
} from "../config/motion";
import state from "../store";
import { download } from "../assets";
import { downloadCanvasToImage, reader } from "../config/helpers";
import { EditorTabs, FilterTabs, DecalTypes } from "../config/constants";

import {
  CustomButton,
  AIPicker,
  FilePicker,
  ColorPicker,
  Tab,
} from "../components";

const Customizer = () => {
  const snap = useSnapshot(state);

  const [file, setfile] = useState("");

  const [prompt, setPrompt] = useState("");
  const [generatingImg, setgeneratingImg] = useState(false);

  const [activeEditorTab, setactiveEditorTab] = useState("");
  const [activeFilterTab, setactiveFilterTab] = useState({
    logoShirt: true,
    stylishShirt: false,
  });

  const generateTabContent = () => {
    switch (activeEditorTab) {
      case "colorpicker":
        return <ColorPicker />;
      case "filepicker":
        return <FilePicker file={file} setfile={setfile}
        readFile={readFile}
        />;
      case "aipicker":
        return <AIPicker
        prompt={prompt}
        setPrompt={setPrompt}
        generatingImg={generatingImg}
        handleSubmit={handleSubmit}
        
        />;
      default:
        return null;
    }
  };

  const handleSubmit=async (type)=>{
    if(!prompt) return alert("Please enter a prompt")
    try
  {
  }
  catch(error){
    alert(error)
  }
  finally{
    setgeneratingImg(false);
    setactiveEditorTab("")
  }

  }
  const handleDecals = (type, result) => {
    const decalType = DecalTypes[type];
    state[decalType.stateProperty] = result;
    if (!activeFilterTab[decalType.filterTab]) {
      handleActiveFilterTab(decalType.filterTab);
    }
  };

  const handleActiveFilterTab = (tabName) => {
    console.log("tabName",tabName)
    switch (tabName) {
      case "logoShirt":
          state.isLogoTexture = !activeFilterTab[tabName];
          console.log("state.isLogoTexture",state.isLogoTexture,activeFilterTab[tabName] ,!activeFilterTab[tabName])
          break;
      case "stylishShirt":
          state.isFullTexture = !activeFilterTab[tabName];
          console.log("state.isFullTexture ",state.isFullTexture)
          break;
      default :
          state.isLogoTexture = true;
          state.isFullTexture = false;

         
          break;

    }
    setactiveFilterTab((prev)=>{
      return{
        ...prev,
        [tabName]:!prev[tabName]
      }
    })
  };

  const readFile = (type) => {
    reader(file).then((result) => {
      handleDecals(type, result);
      setactiveEditorTab("");
    });
  };
  return (
    <AnimatePresence>
      {!snap.intro && (
        <>
          <motion.div
            key="custom"
            className="absolute top-0 left-0 z-10"
            {...slideAnimation("left")}
          >
            <div className="flex items-center min-h-screen">
              <div className="editortabs-container tabs">
                {EditorTabs.map((tab) => (
                  <Tab
                    key={tab.name}
                    tab={tab}
                    isFilterTab
                    isActiveTab=""
                    handleClick={() => {
                      setactiveEditorTab(tab.name);
                    }}
                  />
                ))}
                {generateTabContent()}
              </div>
            </div>
          </motion.div>
          <motion.div
            className="absolute z-10 top-5 right-5"
            {...fadeAnimation}
          >
            <CustomButton
              type="filled"
              title="Go Back"
              handleClick={() => (state.intro = true)}
              CustomStyles="w-fit px-4 py-2.5 font-bold text-sm"
            />
          </motion.div>

          <motion.div
            className="filtertabs-container"
            {...slideAnimation("up")}
          >
            {FilterTabs.map((tab) => (
              <Tab
                key={tab.name}
                tab={tab}
                isFilterTab
                isActiveTab={activeFilterTab[tab.name]}
                handleClick={() => {
                  handleActiveFilterTab(tab.name);
                }}
              />
            ))}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default Customizer;
