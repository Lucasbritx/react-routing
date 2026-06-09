type DashboardProps = {
  onLogout?: () => void;
};

export function Dashboard({ onLogout }: DashboardProps) {
  function handleLogout() {
    localStorage.removeItem("mock-auth");
    onLogout?.();
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
