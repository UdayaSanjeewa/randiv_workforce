import type { Metadata } from "next";
import "./globals.css";
import { Istok_Web } from "next/font/google";

// React Toasts
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const istokWeb = Istok_Web({ subsets: ["latin"], weight: ["400", "700"] });

export const metadata: Metadata = {
  title: "Randiv Work Force",
  description: "Randiv Work Force Application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={istokWeb.className}>
        {children}
        {/* Toast Container */}
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      </body>
    </html>
  );
}
