import RoleGuard from "@/guards/role-guard";

export default function Layout({
    children,
    hod,
    lecturer,
    student
}: {
    lecturer: React.ReactNode
    hod: React.ReactNode,
    student: React.ReactNode
    children?: React.ReactNode
}) {
    return (
        <RoleGuard
            hod={hod}
            lecturer={lecturer}
            student={student}
        >
            {children}
        </RoleGuard>
    );
}
