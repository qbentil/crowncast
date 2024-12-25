"use client"

import * as Yup from 'yup';

import React, { FC } from "react"

import Link from 'next/link';
import toasts from '@/utils/toasts';
import { useFormik } from 'formik'
import { useRouter } from 'next/navigation';
import { Input, Button } from '@/components/core';

const ForgotpasswordPage = () => {
    const [loading, setLoading] = React.useState<boolean>(false)
    const router = useRouter()
    const { handleSubmit, ...form } = useFormik({
        initialValues: {
            email: "",
        },
        validationSchema: Yup.object().shape({
            email: Yup.string().email().required(),
        }),
        onSubmit: async (values) => {
            setLoading(true)
            console.log(values);

            const timer = setTimeout(() => {
                setLoading(false)
                router.push("/signin");
                toasts.error("Reset Password", "Email sending failed");
            }, 3000); // 30000 milliseconds = 30 seconds

            return () => clearTimeout(timer);
        }
    })

    return (
        <div className="mx-auto w-full max-w-sm lg:w-96">
            <div className="text-left">
                <h2 className="text-xl font-extrabold text-text">Forgot Password?</h2>
                <p className="mt-2 text-sm text-text">
                    Enter your email to receive a password reset link.
                </p>
            </div>

            <div className="mt-8">

                <div className="mt-6">
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <Input
                                id="email"
                                label="Email"
                                type="email"
                                placeholder='e.g. user@ecg.com'
                                validation={form}
                                value={form.values.email}
                                onChange={form.handleChange}
                                onBlur={form.handleBlur}
                            />
                        </div>
                        <div className="flex flex-col text-left text-sm text-gray-600 space-y-2">
                            <Link href="/signin" className="text-secondary hover:text-primary">
                                Back to login
                            </Link>
                        </div>
                        <div>
                            <Button
                                type="submit"
                                disabled={loading}
                                className="w-full"
                            >
                                {loading ? "Hang on..." : "Submit"}
                            </Button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ForgotpasswordPage