import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "./globals.css";
import Link from "next/link";
import "./globals.css";
import { title } from "process";

export const metadata: Metadata = {
  title: "KOPP Foundation",
  description: "Official site of the KOPP Foundation",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <nav style={{ padding: "1rem", borderBottom: "1px solid #ddd" }}>
          <Link href="/" style={{ marginRight: "1rem" }}>Home</Link>
          <Link href="/about" style={{ marginRight: "1rem" }}>About</Link>
          <Link href="/join" style={{ marginRight: "1rem" }}>Join</Link>
          <Link href="/contact">Contact</Link>
        </nav>
        <main style={{ padding: "2rem" }}>{children}</main>
<footer style={{ padding: "1rem", marginTop: "2rem", borderTop: "1px solid #ddd" }}>
  © {new Date().getFullYear()} KOPP Foundation
</footer>
      </body>
    </html>
  );
}
