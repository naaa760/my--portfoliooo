import type { Metadata } from "next";
import { Inter, Dancing_Script } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const dancingScript = Dancing_Script({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-dancing-script",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Neha Prasad - Portfolio",
  description: "Frontend Developer Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${dancingScript.variable}`}>
        {children}
      </body>
    </html>
  );
}
