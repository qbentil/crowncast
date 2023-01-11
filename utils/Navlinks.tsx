import { NavItem } from "../types";
import { FiBarChart2, FiLayers, FiSettings } from "react-icons/fi";
import { BsCheckSquare } from "react-icons/bs";
import { HiOutlineUser, HiOutlineUsers } from "react-icons/hi";
import { BiLogOutCircle } from "react-icons/bi";
import { CiSettings } from "react-icons/ci";

export const ActionItems: NavItem[] = [
    {
        name: "Settings",
        icon: <FiSettings />,
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
    protected: true,
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
    name: "Users",
    link: "/users",
    icon: <HiOutlineUsers />,
    protected: true,
  },
];

export default NavItems;
