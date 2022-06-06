import { useState } from "react";

import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { Signup } from "./pages/Signup";
export default function App() {
  const [user, setUser] = useState("");
  if (user) {
    return <Home />;
  }
  return window.location.pathname === "/signup" ? (
    <Signup signInUser={setUser} />
  ) : (
    <Login signInUser={setUser} />
  );
}
