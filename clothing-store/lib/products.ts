export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  category: 'tshirt' | 'jacket' | 'pants' | 'dress' | 'hoodie';
  colors: string[];
  sizes: string[];
  image: string;
}

export const products: Product[] = [
  {
    id: '1',
    name: 'Classic White T-Shirt',
    price: 29.99,
    description: 'Premium cotton t-shirt with a modern fit. Perfect for everyday wear.',
    category: 'tshirt',
    colors: ['#FFFFFF', '#000000', '#3B82F6', '#EF4444'],
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    image: '/products/tshirt-white.jpg'
  },
  {
    id: '2',
    name: 'Denim Jacket',
    price: 89.99,
    description: 'Classic denim jacket with a vintage wash. A timeless wardrobe essential.',
    category: 'jacket',
    colors: ['#4A5568', '#2D3748', '#1A202C'],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    image: '/products/jacket-denim.jpg'
  },
  {
    id: '3',
    name: 'Slim Fit Jeans',
    price: 69.99,
    description: 'Comfortable slim fit jeans with stretch fabric for all-day comfort.',
    category: 'pants',
    colors: ['#1E3A8A', '#1F2937', '#000000'],
    sizes: ['28', '30', '32', '34', '36', '38'],
    image: '/products/jeans-slim.jpg'
  },
  {
    id: '4',
    name: 'Summer Floral Dress',
    price: 79.99,
    description: 'Light and breezy floral dress perfect for summer occasions.',
    category: 'dress',
    colors: ['#FCA5A5', '#FBBF24', '#A78BFA', '#34D399'],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    image: '/products/dress-floral.jpg'
  },
  {
    id: '5',
    name: 'Cozy Hoodie',
    price: 59.99,
    description: 'Ultra-soft hoodie with a relaxed fit. Perfect for lounging or casual outings.',
    category: 'hoodie',
    colors: ['#6B7280', '#000000', '#DC2626', '#3B82F6'],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    image: '/products/hoodie-cozy.jpg'
  },
  {
    id: '6',
    name: 'Leather Bomber Jacket',
    price: 199.99,
    description: 'Premium leather bomber jacket with a modern silhouette.',
    category: 'jacket',
    colors: ['#000000', '#78350F', '#1F2937'],
    sizes: ['S', 'M', 'L', 'XL'],
    image: '/products/jacket-leather.jpg'
  },
  {
    id: '7',
    name: 'Cargo Pants',
    price: 74.99,
    description: 'Functional cargo pants with multiple pockets and durable fabric.',
    category: 'pants',
    colors: ['#78716C', '#065F46', '#000000', '#92400E'],
    sizes: ['28', '30', '32', '34', '36', '38'],
    image: '/products/pants-cargo.jpg'
  },
  {
    id: '8',
    name: 'Elegant Evening Dress',
    price: 149.99,
    description: 'Sophisticated evening dress with elegant draping and premium fabric.',
    category: 'dress',
    colors: ['#000000', '#DC2626', '#1E3A8A', '#6B21A8'],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    image: '/products/dress-evening.jpg'
  }
];

export const getProductById = (id: string): Product | undefined => {
  return products.find(product => product.id === id);
};

export const getProductsByCategory = (category: string): Product[] => {
  return products.filter(product => product.category === category);
};
