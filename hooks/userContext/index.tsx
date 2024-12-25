import { AuthContext, AuthContextType } from "@/providers/auth-context";

import { useContext } from "react";

export const useAuthContext = (): AuthContextType => {
    const context = useContext(AuthContext);
    if (context === null) {
        throw new Error("useAuthContext must be used within a authContextProvider");
    }

    return context;
};
