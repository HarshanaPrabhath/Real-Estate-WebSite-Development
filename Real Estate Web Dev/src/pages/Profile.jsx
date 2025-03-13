import { getAuth, updateProfile } from "firebase/auth";
import { doc, updateDoc } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router";
import { toast } from "react-toastify";
import { FaHouseUser } from "react-icons/fa";

function Profile() {
  const navigate = useNavigate();
  const auth = getAuth();

  const [changeUserDetail, setChangeUserDetail] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });

  // OnChange handler for form inputs
  function onChange(e) {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value, // Fix for incorrect state update
    }));
  }

  // Update state with Firebase user details
  useEffect(() => {
    if (auth.currentUser) {
      setFormData({
        name: auth.currentUser.displayName || "",
        email: auth.currentUser.email || "",
      });
    }
  }, [auth]);

  const { name, email } = formData;

  // Logout function
  function onLogout() {
    auth.signOut();
    navigate("/");
  }

  // Submit changes to Firebase
  async function onSubmit() {
    try {
      if (auth.currentUser.displayName !== name) {
        // Update Firebase Auth profile
        await updateProfile(auth.currentUser, { displayName: name });
      }

      // Update Firestore user document
      const docRef = doc(db, "users", auth.currentUser.uid); // Ensure `db` is imported
      await updateDoc(docRef, {
        name,
      });

      toast.success("Profile details updated");
    } catch (error) {
      toast.error("Could not update profile details");
    }
  }

  return (
    <>
      <section className="max-w-6xl flex justify-center flex-col items-center mx-auto">
        <h1 className="text-3xl font-bold text-center mt-10">My Profile</h1>
        <div className="w-full md:w-[50%] mt-7 px-4">
          <form>
            {/* Name Input */}
            <input
              type="text"
              id="name"
              value={name}
              disabled={!changeUserDetail}
              onChange={onChange}
              className={`w-full text-2xl text-gray-700 px-3 py-2 rounded bg-white border border-gray-300 ${
                changeUserDetail ? "bg-red-400" : "bg-white"
              }`}
            />

            {/* Email Input */}
            <input
              type="text"
              id="email"
              value={email}
              disabled
              className="w-full text-2xl text-gray-700 px-3 py-2 mt-6 rounded bg-white border border-gray-300"
            />

            <div className="flex justify-between mb-10 mt-2 px-2 whitespace-nowrap">
              <p>
                Do you want to change your name?{" "}
                <span
                  onClick={() => {
                    if (changeUserDetail) onSubmit();
                    setChangeUserDetail((prevState) => !prevState);
                  }}
                  className="text-red-600 mx-2 hover:text-red-900 transition ease-in-out duration-200 cursor-pointer"
                >
                  {changeUserDetail ? "Apply Change" : "Edit"}
                </span>
              </p>
              <button onClick={onLogout}>
                <p className="text-blue-600 hover:text-blue-800 transition ease-in-out cursor-pointer">
                  Sign out
                </p>
              </button>
            </div>
            <button
              type="submit"
              className="flex  text-center w-full bg-blue-500 py-3 px-7 rounded-md justify-center shadow-md hover:bg-blue-800 transition ease-in-out duration-100 hover:shadow-lg"
            >
              <Link className="flex items-center" to="/create-listing">
                <FaHouseUser className="size-6 text-white rounded-full" />{" "}
                <p className="ml-2.5 text-white">Sell or Rent Your Home</p>
              </Link>
            </button>
          </form>
        </div>
      </section>
    </>
  );
}

export default Profile;
