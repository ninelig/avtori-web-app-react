import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from 'react-toastify';
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../providers/AuthProvider";
import { sleep } from "../helpers/utils";

// Validation schema with Zod
const registerSchema = z
  .object({
    email: z.string().min(1, "Email is required").email("Invalid email address"),
    password: z
      .string()
      .min(6, "Password must be at least 6 characters long")
      .max(128),
    passwordConfirm: z.string().min(1, "Please confirm your password"),
  })
  .refine((data) => data.password === data.passwordConfirm, {
    path: ["passwordConfirm"],
    message: "Passwords do not match",
  });

export default function RegisterPage() {

  const navigate = useNavigate();
  const {login, generateFakeToken} = useAuth();

  const [showPassword, setShowPassword] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm({
    resolver: zodResolver(registerSchema),
    mode: "onTouched",
  });

  async function onSubmit(values) {
    // Replace this with your real API call
    try {
      console.log("Register payload:", { email: values.email, password: values.password });
      
      // fake delay
      await sleep(700);
  
      reset();
      //alert("Registration successful (demo). Replace with real API call.");
        toast.success('თქვენ წარმატებით დარეგისტრირდით!', {position: 'bottom-right',});

        // Login automatically
        const newToken = generateFakeToken();
        login(newToken);
        navigate("/", { replace: true });
    } catch (err) {
      console.error(err);
      alert("Registration failed. See console for details.");
    }
  }

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-2xl shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Create an account</h2>

      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <label className="block mb-2">
          <span className="text-sm font-medium">Email</span>
          <input
            type="email"
            {...register("email")}
            className={`mt-1 block w-full rounded-lg border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-offset-1 ${
              errors.email ? "border-red-500" : "border-gray-200"
            }`}
            placeholder="you@example.com"
            aria-invalid={errors.email ? "true" : "false"}
          />
          {errors.email && (
            <p className="mt-1 text-sm text-red-600" role="alert">
              {errors.email.message}
            </p>
          )}
        </label>

        <label className="block mb-2">
          <span className="text-sm font-medium">Password</span>
          <div className="relative mt-1">
            <input
              type={showPassword ? "text" : "password"}
              {...register("password")}
              className={`block w-full rounded-lg border px-3 py-2 pr-12 focus:outline-none focus:ring-2 focus:ring-offset-1 ${
                errors.password ? "border-red-500" : "border-gray-200"
              }`}
              placeholder="At least 6 characters"
              aria-invalid={errors.password ? "true" : "false"}
            />
            <button
              type="button"
              onClick={() => setShowPassword((s) => !s)}
              className="absolute right-2 top-1/2 -translate-y-1/2 text-sm opacity-70"
              aria-label={showPassword ? "Hide password" : "Show password"}
            >
              {showPassword ? "Hide" : "Show"}
            </button>
          </div>
          {errors.password && (
            <p className="mt-1 text-sm text-red-600" role="alert">
              {errors.password.message}
            </p>
          )}
        </label>

        <label className="block mb-4">
          <span className="text-sm font-medium">Confirm password</span>
          <input
            type={showPassword ? "text" : "password"}
            {...register("passwordConfirm")}
            className={`mt-1 block w-full rounded-lg border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-offset-1 ${
              errors.passwordConfirm ? "border-red-500" : "border-gray-200"
            }`}
            placeholder="Repeat your password"
            aria-invalid={errors.passwordConfirm ? "true" : "false"}
          />
          {errors.passwordConfirm && (
            <p className="mt-1 text-sm text-red-600" role="alert">
              {errors.passwordConfirm.message}
            </p>
          )}
        </label>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full rounded-lg bg-indigo-600 text-white py-2 font-medium hover:bg-indigo-700 disabled:opacity-60"
        >
          {isSubmitting ? "Registering..." : "Create account"}
        </button>
      </form>

      <p className="mt-4 text-sm text-center">
        Already have an account? <Link to="/login" className="text-indigo-600">Log in</Link>
      </p>
    </div>
  );
}
