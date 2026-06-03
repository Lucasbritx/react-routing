import { useState, type FormEvent } from "react";
import { useNavigate } from "react-router";

const MOCK_EMAIL = "admin@example.com";
const MOCK_PASSWORD = "password123";

export function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState(MOCK_EMAIL);
  const [password, setPassword] = useState(MOCK_PASSWORD);
  const [error, setError] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (email === MOCK_EMAIL && password === MOCK_PASSWORD) {
      localStorage.setItem("mock-auth", "true");
      navigate("/dashboard", { replace: true });
      return;
    }

    setError("Invalid mock credentials.");
  }

  return (
    <main>
        <p>Public route</p>
        <h1>Login</h1>

        <form className="login-form" onSubmit={handleSubmit}>
          <label>
            Email
            <input
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              autoComplete="email"
            />
          </label>

          <label>
            Password
            <input
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
          </label>

          {error ? <p>{error}</p> : null}

          <button type="submit">Sign in</button>
        </form>

        <div>
          <span>Email: {MOCK_EMAIL}</span>
          <span>Password: {MOCK_PASSWORD}</span>
        </div>
    </main>
  );
}
