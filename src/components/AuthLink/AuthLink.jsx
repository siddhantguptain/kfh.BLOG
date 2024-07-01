"use client"
import React, { useState } from 'react'
import style from './AuthLink.module.css';
import Link from 'next/link';
const AuthLink = () => {
  // Navbar Responsive Toggle 
  const [open, setOpen] = useState(false);
  const status = "notAuthenticated";

  return (
    <>
    {
      status === 'notAuthenticated' ? (
        <>
          <Link href="/login" className={style.link}>Login</Link>
        </>
      ) : (
        <>
          <Link href="/write" className={style.link}>Write</Link>
          <Link href="/logout" className={style.link}>Logout</Link>
        </>
      )
    }
    {/* Burger Button for Responsive Navbar */}
    <div className={style.burgerBtn} onClick={() => setOpen(!open)}>
      <div className={style.line}></div>
      <div className={style.line}></div>
      <div className={style.line}></div>
    </div>
    { open && (
      <>
        <div className={style.responsiveMenu} >
        <Link href="/" >Home</Link>
        <Link href="/" >Blog</Link>
        <Link href="/" >Fit-Cal</Link>
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
        </div>
        
      </>
    )}
    </>
  )
}

export default AuthLink