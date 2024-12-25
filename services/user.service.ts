import Axios from "@/utils/Axios";
import { setCookie } from "typescript-cookie";

export interface IServerCallback {
    (error: string | null, data?: any): void;
}

class UserService {
    static getUserInfo = async () => {
        try {
            const { data } = await Axios.get("/user/me");
            if (data.success) {
                return data.data;
            }
        } catch (e: any) {
            console.log(`FETCH "user/me" error`, e);
            const message =
                e?.response?.data?.error || e?.message || "Check console for error";
            return message
        }
    }

    static login = async (phone: string, pin: string, callback: IServerCallback) => {
        try {
            const { data } = await Axios.post("/user/login", { phone, pin });
            console.log("data", data);
            if (data.success) {
                setCookie("access_token", data.data.access_token);
                setCookie("refresh_token", data.data.refresh_token);
                callback(null, data.data.user);
            } else {
                callback(data.message)
            }
        } catch (e: any) {
            console.log(`FETCH "user/login" error`, e);
            const message =
                e?.response?.data?.error || e?.message || "Check console for error";
            callback(message);
        }
    }
}

export default UserService;
