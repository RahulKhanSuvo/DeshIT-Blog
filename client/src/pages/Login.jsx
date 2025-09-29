import logo from "../assets/brand_logo.svg";
const Login = () => {
  return (
    <div>
      <div className="bg-white min-w-[440px] p-12 rounded-lg shadow-lg flex flex-col items-center gap-4">
        <img src={logo} alt="" />
        <p>Welcome Newsx, Please Log In</p>
        <form className="w-full flex flex-col gap-6 mt-4">
          <div className="flex flex-col gap-2 w-full ">
            <label htmlFor="email">Email</label>
            <input
              placeholder="abc@example.com"
              name="email"
              type="email"
              className="h-11 bg-[#E3E3E3] px-5 py-6 border-none rounded-lg focus:border-none outline-none text-"
            />
          </div>
          <div className="flex flex-col gap-2 w-full ">
            <label htmlFor="password">Password</label>
            <input
              placeholder="••••••••"
              name="password"
              type="password"
              className="h-11 bg-[#E3E3E3] px-5 py-6 border-none rounded-lg 
             focus:outline-none text-gray-800 placeholder-gray-500"
            />
          </div>
          <button className="bg-[#6200EE] w-full rounded-xl py-3 text-white">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
