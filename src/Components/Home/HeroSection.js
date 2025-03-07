"use client";
import React from "react";
import Container from "../Container";
import styles from "@/styles/home/Hero.module.css";
import Slider from "./Slider";

export default function HeroSection() {
  return (
    <Container>
      <section className={styles.hero}>
        <div className={styles.content}>
          {/* Left Side: Text Section */}
          <div className={`${styles.textSection} text-gray-700`}>
            <h1>
              One Stop Solution <span className="text-pink-500">E-Store</span>
            </h1>
            <p>Discover the latest headphones, earphones, mobiles, tablets, etc.</p>
            <p>Exclusive Deals for you!</p>
            <button className={styles.ctaButton}>SHOP NOW</button>
          </div>

          {/* Right Side: Slider */}
          <div className={styles.sliderWrapper}>
            <Slider />
          </div>
        </div>
      </section>
    </Container>
  );
}
