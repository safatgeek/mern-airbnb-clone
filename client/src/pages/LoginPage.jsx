import { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import axios from 'axios';


const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [redirect, setRedirect] = useState(false)

  const handleSubmitLogin = async (e) =>{
    e.preventDefault()
    try {
      await axios.post("/login", {email, password})
      setRedirect(true)
    } catch {
      alert("Login failed")
    }
  }

  if (redirect) {
    return <Navigate to={'/'}/>
  }

  return (
    <div className=" flex text-center items-center grow justify-around">
      <div className=" mb-32">
        <h1 className=" text-4xl mb-4 pt-1">Login</h1>
        <form className="flex flex-col max-w-md lg:min-w-[500px] mx-auto" onSubmit={handleSubmitLogin}>
          <input
            type="email"
            placeholder="your@gmail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="primary">Login</button>
          <div className=" text-gray-500">
            Don't have an account yet?{" "}
            <Link to={"/register"} className=" underline text-black">
              Register now
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
