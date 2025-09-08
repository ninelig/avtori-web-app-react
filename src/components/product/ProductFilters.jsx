import { useEffect, useState } from "react";
import { PRODUCT_CAT_LIST } from "../../helpers/utils";

export default function ProductFilters ({onChange}) {
  
  const [selectedCategory, setSelectedCategory] = useState(null);


  useEffect(() => {
    onChange?.(selectedCategory);
  }, [selectedCategory])


  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Filter by Category</h2>
      <div className="flex gap-2 mb-6">
        <button
          className={`px-4 py-2 border rounded ${selectedCategory === null ? "bg-blue-500 text-white" : ""}`}
          onClick={() => setSelectedCategory(null)}
        >
          All
        </button>
        {PRODUCT_CAT_LIST.map((cat) => (
          <button
            key={cat.id}
            className={`px-4 py-2 border rounded ${selectedCategory === cat.id ? "bg-blue-500 text-white" : ""}`}
            onClick={() => setSelectedCategory(cat.id)}
          >
            {cat.title}
          </button>
        ))}
      </div>

    </div>
  );
};