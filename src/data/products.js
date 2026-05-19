const products = [
  {
    id: 'p1',
    name: 'Pixel Nova 5G',
    category: 'Smartphones',
    price: 449,
    rating: 4.5,
    description: 'Affordable 5G smartphone with excellent camera and clean Android experience.',
    image: 'https://images.unsplash.com/photo-1546054454-aa26e2b734c7?auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 'p2',
    name: 'iPhone SE (2022)',
    category: 'Smartphones',
    price: 429,
    rating: 4.3,
    description: 'Compact Apple phone with A15 performance in a budget-friendly form.',
    image: 'https://images.unsplash.com/photo-1512054502232-10a0a035d672?auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 'p3',
    name: 'Samsung Galaxy A54',
    category: 'Smartphones',
    price: 349,
    rating: 4.4,
    description: 'Balanced mid-range phone with AMOLED display and long battery life.',
    image: 'https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 'p4',
    name: 'Dell G15 Gaming',
    category: 'Laptops',
    price: 999,
    rating: 4.2,
    description: 'Entry-level gaming laptop with RTX graphics and high-refresh display.',
    image: 'https://images.unsplash.com/photo-1603302576837-37561b2e2302?auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 'p5',
    name: 'ASUS ROG Strix G16',
    category: 'Laptops',
    price: 1499,
    rating: 4.7,
    description: 'High-performance gaming laptop with powerful CPU and cooling.',
    image: 'https://images.unsplash.com/photo-1593640408182-31c70c8268f5?auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 'p6',
    name: 'MacBook Air M2',
    category: 'Laptops',
    price: 1199,
    rating: 4.8,
    description: 'Ultra-thin laptop with M2 chip, excellent battery life and performance.',
    image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 'p7',
    name: 'Sony WH-1000XM5',
    category: 'Headphones',
    price: 349,
    rating: 4.9,
    description: 'Industry-leading noise-cancelling headphones with premium sound.',
    image: 'https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 'p8',
    name: 'Bose QuietComfort 45',
    category: 'Headphones',
    price: 279,
    rating: 4.6,
    description: 'Comfortable headphones with balanced sound and great ANC.',
    image: 'https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 'p9',
    name: 'Anker Soundcore Life Q30',
    category: 'Headphones',
    price: 79,
    rating: 4.1,
    description: 'Affordable over-ear headphones with strong battery life.',
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 'p10',
    name: 'FitTrack Versa Watch',
    category: 'Smartwatches',
    price: 149,
    rating: 4.0,
    description: 'Stylish smartwatch with fitness tracking and AMOLED screen.',
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 'p11',
    name: 'Samsung Galaxy Tab S8',
    category: 'Tablets',
    price: 699,
    rating: 4.5,
    description: 'Powerful Android tablet with S Pen support and high-refresh display.',
    image: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 'p12',
    name: 'iPad Air (5th Gen)',
    category: 'Tablets',
    price: 599,
    rating: 4.7,
    description: 'Lightweight tablet with M1 performance and great ecosystem.',
    image: 'https://images.unsplash.com/photo-1585790050230-5dd28404ccb9?auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 'p13',
    name: 'Logitech MX Master 3S',
    category: 'Accessories',
    price: 99,
    rating: 4.8,
    description: 'Ergonomic wireless mouse with ultra-fast scrolling and customizable buttons.',
    image: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 'p14',
    name: 'Keychron K2 Mechanical Keyboard',
    category: 'Accessories',
    price: 89,
    rating: 4.6,
    description: 'Compact wireless mechanical keyboard perfect for Mac and Windows setups.',
    image: 'https://images.unsplash.com/photo-1595225476474-87563907a212?auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 'p15',
    name: 'Apple Watch Series 9',
    category: 'Smartwatches',
    price: 399,
    rating: 4.9,
    description: 'Advanced smartwatch with health tracking, ECG, and bright display.',
    image: 'https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 'p16',
    name: 'Garmin Fenix 7',
    category: 'Smartwatches',
    price: 699,
    rating: 4.7,
    description: 'Rugged multisport GPS watch with solar charging capabilities.',
    image: 'https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 'p17',
    name: 'Samsung Odyssey G7 32"',
    category: 'Monitors',
    price: 699,
    rating: 4.5,
    description: 'Curved gaming monitor with 240Hz refresh rate and 1ms response time.',
    image: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 'p18',
    name: 'LG UltraFine 4K',
    category: 'Monitors',
    price: 499,
    rating: 4.6,
    description: 'Stunning 4K display designed specifically for creative professionals.',
    image: 'https://images.unsplash.com/photo-1586210579191-33b45e38fa2c?auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 'p19',
    name: 'Rode PodMic',
    category: 'Audio',
    price: 99,
    rating: 4.7,
    description: 'Broadcast-grade dynamic microphone perfect for podcasting and streaming.',
    image: 'https://images.unsplash.com/photo-1598550476439-6847785fcea6?auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 'p20',
    name: 'Elgato Stream Deck MK.2',
    category: 'Accessories',
    price: 149,
    rating: 4.8,
    description: 'Customizable studio controller with 15 macro keys to boost productivity.',
    image: 'https://images.unsplash.com/photo-1616423641402-8084b423985d?auto=format&fit=crop&w=400&q=80'
  }
]

export default products
