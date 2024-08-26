'use client'
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';

const EditFoodItem = ({params}) => {

    let { editfood_id } = params;
    const router = useRouter();

    const [editFoodItem, setEditFoodItem] = useState({
        name: '',
        price: '',
        image: '',
        description: ''
    })

    const foodDetail = async () => {
        const data = await fetch(`http://localhost:3000/api/resturant/food_items/editfood/${editfood_id}`);
        const response = await data.json();
        if(response.success){
          const result = response.data;
          setEditFoodItem(result);
        }
    }

    useEffect(() => {
      foodDetail();
    }, [])

    const handleEditFood = async () => {
        const data = await fetch(`http://localhost:3000/api/resturant/food_items/editfood/${editfood_id}`,{
            method: 'PUT',
            body:JSON.stringify({
                name: editFoodItem.name,
                price: editFoodItem.price,
                image: editFoodItem.image,
                description: editFoodItem.description
            })
        });
        const response = await data.json();
        if(response.success){
            alert('Food item Edit Successfully');
            setEditFoodItem({
                name: '',
                price: '',
                image: '',
                description: ''
            })
            router.push('/resturant/adminDashboard')
        }
        else{
            alert('Failed to Edit Food Item');
        }
    }
    

    return (
        <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">Edit Food Item</h2>
            <form>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="foodName">Food Name</label>
                    <input
                        type="text"
                        value={editFoodItem.name}
                        onChange={(e) => setEditFoodItem({
                            ...editFoodItem,
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
                        value={editFoodItem.price}
                        onChange={(e) => setEditFoodItem({
                            ...editFoodItem,
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
                        value={editFoodItem.image}
                        onChange={(e) => setEditFoodItem({
                            ...editFoodItem,
                            image: e.target.value
                        })}
                        placeholder="Enter Image URL"
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">Description</label>
                    <textarea
                        value={editFoodItem.description}
                        onChange={(e) => setEditFoodItem({
                            ...editFoodItem,
                            description: e.target.value
                        })}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        placeholder="Enter description"
                        rows="4"
                    />
                </div>

                <div className="flex items-center justify-between">
                    <button
                        onClick={() => handleEditFood({id: editfood_id})}
                        type="button"
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    >
                        Update Food Item
                    </button>
                </div>
            </form>
        </div>
    );
};

export default EditFoodItem;
