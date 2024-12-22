"use client";

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { AuthKitProvider } from "@workos-inc/authkit-nextjs";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { metadata } from "./metadata";
import { ToastContainer } from "react-toastify";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased *:font-serif text-[#212529]`}
      >
        <main className="py-6 px-3 sm:px-6 min-h-screen container mx-auto">
          <Provider store={store}>
            <AuthKitProvider>
              <ToastContainer />
              <Header />
              {children}
              <Footer />
            </AuthKitProvider>
          </Provider>
        </main>
      </body>
    </html>
  );
}
