import React from 'react'
import styles from './page.module.css'
import Button from '@/components/button/Button'
import Image from 'next/image'

const Category = ({params}) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.cattitle}>{params.category}</h1>
      <div className={styles.item}>
        <div className={styles.content}>
          <h1 className={styles.title}>Test</h1>
          <p className={styles.desc}>Desc</p>
          <Button url="#" text="See More..." />
        </div>
        <div className={styles.imgcontainer}>
          <Image
          className={styles.img}
          fill={true}
          src=""
          alt=''
          />
        </div>
      </div>
    </div>
  )
}

export default Category