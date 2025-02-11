import { Nunito } from "next/font/google";
import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import Cookie from "@/components/Landing/Cookie/Cookie";
import Providers from "./Provider";
import { Toaster } from "sonner";

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["200", "300", "400", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "SwissPipsAI.",
  description: "Your Trusted Partner in Smart Investments.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={nunito.className}>
      <body className="text-[#ddd]">
        <Providers>
          <Cookie />
          {children}
          <Toaster />
        </Providers>
        <Script
          src="https://cryptorank.io/widget/marquee.js"
          strategy="lazyOnload"
        />
      </body>
    </html>
  );
}
