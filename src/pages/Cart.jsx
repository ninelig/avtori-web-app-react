import { useEffect, useMemo, useState } from "react";
import { useCart } from "../providers/CartProvider";
import { fetchProducts } from "../api/productApi";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import Spinner from "../components/ui/Spinner";

function Cart() {
  const { cart, addToCart, removeFromCart, clearCart, increaseQty, decreaseQty  } = useCart();

/*   const [products, setProducts] = useState([]);
  useEffect(() => {
    if (cart?.length) {
      fetchProducts(cart?.map(({id}) => id) || [])
        .then(data => setProducts(data))
    } else {
      setProducts([]);
    }
  }, [cart]) */


   // Fetch products in the cart
  const { data: products = [], isLoading, isError, error } = useQuery({
    queryKey: ["cartProducts", cart.map(item => item.id)],
    queryFn: () => fetchProducts(cart.map(item => item.id)),
     enabled: cart.length > 0, // don't fetch if cart is empty
      staleTime: 1000 * 60 * 5, // cache for 5 min
      refetchOnWindowFocus: false,
  });


  const preparedCartItems = useMemo(() => {
    return products.map(p => {
      p.qty = cart?.find(c => c.id === p.id)?.qty || 1;
      p.sub_total = (p.qty * p.price).toFixed(2);
      return p;
    })
  }, [products, cart]) 


/*   const handleItemQuantityChange = (item, evt) => {
    const qty = evt.target.value - item.qty
    addToCart(item.id, qty);
  } */

  const totalAmount = useMemo(() => {
    return preparedCartItems?.reduce((acc, item) => acc + item.price, 0) || 0;
  }, [preparedCartItems]);



    if (isLoading) {
      return <Spinner />
    }

return (
    <div className="container mx-auto p-6">
      <h2 className="text-2xl font-semibold mb-6">Shopping Cart</h2>

        {preparedCartItems.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-500 mb-6 text-lg">🛒 Your cart is empty</p>
            <Link
              to="/shop"
              className="inline-block px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
            >
              Back to Shop
            </Link>
          </div>
        ) : (

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200 shadow rounded-lg">
          <thead>
            <tr className="bg-gray-100 text-gray-700 uppercase text-sm">
              <th className="py-3 px-6 text-left">Product</th>
              <th className="py-3 px-6 text-left">Price</th>
              <th className="py-3 px-6 text-center">Quantity</th>
              <th className="py-3 px-6 text-left">Subtotal</th>
              <th className="py-3 px-6 text-center">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {preparedCartItems.map((item) => (
              <tr
                key={item.id}
                className="hover:bg-gray-50 transition duration-150"
              >
                <td className="py-4 px-6 flex items-center gap-4">
                  <Link to={`/products/${item.id}`}>
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-16 h-16 object-cover rounded-lg"
                    />
                    <span className="font-medium text-gray-800">{item.name}</span>
                  </Link>
                </td>
                <td className="py-4 px-6 text-gray-700">${item.price.toFixed(2)}</td>
                <td className="py-4 px-6 text-center">
                  <div className="flex items-center justify-center space-x-2">
                    <button
                      onClick={() => decreaseQty(item.id)}
                      className="bg-gray-200 text-gray-700 px-2 rounded hover:bg-gray-300"
                    >
                      -
                    </button>
                    <span className="w-6 text-center">{item.qty}</span>
                    <button
                      onClick={() => increaseQty(item.id)}
                      className="bg-gray-200 text-gray-700 px-2 rounded hover:bg-gray-300"
                    >
                      +
                    </button>
                  </div>
                </td>
                <td className="py-4 px-6 text-gray-700 font-semibold">
                  $ {item.sub_total}
                </td>
                <td className="py-4 px-6 text-center">
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-red-500 hover:text-red-700 font-semibold"
                  >
                    Remove
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <td colSpan="3" className="py-4 px-6 text-right font-bold text-gray-800">
                Total:
              </td>
              <td className="py-4 px-6 font-bold text-gray-800">
                ${totalAmount.toFixed(2)}
              </td>
              <td></td>
            </tr>
          </tfoot>
        </table>
      </div>
      )}
        
{/* 
      <div className="mt-6 flex justify-end">
        <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition">
          Checkout
        </button>
      </div> */}
    </div>

  );

}


export default Cart