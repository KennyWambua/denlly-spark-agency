import React from "react";
import {
  BiLogoFacebook,
  BiLogoInstagram,
  BiLogoTelegram,
  BiLogoTwitter,
  BiLogoWhatsapp,
  BiPhoneCall,
  BiSolidMap,
} from "react-icons/bi";
import { BsArrowRightShort } from "react-icons/bs";
import { Link } from "react-router-dom";
import { NavLinks } from "../../data";

const Footer = () => {
  const servicesLink = NavLinks.find((navItem) => navItem.name === "Services");
  const availableServices = servicesLink?.subLinks;
  return (
    <React.Fragment>
      <footer className="relative isolate bottom-0 bg-background w-full font-Poppins">
        <div className="max-w-[1560px] mx-8 2xl:mx-auto">
          {/* Upper Footer Content */}
          <div className="flex items-center justify-between px-20 gap-8 border bg-primary/70 border-slate-200 py-4 -translate-y-1/2">
            <div className="flex items-center">
              <h1 className="font-semibold">See Our New Updates</h1>
            </div>
            <form method="post" className="flex items-center">
              <input
                type="email"
                placeholder="Email here..."
                aria-label="Email address"
                className="p-2 bg-gray-200 outline-none placeholder:text-sm placeholder:text-green-950 md:w-80 lg:w-96"
              />
              <button type="submit" className="group p-2 bg-secondary">
                <BsArrowRightShort className="text-2xl -rotate-45 group-hover:rotate-0 transition-all duration-500 ease-in-out " />
              </button>
            </form>
          </div>

          {/* Footer content */}
          <div className="relative isolate grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 px-4">
            <div className="mt-4">
              <div className="flex-col">
                <div>
                  <h2 className="font-bold font-Playfair text-3xl mb-2">
                    Denlly Group
                  </h2>
                  <p className="text-gray-900 ">
                    Enhance wellness and beauty with expert, nature-based care
                  </p>
                </div>
                <div className="flex items-center justify-start gap-2 font-semibold">
                  <BiPhoneCall
                    stroke="5"
                    className="h-20 w-10 text-violet-500"
                  />
                  <div>
                    <span className="text-sm">Call Any Time</span>
                    <p>+254 729 994 794</p>
                  </div>
                </div>
                <div className="flex items-center justify-start sm:mt-0 ml-2">
                  <div className="mx-2 rounded-lg hover:bg-violet-500 border p-2 group transition-all ease-in-out duration-500">
                    <BiLogoFacebook className=" group-hover:text-gray-950 transition-all duration-500 ease-in-out text-violet-700" />
                  </div>
                  <div className="mx-2 rounded-lg hover:bg-violet-500 border p-2 group transition-all ease-in-out duration-500">
                    <BiLogoInstagram className=" group-hover:text-gray-950 transition-all duration-500 ease-in-out text-violet-700" />
                  </div>
                  <div className="mx-2 rounded-lg hover:bg-violet-500 border p-2 group transition-all ease-in-out duration-500">
                    <BiLogoWhatsapp className=" group-hover:text-gray-950 transition-all duration-500 ease-in-out text-violet-700" />
                  </div>
                  <div className="mx-2 rounded-lg hover:bg-violet-500 border p-2 group transition-all ease-in-out duration-500">
                    <BiLogoTwitter className=" group-hover:text-gray-950 transition-all duration-500 ease-in-out text-violet-700" />
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-4 pl-2">
              <h1 className="font-bold text-lg text-gray-800 mb-4">Company</h1>
              <ul className="space-y-3 ">
                <li>
                  <Link to="/about-us" className="hover:text-violet-700">
                    About Us
                  </Link>
                </li>
                <li>Our Team</li>
                <li>Projects</li>
              </ul>
            </div>

            <div className="mt-4">
              <h1 className="font-bold text-lg text-gray-800 mb-4">
                Our Services
              </h1>
              <ul className="space-y-3">
                {availableServices?.map((service) => (
                  <li key={service.name}>
                    {service.isAvailable ? (
                      <Link to={service.link} className="hover:text-violet-700">
                        {service.name}
                      </Link>
                    ) : (
                      <span>{service.name}</span>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-4 flex flex-col">
              <h1 className="font-bold text-lg text-gray-800 mb-4">
                Working Hours
              </h1>
              <div className="flex justify-between border-b border-gray-300 py-2 tracking-wide">
                <p>Monday - Friday : </p>
                <p>7:00 am - 6:00 pm </p>
              </div>
              <div className="flex justify-between border-b border-gray-300 py-2 tracking-wide">
                <p>Saturday : </p>
                <p>9:00 am - 7:00 pm </p>
              </div>
              <div className="flex justify-between border-b border-gray-300 py-2 tracking-wide">
                <p>Sunday : </p>
                <p>1:00 pm - 6:00 pm </p>
              </div>
              <div className="flex justify-between py-2 tracking-wide">
                <p>Holidays : </p>
                <p className="text-sm">OFFDAY</p>
              </div>
            </div>
          </div>

          <hr className="mt-6 border-gray-300 sm:mx-auto lg:mt-8 px-6" />
          {/* Lower Footer Content */}
          <div className="flex sm:flex-row items-center justify-between p-6">
            <div className="text-xs tracking-wide">
              <h2>
                &copy;Copyright {new Date().getFullYear()}{" "}
                <span>Denlly Group All Rights Reserved</span>
              </h2>
            </div>
            <div className="text-xs tracking-wide flex gap-6">
              <a href="#" className="">
                {" "}
                Privacy Policy{" "}
              </a>
              <a href="#" className="">
                {" "}
                Terms & Conditions{" "}
              </a>
            </div>
          </div>
        </div>
      </footer>
    </React.Fragment>
  );
};

export default Footer;
