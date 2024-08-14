import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const RestaurantHeader = () => {
  return (
    <header className="bg-gray-800 text-white py-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <Image src="/header-logo/header-logo.jpg" height={50} width={50} alt="Restaurant Logo"/>
          <span className="text-xl font-bold">Bibek Resturant</span>
        </div>
        <nav className="space-x-6">
          <Link href="/" className="hover:underline">Home</Link>
          <Link href="/" className="hover:underline">Login/Signup</Link>
          <Link href="/" className="hover:underline">Profile</Link>
        </nav>
      </div>
    </header>
  )
}

export default RestaurantHeader
