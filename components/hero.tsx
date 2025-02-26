"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden px-4">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black opacity-90"></div>
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/hero-background.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Background grid */}
      <div className="absolute inset-0 z-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(255, 255, 255, 0.1) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(255, 255, 255, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: "4rem 4rem",
          }}
        ></div>
      </div>

      <div className="container mx-auto px-4 py-12 md:py-20 relative z-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center space-y-6 md:space-y-8"
        >
          <div className="inline-block">
            <div className="bg-blue-600 text-white px-3 md:px-4 py-1 rounded-full text-xs md:text-sm font-medium inline-flex items-center space-x-2">
              <span className="inline-block w-1.5 md:w-2 h-1.5 md:h-2 bg-white rounded-full animate-pulse" />
              <span>Leading Web Agency of 2025</span>
            </div>
          </div>

          <div className="relative">
            {/* Circular gradient behind all content */}
            <div 
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] blur-[80px] opacity-80"
              style={{
                background: `
                  radial-gradient(circle at 50% 50%, 
                    rgba(56, 189, 248, 0.3) 0%,    /* Light blue */
                    rgba(59, 130, 246, 0.3) 20%,   /* Blue */
                    rgba(37, 99, 235, 0.3) 40%,    /* Royal blue */
                    rgba(29, 78, 216, 0.3) 60%,    /* Dark blue */
                    rgba(30, 58, 138, 0.3) 80%,    /* Navy blue */
                    rgba(23, 37, 84, 0.3) 100%     /* Deep blue */
                  )
                `,
                backgroundSize: '400% 400%',
                animation: 'moveGradient 15s ease infinite, rotateGradient 20s linear infinite'
              }}
            />

            <div className="relative z-10 space-y-8">  {/* Added space-y-8 and wrapped all content */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="text-5xl md:text-7xl font-bold tracking-tight max-w-4xl mx-auto leading-tight bg-gradient-to-b from-white via-gray-300 to-gray-500 text-transparent bg-clip-text"
              >
                Premium Web Design & Development Agency.
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="text-xl max-w-2xl mx-auto bg-gradient-to-b from-gray-300 to-gray-500 text-transparent bg-clip-text"
              >
                Crafting exceptional digital experiences through innovative design and cutting-edge development solutions.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="flex items-center justify-center"
              >
                <Link
                  href="/contact"
                  className="bg-blue-600 text-white px-8 py-3 rounded-full text-lg font-medium hover:bg-blue-700 transition-colors"
                >
                  Start Your Project
                </Link>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

