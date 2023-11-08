import Image from 'next/image'
import styles from './page.module.css'
import Hero from './../../public/hero.png'
import Button from '@/components/button/Button'

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <h1 className={styles.title}>Drink good Coffee ... Everywhere!</h1>
        <p className={styles.dsc}>
          Coffee expectations are never too Muchhh ! Let's find the best tricks to suit your taste ... In Bzh
        </p>
        <Button url="/portfolio" text="See our Works"/>
      </div>
      <div className={styles.item}>
        <Image className={styles.img} src={Hero} alt='hero'/>
      </div>
    </div>
  )
}
