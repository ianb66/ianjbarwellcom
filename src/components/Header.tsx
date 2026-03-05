import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigation = [
    { name: 'About', href: '#about' },
    { name: 'Products', href: '#products' },
    { name: 'Resources', href: '#resources' },
    { name: 'Book a Call', href: '#book-a-call' },
  ];

  return (
    <header className="fixed w-full bg-white border-b border-gray-100 z-50 transition-all duration-300">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <div className="flex items-center">
            <a href="#" className="flex items-center">
              <img src="/ijb-logo.svg" alt="Ian Barwell" className="h-10 w-auto" />
            </a>
          </div>

          <div className="hidden md:block">
            <div className="flex items-center space-x-8">
              {navigation.slice(0, 3).map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium"
                >
                  {item.name}
                </a>
              ))}
              <a
                href="#book-a-call"
                className="inline-flex items-center px-5 py-2.5 bg-gradient-to-r from-blue-600 to-teal-500 text-white font-semibold rounded-full hover:opacity-90 transition-opacity duration-200 text-sm shadow-md"
              >
                Book a Free Call
              </a>
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="space-y-1 px-4 pb-3 pt-2">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
