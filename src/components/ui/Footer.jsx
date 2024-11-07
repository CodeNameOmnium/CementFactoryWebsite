import Link from "next/link";
import React from "react";
import { FaEnvelope, FaPhone, FaInstagram } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-primary-darkest text-white py-8 px-4">
      <div className="container mx-auto flex flex-row  tablet:flex-col ">
        <div className="mb-6 tablet:mb-0 mobile:w-full flex justify-between w-full mobil:flex items-col mobile:justify-center mobile:items-center mobile:flex-col mobile:gap-2">
          <div className="w-1/3 mobile:w-full flex flex-row flex-nowrap justify-start items-center gap-3 laptop:gap-2  mobile:justify-center">
            <FaEnvelope size={24} className="text-primary" />
            <Link
              href={"mailto:akdulumcimento@gmail"}
              className="text-md mobile:text-sm"
            >
              akdulumcimento@gmail.com
            </Link>
          </div>
          <div className="w-1/3 mobile:w-full flex flex-row flex-nowrap justify-center items-center gap-3 laptop:gap-2  mobile:justify-center mobile:flex-row-reverse">
            <Link
              href={"https://www.instagram.com/akduluminsaat"}
              target="_blank"
              className="text-md mobile:text-sm"
            >
              akduluminsaat
            </Link>
            <FaInstagram
              size={24}
              className="text-primary mobile:w-4 mobile:h-4"
            />
          </div>
          <div className="w-1/3 mobile:w-full flex flex-row flex-nowrap justify-center items-center gap-3 laptop:gap-2 mobile:justify-center">
            <FaPhone size={24} className="text-primary" />
            <Link href={"tel:+905336474411"} className="text-md mobile:text-sm">
              (+90) 543 675 00 40
            </Link>
          </div>
          <div className="w-1/3 mobile:w-full flex flex-row flex-nowrap justify-center items-center gap-3 laptop:gap-2 mobile:justify-center">
            <FaPhone size={24} className="text-primary" />
            <Link href={"tel:+905326797202"} className="text-md mobile:text-sm">
              (+90) 0532 679 72 02
            </Link>
          </div>
        </div>
      </div>{" "}
      <div className="text-center text-md mobile:text-sm">
        <p>© 2024 Tüm Hakları Saklıdır.</p>
      </div>
    </footer>
  );
};

export default Footer;
