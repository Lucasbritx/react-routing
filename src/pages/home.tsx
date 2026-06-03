import { Link } from "react-router";

export const Home = () => {
  return (
    <>
      <h1>Home</h1>
      <p>
        Visit the public login page, then enter the protected dashboard.
      </p>
      <div className="action-row">
        <Link className="button-link" to="/login">
          Login
        </Link>
        <Link className="button-link secondary" to="/dashboard">
          Dashboard
        </Link>
      </div>
    </>
  );
};
