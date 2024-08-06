import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const ResturantHeader = () => {
  return (
    <div>
        <div>
            <Image src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQymoRQCIGmwRWVWmFRDKTKMXkEBSngmwZm7G8Co8FWj-fKqlyTvWTdWyGhd360CH4fs9Q&usqp=CAU'} height={50} width={50}/>
        </div>
        <div>
            <Link href={'/'}>Home</Link>
            <Link href={'/'}>Login/Signup</Link>
            <Link href={'/'}>Profile</Link>
        </div>
    </div>
  )
}

export default ResturantHeader