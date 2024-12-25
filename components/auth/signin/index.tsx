"use client";

import * as Yup from 'yup';

import { Button, Input } from '@/components/core';

import CustomRadioGroup from '@/components/core/custom-radio-group';
import Logo from '@/components/logo';
import React from "react";
import UserService from '@/services/user.service';
import toasts from '@/utils/toasts';
import { useAuthContext } from '@/hooks/userContext';
import { useFormik } from 'formik';

const userTypes = [
    {
        label: "Student", value: "student",
    },
    {
        label: "Staff", value: "staff",
    },
    {
        label: "Admin", value: "admin"
    }
]
const LoginPage = () => {
    const [loading, setLoading] = React.useState<boolean>(false);
    const { login } = useAuthContext();
    const { handleSubmit, ...form } = useFormik({
        initialValues: {
            sid: "",
            pin: "",
            userType: "student"
        },
        validationSchema: Yup.object().shape({
            sid: Yup.string().length(10, "ID is must be 10 digits").required("ID is required"),
            pin: Yup.string().length(6).required("Pin is required"),
            userType: Yup.string().required("Choose user type")
        }),
        onSubmit: async (values) => {

            console.log({ values })
            setLoading(true);
            UserService.login(values.sid, values.pin, (error, user) => {
                setLoading(false);
                if (!error) {
                    login(user);
                    window.location.href = "/"
                    toasts.success("Login🎉", "Login Successful");
                } else {
                    console.error(error)
                    toasts.error("Login 👺", error);
                }
            });
        },
    });

    return (
        <div className="mx-auto w-[70%]">
            <Logo />
            <div className="mt-8">
                <div className="mt-6">
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <CustomRadioGroup
                                id="userType"
                                layout="inline"
                                placeholder='Academic ID number'
                                onChange={form.handleChange}
                                onBlur={form.handleBlur}
                                validation={form}
                                options={userTypes}
                            />
                        </div>
                        <div>
                            <Input
                                id="sid"
                                // label="Student ID"
                                type="text"
                                placeholder='Academic ID number'
                                onChange={form.handleChange}
                                onBlur={form.handleBlur}
                                validation={form}
                                maxLength={10}
                            />
                        </div>

                        <div className="space-y-1">
                            <Input
                                id="pin"
                                // label="Pin"
                                type="text"
                                required
                                placeholder='PIN'
                                onChange={form.handleChange}
                                onBlur={form.handleBlur}
                                validation={form}
                            />
                        </div>
                        <div>
                            <Button
                                type="submit"
                                disabled={loading}
                                className="w-full "
                            >
                                {loading ? "Logging in..." : "Login"}
                            </Button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;