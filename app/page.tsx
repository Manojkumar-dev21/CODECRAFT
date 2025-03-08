"use client"

import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { Footer } from "@/components/footer"
import { FeatureCard } from "@/components/feature-card"
import { ServiceCard } from "@/components/service-card"
import Link from "next/link"
import { ArrowRight, Shield, Users, Zap } from "lucide-react"
import Image from "next/image"
import { motion } from "framer-motion"
// Remove unused import since ServicesSection component is not being used

// Move features array outside of the component
const features = [
  { 
    title: "Lightning Fast", 
    description: "Optimized for speed and performance.", 
    iconName: "Zap" as const 
  },
  {
    title: "Secure by Design",
    description: "Built with security best practices to protect against attacks.",
    iconName: "Shield" as const
  },
  { 
    title: "User-Centric", 
    description: "Focused on creating the best user experience.", 
    iconName: "Users" as const 
  }
]

export default function Home() {
  const services = [
    {
      title: "Web Development",
      description: "Creating beautiful, responsive websites that engage your audience.",
      image: "/Webdesign.png",
      href: "/services/web-design",
      iconName: "Monitor" as const,
    },
    {
      title: "Mobile Development",
      description: "Building powerful mobile applications for seamless experiences.",
      image: "/Mobile developement.png",
      href: "/services/mobile-development",
      iconName: "Smartphone" as const,
    },
    {
      title: "UI/UX Design",
      description: "Designing intuitive interfaces that delight users.",
      image: "/UI.png",
      href: "/services/ui-ux-design",
      iconName: "Palette" as const,
    },
    {
      title: "SEO Optimization",
      description: "Improving your visibility online and driving organic traffic.",
      image: "/Seo.png",
      href: "/services/seo",
      iconName: "Search" as const,
    },
  ]

  const portfolioItems = [
    { title: "E-commerce Platform", image: "/portfolio-1.jpg", category: "Web Development" },
    { title: "Mobile Banking App", image: "/portfolio-2.jpg", category: "Mobile App" },
    { title: "Corporate Website Redesign", image: "/portfolio-3.jpg", category: "Web Design" },
  ]

  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />
      <Hero />

      {/* Separator Line */}
      <div className="w-full h-px bg-gray-800"></div>

      {/* Features Section */}
      <section className="py-20 bg-black relative overflow-hidden">
        {/* Tech grid background */}
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        
        {/* Animated background elements */}
        <div className="absolute inset-0 pointer-events-none">
          <motion.div 
            className="absolute top-20 left-[10%] w-72 h-72 bg-blue-500/10 rounded-full blur-[100px]"
            animate={{ 
              x: [0, 20, 0],
              y: [0, -20, 0],
            }}
            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div 
            className="absolute bottom-20 right-[10%] w-96 h-96 bg-purple-500/10 rounded-full blur-[120px]"
            animate={{ 
              x: [0, -30, 0],
              y: [0, 30, 0],
            }}
            transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
        
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 relative">
            {/* Tech HUD decorative elements */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-1 flex justify-between items-center">
              <motion.div 
                className="w-2 h-2 bg-blue-500 rounded-full"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <motion.div 
                className="w-full h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent"
                animate={{ opacity: [0.3, 0.7, 0.3] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <motion.div 
                className="w-2 h-2 bg-blue-500 rounded-full"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
              />
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <span className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/10 text-blue-400 text-sm font-medium mb-4 border border-blue-500/20 relative overflow-hidden group">
                <span className="relative z-10 flex items-center">
                  <motion.span 
                    className="w-2 h-2 bg-blue-400 rounded-full mr-2"
                    animate={{ opacity: [1, 0.4, 1] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  />
                  Why Choose Us
                  <motion.span 
                    className="ml-2 text-xs opacity-70"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: [0, 1, 0] }}
                    transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
                  >
                    [data:verified]
                  </motion.span>
                </span>
                <motion.span 
                  className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-blue-400/5"
                  animate={{ x: ['-100%', '100%'] }}
                  transition={{ duration: 3, repeat: Infinity, repeatDelay: 1 }}
                />
              </span>
            </motion.div>
            
            <motion.h2 
              className="text-3xl md:text-4xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              Advanced Technology, <span className="text-blue-500">Superior Results</span>
            </motion.h2>
            
            <motion.p 
              className="text-lg text-gray-300 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Our cutting-edge approach combines innovative technology with expert craftsmanship to deliver exceptional digital solutions.
            </motion.p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {/* Connection lines between cards */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none" xmlns="http://www.w3.org/2000/svg">
              <motion.path 
                d="M160 100 L320 100 L320 250 L480 250 L480 400 L320 400 L320 550 L160 550" 
                stroke="rgba(59, 130, 246, 0.2)" 
                strokeWidth="1" 
                fill="none"
                strokeDasharray="5,5"
                animate={{ strokeDashoffset: [0, -20] }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              />
              <motion.path 
                d="M800 100 L640 100 L640 250 L480 250 L480 400 L640 400 L640 550 L800 550" 
                stroke="rgba(59, 130, 246, 0.2)" 
                strokeWidth="1" 
                fill="none"
                strokeDasharray="5,5"
                animate={{ strokeDashoffset: [0, -20] }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              />
            </svg>
            
            {/* Feature cards */}
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                className="relative"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="relative rounded-xl bg-blue-950/40 border border-blue-500/30 backdrop-blur-sm overflow-hidden p-6 h-full">
                  {/* Tech HUD corner elements */}
                  <div className="absolute top-0 right-0 w-12 h-12 pointer-events-none">
                    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M0 6C0 2.68629 2.68629 0 6 0H48V42C48 45.3137 45.3137 48 42 48H0V6Z" fill="none" stroke="rgba(59, 130, 246, 0.2)" strokeWidth="1" />
                      <path d="M47 1V12M36 1H47" stroke="rgba(59, 130, 246, 0.6)" strokeWidth="1" />
                    </svg>
                  </div>
                  <div className="absolute bottom-0 left-0 w-12 h-12 pointer-events-none">
                    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M48 42C48 45.3137 45.3137 48 42 48H0V6C0 2.68629 2.68629 0 6 0H48V42Z" fill="none" stroke="rgba(59, 130, 246, 0.2)" strokeWidth="1" />
                      <path d="M1 47V36M12 47H1" stroke="rgba(59, 130, 246, 0.6)" strokeWidth="1" />
                    </svg>
                  </div>
                  
                  {/* Data flow lines */}
                  <motion.div 
                    className="absolute left-0 top-1/4 h-0.5 w-2 bg-blue-500/50"
                    animate={{ opacity: [0.3, 0.7, 0.3] }}
                    transition={{ duration: 1.5, repeat: Infinity, delay: index * 0.2 }}
                  />
                  <motion.div 
                    className="absolute right-0 top-1/4 h-0.5 w-2 bg-blue-500/50"
                    animate={{ opacity: [0.3, 0.7, 0.3] }}
                    transition={{ duration: 1.5, repeat: Infinity, delay: index * 0.2 + 0.3 }}
                  />
                  
                  {/* Feature icon with gradient background */}
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-blue-600 mb-4 flex items-center justify-center text-white">
                    {feature.iconName === "Zap" && <Zap className="w-6 h-6" />}
                    {feature.iconName === "Shield" && <Shield className="w-6 h-6" />}
                    {feature.iconName === "Users" && <Users className="w-6 h-6" />}
                  </div>
                  
                  <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                  
                  {/* Tech HUD status indicator */}
                  <div className="mt-4 flex items-center text-xs text-blue-400">
                    <motion.div 
                      className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2"
                      animate={{ opacity: [1, 0.4, 1] }}
                      transition={{ duration: 1.5, repeat: Infinity, delay: index * 0.1 }}
                    />
                    <span>system.module.active</span>
                  </div>
                  
                  {/* Circuit pattern overlay */}
                  <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-5" xmlns="http://www.w3.org/2000/svg">
                    <pattern id={`circuit-pattern-${index}`} x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                      <path d="M10 0 L10 10 L0 10" stroke="rgba(59, 130, 246, 0.5)" strokeWidth="0.5" fill="none" />
                      <path d="M30 0 L30 10 L40 10" stroke="rgba(59, 130, 246, 0.5)" strokeWidth="0.5" fill="none" />
                      <path d="M10 30 L10 40 L0 40" stroke="rgba(59, 130, 246, 0.5)" strokeWidth="0.5" fill="none" />
                      <path d="M30 30 L30 40 L40 40" stroke="rgba(59, 130, 246, 0.5)" strokeWidth="0.5" fill="none" />
                      <circle cx="10" cy="10" r="1" fill="rgba(59, 130, 246, 0.5)" />
                      <circle cx="30" cy="10" r="1" fill="rgba(59, 130, 246, 0.5)" />
                      <circle cx="10" cy="30" r="1" fill="rgba(59, 130, 246, 0.5)" />
                      <circle cx="30" cy="30" r="1" fill="rgba(59, 130, 246, 0.5)" />
                    </pattern>
                    <rect x="0" y="0" width="100%" height="100%" fill={`url(#circuit-pattern-${index})`} />
                  </svg>
                  
                  {/* Animated highlight effect */}
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500/5 to-transparent"
                    animate={{ x: ['-100%', '100%'] }}
                    transition={{ duration: 3, repeat: Infinity, delay: index * 0.5 }}
                  />
                </div>
                
                {/* Connecting nodes */}
                {index < features.length - 1 && (
                  <motion.div 
                    className="absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-blue-500/50 to-transparent"
                    animate={{ opacity: [0.3, 0.7, 0.3] }}
                    transition={{ duration: 1.5, repeat: Infinity, delay: index * 0.2 }}
                  />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Separator Line */}
      <div className="w-full h-px bg-gray-800"></div>

      <Footer />
    </main>
  )
}
