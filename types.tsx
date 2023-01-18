import { type } from "os";

export type NavItem = {
    name: string;
    link?: string;
    icon: JSX.Element | string;
    protected: boolean;
}

export type User = {
    _id: string,
    name: string,
    email: string,
    company?: Company,
    phone?: string,
    token?: string,
    role?: string,
    createdAt?: string,
    updatedAt?: string,
    avatar?: string,
    address?: string,
    status: "active" | "inactive",
    userType: "admin" | "organizer"
}

export type Company = {
    _id: string,
    name: string,
    address: string,
    phone?: string,
}

export type Category = {
    _id: string,
    title: string,
    description?: string,
    createdAt?: string,
    updatedAt?: string,

}

export type OptionType = {
    value: string;
    label: string;
  };