
import { useState, useEffect } from "react";
import { fetchProducts } from "../api/productApi";
import ProductCard from "../components/product/ProductCard";



 function Shop() {


  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts().then((data) => setProducts(data));
  }, []);


  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h2 className="text-2xl font-bold mb-6">Shop Our Collection</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((p) => (
          <ProductCard
            key={p.id}
            image={p.image}
            name={p.name}
            price={p.price}
            description={p.description}
          />
        ))}
      </div>
    </div>
  );
}

export default Shop