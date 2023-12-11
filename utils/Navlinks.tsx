import { BiCategoryAlt, BiLogOutCircle } from "react-icons/bi";
import { FiBarChart2, FiLayers, FiSettings } from "react-icons/fi";
import { HiOutlineUser, HiOutlineUsers } from "react-icons/hi";

import { BsCheckSquare } from "react-icons/bs";
import { CiSettings } from "react-icons/ci";
import { NavItem } from "../interfaces";

export const ActionItems: NavItem[] = [
  {
    name: "Settings",
    icon: <FiSettings />,
    link: "/settings",
    protected: false,
  },
  {
    name: "Logout",
    icon: <BiLogOutCircle />,
    protected: false,
  },
];
const NavItems: NavItem[] = [
  {
    name: "Dashboard",
    link: "/",
    icon: <FiBarChart2 />,
    protected: false,
  },
  {
    name: "Events",
    link: "/events",
    icon: <FiLayers />,
    protected: false,
  },
  {
    name: "Organizers",
    link: "/organizers",
    icon: <BsCheckSquare />,
    protected: true,
  },
  {
    name: "Contestants",
    link: "/contestants",
    icon: <HiOutlineUser />,
    protected: false,
  },
  {
    name: "Categories",
    link: "/categories",
    icon: <BiCategoryAlt />,
    protected: false,
  },
  {
    name: "Users",
    link: "/admins",
    icon: <HiOutlineUsers />,
    protected: true,
  },
];

export default NavItems;
