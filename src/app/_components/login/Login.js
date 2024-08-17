'use client'
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

const Login = () => {

  const[userSignup, setUserSignup] = useState({
    email: '',
    password: '',
  })

  const router = useRouter();

  const validateEmail = (email) => {
    // Regular expression for a simple email validation
    const emailRegex = /^[^\s@]+@gmail\.com$/;
    return emailRegex.test(email);
  };

  const isValidate = validateEmail(userSignup.email);

  const handleLogin = async () => {

    if(userSignup.email == '' || userSignup.password == ''){
      alert("Required all the Fields");
      router.push('/resturant');
      return false;
    }

    else if(!isValidate){
      alert('Please enter valid email address');
      return false;
    }

    else{
      console.log("login Successfull");
      
    }

  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-sm p-6 bg-white rounded-lg shadow-md">
        <h1 className="mb-6 text-2xl font-bold text-center text-gray-700">Login</h1>
        <div className="space-y-4">
          <div>
            <input 
              type="email"
              value={userSignup.email} 
              onChange={(e) => setUserSignup({
                ...userSignup,
                email: e.target.value
              })}
              placeholder="Enter your Email" 
              className="w-full px-4 py-2 text-gray-700 bg-slate-100 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
            />
          </div>
          <div>
            <input 
              type="password" 
              value={userSignup.password}
              onChange={(e) => setUserSignup({
                ...userSignup,
                password: e.target.value
              })}
              placeholder="Enter your Password" 
              className="w-full px-4 py-2 text-gray-700 bg-slate-100 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
            />
          </div>
          <div>
            <button className="w-full px-4 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
             onClick={handleLogin}>
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
