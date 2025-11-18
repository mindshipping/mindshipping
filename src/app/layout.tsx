import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "../styles/globals.css";

const space = Space_Grotesk({ subsets: ["latin"], variable: "--font-space" });

export const metadata: Metadata = {
  title: {
    default: "MindShipping",
    template: "%s · MindShipping",
  },
  description: "MindShipping — mindful systems and stories for calmer product teams.",
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
