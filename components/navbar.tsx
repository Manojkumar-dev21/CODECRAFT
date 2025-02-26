"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Code, Menu, X } from "lucide-react"
import { useState } from "react"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 bg-black/50 backdrop-blur-md"
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center space-x-2 text-xl md:text-2xl font-bold"
          >
            <span>CODE<span className="text-blue-400">CRAFT</span></span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {["Home", "Services", "About", "Contact"].map((item) => (
              <Link
                key={item}
                href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                className="text-lg hover:text-blue-400 transition-colors"
              >
                {item}
              </Link>
            ))}
            <Link
              href="/contact"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full text-sm font-medium transition-colors"
            >
              Get Started
            </Link>
          </nav>

          {/* Mobile Navigation Button */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>

          {/* Mobile Navigation Menu */}
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 100 }}
              className="absolute top-full left-0 right-0 bg-black/95 backdrop-blur-md py-4 md:hidden"
            >
              <nav className="flex flex-col items-center space-y-4">
                {["Home", "Services", "About", "Contact"].map((item) => (
                  <Link
                    key={item}
                    href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                    className="text-lg hover:text-blue-400 transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {item}
                  </Link>
                ))}
                <Link
                  href="/contact"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full text-sm font-medium transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Get Started
                </Link>
              </nav>
            </motion.div>
          )}
        </div>
      </div>
    </motion.header>
  )
}

