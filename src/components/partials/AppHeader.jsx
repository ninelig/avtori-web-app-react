import { Link, NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { FaShoppingCart, FaUser  } from "react-icons/fa";
import { useAuth } from "../../providers/AuthProvider";

export default function AppHeader({ cartLength = 0 }) {
 
 const navigate = useNavigate();
 const {isLoggedIn, logout} = useAuth();


  const navLinkClasses = ({ isActive }) =>
    `px-3 py-2 text-sm font-medium transition ${
      isActive ? "text-yellow-400 font-bold" : "text-gray-200 hover:text-white"
    }`;


   const handleLogout = () => {
    logout();
    navigate("/login", { replace: true });
   } 

  return (
    <header className="bg-gray-900 shadow-md">
      <div className="container mx-auto px-6 py-3 flex items-center justify-between">
        
        {/* Brand / Logo */}
        <Link to="/">
            <div className="flex items-center gap-2">
            <img
                src="/images/logo192.png"
                alt="Logo"
                className="w-8 h-8"
            />
            <h1 className="text-xl font-bold text-white">NiNe-sHop</h1>
            </div>
        </Link>
        {/* Navigation Links */}
        <nav className="hidden md:flex gap-6">
          <NavLink to="/shop" className={navLinkClasses}>
            Shop
          </NavLink>
          <NavLink to="/about" className={navLinkClasses}>
            About
          </NavLink>
          <NavLink to="/contact" className={navLinkClasses}>
            Contact
          </NavLink>
          <NavLink to="/faq" className={navLinkClasses}>
            FAQ
          </NavLink>
          <NavLink to="/terms" className={navLinkClasses}>
            Terms
          </NavLink>
        </nav>

        {/* Actions (Cart + Auth) */}
        <div className="flex items-center gap-6">
          <NavLink to="/cart" className="relative text-gray-200 hover:text-white">
            <FaShoppingCart size={22} />
            {cartLength > 0 && (
              <span className="absolute -top-2 -right-3 bg-red-600 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                {cartLength}
              </span>
            )}
          </NavLink>

           {
             isLoggedIn ? (
                <>
                  <strong className="text-white">Nineli</strong>
                  <button onClick={handleLogout} className="text-gray-200 hover:text-white">Logout</button>  
                </>
             ): (
                 <>
                <NavLink to="/login" className="flex items-center gap-1 text-gray-200 hover:text-white">
                    <FaUser size={20} />
                    <span className="hidden sm:inline">Login</span>
                </NavLink>
                <NavLink
                    to="/register"
                    className="px-3 py-1 rounded bg-blue-600 text-white hover:bg-blue-700 text-sm font-medium"
                >
                    Register
                </NavLink>
                </>
             
             )
           } 
  
        </div>
      </div>
    </header>
  );
}
