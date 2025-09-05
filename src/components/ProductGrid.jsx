import React, { useEffect, useState } from 'react';
import { fetchProducts } from '/data/products.json';
import ProductCard from './ProductCard'; 

const ProductGrid = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadProducts = async () => {
      setIsLoading(true);
      await new Promise(resolve => setTimeout(resolve, 1500)); 
      const data = await fetchProducts();
      setProducts(data);
      setIsLoading(false);
    };

    loadProducts();
  }, []);

  if (isLoading) {
    return <p>Loading products...</p>;
  }

  if (!products.length) {
    return <p>No products available.</p>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          image={product.image}
          name={product.name}
          price={product.price}
          description={product.description}
        />
      ))}
    </div>
  );
};

export default ProductGrid;
