import React from 'react'
import { FcGoogle } from "react-icons/fc";
import { getAuth, GoogleAuthProvider, signInWithPopup, signInWithRedirect } from 'firebase/auth';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router';
import { doc, getDoc, serverTimestamp, setDoc   } from 'firebase/firestore';
import { db } from '../Firebase';

function OAuth() {
    const navigate = useNavigate()
  async function onClickGoogle(){
    try {
      const auth = getAuth();
      const provider = new GoogleAuthProvider()
      const result = await signInWithPopup(auth, provider)
      const user = result.user
      // check for the user exist
      const docRef = doc(db,"users",user.uid)
      const docSnap = await getDoc(docRef)
      if(!docSnap.exists()){
        await setDoc(docRef,{
          name: user.displayName,
          email: user.email,
          phoneNum : user.phoneNumber,
          // timestamp: user.serverTimestamp,
      })
      }
      else{
        toast.success("You are already signed in")
      }
      navigate("/")

    } catch (error) {
      toast.error("could not authorized with google")
      console.log(error)
    }
   
  }
  return (
<button type="button" onClick={onClickGoogle} className=' bg-red-500 rounded text-sm text-white items-center flex justify-center w-full px-2 py-3 4 hover:bg-red-800 active:bg-blue-800'>
    <FcGoogle/> 
    <p className='mx-4 uppercase '>Continue with Google</p>
</button>
)
}

export default OAuth
