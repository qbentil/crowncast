import { IRoles } from "./roles.model";

export interface IUser {
    _id: string;
    email: string;
    name: string;
    role: IRoles;
    phone: string;
    profileImageUrl?: string;
}

