import type { ReactNode } from "react";

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <section>
      <header>
        <h1>Login</h1>
      </header>

      {children}
    </section>
  );
}