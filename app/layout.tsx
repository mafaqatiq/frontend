import type { Metadata } from "next"; 
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import "../styles/fonts.css"; 
import { ThemeProvider } from "@/components/theme-provider"; 
 
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Muhammad Afaq | Portfolio",
  description: "Check out my work, projects, and experience.",
  openGraph: {
    title: "Muhammad Afaq | Portfolio",
    description: "Check out my work, projects, and experience.",
    url: "https://muhammad-afaq.vercel.app/",
    type: "website",
    images: [
      {
        url: "https://muhammad-afaq.vercel.app/preview.PNG", // Full URL to your image
        width: 1200,
        height: 630,
        alt: "Muhammad Afaq Portfolio Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Muhammad Afaq | Portfolio",
    description: "Check out my work, projects, and experience.",
    images: ["https://muhammad-afaq.vercel.app/preview.jpg"], // Full URL for Twitter preview
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
