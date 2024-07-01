import React from 'react'
import Link from 'next/link'
import style from './Navbar.module.css'

import ThemeToggle from '../ThemeToggle/ThemeToggle'
import AuthLink from '../AuthLink/AuthLink'
 const Navbar = () => {
  return (
    <div className={style.container}>
        <div className={style.social}>
      @@@@</div>
      <div className={style.logo}>Kcal for Health</div>
      <div className={style.links}>
      <ThemeToggle />
        <Link href="/" className={style.link}>Home</Link>
        <Link href="/" className={style.link}>Blog</Link>
        <Link href="/" className={style.link}>Fit-Cal</Link>
        <AuthLink />
      </div>
   
    </div>
  )
}
export default Navbar;
