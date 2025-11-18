'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navigation() {
  const pathname = usePathname();

  const isActive = (path: string) => {
    return pathname === path ? 'text-blue-600 font-semibold' : 'text-gray-700 hover:text-blue-600';
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">3D</span>
            </div>
            <span className="text-2xl font-bold text-gray-900">Fashion Store</span>
          </Link>

          <div className="hidden md:flex space-x-8">
            <Link href="/" className={`transition-colors ${isActive('/')}`}>
              Home
            </Link>
            <Link href="/products" className={`transition-colors ${isActive('/products')}`}>
              Products
            </Link>
            <Link href="/cart" className={`transition-colors ${isActive('/cart')}`}>
              Cart
            </Link>
          </div>

          <Link 
            href="/cart" 
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium"
          >
            View Cart
          </Link>
        </div>
      </div>

      {/* Mobile menu */}
      <div className="md:hidden border-t border-gray-200">
        <div className="flex justify-around py-3">
          <Link href="/" className={`transition-colors ${isActive('/')}`}>
            Home
          </Link>
          <Link href="/products" className={`transition-colors ${isActive('/products')}`}>
            Products
          </Link>
          <Link href="/cart" className={`transition-colors ${isActive('/cart')}`}>
            Cart
          </Link>
        </div>
      </div>
    </nav>
  );
}
