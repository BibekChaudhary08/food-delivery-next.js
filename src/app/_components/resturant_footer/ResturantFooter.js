import React from 'react'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faGithub, faWhatsapp } from '@fortawesome/free-brands-svg-icons'

const RestaurantFooter = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="flex space-x-4 mb-4 md:mb-0">
          <a href="https://facebook.com" aria-label="Facebook" className="text-xl">
            <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a href="https://instagram.com" aria-label="Instagram" className="text-xl">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a href="https://github.com" aria-label="GitHub" className="text-xl">
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a href="https://whatsapp.com" aria-label="WhatsApp" className="text-xl">
            <FontAwesomeIcon icon={faWhatsapp} />
          </a>
        </div>
        
        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-6 mb-4 md:mb-0">
          <Link href="/" className="hover:underline">Home</Link>
          <Link href="/" className="hover:underline">Login/Signup</Link>
          <Link href="/" className="hover:underline">Profile</Link>
        </div>
        
        <div className="text-center md:text-left">
          <p>All rights reserved 2024</p>
        </div>
      </div>
    </footer>
  )
}

export default RestaurantFooter
