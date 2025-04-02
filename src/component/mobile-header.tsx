"use client";

import Image from "next/image";
import Link from "next/link";
import { useCalculator } from "../context/CalculatorContext";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function MobileHeader() {
  const { showCalculator, setShowCalculator } = useCalculator();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleCalculatorClick = () => {
    setShowCalculator(!showCalculator);
    setIsMenuOpen(false);
    setTimeout(() => {
      const calculatorElement = document.getElementById("calculator");
      if (calculatorElement) {
        calculatorElement.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="md:hidden w-full bg-white shadow-md fixed top-0 left-0 right-0 z-50">
      <div className="max-w-[1440px] mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Image
              src="/logo3.png"
              alt="Girl illustration"
              width={120}
              height={58}
              className="w-24 h-auto"
              priority
            />
          </div>

          <button
            onClick={toggleMenu}
            className="p-3 rounded-full bg-white/80 shadow-lg text-gray-700 hover:text-gray-900 focus:outline-none"
            aria-label="Toggle menu"
            suppressHydrationWarning={true}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        <AnimatePresence>
          {isMenuOpen && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-slate-800/50 z-40"
                onClick={() => setIsMenuOpen(false)}
              />
              <motion.nav
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ type: "spring", damping: 20 }}
                className="fixed top-0 right-0 h-full w-64 bg-white shadow-xl z-50"
              >
                <div className="flex flex-col gap-4 p-6 pt-20">
                  <Link
                    href="/"
                    className="text-gray-900 font-bold hover:text-purple-500 transition-colors px-4 py-2 rounded-lg hover:bg-gray-100"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Home
                  </Link>
                  <Link
                    href="/About-us"
                    className="text-gray-900 font-medium hover:text-purple-500 transition-colors px-4 py-2 rounded-lg hover:bg-gray-100"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    About Us
                  </Link>
                  <Link
                    href="/Contact-us"
                    className="text-gray-900 font-medium hover:text-purple-500 transition-colors px-4 py-2 rounded-lg hover:bg-gray-100"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Contact Us
                  </Link>
                  <Link
                    href="/Blogs#blog-list"
                    className="text-gray-900 font-medium hover:text-purple-500 transition-colors px-4 py-2 rounded-lg hover:bg-gray-100"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Blogs
                  </Link>
                  <Link href="/Calculate">
                    <button
                      onClick={handleCalculatorClick}
                      className="bg-purple-500 text-white px-6 py-2 rounded-full font-medium hover:bg-purple-600 transition-colors w-full text-center mt-2"
                      suppressHydrationWarning
                    >
                      Calculator
                    </button>
                  </Link>
                </div>
              </motion.nav>
            </>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
