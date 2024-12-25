import { ToastOptions, toast } from "react-toastify";

import AlertError from "@/public/assets/AlertError.svg";
import AlertInfo from "@/public/assets/AlertInfo.svg";
import AlertSuccess from "@/public/assets/AlertSuccess.svg";
import AppToast from "../../components/toasts"
import Image from "next/image";
import React from "react";
import Spinner from "@/public/assets/Spinner.svg";

const toasts = {
    success: (heading: React.ReactNode, body: React.ReactNode, options?: ToastOptions) => {
        return toast(<AppToast type="success" heading={heading} body={body} />, {
            icon: <Image src={AlertSuccess} className="w-32 h-32" alt="Alert Success Icon" />,
            progressStyle: {
                background: "green",
            },
            ...options
        });
    },
    error: (heading: React.ReactNode, body: React.ReactNode, options?: ToastOptions) => {
        return toast(<AppToast type="error" heading={heading} body={body} />, {
            icon: <Image src={AlertError} className="w-72" alt="Alert Error icon" />,
            progressStyle: {
                background: "red",
            },
            ...options
        });
    },
    info: (heading: React.ReactNode, body: React.ReactNode, options?: ToastOptions) => {
        return toast(<AppToast type="info" heading={heading} body={body} />, {
            icon: <Image src={AlertInfo} className="w-72" alt="Alert info icon" />,

            progressStyle: {
                background: "blue",
            },
            ...options
        });
    },
    promise: (promise: Promise<any>, loadingMessage: React.ReactNode, successMessage?: React.ReactNode, errorMessage?: React.ReactNode, options?: ToastOptions) => {
        // Show loading toast
        const loadingToastId = toast.loading(<AppToast type="promise" heading="Loading" body={loadingMessage} />, {
            icon: <Image
                src={Spinner}
                alt="spinner"
                style={{ width: "40px", height: "40px" }}
            />,
            autoClose: false,
            closeButton: false,
            closeOnClick: false
        });

        // Execute the promise
        return promise
            .then((result) => {
                // Hide loading toast
                toast.dismiss(loadingToastId);

                // Show success toast
                successMessage && toast.success(<AppToast type="success" heading="Success" body={successMessage} />, {
                    icon: <Image src={AlertSuccess} alt="Alert Success Icon" />,
                    ...options
                });

                return result; // Forward the resolved value
            })
            .catch((error) => {
                // Hide loading toast
                toast.dismiss(loadingToastId);

                // Show error toast
                errorMessage && toast.error(<AppToast type="error" heading="Error" body={errorMessage} />, {
                    icon: <Image src={AlertError} alt="Alert Error Icon" />,
                    ...options
                });

                throw error; // Forward the error
            });
    }
};

export default toasts