import React, { useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "./../../../firebaseinit.js";
import authImg from "./../auth.png";
import { NavLink } from "react-router-dom";
export let docId=null;
export default function Login({setDocId}) {
  const [loginData, setLoginData] = useState({ email: "", password: ""});
  
  async function handleSubmit(e) {
    e.preventDefault();
    const querySnapshot = await getDocs(collection(db, "users"));
    const matchingUser = querySnapshot.docs.filter((doc) =>
        doc.data().email === loginData.email &&
        doc.data().password === loginData.password
    );

    if(matchingUser.length>0){
      setDocId(matchingUser[0].id);
    }else{
      console.log("error")
      alert("Incorrect Credentials! Retry Again.");
    }

  }
  return (
    <div className="w-full flex items-center justify-center bg-slate-200 ">
      <div className="bg-gray-100 text-gray-500 my-5 flex rounded-3xl shadow-xl w-[80vw] overflow-hidden">
        <div className="hidden sm:inline-block w-full sm:w-[1/2] ">
          <div className="inline-block w-[1/2] h-full bg-blue-300 py-10 px-10">
            <img
              src={authImg}
              alt="signup"
              className="w-full h-full object-fill"
            />
          </div>
        </div>
        <form
          className="w-full sm:w-[1/2] py-10 px-5 md:px-10"
          onSubmit={handleSubmit}
        >
          <div className="text-center mb-10">
            <h1 className="font-bold text-3xl text-gray-900">LOGIN</h1>
            <p>Enter your information to log in</p>
          </div>
          <div>
            <div className="flex -mx-3">
              <div className="w-full px-3 mb-5">
                <label className="text-xs flex justify-start font-semibold px-1">
                  Email
                </label>
                <div className="flex">
                  <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                    <i className="mdi mdi-email-outline text-gray-400 text-lg"></i>
                  </div>
                  <input
                    type="email"
                    className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-blue-400"
                    placeholder="johnsmith@example.com"
                    value={loginData.email}
                    onChange={(e) =>
                      setLoginData({
                        email: e.target.value,
                        password: loginData.password,
                        
                      })
                    }
                    required
                  />
                </div>
              </div>
            </div>
            <div className="flex -mx-3">
              <div className="w-full px-3 mb-12">
                <label className="text-xs flex justify-start font-semibold px-1">
                  Password
                </label>
                <div className="flex">
                  <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                    <i className="mdi mdi-lock-outline text-gray-400 text-lg"></i>
                  </div>
                  <input
                    type="password"
                    className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-blue-400"
                    placeholder="************"
                    value={loginData.password}
                    onChange={(e) =>
                      setLoginData({
                        email: loginData.email,
                        password: e.target.value,
                        
                      })
                    }
                    required
                  />
                </div>
              </div>
            </div>
            <div className="flex -mx-3">
              <div className="w-full px-3 mb-5">
              
                
                <button className="block w-full max-w-xs mx-auto bg-blue-900 hover:bg-blue-950 focus:bg-indigo-700 text-white rounded-lg px-3 py-3 font-semibold">
                Login
                </button>
                
                
              </div>
            </div>
            <div className="flex -mx-3">
              <div className="w-full px-3 mb-5">
                <NavLink to="/register">
                  <button className="block w-full max-w-xs mx-auto bg-blue-700 hover:bg-blue-800 focus:bg-indigo-700 text-white rounded-lg px-3 py-3 font-semibold">
                    Sign Up
                  </button>
                </NavLink>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
