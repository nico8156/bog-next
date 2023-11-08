import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'
import Button from '@/components/button/Button'

const Contact = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Let's keep in Touch</h1>
      <div className={styles.content}>
        <div className={styles.imgcontainer}>
          <Image 
          src="/contact.png"
          alt='contact'
          fill={true}
          className={styles.img}
          />
        </div>
        <form className={styles.form}>
          <input className={styles.input} type='text' placeholder='name'></input>
          <input className={styles.input} type='email' placeholder='email'></input>
          <textarea className={styles.textarea} placeholder='message' cols="30" rows="10"></textarea>
          <Button url="#" text="Send" />
        </form>
      </div>
    </div>
  )
}

export default Contact