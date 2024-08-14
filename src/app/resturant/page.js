'use client'
import React, { useState } from 'react'
import Login from '../_components/login/Login';
import SignUp from '../_components/signup/SignUp';
import ResturantHeader from '../_components/resturant_header/ResturantHeader';
import RestaurantFooter from '../_components/resturant_footer/ResturantFooter';

const Resturant = () => {

    const [login, setLogin] = useState(true);
  return (
    <div>
      <ResturantHeader />
        <h1>Login & Signup</h1>
        {login ? <Login /> : <SignUp />}
        <div>
            <button onClick={()=> setLogin(!login)}>
                {login ? "Do not have an Account? Signup" : "Already have an Account? Login"}
            </button>
        </div>
        <RestaurantFooter />
    </div>
  )
}

export default Resturant