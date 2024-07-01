"use client"
import React, { useContext } from 'react'
import style from './ThemeToggle.module.css'
import Image from 'next/image'
import { ThemeContext } from '@/context/ThemeContext'
const ThemeToggle = () => {
  const {themeToggle,  theme} = useContext(ThemeContext)
  console.log(theme)

  return (
    <div className={style.container} 
         onClick={themeToggle}
         style={
          theme === "dark" ?
          {background:"white"}:
          {background:"#0F172a"}
        }
         >
        <Image src="/moon.png" alt="" height={14} width={14} />
        <div className={style.ball}
          style={
            theme === "dark" ?
            {left:1, background:"#0F172a"}:
            {right:1, background:"white"}
          }
        ></div>
        <Image src="/sun.png" alt="" height={14} width={14} />
    </div>
  )
}

export default ThemeToggle;