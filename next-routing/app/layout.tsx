import type { ReactNode } from "react";
import Link from "next/link";
import "./globals.css";

const linkClassName= 'p-2 rounded-2xl border-2 text-black hover:opacity-5'

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <nav className="flex gap-2 bg-white p-2">
          <Link className={linkClassName} href="/">Home</Link>
          <Link className={linkClassName} href="/login">Login</Link>
          <Link className={linkClassName} href="/dashboard">Dashboard</Link>
        </nav>

        <main>{children}</main>
      </body>
    </html>
  );
}
