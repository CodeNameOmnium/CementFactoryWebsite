import React from "react";

const Section = ({ children, backgroundImage, className, backgroundClassname, fullWidth }) => {
  return (
    <div className={`${fullWidth ? "" : "container"} overflow-hidden mx-auto relative  ${className}`}>
      {backgroundImage &&
        <div className={"overflow-hidden w-full h-full absolute top-0 left-0  " + backgroundClassname}>
          <img src={backgroundImage} className="w-full h-full object-cover mobile:hidden" />
        </div>}
      <div className="h-full relative">
        {children}
      </div>
    </div>
  );
};

export default Section;
