import React, { useEffect } from 'react';

import Link from 'next/link';
import { cn } from '@/lib/utils';

interface ButtonProps {
    text?: string;
    loading?: boolean;
    variant?: "primary" | "secondary" | "outline";
    disabled?: boolean;
    onClick?: () => void;
    loadingText?: string;
    type?: "button" | "submit" | "reset" | "link";
    className?: string;
    children?: React.ReactNode;
    href?: string;
}

const Button: React.FC<ButtonProps> = ({
    text, loading, variant = "primary", disabled, onClick, loadingText, type, className, children, href
}) => {

    useEffect(() => {
        // if type is link, make sure href is provided, else throw an error
        if (type === "link" && !href) {
            throw new Error("If type is link, href must be provided");
        }
    }, [type, href]);
    if (type === "link" && href) {
        return (
            <Link href={href} passHref>
                <p
                    className={cn(
                        "w-max flex justify-center py-2 px-4 border rounded shadow-sm text-sm font-normal disabled:cursor-not-allowed",
                        variant === "primary" && "text-white bg-primary hover:bg-secondary disabled:bg-gray-light disabled:text-gray",
                        variant === "secondary" && "text-white bg-secondary hover:bg-[#7973F0] disabled:bg-gray-light disabled:text-gray",
                        variant === "outline" && "text-primary border-primary hover:text-secondary hover:border-secondary disabled:text-gray disabled:border-gray disabled:bg-white/80",
                        className ?? ""
                    )}
                >
                    {children ? children : text ?? "Provide Text"}
                </p>
            </Link>
        );
    }

    return (
        <button
            type={type !== "link" ? type : "button"}  // Fallback to "button" if type is "link"
            disabled={loading || disabled}
            onClick={onClick}
            className={cn(
                "w-max flex h-12 justify-center items-center py-2 px-4 border shadow-sm text-base font-normal disabled:bg-pearl-100 disabled:cursor-not-allowed flex-shrink-0",
                variant === "primary" && "text-white bg-primary hover:bg-primary-100 ",
                variant === "secondary" && "text-white bg-secondary hover:bg-secondary-100",
                variant === "outline" && "text-primary border-primary hover:bg-[#E3E9FF] ",
                className ?? ""
            )}
        >
            {
                children ? children : loading ? loadingText ?? "Loading..." : text ?? "Provide Text"
            }
        </button>
    );
};

export default Button;
