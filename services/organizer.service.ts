import Axios from "@/utils/Axios";
import { IServerCallback } from "./user.service";

class OrganizerService {
    //Actions on Raffle
    static fetchRaffles = async (filters: { page: number; limit: number; event?: string }) => {
        try {
            const queryParams = new URLSearchParams({
                page: filters.page.toString(),
                limit: filters.limit.toString(),
            });

            const { data } = await Axios({
                url: `/raffle/event/${filters.event}?${queryParams.toString()}`,
                method: "GET",
            });

            if (data.success) {
                return {
                    ...data,
                };
            } else {
                throw new Error(data.message);
            }
        } catch (e: any) {
            const message = e?.response?.data?.error || e?.message || "Check console for error";
            throw new Error(message);
        }
    };


    // Get All Events
    static getEvents = async ({ page, limit }: { page: number; limit: number }) => {
        try {
            const queryParams = new URLSearchParams({
                page: page.toString(),
                limit: limit.toString(),
            });

            const { data } = await Axios({
                url: `/event/self?${queryParams.toString()}`,
                method: "GET",
            });

            if (data.success) {
                return {
                    ...data,
                };
            } else {
                throw new Error(data.message);
            }
        } catch (e: any) {
            const message = e?.response?.data?.error || e?.message || "Check console for error";
            throw new Error(message);
        }
    };


    // Get All Transactions
    static getTransactions = async ({ page, limit, event }: { page: number; limit: number, event?: string }) => {
        try {
            const queryParams = new URLSearchParams({
                page: page.toString(),
                limit: limit.toString(),
            });

            const { data } = await Axios({
                url: `/transaction/event/${event}?${queryParams.toString()}`,
                method: "GET",
            });

            if (data.success) {
                return {
                    ...data,
                };
            } else {
                throw new Error(data.message);
            }
        } catch (e: any) {
            const message = e?.response?.data?.error || e?.message || "Check console for error";
            throw new Error(message);
        }
    };


    static fetchAndExportData = async (url: string, callback: IServerCallback) => {
        console.log("Fetching Export data on URL", url);
        try {
            const { data } = await Axios({
                url,
                method: "GET",
            });

            if (data.success) {
                callback(null, data)
            } else {
                callback(data.message);
            }
        } catch (e: any) {
            console.log("Error fetching Export data", e);
            const message = e?.response?.data?.error || e?.message || "Check console for error";
            callback(message);
        }
    }
}

export default OrganizerService;
