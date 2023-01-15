/* eslint-disable @next/next/no-img-element */

import NavItems, { ActionItems } from "../../utils/Navlinks";

import Link from "next/link";
import NavItem from "./NavItem";
import React from "react";
import { useStateValue } from "../../context/StateProvider";

const SideBar = () => {
  const [{ user }, dispatch] = useStateValue();
  const Logout = () => {
    console.log("logout");
  };
  return (
    <div className="w-[20%] h-[100vh] bg-primary flex flex-col gap-y-4 items-center justify-start font-sans overflow-y-hidden">
      <div className="w-full flex flex-col gap-y-2 py-6 px-4">
        <div className="w-full h-[4vh] flex items-start justify-start mb-4">
          <img src="/assets/crowncast.svg" alt="logo" className="w-40" />
        </div>
        <aside className="flex flex-col h-[87vh] justify-between">
          <div className="flex flex-col  gap-y-2">
            {NavItems.map((item, index) => {
              if (user?.role !== "admin" && item.protected) return null;
              return <NavItem key={index} data={item} />;
            })}
          </div>
          <div className="flex flex-col gap-y-2">
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
                  src={user?.avatar || "/assets/bentil.jpeg"}
                  alt="profile"
                  className="w-full rounded-full"
                />
              </div>
              <div className="flex flex-col">
                <span className="">{user?.name || ""}</span>
                <span className="text-xs ">
                  {user?.email || " sbentil005@st.ug.edu.gh"}
                </span>
              </div>
            </Link>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default SideBar;
