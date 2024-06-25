import React from 'react'
import Link from 'next/link'
import style from './Navbar.module.css'

import ThemeToggle from '../ThemeToggle/ThemeToggle'
import AuthLink from '../AuthLink/AuthLink'
 const Navbar = () => {
  return (
    <div className={style.container}>
      
      <div className={style.logo}>Kcal for Health</div>
      <div className={style.links}>
        
        <Link href="/">Home</Link>
        <Link href="/">Blog</Link>
        <Link href="/">Fitness Calculater</Link>
        <AuthLink />
      </div>
      <div className={style.social}>
      <ThemeToggle />
      @@@@</div>
    </div>
  )
}
export default Navbar;
