"use client"
import FoodItemsList from '@/app/_components/food_item_list/FoodItemsList';
import RestaurantFooter from '@/app/_components/resturant_footer/ResturantFooter';
import RestaurantHeader from '@/app/_components/resturant_header/ResturantHeader';
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react';

const AdminDashboard = () => {
  const router = useRouter();

  useEffect(() => {
    const localdata = localStorage.getItem("userDetail");
    if (!localdata) {
      router.push("/resturant");
    } else {
      router.push("/resturant/adminDashboard");
    }
  }, []);

  const handleAddItems = () => {
    router.push("/resturant/addnewfood");
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <RestaurantHeader />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-6 text-center">Admin Dashboard</h1>
        <div className="flex justify-between items-center mb-6">
          <button 
            onClick={handleAddItems} 
            className="bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition-colors duration-300"
          >
            Add New Food Item
          </button>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <FoodItemsList />
        </div>
      </div>
      <RestaurantFooter />
    </div>
  );
};

export default AdminDashboard;
