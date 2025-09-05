
export async function fetchProducts(ids = []) {
  try {
    const response = await fetch("/data/products.json"); 
    if (!response.ok) {
      throw new Error("Failed to fetch cart data");
    }
    const data = await response.json();

    if (ids.length) {
      return data.filter(p => ids.includes(p.id))
    }
    return data;

  } catch (error) {
    console.error("Error loading cart:", error);
    return [];
  }
}




export async function fetchProductById(id) {
  try {
    const response = await fetch("/data/products.json"); 
    if (!response.ok) {
      throw new Error("Failed to fetch cart data");
    }
    const data = await response.json();
    const singleProduct = data.find(p => p.id == id) || null;
    return singleProduct;
  } catch (error) {
    console.error("Error loading cart:", error);
    return null;
  }
}

