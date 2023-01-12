/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";
import NavItems, { ActionItems } from "../../utils/Navlinks";
import NavItem from "./NavItem";

const SideBar = ({ user }: { user: string }) => {
  const Logout = () => {
    console.log("logout");
  };
  return (
    <div className="w-[20%] h-full bg-primary flex flex-col gap-y-4 items-center justify-start">
      <div className="w-full flex flex-col gap-y-2 py-6 px-4">
        <div className="w-full flex items-start justify-start mb-4">
          <img src="/assets/crowncast.svg" alt="logo" className="w-40" />
        </div>
        <div className="flex flex-col items-start justify-start gap-y-2">
          {NavItems.map((item, index) => {
            if(user !== "admin" && item.protected) return null;
            return <NavItem key={index} data={item} />;
          })}
        </div>
        <div className="flex flex-col gap-y-2 mt-48">
          {ActionItems.map((item, index) => {
            return (
              <NavItem
                key={index}
                data={item}
                onClick={item.name == "Logout" ? Logout : undefined}
              />
            );
          })}
          {/* gray seperator */}
          <div className="w-full h-px bg-gray-400"></div>
          <Link
            href="#"
            className="flex items-center gap-x-4 p-2 w-full text-base rounded-lg text-white hover:bg-hover"
          >
            <div className="w-8 h-8 rounded-full bg-gray-200">
              <img
                src="/assets/bentil.jpeg"
                alt="profile"
                className="w-full rounded-full"
              />
            </div>
            <div className="flex flex-col">
              <span className="">Shadrack Bentil</span>
              <span className="text-xs ">sbentil005@st.ug.edu.gh</span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
