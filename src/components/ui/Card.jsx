import React from "react";

const Card = ({ id, url, title, description, className }) => {
  return (
    <div
      id={id}
      className={`group w-96 rounded-lg overflow-hidden relative border border-primary border-opacity-30 shadow-2xl transition-transform duration-500 hover:scale hover:shadow-3xl mobile:w-full ${className}`}
    >
      <img
        className="w-full h-48 object-cover filter grayscale group-hover:filter-none group-hover:rotate-3 group-hover:scale-110 transition-all duration-500"
        src={url}
        alt={title}
      />
      <div className="h-full flex flex-col flex-nowrap justify-end absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-primary-darkest to-[#0000005b] text-white hover:opacity-0  transition-opacity duration-500">
        <h2 className="font-bold text-xl mb-2">{title}</h2>
        <p className="text-sm min-h-[60px]">{description}</p>
      </div>
    </div>

  );
};

export default Card;
