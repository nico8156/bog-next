"use client"

import { signIn, useSession, getProviders } from 'next-auth/react'
import React from 'react'
import { useEffect, useState } from "react";
import styles from './page.module.css'
import { useRouter } from "next/navigation";
import Link from 'next/link';



const Login = () => {
  const session = useSession();
  const router = useRouter();


  if(session.status === "loading") {
    return <p>Loading...</p>
  }
  if(session.status === "authenticated") {
    router?.push("/dashboard")
  }
  const handleSubmit = async(e) => {

    e.preventDefault();

    const email = e.target[0].value;
    const password = e.target[1].value;
  
    signIn("credentials", { email, password })
    console.log("logged with credentials");
  }

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input className={styles.input} placeholder='email' type='email' required/>
        <input className={styles.input} placeholder='password' type='password' required/>
        <button className={styles.button}>Login</button>
      </form>
      <button className={styles.googlebutton}onClick={()=>signIn("google")}>Login with Google</button>
      <Link href="/dashboard/register">Register Here</Link>
    </div>
  )
}

export default Login