import React from "react";
import clsx from "clsx"; // You can use this utility for conditional classes

type AppToastProps = {
  heading: React.ReactNode;
  body: React.ReactNode;
  type: "success" | "error" | "info" | "promise";
};

export default function AppToast({ heading, body, type }: AppToastProps) {
  // Define the border color based on the type
  const borderColor = {
    success: "border-green-500",
    error: "border-red-500",
    info: "border-blue-500",
    promise: "border-gray-300 animate-pulse", // Add animation for the loading bar
  };

  const headingColor = {
    success: "text-green-700",
    error: "text-red-600",
    info: "text-blue-900",
    promise: "text-gray-500",
  };

  return (
    <div
      className={clsx(
        "px-3", 
        borderColor[type] 
      )}
    >
      <h1 className={
        clsx(
          "font-bold mb-1 text-sm leading-5",
          headingColor[type]
        )
      }>
        {heading}
      </h1>
      <p className="font-normal text-[#475467] text-sm leading-5">{body}</p>
    </div>
  );
}
