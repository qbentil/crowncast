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
    status: "active" | "inactive"
}

export type Company = {
    _id: string,
    name: string,
    address: string,
    phone?: string,
}