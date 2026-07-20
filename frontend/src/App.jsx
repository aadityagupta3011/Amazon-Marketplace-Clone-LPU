import { Navigate, Outlet, Route, Routes } from 'react-router-dom';
import DashboardLayout from './components/dashboard/DashboardLayout';
import Footer from './components/layout/Footer';
import Navbar from './components/layout/Navbar';
import AdminCategoriesPage from './pages/AdminCategoriesPage';
import AdminDashboard from './pages/AdminDashboard';
import AdminProductsPage from './pages/AdminProductsPage';
import AdminReportsPage from './pages/AdminReportsPage';
import AdminSellersPage from './pages/AdminSellersPage';
import CartPage from './pages/CartPage';
import CheckoutPage from './pages/CheckoutPage';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import NotFoundPage from './pages/NotFoundPage';
import OrdersPage from './pages/OrdersPage';
import ProductDetailsPage from './pages/ProductDetailsPage';
import ProductsPage from './pages/ProductsPage';
import RegisterPage from './pages/RegisterPage';
import ReturnsPage from './pages/ReturnsPage';
import SellerAnalyticsPage from './pages/SellerAnalyticsPage';
import SellerDashboard from './pages/SellerDashboard';
import SellerInventoryPage from './pages/SellerInventoryPage';
import SellerOrdersPage from './pages/SellerOrdersPage';
import SellerProductFormPage from './pages/SellerProductFormPage';
import SellerProductsPage from './pages/SellerProductsPage';

function PublicLayout() {
  return (
    <div className="flex min-h-screen flex-col bg-slate-100 text-slate-900">
      <Navbar />
      <main className="flex-1"><Outlet /></main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route element={<PublicLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/products/:productId" element={<ProductDetailsPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/orders" element={<OrdersPage />} />
        <Route path="/returns" element={<ReturnsPage />} />
      </Route>

      <Route path="/seller" element={<DashboardLayout role="seller" />}>
        <Route index element={<Navigate to="dashboard" replace />} />
        <Route path="dashboard" element={<SellerDashboard />} />
        <Route path="products" element={<SellerProductsPage />} />
        <Route path="products/new" element={<SellerProductFormPage />} />
        <Route path="products/:productId/edit" element={<SellerProductFormPage />} />
        <Route path="orders" element={<SellerOrdersPage />} />
        <Route path="inventory" element={<SellerInventoryPage />} />
        <Route path="analytics" element={<SellerAnalyticsPage />} />
      </Route>

      <Route path="/admin" element={<DashboardLayout role="admin" />}>
        <Route index element={<Navigate to="dashboard" replace />} />
        <Route path="dashboard" element={<AdminDashboard />} />
        <Route path="sellers" element={<AdminSellersPage />} />
        <Route path="products" element={<AdminProductsPage />} />
        <Route path="categories" element={<AdminCategoriesPage />} />
        <Route path="reports" element={<AdminReportsPage />} />
      </Route>

      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;
