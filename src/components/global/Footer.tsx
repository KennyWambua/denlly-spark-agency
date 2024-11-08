import React from "react";
import {
  BiLogoFacebook,
  BiLogoInstagram,
  BiLogoTwitter,
  BiLogoWhatsapp,
  BiPhoneCall,
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
          <div className="flex flex-col lg:flex-row items-center justify-between px-6 sm:px-8 lg:px-24 gap-4 border bg-primary/70 border-slate-200 py-4 -translate-y-1/2">
            <h1 className="font-semibold text-center">See Our New Updates</h1>
            <form method="post" className="flex items-center w-full lg:w-auto">
              <input
                type="email"
                placeholder="Email here..."
                aria-label="Email address"
                className="p-2 bg-gray-200 outline-none placeholder:text-sm placeholder:text-green-950 flex-grow lg:flex-grow-0 md:w-80 lg:w-96"
              />
              <button type="submit" className="group p-2 bg-secondary">
                <BsArrowRightShort className="text-2xl -rotate-45 group-hover:rotate-0 transition-all duration-500 ease-in-out " />
              </button>
            </form>
          </div>

          {/* Footer content */}
          <div className="relative isolate grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-4 lg:px:0 py-8">
            {/* Denlly group section */}
            <div>
              <h2 className="font-bold font-Playfair text-3xl mb-2">
                Denlly Group
              </h2>
              <p className="text-gray-900 mb-4">
                Enhance wellness and beauty with expert, nature-based care
              </p>
              <div className="flex items-center gap-2 font-semibold mb-4">
                <BiPhoneCall stroke="5" className="text-violet-500" size="36" />
                <div>
                  <span className="text-sm block">Call Any Time</span>
                  <p>+254 729 994 794</p>
                </div>
              </div>
              <div className="flex space-x-4">
                <div className="rounded-lg hover:bg-violet-500 border p-2 group transition-all ease-in-out duration-500">
                  <BiLogoFacebook className=" group-hover:text-gray-950 transition-all duration-500 ease-in-out text-violet-700" />
                </div>
                <div className="rounded-lg hover:bg-violet-500 border p-2 group transition-all ease-in-out duration-500">
                  <BiLogoInstagram className=" group-hover:text-gray-950 transition-all duration-500 ease-in-out text-violet-700" />
                </div>
                <div className="rounded-lg hover:bg-violet-500 border p-2 group transition-all ease-in-out duration-500">
                  <BiLogoWhatsapp className=" group-hover:text-gray-950 transition-all duration-500 ease-in-out text-violet-700" />
                </div>
                <div className="rounded-lg hover:bg-violet-500 border p-2 group transition-all ease-in-out duration-500">
                  <BiLogoTwitter className=" group-hover:text-gray-950 transition-all duration-500 ease-in-out text-violet-700" />
                </div>
              </div>
            </div>

            {/* Company section */}
            <div>
              <h1 className="font-bold text-lg mb-4">Company</h1>
              <ul className="space-y-3">
                <li>
                  <Link to="/about-us" className="hover:text-violet-700">
                    About Us
                  </Link>
                </li>
                <li>Our Team</li>
                <li>Projects</li>
              </ul>
            </div>

            {/* Services section */}
            <div>
              <h1 className="font-bold text-lg mb-4">Our Services</h1>
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

            {/* Working hours section */}
            <div>
              <h1 className="font-bold text-lg mb-4">Working Hours</h1>
              <div className="space-y-2">
                <div className="flex justify-between border-b border-gray-300 py-1">
                  <p>Monday - Friday : </p>
                  <p>7:00 am - 6:00 pm </p>
                </div>
                <div className="flex justify-between border-b border-gray-300 py-1">
                  <p>Saturday : </p>
                  <p>9:00 am - 7:00 pm </p>
                </div>
                <div className="flex justify-between border-b border-gray-300 py-1">
                  <p>Sunday : </p>
                  <p>1:00 pm - 6:00 pm </p>
                </div>
                <div className="flex justify-between py-1">
                  <p>Holidays : </p>
                  <p className="text-sm">OFFDAY</p>
                </div>
              </div>
            </div>
          </div>

          {/* Lower Footer Content */}
          <div className="mt-6 border-t border-gray-300 flex flex-col sm:flex-row items-center justify-between text-xs px-2 py-6 space-y-2 sm:space-y-0">
            <p>
              &copy;Copyright {new Date().getFullYear()}{" "}
              <span>Denlly Group All Rights Reserved</span>
            </p>
            <div className="flex space-x-8">
              <Link to="#" className="hover:text-violet-700">
                Privacy Policy
              </Link>
              <Link to="#" className="hover:text-violet-700">
                Terms & Conditions
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </React.Fragment>
  );
};

export default Footer;
