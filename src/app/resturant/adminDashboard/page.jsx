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
  
  return (
    <div>
      <RestaurantHeader />
      <h1>Admin Dashboard</h1>
      <RestaurantFooter />
    </div>
  )
}

export default AdminDashboard