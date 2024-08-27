"use client"
import FoodItemsList from '@/app/_components/food_item_list/FoodItemsList';
import RestaurantFooter from '@/app/_components/resturant_footer/ResturantFooter';
import RestaurantHeader from '@/app/_components/resturant_header/ResturantHeader';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';

const AdminDashboard = () => {
  const router = useRouter();

  const[adminData, setAdminData] = useState({
    name: '',
    email: '',
    contact_no: ''
  })

  useEffect(() => {
    const localdata = localStorage.getItem("userDetail");
    if (!localdata) {
      router.push("/resturant");
    } else {
      const parsedData = JSON.parse(localdata);
      setAdminData(parsedData);
      router.push("/resturant/adminDashboard");
    }
  }, []);

  const handleAddItems = () => {
    router.push("/resturant/addnewfood");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 via-gray-200 to-gray-300">
      <RestaurantHeader />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-5xl font-extrabold text-gray-800 mb-8 text-center tracking-wide">
          Admin Dashboard
        </h1>

        {/* Fancy Static Admin Details */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8 border-l-4 border-red-600">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Welcome, {adminData.name}</h2>
          <div className="space-y-2">
            <p className="text-lg text-gray-700">
              <span className="font-semibold text-gray-800">Email ID:</span> 
              <span className="ml-2 text-gray-900">{adminData.email}</span>
            </p>
            <p className="text-lg text-gray-700">
              <span className="font-semibold text-gray-800">Contact Number:</span> 
              <span className="ml-2 text-gray-900">{adminData.contact_no}</span>
            </p>
          </div>
        </div>

        <div className="flex justify-between items-center mb-8">
          <button 
            onClick={handleAddItems} 
            className="bg-gradient-to-r from-red-500 to-red-700 hover:from-red-600 hover:to-red-800 text-white font-bold py-3 px-6 rounded-lg shadow-lg transition-transform transform hover:scale-105"
          >
            Add New Food Item
          </button>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-8">
          <FoodItemsList />
        </div>
      </div>
      <RestaurantFooter />
    </div>
  );
};

export default AdminDashboard;
