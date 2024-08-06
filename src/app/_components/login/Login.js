import React from 'react';

const Login = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-sm p-6 bg-white rounded-lg shadow-md">
        <h1 className="mb-6 text-2xl font-bold text-center text-gray-700">Login</h1>
        <div className="space-y-4">
          <div>
            <input 
              type="text" 
              placeholder="Enter your Email" 
              className="w-full px-4 py-2 text-gray-700 bg-slate-100 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
            />
          </div>
          <div>
            <input 
              type="password" 
              placeholder="Enter your Password" 
              className="w-full px-4 py-2 text-gray-700 bg-slate-100 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
            />
          </div>
          <div>
            <button className="w-full px-4 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300">
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
