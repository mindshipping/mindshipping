import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "../styles/globals.css";

const space = Space_Grotesk({ subsets: ["latin"], variable: "--font-space" });

export const metadata: Metadata = {
  title: {
    default: "MindShipping — Where Tech Minds Connect & Share",
    template: "%s · MindShipping",
  },
  description: "MindShipping — Where Tech Minds Connect & Share. A platform for tech enthusiasts and experts to publish insights, exchange ideas, and build together.",
  icons: {
    icon: "/mindshippinglogo.png",
  },
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
    },
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${space.variable} bg-[var(--background)] text-white`}>
        {children}
      </body>
    </html>
  );
}
