/* eslint-disable @next/next/no-img-element */
import React from "react";
import { FcGoogle } from "react-icons/fc";
import { useStateValue } from "../../context/StateProvider";
import { toast } from "react-toastify";
const Login = () => {
  const [{ }, dispatch] = useStateValue();
  const [userType, setUserType] = React.useState("organizer");
  const [credentials, setCredentials] = React.useState({
    email: "",
    password: "",
    type: userType,
  });

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (credentials.email === "" || credentials.password === "") return toast.error("Please fill all fields");
    e.preventDefault();
    dispatch({
      type: "SET_USER",
      user: credentials,
    });

    toast.success("Login successful");
  }

  return (
    <div className="w-full h-[100vh] bg-white flex items-center justify-center">
      <div className="w-full px-6 md:w-[30%] h-4/5 flex flex-col gap-y-10 md:gap-y-4">
        {/* LOGO */}
        <div className="w-full  flex flex-col gap-y-5 items-center justify-center">
          <img src="/assets/crown-cast.png" alt="logo" className="w-1/2" />
          <h2 className="font-bold text-xl">Login to your account</h2>
          <p className="text-sm text-gray-500 capitalize">
            Welcome back {userType}!
          </p>
        </div>
        <form className="" method="POST" autoComplete="off" onSubmit={handleLogin}>
          <div className="w-full flex flex-col gap-y-1">
            <label htmlFor="email" className="text-sm text-gray-500">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:border-primary focus:text-primary"
              placeholder="Enter your email"
              value={credentials.email}
              onChange={(e) => setCredentials((prev) => ({ ...prev, email: e.target.value }))}
            />
          </div>
          <div className="w-full flex flex-col gap-y-1 mt-4">
            <label htmlFor="password" className="text-sm text-gray-500">
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:border-primary focus:text-primary"
              placeholder="........."
              value={credentials.password}
              onChange={(e) => setCredentials((prev) => ({ ...prev, password: e.target.value }))}
            />
          </div>
          {/* remember me and forgot password */}
          <div className="w-full flex flex-col gap-y-1 mt-4">
            <div className="w-full flex items-center justify-between">
              <div className="flex items-center gap-x-2">
                <input
                  type="checkbox"
                  name="remember"
                  id="remember"
                  className="w-4 h-4 border border-gray-300 rounded-md focus:outline-none focus:border-primary focus:text-primary"
                />
                <label
                  htmlFor="remember"
                  className="text-sm text-gray-500 cursor-pointer"
                >
                  Remember me
                </label>
              </div>
              <a href="#" className="text-sm text-primary">
                Forgot password?
              </a>
            </div>
          </div>

          <div className="w-full flex flex-col gap-y-3 mt-4">
            <button className="w-full bg-primary text-white rounded-md p-2 ">
              Sign in
            </button>

            <button className="w-full flex items-center justify-center gap-x-3 bg-white border border-gray-300 rounded-md p-2 ">
              <FcGoogle /> Sign in with Google
            </button>
          </div>
        </form>

        {/* footer */}
        <div className="w-full flex flex-col gap-y-3 mt-4">
          <div className="w-full flex items-center justify-center">
            <p className="text-sm text-gray-500 flex items-center justify-center gap-x-2">
              <span>Not an {userType} yet?</span>
              <a
                className="text-primary cursor-pointer font-bold"
                onClick={() =>
                  setUserType((prev) =>
                    prev === "admin" ? "organizer" : "admin"
                  )
                }
              >
                Login as {userType === "admin" ? "organizer" : "admin"}
              </a>
            </p>
          </div>
          <div className="w-full gap-y-4    flex flex-col items-center justify-center">
            <p className="text-sm text-gray-500">
              <span className="text-primary">CrownCast</span> © 2021 | All
              Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
