import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "TONDEL | Smartphones, Gadgets & Accessories Sri Lanka",
  description: "Shop smartphones, smart gadgets and accessories from TONDEL. Islandwide delivery, WhatsApp ordering and warranty support in Sri Lanka.",
  icons: {
    icon: "/tondel-logo.png",
    shortcut: "/tondel-logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
