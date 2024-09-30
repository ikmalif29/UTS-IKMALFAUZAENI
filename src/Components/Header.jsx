import { ShoppingCart } from "lucide-react";
import { useEffect, useState } from "react";

/* eslint-disable react/prop-types */
export default function Header({ cartCount }) {
  const [showHeader, setShowHeader] = useState(false);

  // Animasi fade-in saat komponen dimuat
  useEffect(() => {
    setShowHeader(true);
  }, []);

  return (
    <header
      className={`bg-gray-900 shadow-lg py-6 sticky top-0 z-50 transition-transform duration-500 ease-in-out transform ${
        showHeader ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Judul website dengan efek hover */}
        <h1 className="text-4xl font-extrabold text-white hover:text-gray-400 transition-colors duration-300 cursor-pointer">
          Clotes Shop
        </h1>

        {/* Icon Cart */}
        <div className="relative">
          <ShoppingCart className="w-10 h-10 text-white hover:text-gray-400 transition-transform duration-300 transform hover:scale-125 cursor-pointer" />
          {/* Badge untuk menunjukkan jumlah item di cart */}
          <span className="absolute top-0 right-0 bg-red-600 text-white text-sm font-bold rounded-full h-6 w-6 flex items-center justify-center">
            {cartCount}
          </span>
        </div>
      </div>
    </header>
  );
}
