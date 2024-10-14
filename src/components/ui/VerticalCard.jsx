import React from "react";

const VerticalCard = ({ imageLink,imgAlt, title, desc, buttonP, className }) => {
  return (
    <div
      className={
        "border border-primary border-opacity-50  text-center my-2 mx-2.5 mobile:mx-0 bg-primary-dark rounded-md overflow-hidden shadow-2xl " +
        className
      }
    >
      {imageLink && (
        <img
          src={imageLink}
          className="w-full aspect-video border border-primary border-opacity-50 rounded-t-md object-cover mobile:h-48"
          alt={title}
        />
      )}
      <div className="p-6 mobile:p-4">
        <h3 className="text-3xl text-white mb-4 mobile:text-lg mobile:mb-2">{title}</h3>
        <p className="text-sm text-left">
          {desc ||
            " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam dictum mattis velit, sit amet faucibus felis iaculis nec. laoreet justo vitae porttitor porttitor. Suspendisse in sem justo."}
        </p>
      </div>
    </div>
  );
};

export default VerticalCard;
