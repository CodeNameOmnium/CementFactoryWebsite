import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaEnvelope, FaPhone, FaInstagram } from "react-icons/fa6";

const tabs = [
  { title: "Home", href: "" },
  { title: "About", href: "" },
  { title: "Project", href: "" },
  { title: "Search", href: "" },
  { title: "Product", href: "" },
  { title: "Detail", href: "" },
];

const FabricHeader = ({ className }) => {
  return (
    <div
      className={
        "w-full box-border text-white relative flex items-center justify-center" +
        " " +
        className
      }
    >
      <div className="w-full py-5 absolute bg-custom-transparent shadow-2xl border border-primary border-opacity-50 rounded-md z-10 px-16 mobile:px-2 flex flex-col flex-nowrap justify-center">
        <div className=" flex flex-row flex-nowrap justify-center items-center mobile:flex-col">
          <Link href={"/"}>
            <h1
              className="h-full flex items-center z-10 font-extrabold text-5xl mobile:text-lg
             laptop:text-4xl text-secondary py-2 px-10 text-center flex-col justify-center "
            >
              Akdulum Kum Ocağı{" "}
              <span className="text-lg mobile:text-lg text-white tracking-[7px] ">
                HAZIR BETON ÇİMENTO
              </span>
            </h1>
          </Link>
        </div>

        <div className="flex flex-row flex-nowrap justify-between items-center shadow-lg py-2 mobile:flex-col mobile:gap-2 mobile:text-primary">
          <Link
            href={"tel:+905336474411"}
            className="w-1/3 flex flex-row flex-nowrap justify-start items-center gap-3 laptop:gap-2 mobile:fixed-icon mobile:bottom-0 mobile:justify-start"
          >
            <FaPhone
              size={24}
              className="text-primary mobile:w-4 mobile:h-4 icon"
            />
            <span className="text-md mobile:text-xs icon-text icon-text-1">
              {"(+90) 533 647 42 11"}
            </span>
          </Link>
          <Link
            href={"tel:+905326797202"}
            className="w-1/3 flex flex-row flex-nowrap justify-start items-center gap-3 laptop:gap-2 mobile:fixed-icon mobile:bottom-[50px] mobile:justify-start"
          >
            <FaPhone
              size={24}
              className="text-primary mobile:w-4 mobile:h-4 icon"
            />
            <span className="text-md mobile:text-xs icon-text icon-text-1">
              {"(+90) 0532 679 72 02"}
            </span>
          </Link>
          <Link
            href={"https://www.instagram.com/akduluminsaat"}
            target="_blank"
            className="w-1/3 flex flex-row flex-nowrap justify-center items-center gap-3 laptop:gap-2 mobile:flex-row-reverse mobile:fixed-icon mobile:bottom-[100px] mobile:justify-end"
          >
            <span className="text-md mobile:text-xs icon-text icon-text-2">
              akduluminsaat
            </span>
            <FaInstagram
              size={24}
              className="text-primary mobile:w-4 mobile:h-4 icon"
            />
          </Link>
          <Link
            href={"mailto:akdulumcimento@gmail.com"}
            className="w-1/3 flex flex-row flex-nowrap justify-end items-center gap-3 laptop:gap-2 mobile:fixed-icon mobile:bottom-[150px] mobile:justify-end mobile:flex-row-reverse"
          >
            <span
              href={"mailto:akdulumcimento@gmail.com"}
              className="text-md mobile:text-xs icon-text icon-text-3"
            >
              akdulumcimento@gmail.com
            </span>
            <FaEnvelope
              size={24}
              className="text-primary mobile:w-4 mobile:h-4 icon"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FabricHeader;
