import { getAuth } from "firebase/auth";
import React, { use, useState } from "react";
import { useNavigate } from "react-router";

function Profile() {

  const auth = getAuth()
  // const userName = auth.currentUser.displayName
  // const userEmail = auth.currentUser.email
  
  const [formData, setFormData] = useState({
    // name: userName,
    // email: userEmail,
  });

  // Destructuring Data ex: const name = formData.name; const email = formData.email;
  const { name, email } = formData;
  return (
    <>
      <section className="max-w-6xl flex justify-center  flex-col items-center mx-auto">
        <h1 className="text-3xl font-bold text-center mt-10">My Profile</h1>
        <div className="w-full md:w-[50%] mt-7 px-4">
          <form action="">
            {/* Name Input*/}
            <input
              type="text"
              id="name"
              value={name}
              disabled
              className="w-full text-2xl text-gray-700 px-3 py-2 rounded bg-white border border-gray-300 "/>
            
            {/* Email Input */}
              <input
              type="text"
              id="email"
              value={email}
              disabled
              className="w-full text-2xl text-gray-700 px-3 py-2 mt-6 rounded bg-white border border-gray-300"/>
            
            <div className="flex justify-between mb-10 mt-2 px-2 whitespace-nowrap">
              <p>
                Do you want to change your name? 
                <span className="text-red-600 mx-2 hover:text-red-900 transition ease-in-out duration-200 cursor-pointer">Edit</span>
              </p>
              <p className="text-blue-600 hover:text-blue-800 transition ease-in-out cursor-pointer">
                Sign out
              </p>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}

export default Profile;
