import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios"

const RegisterPage = () => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const registerUSer = (e) => {
    e.preventDefault()
    axios.get("http://localhost:4000/test")
    
  }
  return (
    <div className=" flex text-center items-center grow justify-around">
      <div className=" mb-32">
        <h1 className=" text-4xl mb-4 pt-1">Register</h1>
        <form className="flex flex-col max-w-md lg:min-w-[500px] mx-auto" onSubmit={registerUSer}>
          <input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            placeholder="your@gmail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="primary">Register</button>
          <div className=" text-gray-500">
            Already a member?{" "}
            <Link to={"/login"} className=" underline text-black">
              login
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
