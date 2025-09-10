import { Link, NavLink, useNavigate } from "react-router-dom";
import { FaShoppingCart, FaUser, FaBars, FaTimes } from "react-icons/fa";
import { useAuth } from "../../providers/AuthProvider";
import { useState } from "react";

export default function AppHeader({ cartLength = 0 }) {
  const navigate = useNavigate();
  const { isLoggedIn, logout } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinkClasses = ({ isActive }) =>
    `px-3 py-2 text-sm font-medium transition ${
      isActive ? "text-yellow-400 font-bold" : "text-gray-200 hover:text-white"
    }`;

  const handleLogout = () => {
    logout();
    navigate("/login", { replace: true });
  };

  return (
    <header className="bg-gray-900 shadow-md">
      <div className="container mx-auto px-6 py-3 flex items-center justify-between">
        {/* Brand / Logo */}
        <Link to="/" className="flex items-center gap-2">
          <img src="/images/logo192.png" alt="Logo" className="w-8 h-8" />
          <h1 className="text-xl font-bold text-white">Tattoo-Avtori</h1>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-6">
          <NavLink to="/shop" className={navLinkClasses}>
            Shop
          </NavLink>
          <NavLink to="/about" className={navLinkClasses}>
            About
          </NavLink>
         
          <NavLink to="/faq" className={navLinkClasses}>
            FAQ
          </NavLink>
          <NavLink to="/terms" className={navLinkClasses}>
            Terms
          </NavLink>
           <NavLink to="/contact" className={navLinkClasses}>
            Contact
          </NavLink>
        </nav>

        {/* Actions (Cart + Auth) */}
        <div className="flex items-center gap-6">
          {/* Cart */}
          <NavLink
            to="/cart"
            className="relative text-gray-200 hover:text-white"
          >
            <FaShoppingCart size={22} />
            {cartLength > 0 && (
              <span className="absolute -top-2 -right-3 bg-red-600 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                {cartLength}
              </span>
            )}
          </NavLink>

          {/* Auth */}
          {isLoggedIn ? (
            <>
              <strong className="text-white hidden sm:inline">Nineli</strong>
              <button
                onClick={handleLogout}
                className="text-gray-200 hover:text-white"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <NavLink
                to="/login"
                className="flex items-center gap-1 text-gray-200 hover:text-white"
              >
                <FaUser size={20} />
                <span className="hidden sm:inline">Login</span>
              </NavLink>
              <NavLink
                to="/register"
                className="px-3 py-1 rounded bg-blue-600 text-white hover:bg-blue-700 text-sm font-medium"
              >
                Register
              </NavLink>
               <NavLink
                to="/google"
                className="px-3 py-1 rounded bg-yellow-600 text-white hover:bg-blue-700 text-sm font-medium"
              >
                google login
              </NavLink>
            </>
          )}

          {/* Hamburger (Mobile Only) */}
          <button
            className="md:hidden text-gray-200 hover:text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <nav className="md:hidden bg-gray-800 px-6 py-4 flex flex-col gap-4">
          <NavLink to="/shop" className={navLinkClasses} onClick={() => setIsMenuOpen(false)}>
            Shop
          </NavLink>
          <NavLink to="/about" className={navLinkClasses} onClick={() => setIsMenuOpen(false)}>
            About
          </NavLink>
          <NavLink to="/contact" className={navLinkClasses} onClick={() => setIsMenuOpen(false)}>
            Contact
          </NavLink>
          <NavLink to="/faq" className={navLinkClasses} onClick={() => setIsMenuOpen(false)}>
            FAQ
          </NavLink>
          <NavLink to="/terms" className={navLinkClasses} onClick={() => setIsMenuOpen(false)}>
            Terms
          </NavLink>
        </nav>
      )}
    </header>
  );
}
