"use client";
import React, { useState, useEffect } from "react";
import Container from "../Container";
import Styles from "@/styles/home/Recent.module.css";
import ProductBox from "../ProductBox";

export default function RecentlyAdded() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products/?limit=5"); // Update URL based on your API endpoint
        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    getProducts();
  }, []);

  return (
    <div className={`${Styles.recentSection} py-10 bg-gray-100`}>
      <Container>
        <h1 className={`${Styles.textcenter}`}>
          Recently Added Products
        </h1>

        {/* Render the ProductBox component */}
        <ProductBox products={products} />
      </Container>
    </div>
  );
}
