import React from 'react'
import style from './CategoryList.module.css';
import Image from "next/image";
import Link from 'next/link';

const CategoryList = () => {
  return (
    <div className={style.container}>
      <h1 className={style.title}>Popular Category</h1>
      <div className={style.categories}>
         <Link href="/blog?cat=style" className={`${style.category} ${style.style}`}>
          <Image 
            className={style.image}
            src='/style.png'
            width={32}
            height={32}
          /> 
          Style
          </Link>
          <Link href="/blog?cat=fashion" className={`${style.category} ${style.fashion}`}>
          <Image 
            className={style.image}
            src='/style.png'
            width={32}
            height={32}
          /> 
          Fashion
          </Link>
          <Link href="/blog?cat=food" className={`${style.category} ${style.food}`}>
          <Image 
            className={style.image}
            src='/style.png'
            width={32}
            height={32}
          /> 
          Food
          </Link>
          <Link href="/blog?cat=travel" className={`${style.category} ${style.travel}`}>
          <Image 
            className={style.image}
            src='/style.png'
            width={32}
            height={32}
          /> 
          travel
          </Link>
          <Link href="/blog?cat=culture" className={`${style.category} ${style.culture}`}>
          <Image 
            className={style.image}
            src='/style.png'
            width={32}
            height={32}
          /> 
          culture
          </Link>
          <Link href="/blog?cat=coding" className={`${style.category} ${style.coding}`}>
          <Image 
            className={style.image}
            src='/style.png'
            width={32}
            height={32}
          /> 
          coding
          </Link>
      </div>
    </div>
  )
}

export default CategoryList