

// import { useCart } from "../providers/CartProvider";


//  function Cart() {
//   const { cart } = useCart();

//   return (
//     <div className="min-h-screen bg-gray-100 p-6">
//       <div className="max-w-3xl mx-auto bg-white p-6 rounded-2xl shadow-md">
//         <h2 className="text-2xl font-bold mb-6">Your Cart</h2>

//         {cart.length === 0 ? (
//           <p className="text-gray-500">Your cart is empty.</p>
//         ) : (
//           <ul className="divide-y divide-gray-200">
//             {cart.map((item) => (
//               <li key={item.id} className="flex items-center py-4">
//                 <img
//                   src={item.image}
//                   alt={item.name}
//                   className="w-20 h-20 object-cover rounded-lg"
//                 />
//                 <div className="ml-4 flex-1">
//                   <h3 className="font-semibold">{item.name}</h3>
//                   <p className="text-gray-500">${item.price.toFixed(2)}</p>
//                 </div>
//                 <div className="text-gray-700">Qty: {item.quantity}</div>
//               </li>
//             ))}
//           </ul>
//         )}
//       </div>
//     </div>
//   );
// }
// Cart.jsx

import { useCart } from "../providers/CartProvider";
import { Link } from "react-router-dom";

function Cart() {
  const { cart } = useCart();

  return (
    <div className="min-h-screen bg-gray-100 p-6 flex items-center justify-center">
      <div className="w-full max-w-3xl bg-white p-6 rounded-2xl shadow-md">
        <h2 className="text-2xl font-bold mb-6">Your Cart</h2>

        {cart.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-500 mb-6 text-lg">🛒 Your cart is empty</p>
            <Link
              to="/"
              className="inline-block px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
            >
              Back to Shop
            </Link>
          </div>
        ) : (
          <ul className="divide-y divide-gray-200">
            {cart.map((item) => (
              <li key={item.id} className="flex items-center py-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-20 h-20 object-cover rounded-lg"
                />
                <div className="ml-4 flex-1">
                  <h3 className="font-semibold">{item.name}</h3>
                  <p className="text-gray-500">${item.price.toFixed(2)}</p>
                </div>
                <div className="text-gray-700">Qty: {item.quantity}</div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}


export default Cart