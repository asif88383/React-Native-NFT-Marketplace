import React from "react";
import styles from "../styles/Global";
import assets from "../assets";
import Button from "./Button";

const SectionWrapper = ({ title, description, showBtn, mockupImg, banner }) => {
  return (
    <di
      className={`min-h-screen ${styles.section} ${styles.bgWhite} ${banner}`}
    >
      <div className={`flex items-center ${styles.boxClass} w-11/12 sm:w-full minmd:w-3/4`}>
        <div className={`${styles.descDiv}`}>
          <h1 className={`${styles.h1Text}`}>{title}</h1>
          <h1 className={`${styles.descriptionText}`}>{description}</h1>
          {showBtn && (
             <Button 
              assetUrl={assets.expo}
              link="Deployed NFT marketplace RN"
             />
          )}
        </div>

        <div className={`flex-1 ${styles.flexCenter} p-8 sm:px-0`}>
           <img src={mockupImg} alt="mockup" />
        </div>
      </div>
    </di>
  );
};

export default SectionWrapper;
