import React from 'react'
import styles from './footer.module.css';
import Image from 'next/image';

const Footer = () => {
  
  return (
    <div className={styles.container}>
      <div>©2023 Breizh Coffee Blog. All rights reserved.</div>
      <div className={styles.social}>
        <Image src="/1.png" alt='Breizh Blog facebook' className={styles.icon} width={20} height={20}/>
        <Image src="/2.png" alt='Breizh Blog instagram' className={styles.icon} width={20} height={20}/>
        <Image src="/3.png" alt='Breizh Blog twitter' className={styles.icon} width={20} height={20}/>
        <Image src="/4.png" alt='Breizh Blog youtube' className={styles.icon} width={20} height={20}/>
      </div>
    </div>
  )
}

export default Footer