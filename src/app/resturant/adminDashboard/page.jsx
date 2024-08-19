"use client"
import RestaurantFooter from '@/app/_components/resturant_footer/ResturantFooter'
import RestaurantHeader from '@/app/_components/resturant_header/ResturantHeader'
import { useRouter } from 'next/navigation'
import React, { useEffect } from 'react'

const AdminDashboard = () => {

  const router = useRouter();

  useEffect(() => {
    const localdata = localStorage.getItem("userDetail");
    if(!localdata){
       router.push("/resturant");
    }
    else{
      router.push("/resturant/adminDashboard");
    }
  }, [])

  const handleAddItems = () => {
    router.push("/resturant/addnewfood")
  }
  
  return (
    <div>
      <RestaurantHeader />
      <div>
        <h1>Admin Dashboard</h1>
        <div>
          <h1>Food Items List</h1>
          <button onClick={handleAddItems} className='bg-red-600'>
             Add new Food Items
          </button>
        </div>
      </div>


      <RestaurantFooter />
    </div>
  )
}

export default AdminDashboard