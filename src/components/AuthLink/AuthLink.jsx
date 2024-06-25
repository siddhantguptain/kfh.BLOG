import React from 'react'
import style from './AuthLink.module.css';
import Link from 'next/link';
const AuthLink = () => {
  const status = "notAuthenticated";

  return (
    <>
    {
      status === 'notAuthenticated' ? (
        <>
          <Link href="/login">Login</Link>
        </>
      ) : (
        <>
          <Link href="/write">Write</Link>
          <Link href="/logout">Logout</Link>
        </>
      )
    }
    
    </>
  )
}

export default AuthLink