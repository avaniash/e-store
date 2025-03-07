"use client";

import Container from '@/Components/Container';
import { getcategories } from '@/library';
import React, { useEffect, useState } from 'react';
import ProductBox from '@/Components/ProductBox';

export default function StorePage() {
  return (
    <Container>
      <div className="grid grid-cols-12 gap-6">
        {/* Sidebar (Categories) */}
        <aside className="col-span-3 bg-gray-100 p-4 rounded-lg">
          <CategoryListing />
        </aside>

        {/* Main Content (Products) */}
        <main className="col-span-9">
          <ProductListing />
        </main>
      </div>
    </Container>
  );
}

const CategoryListing = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getcategories();
        if (Array.isArray(data)) {
          setCategories(data);
        } else {
          console.error("Data is not an array:", data);
        }
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    }
    fetchData();
  }, []);

  return (
    <div>
      <h2 className="text-lg font-semibold mb-4">Categories</h2>
      <ul className="space-y-2">
        {categories.length > 0 ? (
          categories.map((category) => (
            <li key={category.id} className="p-2 bg-white rounded-md shadow-sm hover:bg-gray-200 cursor-pointer">
              {category.name}
            </li>
          ))
        ) : (
          <p>Loading categories...</p>
        )}
      </ul>
    </div>
  );
};

const ProductListing = () => {
  return (
    <div className="grid grid-cols-3 gap-6">
      {/* Example: You can map over product data here */}
      {[...Array(9)].map((_, index) => (
        <ProductBox key={index} />
      ))}
    </div>
  );
};
