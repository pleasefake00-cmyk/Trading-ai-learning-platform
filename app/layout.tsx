import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { CurrencyProvider } from "@/lib/context/CurrencyContext";
import ReactQueryProvider from "@/lib/context/ReactQueryProvider";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "TradeMaster Academy",
  description: "Trade Smarter. Learn Faster. Powered by AI.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} font-sans min-h-screen flex flex-col antialiased`}
      >
        <ReactQueryProvider>
          <CurrencyProvider>
            {children}
          </CurrencyProvider>
        </ReactQueryProvider>
      </body>
    </html>
  );
}
