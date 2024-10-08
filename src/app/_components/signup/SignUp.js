'use client'
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

const SignUp = () => {

  const[userSignup, setUserSignup] = useState({
    name: '',
    city: '',
    address: '',
    contact_no: '',
    email: '',
    password: '',
    confirm_password: ''
  })

  const router = useRouter();

  const validateEmail = (email) => {
    // Regular expression for a simple email validation
    const emailRegex = /^[^\s@]+@gmail\.com$/;
    return emailRegex.test(email);
  };

  const isValidate = validateEmail(userSignup.email);

  const handleSignup = async () => {

    if(userSignup.name == '' || userSignup.city == '' || userSignup.address == '' || userSignup.email == '' || userSignup.contact_no == '' || userSignup.password == '' || userSignup.confirm_password == ''){
      alert("Required all the Fields");
      router.push('/resturant');
      return false;
    }

    else if(!isValidate){
      alert('Please enter valid email address');
      return false;
    }
  
    else if(userSignup.password !== userSignup.confirm_password){
      alert("Passwords not matching");
      router.push('/resturant');
      return false;
    }

    const data = await fetch("http://localhost:3000/api/resturant",{
      method: 'POST',
      body: JSON.stringify({
        name: userSignup.name,
        city: userSignup.city,
        address: userSignup.address,
        contact_no: userSignup.contact_no,
        email: userSignup.email,
        password: userSignup.password
      })
    });
    const response = await data.json();

    if(response.success){
      alert("Signup Successfull. Go to Login");
      setUserSignup({
        name: '',
        city: '',
        address: '',
        contact_no: '',
        email: '',
        password: '',
        confirm_password: ''
      });
      const { result } = response;
      delete result.password;
      localStorage.setItem('userDetail', JSON.stringify(result));
      router.push('/resturant');
    }
    else{
      alert("Signup UnSuccessfull");
    }
    console.log(response);
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-md">
        <h1 className="mb-6 text-2xl font-bold text-center text-gray-700">Sign Up</h1>
        <div className="space-y-4">
          <div>
            <input 
              type="text" 
              placeholder="Enter Restaurant Name" 
              value={userSignup.name}
              onChange={(e)=> setUserSignup({
                ...userSignup,
                name: e.target.value
              })}
              className="w-full px-4 py-2 text-gray-700 bg-slate-100 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
            />
          </div>
          <div>
            <input 
              type="text" 
              placeholder="Enter City"
              value={userSignup.city}
              onChange={(e)=> setUserSignup({
                ...userSignup,
                city: e.target.value
              })} 
              className="w-full px-4 py-2 text-gray-700 bg-slate-100 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
            />
          </div>
          <div>
            <input 
              type="text" 
              placeholder="Enter Address" 
              value={userSignup.address}
              onChange={(e)=> setUserSignup({
                ...userSignup,
                address: e.target.value
              })}
              className="w-full px-4 py-2 text-gray-700 bg-slate-100 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
            />
          </div>
          <div>
            <input 
              type="text" 
              placeholder="Enter Contact No." 
              value={userSignup.contact_no}
              onChange={(e)=> setUserSignup({
                ...userSignup,
                contact_no: e.target.value
              })}
              className="w-full px-4 py-2 text-gray-700 bg-slate-100 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
            />
          </div>
          <div>
            <input 
              type="email" 
              placeholder="Enter your Email" 
              value={userSignup.email}
              onChange={(e)=> setUserSignup({
                ...userSignup,
                email: e.target.value
              })}
              className="w-full px-4 py-2 text-gray-700 bg-slate-100 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
            />
          </div>
          <div>
            <input 
              type="password" 
              placeholder="Enter Password" 
              value={userSignup.password}
              onChange={(e)=> setUserSignup({
                ...userSignup,
                password: e.target.value
              })}
              className="w-full px-4 py-2 text-gray-700 bg-slate-100 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
            />
          </div>
          <div>
            <input 
              type="password" 
              placeholder="Confirm Password" 
              value={userSignup.confirm_password}
              onChange={(e)=> setUserSignup({
                ...userSignup,
                confirm_password: e.target.value
              })}
              className="w-full px-4 py-2 text-gray-700 bg-slate-100 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
            />
          </div>
          <div>
            <button className="w-full px-4 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
             onClick={handleSignup}>
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
