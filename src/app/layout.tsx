"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Providers } from "./providers";
import { Inter, Playfair_Display } from "next/font/google";
import "../styles/index.css";

const inter = Inter({ subsets: ["latin"] });
const playfair = Playfair_Display({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <head />

      <body className={`bg-[#FCFCFC] ${inter.className}`}>
        <Providers>
          <div className="isolate flex flex-col min-h-screen">

            <Header />

            {/* CONTENIDO DE LA PAGINA */}
            <main className="flex-grow">
              {children}
            </main>

            {/* FOOTER */}
            <Footer />

          </div>
        </Providers>
      </body>
    </html>
  );
}
