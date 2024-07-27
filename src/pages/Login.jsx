import { useNavigate } from "react-router-dom";
import Navbar from "../Component/Navbar";
import "./Login.css";

import { useEffect, useState } from "react";
import { useAuth } from "../Contexts/fakeAuthContext";

const Login = () => {
  const [email, setEmail] = useState("jack@example.com");
  const [password, setPassword] = useState("qwerty");
  const { login, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  function handelSubmit(e) {
    e.preventDefault();
    if (email && password) login(email, password);
  }

  useEffect(
    function () {
      if (isAuthenticated) navigate("/app", { replace: true });
    },
    [isAuthenticated, navigate]
  );
  return (
    <main className="login">
      <Navbar />
      <section>
        <form onSubmit={handelSubmit}>
          <div>
            <label htmlFor="email">Email address</label>
            <input
              type="email"
              id="email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
          </div>
          <button className="cta1">LOGIN</button>
        </form>
      </section>
    </main>
  );
};

export default Login;
