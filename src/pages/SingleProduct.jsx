import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchProductById } from '../api/productApi';

function SingleProduct() {
    
    const {productId} = useParams();

    const [product, setProduct] = useState(null);

    useEffect(() => {
        if (productId > 0) {
            fetchProductById(productId).then(data => setProduct(data))
        }
    }, [productId])

    // mokled aq gaviget produqtis id, amis shemdeg am aidit davfechavt ukve konkretul product da aqve davarenderebt. savaraduod vizuali im komponentshi ukve gaqvs


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
              className="w-20 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button className="bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-600 transition duration-300">
            Add to Cart
          </button>
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