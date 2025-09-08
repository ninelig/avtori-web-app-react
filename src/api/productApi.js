import { fetchWithErrorHandling, sleep } from "../helpers/utils";




export const fetchProducts = async (ids = []) => {
	
    const data = await fetchWithErrorHandling( `/data/products.json`);

    // simulate network delay (e.g., 1 second)
   await sleep(800);


   if (ids.length) {
      return data.filter(p => ids.includes(p.id))
    }
    return data;
};




export const fetchProductById = async (id) => {
	  const data = await fetchWithErrorHandling( `/data/products.json`);


    // simulate network delay (e.g., 1 second)
    await sleep(700);


    const singleProduct = data.find(p => p.id === parseInt(id)) || null;
    return singleProduct;
  
};


