import { useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { Link, useParams } from 'react-router-dom';
import { fetchProductById, fetchProductById1 } from '../api/productApi';
import { useCart } from '../providers/CartProvider';
import { toast } from 'react-toastify';
import Spinner from '../components/ui/Spinner';
import Alert from '../components/ui/Alert';

function SingleProduct() {

    const [quantity, setQuantity] = useState(1);

    const {addToCart} = useCart();
    
    const {productId} = useParams();

   // const [product, setProduct] = useState(null);



  const { data: product, isLoading, isRefetching, isError, error, refetch } = useQuery(
    {
      queryKey: ['product', productId],
      queryFn: () => fetchProductById(productId),
      enabled: !!productId, // only run query if productId exists
      refetchOnWindowFocus: false, // optional
      //staleTime: 1000 * 60 * 5, // optional: cache for 5 minutes
    }
  );



    if (isLoading || isRefetching) {
      return <Spinner />
    }
  
    if (isError) {
      return <Alert type="error" message={error.message} />
    }





    const doAddToCart = () => {
      if (product && quantity) {
        addToCart(product.id, quantity)
        toast.success('პროდუქტი ჩავარდა კალათაში', {position: 'bottom-right',})
      }
    }

  

    if (!product) {
        return <h2>No product available!</h2>
    }

 return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row">
        {/* Product Image */}
        <div className="md:w-1/2 mb-8 md:mb-0">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-auto object-cover rounded-lg shadow-lg"
          />
        </div>

        {/* Product Details */}
        <div className="md:w-1/2 md:pl-8">
          <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
          <p className="text-gray-600 mb-4">{product.description}</p>
          <div className="mb-4">
            <span className="text-2xl font-semibold">${product.price.toFixed(2)}</span>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="quantity">
              Quantity
            </label>
            <input
              type="number"
              id="quantity"
              name="quantity"
              min="1"
              defaultValue="1"
              value={quantity}
              onChange={e => setQuantity(e.target.value)}
              className="w-20 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button onClick={doAddToCart} className="bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-600 transition duration-300">
            Add to Cart
          </button>
{/*           <Link to="/cart" className="ml-5 bg-yellow-500 text-black px-6 py-4 rounded-md hover:bg-blue-600 transition duration-300">
            Go to Cart
          </Link> */}
        </div>
      </div>

      {/* Additional Product Information */}
{/*       <div className="mt-12">
        <h2 className="text-2xl font-bold mb-4">Product Details</h2>
        <ul className="list-disc list-inside text-gray-700">
          {product.details.map((detail, index) => (
            <li key={index}>{detail}</li>
          ))}
        </ul>
      </div> */}
    </div>
  );

}

export default SingleProduct;