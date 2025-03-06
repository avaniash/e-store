import React from 'react'
import Slider from './Slider';
// import Container from './Container';
import styles from '@/styles/home/Hero.module.css';
export default function HeroSection() {
  return (
    <div>
       <Container >
        <section className={styles.hero}>
          <div className={`${styles.textSection} text-gray-700`}>
            <h1>One Stop Solutuon <span className='text-pink-500'>E-Store</span></h1>
            <p>Discover the latest headphones, earphones, mobiles, tablets etc.</p>
            <p>Exclusive Details for you!</p>
            <button className={styles.ctaButton}>sHOP NOW</button>
          </div>
        </section>
       </Container>
    </div>
  )
}
