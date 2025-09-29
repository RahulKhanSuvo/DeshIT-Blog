import { Outlet } from "react-router";
import background from "../assets/auth_background.svg";
const AuthLayout = () => {
  return (
    <div
      className="min-h-screen flex items-center justify-center "
      style={{ backgroundImage: `url(${background})` }}
    >
      <Outlet />
    </div>
  );
};

export default AuthLayout;
