import { useState, useEffect } from "react";
import { useAuth } from "../providers/AuthProvider";
import { useNavigate } from "react-router-dom";

function LoginPage() {

  const navigate = useNavigate();
  const {login} = useAuth();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    loading: false,
    success: false,
  });

  const [isFormValid, setIsFormValid] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Run validation whenever email or password changes
  useEffect(() => {
    const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email);
    const isValidPassword = formData.password.trim() !== "";
    setIsFormValid(isValidEmail && isValidPassword);
  }, [formData.email, formData.password]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isFormValid) return;

    setFormData((prev) => ({ ...prev, loading: true }));

    // Generate fake token
    const newToken = Math.random().toString(36).substr(2, 16);
    // Login
    login(newToken);
    navigate("/", { replace: true });

    // Simulate API call
/*     setTimeout(() => {
      setFormData((prev) => ({
        ...prev,
        loading: false,
        success: true,
      }));
    }, 1000); */
  };

  return (
    // <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
      <div className="max-w-md mx-auto p-6 bg-white rounded-2xl shadow-md">
        <h1 className="text-2xl font-bold text-center mb-6">Login</h1>

        {formData.success ? (
          <p className="text-green-600 text-center font-semibold">
            Login successful 🎉
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Email */}
            <div>
              <label className="block font-medium mb-1">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your email"
              />
            </div>

            {/* Password */}
            <div>
              <label className="block font-medium mb-1">Password</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your password"
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={!isFormValid || formData.loading}
              className={`w-full py-2 rounded-lg text-white font-semibold transition ${
                !isFormValid || formData.loading
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-blue-600 hover:bg-blue-700"
              }`}
            >
              {formData.loading ? "Logging in..." : "Login"}
            </button>
          </form>
        )}

        {/* Forgot Password */}
        {!formData.success && (
          <p className="text-center text-gray-500 text-sm mt-4">
            Forgot Password?
          </p>
        )}
      </div>
    // </div>
  );
}

export default LoginPage;


