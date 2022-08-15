import { LockClosedIcon, TerminalIcon } from "@heroicons/react/solid";
import Link from "next/link";
import { useState } from "react";
import Header from "../components/Header";
import supabase from "../supabase.config";

const signUp = () => {
  const [mail, setMail] = useState("");
  const [pass, setPass] = useState("");

  const signUp = async () => {
    const { user, session, error } = await supabase.auth.signUp({
      email: mail,
      password: pass,
    });

    error ? console.log(error) : console.log(user);
    alert("Check your email to verify your account");
  };

  return (
    <div>
      <div className="flex flex-col items-center justify-center mt-20">
        {/* Heading */}
        <div className="text-center space-y-2">
          <TerminalIcon className="w-16 mx-auto text-cwe-green" />
          <h1 className="font-bold text-cwe-black text-[2.8rem]">Sign Up</h1>
          <p className="text-gray-500 font-light">
            Already have an account{" "}
            <Link href="/signIn">
              <span className="text-cwe-green font-semibold cursor-pointer">
                {" "}
                Sign In
              </span>
            </Link>
          </p>
        </div>

        {/* Form */}
        <div className="rounded-xl shadow w-[30rem] p-6 m-4 flex flex-col">
          {/* Normal sign up */}
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="flex flex-col space-y-2"></div>
            <div className="flex flex-col space-y-2">
              <label className="text-gray-800">Email</label>
              <input
                type="email"
                placeholder="example@something.com"
                className="rounded-lg border-2 border-gray-400 focus:outline-none p-2 shadow-sm ring-0 ring-cwe-green focus:ring outline-none focus:border-0"
                onChange={(e) => setMail(e.target.value)}
              />
            </div>
            <div className="flex flex-col space-y-2">
              <label className="text-gray-800">Password</label>
              <input
                type="password"
                placeholder="Jhon Doe"
                className="rounded-lg border-2 border-gray-400 focus:outline-none p-2 shadow-sm ring-0 ring-cwe-green focus:ring outline-none focus:border-0"
                minLength={6}
                onChange={(e) => setPass(e.target.value)}
              />
            </div>
            <div className="space-x-3 flex items-center">
              <input
                type="checkbox"
                className="w-4 h-4 rounded border-2 border-gray-400"
              />
              <label className="text-gray-800">Remember Me</label>
            </div>
            <button
              className="px-2 py-2 bg-gradient-to-r from-[#00BFA6] to-[#15a99d] text-cwe-white font-semibold rounded-lg w-full flex items-center justify-center"
              type="submit"
              onClick={signUp}
            >
              <LockClosedIcon className="w-5 h-5 text-teal-100 mr-1" />
              Sign up
            </button>
          </form>

          {/* divider */}
          <div className="relative flex py-5 items-center">
            <div className="flex-grow border-t border-gray-400"></div>
            <span className="flex-shrink mx-2 text-gray-500">
              Or continue with
            </span>
            <div className="flex-grow border-t border-gray-400"></div>
          </div>

          {/* Optional providers */}
          <div className="flex w-full justify-center space-x-4">
            <div className="p-2 shadow border-2 rounded-lg w-full cursor-pointer">
              <img
                src="https://cdn-icons-png.flaticon.com/512/104/104093.png"
                alt=""
                className="w-7 mx-auto"
              />
            </div>

            <div className="p-2 shadow border-2 rounded-lg w-full cursor-pointer">
              <img
                src="https://cdn-icons-png.flaticon.com/512/733/733609.png"
                alt=""
                className="w-7 mx-auto"
              />
            </div>

            <div className="p-2 shadow border-2 rounded-lg w-full cursor-pointer">
              <img
                src="https://cdn-icons-png.flaticon.com/512/733/733635.png"
                alt=""
                className="w-7 mx-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default signUp;
