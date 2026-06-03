import { useNavigate } from "react-router";

export function Dashboard() {
  const navigate = useNavigate();

  function handleLogout() {
    localStorage.removeItem("mock-auth");
    navigate("/login", { replace: true });
  }

  return (
    <main>
      <div>
        <p>Protected route</p>
        <h1>Dashboard</h1>
      </div>
      <button type="button" className="secondary-button" onClick={handleLogout}>
        Log out
      </button>
    </main>
  );
}
