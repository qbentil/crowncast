import * as Yup from 'yup';

import GeneralService, { ICheckoutResponse } from '@/services';

import { Button } from '@/components/core';
import TextInput from '@/components/core/archive/text-input';
import { ghanaianPhoneNumber } from '@/lib/utils';
import toasts from '@/utils/toasts';
import { useFormik } from 'formik';
import { useState } from 'react';

const TokenPurchaseForm: React.FC<{ onClose: () => void }> = ({ onClose }) => {
    const [amount, setAmount] = useState(10);
    const [loading, setLoading] = useState(false);

    const { handleSubmit, ...form } = useFormik({
        initialValues: {
            name: '',
            phone: '',
            email: '',
            tokens_count: 1,
        },
        validationSchema: Yup.object({
            name: Yup.string().required('Full name is required'),
            phone: Yup.string()
                .matches(/^0\d{9}$/, 'Phone number must be exactly 10 digits and start with 0')
                .required('Phone number is required'),
            tokens_count: Yup.number()
                .min(1, 'At least 1 ticket must be purchased')
                .required('Number of tokens is required'),
            email: Yup.string().email('Invalid email address'),
        }),
        onSubmit: async (values) => {
            setLoading(true);
            values = {
                ...values,
                phone: ghanaianPhoneNumber(values.phone),
            }
            GeneralService.purchaseToken(values, (error, data: ICheckoutResponse) => {
                setLoading(false);
                if (!error) {
                    window.location.href = data.checkoutUrl;
                } else {
                    toasts.error('Purchase Error', error);
                }
            })
        },
    });

    const handleTokenChange = (e: any) => {
        let value = e.target.value;

        if (value === '') {
            form.setFieldValue('tokens_count', '');
            setAmount(0);
        } else {
            value = Math.max(1, Math.floor(Number(value)));
            form.setFieldValue('tokens_count', value);
            setAmount(value * 10);
        }
    };

    return (
        <div className="flex justify-center items-center h-screen w-screen">
            <div className="w-full md:w-96 px-4 py-8 md:px-10 bg-gray-light shadow-lg rounded-md md:mx-20 mx-auto md:absolute md:bottom-6 md:left-0 fixed inset-x-0 bottom-0 flex flex-col justify-center items-center md:items-start">
                {/* Close Button (Visible only on desktop) */}
                <p onClick={onClose} className="cursor-pointer absolute top-2 right-2 text-white bg-primary w-8 h-8 rounded-full flex items-center justify-center hover:text-gray">
                    &#10005;
                </p>
                <h2 className="text-2xl font-bold text-center text-primary mb-4">
                    Purchase Tickets
                </h2>
                <form onSubmit={handleSubmit} className="space-y-2 w-full">
                    <TextInput
                        id="name"
                        type="text"
                        required
                        label="Full Name"
                        {...form}
                    />
                    <TextInput
                        id="phone"
                        type="text"
                        required
                        label="Phone Number"
                        {...form}
                    />
                    <TextInput
                        id="email"
                        type="email"
                        label="Email (Optional for Ticket Receipt)"
                        {...form}
                    />
                    <TextInput
                        id="tokens_count"
                        type="number"
                        required
                        label="Number of Tickets (GHC 10/ticket)"
                        {...form}
                        handleChange={handleTokenChange}
                        min={1}
                        step={1}
                    />
                    <div className="text-primary font-bold text-base mt-4">
                        Total Amount: GHC {amount}
                    </div>

                    <Button
                        type="submit"
                        className="w-full"
                        loading={loading}
                        loadingText='Processing...'
                        text='Complete Purchase'
                    />
                </form>
            </div>
        </div>
    );
};

export default TokenPurchaseForm;
