import type { Metadata } from "next";
import "./globals.css";
import { Istok_Web } from "next/font/google";

const istokWeb = Istok_Web({ subsets: ["latin"] , weight: ["400", "700"]});


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
      <body className={istokWeb.className}>{children}</body>
    </html>
  );
}
