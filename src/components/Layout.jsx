
import { NavLink } from "react-router-dom";
import { useCart } from "../providers/CartProvider";

function Layout({ children }) {

  const {cartLength} = useCart();

  return (
    <div style={{ fontFamily: "Arial, sans-serif" }}>
      <header
        style={{
          background: "#222",
          padding: "10px 20px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <h2 style={{ color: "#fff", margin: 0 }}>My Website</h2>
        <nav style={{ display: "flex", gap: "15px" }}>
          <NavLink
            to="/login"
            style={({ isActive }) => ({
              color: isActive ? "yellow" : "white",
              textDecoration: "none",
              fontWeight: isActive ? "bold" : "normal",
            })}
          >
            log in
          </NavLink>
          <NavLink
            to="/google"
            style={({ isActive }) => ({
              color: isActive ? "yellow" : "white",
              textDecoration: "none",
              fontWeight: isActive ? "bold" : "normal",
            })}
          >
            Continue with Google
          </NavLink>
          <NavLink
            to="/register"
            style={({ isActive }) => ({
              color: isActive ? "yellow" : "white",
              textDecoration: "none",
              fontWeight: isActive ? "bold" : "normal",
            })}
          >
            Register
          </NavLink>
          <NavLink
            to="/"
            style={({ isActive }) => ({
              color: isActive ? "yellow" : "white",
              textDecoration: "none",
              fontWeight: isActive ? "bold" : "normal",
            })}
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            style={({ isActive }) => ({
              color: isActive ? "yellow" : "white",
              textDecoration: "none",
              fontWeight: isActive ? "bold" : "normal",
            })}
          >
            About
          </NavLink>
          <NavLink
            to="/contact"
            style={({ isActive }) => ({
              color: isActive ? "yellow" : "white",
              textDecoration: "none",
              fontWeight: isActive ? "bold" : "normal",
            })}
          >
            Contact
          </NavLink>
          <NavLink
            to="/faq"
            style={({ isActive }) => ({
              color: isActive ? "yellow" : "white",
              textDecoration: "none",
              fontWeight: isActive ? "bold" : "normal",
            })}
          >
            FAQ
          </NavLink>
          <NavLink
            to="/terms"
            style={({ isActive }) => ({
              color: isActive ? "yellow" : "white",
              textDecoration: "none",
              fontWeight: isActive ? "bold" : "normal",
            })}
          >
            Terms
          </NavLink>
          <NavLink
            to="/cart"
            style={({ isActive }) => ({
              color: isActive ? "yellow" : "white",
              textDecoration: "none",
              fontWeight: isActive ? "bold" : "normal",
            })}
          >
            Cart {cartLength}
          </NavLink>
            <NavLink
            to="/shop"
            style={({ isActive }) => ({
              color: isActive ? "yellow" : "white",
              textDecoration: "none",
              fontWeight: isActive ? "bold" : "normal",
            })}
          >
            Shop
          </NavLink>
          
        </nav>
      </header>


      <main style={{ padding: "20px" }}>{children}</main>

     
      <footer
        style={{
          marginTop: "30px",
          padding: "15px",
          background: "#f5f5f5",
          textAlign: "center",
        }}
      >
        © 2025 My Website
      </footer>
    </div>
  );
}

export default Layout;

