import React from "react";
import { NavItem } from "../../interfaces";
import Link from "next/link";

const NavItem = ({
  data,
  onClick,
}: {
  data: NavItem;
  onClick?: () => void;
}) => {
  const { name, link, icon } = data;
  return (
    <Link
      href={link ? `/dashboard/${link}` : ""}
      onClick={onClick}
      className="flex items-center gap-x-4 p-2 w-full text-base rounded-lg text-white hover:bg-hover"
    >
      <span className="text-xl">{icon}</span>
      <span className="">{name}</span>
    </Link>
  );
};

export default NavItem;
