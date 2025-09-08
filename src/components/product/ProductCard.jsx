
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function ProductCard({product}) {
  return (
    <Link to={`/products/${product.id}`} className="group">
    {/* <div className="bg-white rounded-2xl shadow-md hover:shadow-lg transition p-4 flex flex-col">
     
      <div className="w-full h-48 overflow-hidden rounded-xl">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>

      
      <div className="mt-4 flex flex-col flex-grow">
        <h3 className="text-lg font-semibold">{name}</h3>
        <p className="text-blue-600 font-bold mt-1">${price.toFixed(2)}</p>
        <p className="text-gray-600 text-sm mt-2 flex-grow">{description}</p>
      </div>
    </div> */}
     <img
                alt={product.name}
                src={product.image}
                className="aspect-square w-full rounded-lg bg-gray-200 object-cover group-hover:opacity-75 xl:aspect-7/8"
                //style={{width: 300, height: 300, objectFit: 'cover'}}
              />
              <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
              <p className="mt-1 text-lg font-medium text-gray-900">{product.category}</p>
              <p className="mt-1 text-lg font-medium text-gray-900">{product.price}</p>
              <p className="text-gray-600 text-sm mt-2 flex-grow">{product.description}</p>
    </Link>
  );
}


// ✅ Type checking
ProductCard.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  description: PropTypes.string,
};
