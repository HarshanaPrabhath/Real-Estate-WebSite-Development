import React, { useState } from "react";
import { GoEyeClosed } from "react-icons/go";
import { RxEyeOpen } from "react-icons/rx";
import { Link } from "react-router";
import OAuth from "../components/OAuth";

function SignUp() {
  const [showPass, setShowPass] = useState(false);

  const [formData, setFormData] = useState({
    fullName:"",
    email: "",
    password: "",
  });

  function onChange(e) {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }

  const { fullName,email, password } = formData;

  return (
    <section>
      <h1 className="text-center text-3xl font-bold mt-6">Sign Up</h1>

      <div className="flex justify-center flex-wrap items-center px-6 py-12 max-w-6xl mx-auto">
        <div className="md:w-[67%] lg:w-[50%] mb-6 md:mb-12">
          <img
            className="w-full rounded-2xl"
            src="https://images.unsplash.com/photo-1634224143538-ce0221abf732?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Sign In"
          />
        </div>
        <div className="w-full md:w-[67%] lg:w-[40%] lg:ml-20">
          <form>
            <label htmlFor="email">FullName</label>
            <input
              className="w-full p-2 mb-4 border border-gray-300 rounded"
              type="text"
              id="fullName"
              name="fullName"
              value={fullName}
              onChange={onChange}
              placeholder="Enter your FullName"
            />
            <label htmlFor="email">Email</label>
            <input
              className="w-full p-2 mb-4 border border-gray-300 rounded"
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={onChange}
              placeholder="Enter your email"
            />

            <label htmlFor="password">Password</label>
            <div className="relative">
              <input
                className="w-full p-2 mb-4 border border-gray-300 rounded pr-10"
                type={showPass ? "text" : "password"}
                id="password"
                name="password"
                value={password}
                onChange={onChange}
                placeholder="Enter your password"
              />
              <button
                type="button"
                onClick={() => setShowPass(!showPass)}
                className="absolute right-3 top-3 cursor-pointer"
              >
                {showPass ? <GoEyeClosed size={20} /> : <RxEyeOpen size={20} />}
              </button>
            </div>

            {/* forget password section */}
            <div className="flex justify-between">
              <div>
                Have a Account? <Link className="text-red-500 hover:text-blue-600 cursor-pointer transition duration-200" to="/signin">Sign In</Link> 
              </div>
              <div>
              <Link className="text-blue-600 hover:text-blue-600 cursor-pointer transition duration-200" to="/forget-password">Forget Password</Link>
              </div>
            </div>
            {/* submit button*/}
          <button
              type="submit"
              className="w-full bg-blue-500 text-white p-3 rounded mt-4 hover:bg-blue-600 active:bg-blue-800"
            >
              Sign In
            </button>

            <div className="flex items-center my-4 before:border-t before:flex-1 after:border-t after:flex-1">
            <p className="mx-4">OR</p>
            </div>
            <OAuth/>
          </form>
        </div>
      </div>
    </section>
  );
}

export default SignUp;
