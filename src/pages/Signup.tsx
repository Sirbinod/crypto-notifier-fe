import { FC, useEffect, useState } from "react";
import Input from "../componnets/Input";
import { createData } from "../api/request";
import { signUpAPI } from "../api";
import { useNavigate } from "react-router-dom";

const SignUp: FC = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      setMsg("");
    }, 3000);
  }, [msg]);

  const handleSignUp = async () => {
    const newObj = { username, email, password };
    const res = await createData(`${signUpAPI}`, newObj);
    console.log(res);
    if (res.status) {

      navigate("/login", { replace: true });
    }
    setMsg("Bad Request");
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Sign Up</h1>
        <form className="flex flex-col gap-2">
          <Input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
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
            onClick={handleSignUp}
            className="bg-[#003458] text-white p-2 rounded"
          >
            Sign Up
          </button>
        </form>
        {msg && <p className="text-red-600">{msg}</p>}
      </div>
    </div>
  );
};

export default SignUp;
