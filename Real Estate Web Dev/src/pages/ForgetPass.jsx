import React, { useState } from "react";
import { Link } from "react-router-dom";
import OAuth from "../components/OAuth";
import SignIn from './SignIn';
import { TbReceiptYuan } from "react-icons/tb";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import { toast } from "react-toastify";

function ForgetPassword() {
  const [email, setEmail] = useState("");

  function onChange(e) {
    setEmail(e.target.value);
  }

  async function onClickReset(e){
    e.preventDefault()
    try {
      const auth = getAuth()
      // await sendPasswordResetEmail(auth,email)
      // toast.success("Email was Sent")
     
    } catch (error) {
      toast.error("Not Found Account")
    }
  }

  return (
    <section>
      <h1 className="text-center text-3xl font-bold mt-6">Reset Your Password</h1>

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


            {/* forget password section */}
            <div className="flex justify-between">
              <div>
                Don't have an account?{" "}
                <Link
                  className="text-red-500 hover:text-blue-600 cursor-pointer transition duration-200"
                  to="/signup"
                >
                  Register
                </Link>
              </div>
              <div>
                <Link
                  className="text-blue-600 hover:text-blue-600 cursor-pointer transition duration-200"
                  to="/signin"
                >
                  Sign In with Password
                </Link>
              </div>
            </div>
            {/* submit button */}
            <button
              type="submit"
              onClick={onClickReset}
              className="w-full bg-blue-500 text-white p-3 rounded mt-4 hover:bg-blue-600 active:bg-blue-800"
            >
             Send Reset Password
            </button>

            <div className="flex items-center my-4 before:border-t before:flex-1 after:border-t after:flex-1">
              <p className="mx-4">OR</p>
            </div>
            <OAuth />
          </form>
        </div>
      </div>
    </section>
  );
}

export default ForgetPassword;
