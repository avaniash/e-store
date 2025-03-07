"use client";
import React, { useState, useEffect } from "react";
import styles from "@/styles/header.module.css";

const images = ["/slider1.jpeg", "/slider2.jpg", "/slider3.png"];

export default function Slider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, [currentIndex]);

  return (
    <div className={styles.imageSection}>
      <div
        className={styles.slider}
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((img, index) => (
          <img key={index} src={img} alt={`Slide ${index + 1}`} className={styles.slideImage} />
        ))}
      </div>
    </div>
  );
}
