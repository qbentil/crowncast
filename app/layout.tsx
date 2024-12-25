import "./globals.css";
import "react-toastify/dist/ReactToastify.min.css";
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file

import AuthContextProvider from "@/providers/auth-context";
import BouncingSquaresLoader from "@/components/preloader";
import type { Metadata } from "next";
import Providers from "./provider";
import { Suspense } from "react";
import { ToastContainer } from "react-toastify";

export const metadata: Metadata = {
  title: "DMS2.0",
  description: "Mordenized Department Managment System",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <AuthContextProvider>
        <body
          className="text-gray-900 bg-gray-100 h-screen w-screen overflow-hidden"
        >
          <ToastContainer
            position="top-right"
            className={"app__toast"}
            bodyClassName={"app__toast__body"}
            autoClose={5000}
            hideProgressBar={true}
            closeOnClick={false}
            rtl={false}
            draggable
            pauseOnFocusLoss
            theme="light"
          />
          <Providers>
            <Suspense fallback={
              <BouncingSquaresLoader />
            }>{children}</Suspense>
          </Providers>
        </body>
      </AuthContextProvider>
    </html>
  );
}
