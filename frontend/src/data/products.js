export const categories = [
  {
    name: 'Electronics',
    image:
      'https://images.unsplash.com/photo-1498049794561-7780e7231661?auto=format&fit=crop&w=700&q=80',
  },
  {
    name: 'Fashion',
    image:
      'https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=700&q=80',
  },
  {
    name: 'Home & Kitchen',
    image:
      'https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&w=700&q=80',
  },
  {
    name: 'Beauty',
    image:
      'https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=700&q=80',
  },
  {
    name: 'Books',
    image:
      'https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=700&q=80',
  },
  {
    name: 'Sports',
    image:
      'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=700&q=80',
  },
];

export const products = [
  {
    id: 'wireless-headphones',
    name: 'Noise Canceling Wireless Headphones',
    category: 'Electronics',
    brand: 'SoundPeak',
    price: 2999,
    originalPrice: 4499,
    rating: 4.5,
    reviews: 2341,
    discount: 33,
    image:
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=900&q=85',
    description:
      'Comfortable over-ear headphones with balanced sound, active noise cancellation and up to 40 hours of listening time.',
    highlights: ['40-hour battery life', 'Hybrid noise cancellation', 'Bluetooth 5.3', 'Soft memory-foam earcups'],
    delivery: 'Free delivery by tomorrow',
    featured: true,
  },
  {
    id: 'smart-watch',
    name: 'PulseFit AMOLED Smart Watch',
    category: 'Electronics',
    brand: 'PulseFit',
    price: 3499,
    originalPrice: 5999,
    rating: 4.2,
    reviews: 879,
    discount: 42,
    image:
      'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=900&q=85',
    description:
      'A bright AMOLED smartwatch made for everyday health tracking, alerts and activity goals.',
    highlights: ['1.78-inch AMOLED display', 'Heart-rate monitoring', '100+ sports modes', 'Water resistant'],
    delivery: 'Free delivery by tomorrow',
    featured: true,
  },
  {
    id: 'everyday-backpack',
    name: 'Everyday Laptop Backpack 24L',
    category: 'Fashion',
    brand: 'Urban Trail',
    price: 1499,
    originalPrice: 2499,
    rating: 4.4,
    reviews: 1250,
    discount: 40,
    image:
      'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=900&q=85',
    description:
      'Water-resistant daily backpack with a padded 15-inch laptop sleeve and easy-access organizer pockets.',
    highlights: ['15-inch laptop compartment', 'Water-resistant fabric', 'Padded shoulder straps', 'Two bottle pockets'],
    delivery: 'Free delivery by Thursday',
    featured: true,
  },
  {
    id: 'ceramic-dinner-set',
    name: 'Stoneware Ceramic Dinner Set, 16 Pieces',
    category: 'Home & Kitchen',
    brand: 'Mellow Home',
    price: 2199,
    originalPrice: 3499,
    rating: 4.6,
    reviews: 680,
    discount: 37,
    image:
      'https://images.unsplash.com/photo-1610701596007-11502861dcfa?auto=format&fit=crop&w=900&q=85',
    description:
      'A modern, durable stoneware dining set for four people, finished in a warm matte glaze.',
    highlights: ['Service for four', 'Microwave safe', 'Dishwasher safe', 'Scratch-resistant glaze'],
    delivery: 'Free delivery by Friday',
    featured: true,
  },
  {
    id: 'running-shoes',
    name: 'StrideFlex Everyday Running Shoes',
    category: 'Sports',
    brand: 'StrideFlex',
    price: 1899,
    originalPrice: 3299,
    rating: 4.3,
    reviews: 1544,
    discount: 42,
    image:
      'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=900&q=85',
    description:
      'Lightweight knit running shoes with responsive cushioning for walks, workouts and daily wear.',
    highlights: ['Breathable knit upper', 'Responsive foam sole', 'Grippy rubber outsole', 'Lightweight design'],
    delivery: 'Free delivery by tomorrow',
    featured: true,
  },
  {
    id: 'skincare-kit',
    name: 'Daily Glow Vitamin C Skincare Kit',
    category: 'Beauty',
    brand: 'Naturia',
    price: 899,
    originalPrice: 1499,
    rating: 4.1,
    reviews: 432,
    discount: 40,
    image:
      'https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=900&q=85',
    description:
      'A simple three-step routine with a gentle cleanser, vitamin C serum and lightweight moisturizer.',
    highlights: ['Suitable for daily use', 'Vitamin C serum', 'No added parabens', 'Travel friendly'],
    delivery: 'Free delivery by Thursday',
    featured: false,
  },
  {
    id: 'coffee-maker',
    name: 'BrewMate Compact Drip Coffee Maker',
    category: 'Home & Kitchen',
    brand: 'BrewMate',
    price: 2599,
    originalPrice: 3999,
    rating: 4.4,
    reviews: 309,
    discount: 35,
    image:
      'https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e6?auto=format&fit=crop&w=900&q=85',
    description:
      'A compact coffee maker that brews up to six cups with a reusable filter and anti-drip function.',
    highlights: ['6-cup glass carafe', 'Reusable filter', 'Anti-drip valve', 'Keep-warm plate'],
    delivery: 'Free delivery by Friday',
    featured: false,
  },
  {
    id: 'mechanical-keyboard',
    name: 'Compact Mechanical Keyboard',
    category: 'Electronics',
    brand: 'KeyBoardy',
    price: 3299,
    originalPrice: 4999,
    rating: 4.7,
    reviews: 615,
    discount: 34,
    image:
      'https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=900&q=85',
    description:
      'A compact mechanical keyboard with tactile switches, hot-swappable sockets and warm backlighting.',
    highlights: ['75% compact layout', 'Hot-swappable switches', 'USB-C connection', 'Adjustable feet'],
    delivery: 'Free delivery by tomorrow',
    featured: false,
  },
  {
    id: 'linen-shirt',
    name: 'Relaxed Fit Linen Blend Shirt',
    category: 'Fashion',
    brand: 'North & Row',
    price: 1199,
    originalPrice: 1999,
    rating: 4.2,
    reviews: 368,
    discount: 40,
    image:
      'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=900&q=85',
    description:
      'A breathable linen-blend shirt with a relaxed fit that works for casual days and easy weekends.',
    highlights: ['Breathable linen blend', 'Relaxed silhouette', 'Button-down collar', 'Machine washable'],
    delivery: 'Free delivery by Thursday',
    featured: false,
  },
  {
    id: 'wireless-speaker',
    name: 'Mini Bluetooth Speaker',
    category: 'Electronics',
    brand: 'SoundPeak',
    price: 1299,
    originalPrice: 2199,
    rating: 4.0,
    reviews: 764,
    discount: 41,
    image:
      'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?auto=format&fit=crop&w=900&q=85',
    description:
      'Pocket-friendly wireless speaker with clear sound, a built-in microphone and all-day battery life.',
    highlights: ['12-hour playtime', 'Bluetooth 5.2', 'IPX5 splash resistance', 'Built-in microphone'],
    delivery: 'Free delivery by tomorrow',
    featured: false,
  },
  {
    id: 'yoga-mat',
    name: 'Premium Non-Slip Yoga Mat',
    category: 'Sports',
    brand: 'MoveWell',
    price: 799,
    originalPrice: 1299,
    rating: 4.5,
    reviews: 1094,
    discount: 38,
    image:
      'https://images.unsplash.com/photo-1592432678016-e910b452f9a2?auto=format&fit=crop&w=900&q=85',
    description:
      'A comfortable, non-slip exercise mat with supportive cushioning for yoga, stretching and floor workouts.',
    highlights: ['6 mm cushioning', 'Textured non-slip surface', 'Includes carry strap', 'Easy to clean'],
    delivery: 'Free delivery by Thursday',
    featured: false,
  },
  {
    id: 'minimalist-wall-clock',
    name: 'Minimalist Wooden Wall Clock',
    category: 'Home & Kitchen',
    brand: 'Mellow Home',
    price: 1099,
    originalPrice: 1799,
    rating: 4.3,
    reviews: 202,
    discount: 39,
    image:
      'https://images.unsplash.com/photo-1563861826100-9cb868fdbe1c?auto=format&fit=crop&w=900&q=85',
    description:
      'A quiet, Scandinavian-inspired wall clock with a clean wood finish for bedrooms and living spaces.',
    highlights: ['Silent sweep movement', 'Natural wood finish', 'Easy wall mount', 'Battery operated'],
    delivery: 'Free delivery by Friday',
    featured: false,
  },
];

export const getProductById = (productId) => products.find((product) => product.id === productId);
