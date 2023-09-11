import { Link } from 'react-router-dom';

const LoginPage = () => {

  return (
    <div className=" flex text-center items-center grow justify-around">
      <div className=" mb-32">
        <h1 className=" text-4xl mb-4 pt-1">Login</h1>
        <form className="flex flex-col max-w-md lg:min-w-[500px] mx-auto">
          <input type="email" placeholder="your@gmail.com" />
          <input type="password" placeholder="password" />
          <button className="primary">Login</button>
          <div className=' text-gray-500'>
            Don't have an account yet? <Link to={'/register'} className=' underline text-black'>Register now</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
