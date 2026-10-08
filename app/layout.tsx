import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
});

export const metadata: Metadata = {
  title: "Enuvora | Web shop",
  description:
    "Enuvora is a modern online marketplace where quality, variety, and convenience come together. Discover products you love, shop effortlessly, and enjoy a simple, reliable shopping experience—all in one place.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang='en' className={`${poppins.variable} h-full antialiased`}>
      <body className='min-h-full flex flex-col'>{children}</body>
    </html>
  );
}
