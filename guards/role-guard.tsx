"use client";

import { IRoles } from "@/models/roles.model";
import { removeCookie } from "typescript-cookie";
import { useAuthContext } from "@/hooks/userContext";

interface RoleProps {
    hod: React.ReactNode;
    lecturer: React.ReactNode;
    student: React.ReactNode;
    children?: React.ReactNode;
}

const RoleGuard: React.FC<RoleProps> = ({
    hod,
    lecturer,
    student,
    children
}) => {
    const { user } = useAuthContext();

    if (!user) {
        window.location.href = "/signin";
        return <p>No User</p>;
    }

    switch (user.role) {
        case IRoles.HOD:
            return hod;
        case IRoles.LECTURER:
            return lecturer;
        case IRoles.STUDENT:
            return student;
        default:
            removeCookie("access_token");
            removeCookie("refresh_token");
            window.location.href = "/signin";
            return <p>Role not recognized</p>;
    }
};

export default RoleGuard;
