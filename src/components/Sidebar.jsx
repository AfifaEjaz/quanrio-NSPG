import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/images/logo.png";
import home from "../assets/images/home-line.png";
import taskicon from "../assets/images/task-iconn.png";
import parts from "../assets/images/parts-icon.png";
import job from "../assets/images/job-icon.png";
import optionicon from "../assets/images/option-iconn.png";
import customer from "../assets/images/customer-icon.png";
import plumbing from "../assets/images/plumbing-icon.png";
import electric from "../assets/images/electric-icon.png";
import hvac from "../assets/images/hvac-iconn.png";
import heat from "../assets/images/heat-iconn.png";
import ac from "../assets/images/ac-iconn.png";
import chimney from "../assets/images/chimney-iconn.png";
import avatar from "../assets/images/Avatar.png";
import faq_icon from "../assets/images/icon.png";
import logout from "../assets/images/log-out-01.png";
import { useLocation } from "react-router-dom";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const bookItems = [
    { name: "Dashboard", icon: home, url: "/Dashboard" },
    {name: "Tasks", icon: taskicon, url: "/Home/Tasks" },
    {name: "Parts", icon: parts, url: "#" },
    { name: "Quick Job", icon: job, url: "#" },
    { name: "Prebuilt Option Groups", icon: optionicon, url: "#" },
    { name: "Customer Info", icon: customer, url: "#" },
  ];

   const formItems = [
    {
      name: "Plumbing",
      icon: plumbing,
      url: "#",
    },
    {
      name: "Electric",
      icon: electric,
      url: "#",
    },
    {
      name: "HVAC",
      icon: hvac,
      url: "#",
    },
    {
      name: "Heat Startup",
      icon: heat,
      url: "#",
    },
    {
      name: "A/C Startup",
      icon: ac,
      url: "#",
    },
    {
      name: "Chimney/Vent",
      icon: chimney,
      url: "#",
    },
  ];

  return (
    <>
      {/* Mobile toggle button */}
      <div className="flex items-center justify-between p-4 md:hidden">
        <img src={logo} alt="logo" className="w-24" />
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-gray-700 focus:outline-none"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>
      </div>

      {/* Sidebar panel */}
      <div
        className={`fixed md:static top-0 left-0 h-full bg-primary z-40 transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 transition-transform duration-300 ease-in-out overflow-y-auto`}
      >
        <div className="flex flex-col gap-[24px] py-[24px]">
          <div className="logo px-[16px]">
            <img src={logo} alt="" />
          </div>

          {/* Book Section */}
          <div className="flex flex-col gap-[14px] px-[16px]">
            <span className="text-light-gray">Book Section</span>
            <ul className="flex flex-col gap-[8px] text-gray font-semibold font-creato-medium">
              {bookItems.map((item, key) => (
                <li key={key} className={`rounded py-[8px] px-[12px] ${
                  location.pathname == item.url
                    ? "bg-white border border-border-color"
                    : null
                } `}>
                  <NavLink to={item.url} className="flex gap-[12px]">
                    <img src={item.icon} alt="" className="object-contain" />
                    <span>{item.name}</span>
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Forms Section */}
          <div className="flex flex-col gap-[14px] px-[16px]">
            <span className="text-light-gray">Forms</span>
           <ul className="flex flex-col gap-[8px] text-gray font-bold">
              {formItems.map((item, key) => (
                <li key={key} className={`rounded py-[8px] px-[12px] ${
                  location.pathname == item.url
                    ? "bg-white border border-border-color"
                    : null
                } `}>
                  <NavLink to={item.url} className="flex gap-[12px]">
                    <img src={item.icon} alt="" className="object-contain" />
                    <span>{item.name}</span>
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Bottom Section */}
          <ul className="flex flex-col gap-[8px] text-gray font-bold px-[16px]">
            <li className="py-[8px] px-[12px]">
              <NavLink to="/" className="flex gap-[12px]">
                <img src={faq_icon} alt="" />
                <span>FAQ'S</span>
              </NavLink>
            </li>
            <li className="rounded py-[8px] px-[12px] bg-white border border-border-color flex gap-[12px]">
              <img src={avatar} alt="" className="object-contain" />
              <div>
                <p>Olivia Rhye</p>
                <p className="font-light">olivia@untitledui.com</p>
              </div>
              <button>
                <img src={logout} alt="" />
              </button>
            </li>
          </ul>
        </div>
      </div>

      {/* Mobile overlay */}
      {isOpen && (
        <div
          className="fixed inset-0  z-30 md:hidden"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </>
  );
};

export default Sidebar;
