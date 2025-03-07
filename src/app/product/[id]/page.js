// src/app/store/product/[id]/page.jsx
"use client"; // Remove this if you prefer a server component

import { useParams } from "next/navigation";

export default function ProductDetail() {
  const { id } = useParams(); // Retrieve the dynamic product id

  return (
    <div>
      <h1>Product Detail Page</h1>
      <p>Displaying details for product with id: {id}</p>
      {/* Here you can add logic to fetch more product details using the id */}
    </div>
  );
}