import { FC, useEffect, useState } from "react";
import Input from "../componnets/Input";
import { useNavigate } from "react-router-dom";
import { createData } from "../api/request";
import { loginAPI } from "../api";
import Cookies from "js-cookie";

const Login: FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      setMsg("");
    }, 3000);
  }, [msg]);

  const handleLogin = async () => {
    const newObj = { email, password };
    const res = await createData(`${loginAPI}`, newObj);
    if (res.status) {
      const newObj = { isLogged: true, token: res?.data?.token };

      Cookies.set("authentication", JSON.stringify(newObj));
      navigate("/", { replace: true });
    }
    setMsg("Bad Request");
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Login</h1>
        <form className="flex flex-col gap-2">
          <Input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            type="button"
            onClick={handleLogin}
            className="bg-[#003458] text-white p-2 rounded"
          >
            Login
          </button>
        </form>
        {msg && <p className="text-red-600">{msg}</p>}
      </div>
    </div>
  );
};

export default Login;
