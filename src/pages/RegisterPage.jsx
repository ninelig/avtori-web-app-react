import { useState, useEffect } from "react";

function RegisterPage() {
  const [form, setForm] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    isValid: false,
    successMessage: "",
    loading: false,
  });

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  // Validate form whenever inputs change
  useEffect(() => {
    const emailValid = /^\S+@\S+\.\S+$/.test(form.email);
    const passwordValid = form.password.length >= 6;
    const confirmValid = form.password === form.confirmPassword && passwordValid;

    setForm((prev) => ({ ...prev, isValid: emailValid && passwordValid && confirmValid }));
  }, [form.email, form.password, form.confirmPassword]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setForm((prev) => ({ ...prev, loading: true, successMessage: "" }));

    // Simulate API call
    setTimeout(() => {
      setForm({
        email: "",
        password: "",
        confirmPassword: "",
        isValid: false,
        successMessage: "Account created successfully!",
        loading: false,
      });
    }, 1000);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white rounded-lg shadow-md p-6 w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Register</h2>

        {form.successMessage && (
          <div className="bg-green-100 text-green-700 p-3 rounded mb-4 text-center">
            {form.successMessage}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Email */}
          <div>
            <label className="block mb-1 font-medium">Email</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email"
              required
            />
          </div>

          {/* Password */}
          <div>
            <label className="block mb-1 font-medium">Password</label>
            <input
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter password"
              required
            />
            {form.password && form.password.length < 6 && (
              <p className="text-red-500 text-sm mt-1">
                Password must be at least 6 characters
              </p>
            )}
          </div>

          {/* Confirm Password */}
          <div>
            <label className="block mb-1 font-medium">Confirm Password</label>
            <input
              type="password"
              name="confirmPassword"
              value={form.confirmPassword}
              onChange={handleChange}
              className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Confirm password"
              required
            />
            {form.confirmPassword && form.confirmPassword !== form.password && (
              <p className="text-red-500 text-sm mt-1">
                Passwords do not match
              </p>
            )}
          </div>

          <button
            type="submit"
            disabled={!form.isValid || form.loading}
            className={`w-full py-2 px-4 rounded text-white font-semibold ${
              form.isValid && !form.loading ? "bg-blue-600 hover:bg-blue-700" : "bg-gray-400 cursor-not-allowed"
            }`}
          >
            {form.loading ? "Registering..." : "Register"}
          </button>
        </form>
      </div>
    </div>
  );
}
export default RegisterPage