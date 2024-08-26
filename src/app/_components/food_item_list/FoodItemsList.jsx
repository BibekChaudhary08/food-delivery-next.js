'use client'
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';

const FoodItemsList = () => {
  const [foodItemList, setFoodItemList] = useState([]);

  const router = useRouter();

  // edit food item
  const handleEditItem = ({updateFood_id}) => {
    router.push(`/resturant/${updateFood_id}`);
  }

  const userDetail = JSON.parse(localStorage.getItem('userDetail'));
  const resto_id = userDetail._id;

  const food_items = async () => {
    const data = await fetch(`http://localhost:3000/api/resturant/food_items/${resto_id}`);
    const response = await data.json();
    if (response.success) {
      setFoodItemList(response.data);
      localStorage.setItem('foodItems', JSON.stringify(response.data));
    } else {
      alert('Food items not found');
    }
  };

  useEffect(() => {
    food_items();
  }, []);

  const deleteFoodItem = async ({ deletefood_id }) => { 
    const data = await fetch(`http://localhost:3000/api/resturant/food_items/${deletefood_id}`, {
      method: 'DELETE'
    });
    const response = await data.json();
    if (response.success) {
      alert('Food item deleted successfully');
      const updatedFoodItemList = foodItemList.filter((item) => item._id !== deletefood_id);
      setFoodItemList(updatedFoodItemList);
    } else {
      alert('Error while deleting food item');
    }
  }

  return (
    <div className="max-w-6xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">Food Items List</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th className="py-2 px-4 border-b text-left">SN</th>
              <th className="py-2 px-4 border-b text-left">Name</th>
              <th className="py-2 px-4 border-b text-left">Price</th>
              <th className="py-2 px-4 border-b text-left">Description</th>
              <th className="py-2 px-4 border-b text-left">Image</th>
              <th className="py-2 px-4 border-b text-left">Operation</th>
            </tr>
          </thead>
          <tbody>
            {foodItemList.map((item, index) => (
              <tr key={item._id} className="border-b">
                <td className="py-2 px-4">{index + 1}</td>
                <td className="py-2 px-4">{item.name}</td>
                <td className="py-2 px-4">Rs.{item.price}</td>
                <td className="py-2 px-4">{item.description}</td>
                <td className="py-2 px-4">
                  <img src={item.image} alt={item.name} className="w-16 h-16 object-cover" />
                </td>
                <td className="pt-6 px-4 flex justify-center items-center space-x-2">
                  <button 
                    onClick={ ()=> handleEditItem({updateFood_id: item._id})}
                    className="bg-blue-500 text-white py-1 px-3 rounded hover:bg-blue-600"
                  >
                    Edit
                  </button>
                  <button 
                    className="bg-red-500 text-white py-1 px-3 rounded hover:bg-red-600"
                    onClick={ ()=> deleteFoodItem({ deletefood_id: item._id })}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default FoodItemsList;
