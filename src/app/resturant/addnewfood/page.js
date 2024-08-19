'use client'
import React, { useState } from 'react';

const AddNewFood = () => {

    const [addFoodItem, setAddFoodItem] = useState({
        name: '',
        price: '',
        image: '',
        description: ''
    })

    const addNewFood = () => {
        console.log(addFoodItem);
    }

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">Add New Food Item</h2>
      <form>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="foodName">Food Name</label>
          <input
            type="text"
            value={addFoodItem.name}
            onChange={(e)=> setAddFoodItem({
                ...addFoodItem,
                name: e.target.value
            })}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter food name"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="price">Price</label>
          <input
            type="number"
            value={addFoodItem.price}
            onChange={(e)=> setAddFoodItem({
                ...addFoodItem,
                price: e.target.value
            })}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter price"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="image">Image</label>
          <input
            type="text"
            value={addFoodItem.image}
            onChange={(e)=> setAddFoodItem({
                ...addFoodItem,
                image: e.target.value
            })}
            placeholder="Enter Image url"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">Description</label>
          <textarea
            value={addFoodItem.description}
            onChange={(e)=> setAddFoodItem({
                ...addFoodItem,
                description: e.target.value
            })}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter description"
            rows="4"
          />
        </div>

        <div className="flex items-center justify-between">
          <button
            type="button"
            onClick={addNewFood}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Add Food Item
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddNewFood;
