export const sellerSummary = {
  revenue: 128450,
  orders: 86,
  products: 18,
  lowStock: 3,
  revenueChange: 12.4,
};

export const revenueData = [
  { month: 'Jan', revenue: 18200, orders: 18 },
  { month: 'Feb', revenue: 21400, orders: 22 },
  { month: 'Mar', revenue: 19600, orders: 19 },
  { month: 'Apr', revenue: 24300, orders: 27 },
  { month: 'May', revenue: 27700, orders: 31 },
  { month: 'Jun', revenue: 28800, orders: 34 },
];

export const sellerProducts = [
  { id: 'headphones', name: 'Noise Canceling Wireless Headphones', sku: 'SP-1024', price: 2999, stock: 28, status: 'Active' },
  { id: 'speaker', name: 'Mini Bluetooth Speaker', sku: 'SP-1031', price: 1299, stock: 7, status: 'Active' },
  { id: 'keyboard', name: 'Compact Mechanical Keyboard', sku: 'SP-1068', price: 3299, stock: 3, status: 'Low stock' },
  { id: 'watch', name: 'PulseFit AMOLED Smart Watch', sku: 'SP-1085', price: 3499, stock: 0, status: 'Out of stock' },
];

export const sellerOrders = [
  { id: 'ORD-8492', customer: 'Ananya Sharma', items: 2, total: 4298, date: '18 Jul 2026', status: 'Processing' },
  { id: 'ORD-8487', customer: 'Rahul Mehta', items: 1, total: 2999, date: '18 Jul 2026', status: 'Shipped' },
  { id: 'ORD-8481', customer: 'Priya Singh', items: 3, total: 5597, date: '17 Jul 2026', status: 'Delivered' },
  { id: 'ORD-8474', customer: 'Kabir Khan', items: 1, total: 1299, date: '17 Jul 2026', status: 'Cancelled' },
];

export const adminSummary = {
  users: 1248,
  sellers: 86,
  pendingSellers: 7,
  products: 642,
};

export const pendingSellers = [
  { id: 'seller-201', storeName: 'Tech Store India', owner: 'Arjun Verma', email: 'arjun@example.com', category: 'Electronics' },
  { id: 'seller-202', storeName: 'Urban Threads', owner: 'Meera Kapoor', email: 'meera@example.com', category: 'Fashion' },
  { id: 'seller-203', storeName: 'Home Nest', owner: 'Dev Malhotra', email: 'dev@example.com', category: 'Home & Kitchen' },
];

export const adminCategories = [
  { id: 'electronics', name: 'Electronics', products: 184 },
  { id: 'fashion', name: 'Fashion', products: 156 },
  { id: 'home', name: 'Home & Kitchen', products: 121 },
  { id: 'beauty', name: 'Beauty', products: 76 },
];
