import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router,Routes,Route } from 'react-router'
import './index.css'
import App from './App.jsx'

import Home from './pages/Home.jsx'
import SignIn from './pages/SignIn.jsx'
import SignUp from './pages/SignUp.jsx'
import Profile from './pages/Profile.jsx'
import ForgetPass from './pages/ForgetPass';
import Offers from './pages/Offers';
import Header from './components/Header.jsx'


createRoot(document.getElementById('root')).render(
  <>
   <Router>
   <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/signin" element={<SignIn/>}/>
        <Route path="/signup" element={<SignUp/>}/>
        <Route path="/profile" element={<Profile/>}/>
        <Route path="/offers" element={<Offers/>}/>
        <Route path="/forgetpassword" element={<ForgetPass/>}/>
      </Routes>
   </Router>
  </>
)
