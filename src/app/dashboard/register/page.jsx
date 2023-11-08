"use client"

import React, { useState } from 'react'
import styles from './page.module.css'
import Link from 'next/link'
import { useRouter } from 'next/navigation'


const Register = () => {
  const [error, setError] = useState(false);

  const router = useRouter();

  const handleSubmit = async(e) => {

    e.preventDefault();

    const name = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
  
    try {
      const res = await fetch("/api/auth/register",{
        method: "POST",
        headers:{
          "Content-Tytpe": "application/json"
        },
        body: JSON.stringify({
          name,
          email,
          password,
        }),
      })
      
      res.status === 201 && router.push("/dashboard/login?success=Account has been created")
      
    } catch (error) {
      setError(true);
    }
  }

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input className={styles.input} placeholder='username' type='text' required/>
        <input className={styles.input} placeholder='email' type='email' required/>
        <input className={styles.input} placeholder='password' type='password' required/>
        <button className={styles.button}>Register</button>
      </form>
      {error && "Something went wrong"}
      <Link href="/dashboard/login">Login with an existing account</Link>
    </div>
  )
}

export default Register