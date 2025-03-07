import React from "react";
import Link from "next/link";
import styles from "@/styles/home/ProductBox.module.css";
import Image from "next/image";

const products = [
  {
    id: 1,
    name: "Product 1",
    image: "/slider1.jpeg",
    price: 29.99,
  },
  {
    id: 2,
    name: "Product 2",
    image: "/slider2.jpg",
    price: 19.99,
  },
  {
    id: 3,
    name: "Product 3",
    image: "/slider3.png",
    price: 39.99,
  },
];

export default function ProductBox() {
  return (
    <div className={styles.productContainer}>
      {products.map((product) => (
        <div key={product.id} className={styles.productItem}>
          <Link href={`/product/${product.id}`}>
            {/* Wrap only the product info in Link */}
            <div className={styles.productInfo}>
              <Image
                src={product.image}
                alt={product.name}
                width={150} // Adjust width
                height={150} // Adjust height
                className={styles.productImage}
              />
              <div className={styles.productDetails}>
                <h3 className={styles.productName}>{product.name}</h3>
                <p className={styles.productPrice}>
                  ${product.price.toFixed(2)}
                </p>
              </div>
            </div>
          </Link>
          <button className={styles.buyButton}>Buy Now</button>
        </div>
      ))}
    </div>
  );
}
