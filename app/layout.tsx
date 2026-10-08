import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "Enuvora | Web shop",
    template: "%s | Enuvora",
  },
  keywords: ["Enuvora", "online shopping", "ecommerce", "online store", "shop", "products"],
  description:
    "Enuvora is a modern online marketplace where quality, variety, and convenience come together. Discover products you love, shop effortlessly, and enjoy a simple, reliable shopping experience—all in one place.",
  openGraph: {
    type: "website",
    locale: "en_US",
    //url: "https://enuvora.com",
    siteName: "Enuvora",
    title: "Enuvora — Shop Smarter, Live Better",
    description:
      "Enuvora is a modern online marketplace where quality, variety, and convenience come together. Discover products you love, shop effortlessly, and enjoy a simple, reliable shopping experience—all in one place.",
    //images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Enuvora — Online Shopping" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Enuvora — Shop Smarter, Live Better",
    description:
      "Enuvora is a modern online marketplace where quality, variety, and convenience come together. Discover products you love, shop effortlessly, and enjoy a simple, reliable shopping experience—all in one place.",
    //images: ["/og-image.jpg"],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang='en' className={`${manrope.variable} h-full antialiased`}>
      <body className='min-h-full flex flex-col'>{children}</body>
    </html>
  );
}
