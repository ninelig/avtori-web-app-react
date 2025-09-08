import { useQuery } from '@tanstack/react-query';
import { fetchProducts } from "../api/productApi";
import ProductCard from "../components/product/ProductCard";
import Spinner from "../components/ui/Spinner";
import Alert from "../components/ui/Alert";
import ProductFilters from '../components/product/ProductFilters';
import { useState } from 'react';




 function Shop() {

    const [filteredProducts, setFiteredProducts] = useState([]);
 
    const {
      data: products,
      isSuccess,
      refetch,
      isLoading,
      isRefetching,
      isError,
      error,
    } = useQuery( {
      //queryKey: ['orders', request],
      queryKey: [ 'products' ],
      queryFn: () => fetchProducts(),
      enabled: true,
      refetchOnMount: true,
      refetchOnWindowFocus: false,
      //staleTime: 0
    } );



  if (isLoading || isRefetching) {
    return <Spinner />
  }

  if (isError) {
    return <Alert type="error" message={error.message}/>
  }

  console.log('products', products)

  const filterProducts = (categoryId) => {
    if (!categoryId) {
      setFiteredProducts(products)
    } else {
      setFiteredProducts(
        products?.filter(p => p.category === categoryId) || []
      )
    }
  }


   return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h2 className="text-2xl font-bold mb-6">Shop Our Collection</h2>
      <ProductFilters onChange={filterProducts} />
    <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
        {filteredProducts?.map((p) => (
          <ProductCard
            key={p.id}
            product={p}
          />
        ))}
      </div>
    </div>
  ); 
}

export default Shop