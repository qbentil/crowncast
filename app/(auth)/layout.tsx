import AuthGuard from "@/guards/auth-guard";

export default function AuthLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <AuthGuard>
            <div className="h-screen w-screen flex">
                {/* Left Section: Globe with Spinning Animation */}
                <div className="hidden lg:flex flex-1 items-center justify-center relative bg-pearl-50">
                    <div className="relative w-full h-full ">
                        <div
                            className="absolute inset-0 animate-spin-slow"
                            style={{
                                backgroundImage: `url('/assets/globe.png')`,
                                backgroundSize: "contain",
                                backgroundRepeat: "no-repeat",
                            }}
                        ></div>
                        {/* DCS Logo */}
                        <div className="absolute inset-0 flex items-center justify-center z-10">
                            <div className="bg-white px-6 py-4 shadow-md rounded flex items-center">
                                <img
                                    src="/assets/dcs-logo.svg"
                                    alt="DCS Logo"
                                    className="w-40 h-auto"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Section: Form */}
                <div className="flex flex-1 items-center justify-center bg-white">
                    {children}
                </div>
            </div>


        </AuthGuard>
    );
}
