import type { ReactNode } from "react";

type HomeLinkProps = {
  to: string;
  className: string;
  children: ReactNode;
};

type HomeProps = {
  renderLink?: (props: HomeLinkProps) => ReactNode;
};

const defaultRenderLink = ({ to, className, children }: HomeLinkProps) => (
  <a className={className} href={to}>
    {children}
  </a>
);

export const Home = ({ renderLink = defaultRenderLink }: HomeProps) => {
  return (
    <>
      <h1>Home</h1>
      <p>Visit the public login page, then enter the protected dashboard.</p>
      <div className="action-row">
        {renderLink({
          className: "button-link",
          to: "/login",
          children: "Login",
        })}
        {renderLink({
          className: "button-link secondary",
          to: "/dashboard",
          children: "Dashboard",
        })}
      </div>
    </>
  );
};
