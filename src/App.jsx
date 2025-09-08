import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { ToastContainer } from 'react-toastify';
import React from 'react';
import {MainLayout} from "./components/layouts";
import { CartProvider } from "./providers/CartProvider";
import Spinner from "./components/ui/Spinner";
import { GuestRoute, ProtectedRoute } from "./helpers/routes";
import { AuthProvider } from "./providers/AuthProvider";
import {
  AboutPage,
  CartPage,
  ContactPage,
  FaqPage,
  GooglePage,
  HomePage,
  LoginPage,
  NotFoundPage,
  RegisterPage,
  ShopPage,
  SingleProductPage,
  TermsPage
} from './pages';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={ queryClient }>
      <React.Suspense fallback={<Spinner />}>
      <AuthProvider>
    <CartProvider> 
    <Router>
      <MainLayout>
        <Routes>

          {/* Public pages */}
          <Route path="/" element={<HomePage />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/products/:productId" element={<SingleProductPage />} />
          <Route path="/google" element={<GooglePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/faq" element={<FaqPage />} />
          <Route path="/terms" element={<TermsPage />} />


           {/* Guest-only pages */}
          <Route path="/login" element={
            <GuestRoute>
               <LoginPage />
             </GuestRoute>
            } />
          <Route path="/register" element={
             <GuestRoute>
               <RegisterPage />
             </GuestRoute>
            } />

          
          
           {/* Protected pages */}
          <Route path="/cart" element={
            //  <ProtectedRoute>
               <CartPage />
            //  </ProtectedRoute>
            } />

  

          {/* Fallback */}
          <Route path="/*" element={<NotFoundPage />} />
        </Routes>
      </MainLayout>
    </Router>
    </CartProvider>
    </AuthProvider>
    <ToastContainer />
    </React.Suspense>
	</QueryClientProvider>
  );
}

export default App;
