
export async function fetchProducts() {
  try {
    const response = await fetch("/data/products.json"); 
    if (!response.ok) {
      throw new Error("Failed to fetch cart data");
    }
    return await response.json();
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

