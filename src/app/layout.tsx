import type { Metadata } from "next";
import "./globals.css";
import { CartProvider } from "@/context/cart-context";
import { CartDrawer } from "@/components/cart-drawer";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

export const metadata: Metadata = {
  title: "THREADLINE — Style That Reflects Personality",
  description:
    "An independent studio shaping modern everyday uniforms, bespoke tailoring, and wardrobe architecture.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <CartProvider>
          <SiteHeader />
          {children}
          <CartDrawer />
          <SiteFooter />
        </CartProvider>
      </body>
    </html>
  );
}
