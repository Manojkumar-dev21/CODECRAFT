"use client"

import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { Footer } from "@/components/footer"
import { FeatureCard } from "@/components/feature-card"
import Link from "next/link"
import { ArrowRight, Shield, Users, Zap } from "lucide-react"
import Image from "next/image"
import { motion } from "framer-motion"

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
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-b from-white via-gray-300 to-gray-500 text-transparent bg-clip-text">
            Why Choose Us
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature) => (
              <FeatureCard 
                key={feature.title}
                title={feature.title}
                description={feature.description}
                iconName={feature.iconName}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Separator Line */}
      <div className="w-full h-px bg-gray-800"></div>

      {/* Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-b from-white via-gray-300 to-gray-500 text-transparent bg-clip-text">
            Our Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 auto-rows-[250px] gap-4 relative">
            {/* Large Web Development Card */}
            <Link 
              href={services[0].href}
              className="md:col-span-2 lg:col-span-2 lg:row-span-2 group relative overflow-hidden border border-blue-900/50 rounded-2xl bg-blue-950/30 backdrop-blur-sm"
              style={{
                backgroundImage: `url('/card.svg')`,
                backgroundSize: '100% 100%',
                backgroundRepeat: 'no-repeat',
                padding: '1px',
                boxShadow: `
                  0 0 0 1px rgba(30, 58, 138, 0.1) inset,
                  0 4px 20px -2px rgba(30, 58, 138, 0.1),
                  0 2px 6px -1px rgba(255, 255, 255, 0.05)
                `
              }}
            >
              <div className="w-full h-full relative overflow-hidden bg-gradient-to-b from-blue-950/50 to-transparent">
                <div className="absolute inset-0 bg-black bg-opacity-50 group-hover:bg-opacity-75 transition-all duration-300" />
                <Image
                  src={services[0].image}
                  alt={services[0].title}
                  width={800}
                  height={600}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                  <h3 className="text-3xl font-bold text-white mb-3">{services[0].title}</h3>
                  <p className="text-white text-lg opacity-75 group-hover:opacity-100 transition-opacity duration-300">
                    {services[0].description}
                  </p>
                </div>
              </div>
            </Link>

            {/* Mobile Development Card */}
            <Link 
              href={services[1].href}
              className="md:col-span-2 lg:col-span-2 group relative overflow-hidden border border-blue-900/50 rounded-2xl bg-blue-950/30 backdrop-blur-sm"
              style={{
                backgroundImage: `url('/card.svg')`,
                backgroundSize: '100% 100%',
                backgroundRepeat: 'no-repeat',
                padding: '1px',
                boxShadow: `
                  0 0 0 1px rgba(30, 58, 138, 0.1) inset,
                  0 4px 20px -2px rgba(30, 58, 138, 0.1),
                  0 2px 6px -1px rgba(255, 255, 255, 0.05)
                `
              }}
            >
              <div className="w-full h-full relative overflow-hidden bg-gradient-to-b from-blue-950/50 to-transparent">
                <div className="absolute inset-0 bg-black bg-opacity-50 group-hover:bg-opacity-75 transition-all duration-300" />
                <Image
                  src={services[1].image}
                  alt={services[1].title}
                  width={800}
                  height={600}
                  className="w-full h-[250px] object-cover"
                />
                <div className="absolute inset-0 p-6 flex flex-col justify-end">
                  <h3 className="text-xl font-bold text-white mb-2">{services[1].title}</h3>
                  <p className="text-white text-sm opacity-75 group-hover:opacity-100 transition-opacity duration-300">
                    {services[1].description}
                  </p>
                </div>
              </div>
            </Link>

            {/* UI/UX Design Card */}
            <Link 
              href={services[2].href}
              className="lg:col-span-1 group relative overflow-hidden border border-blue-900/50 rounded-2xl bg-blue-950/30 backdrop-blur-sm"
              style={{
                backgroundImage: `url('/card.svg')`,
                backgroundSize: '100% 100%',
                backgroundRepeat: 'no-repeat',
                padding: '1px',
                boxShadow: `
                  0 0 0 1px rgba(30, 58, 138, 0.1) inset,
                  0 4px 20px -2px rgba(30, 58, 138, 0.1),
                  0 2px 6px -1px rgba(255, 255, 255, 0.05)
                `
              }}
            >
              <div className="w-full h-full relative overflow-hidden bg-gradient-to-b from-blue-950/50 to-transparent">
                <div className="absolute inset-0 bg-black bg-opacity-50 group-hover:bg-opacity-75 transition-all duration-300" />
                <Image
                  src={services[2].image}
                  alt={services[2].title}
                  width={800}
                  height={600}
                  className="w-full h-[250px] object-cover"
                />
                <div className="absolute inset-0 p-4 flex flex-col justify-end">
                  <h3 className="text-xl font-bold text-white mb-1">{services[2].title}</h3>
                  <p className="text-white text-xs opacity-75 group-hover:opacity-100 transition-opacity duration-300">
                    {services[2].description}
                  </p>
                </div>
              </div>
            </Link>

            {/* SEO Card */}
            <Link 
              href={services[3].href}
              className="lg:col-span-1 group relative overflow-hidden border border-blue-900/50 rounded-2xl bg-blue-950/30 backdrop-blur-sm"
              style={{
                backgroundImage: `url('/card.svg')`,
                backgroundSize: '100% 100%',
                backgroundRepeat: 'no-repeat',
                padding: '1px',
                boxShadow: `
                  0 0 0 1px rgba(30, 58, 138, 0.1) inset,
                  0 4px 20px -2px rgba(30, 58, 138, 0.1),
                  0 2px 6px -1px rgba(255, 255, 255, 0.05)
                `
              }}
            >
              <div className="w-full h-full relative overflow-hidden bg-gradient-to-b from-blue-950/50 to-transparent">
                <div className="absolute inset-0 bg-black bg-opacity-50 group-hover:bg-opacity-75 transition-all duration-300" />
                <Image
                  src={services[3].image}
                  alt={services[3].title}
                  width={800}
                  height={600}
                  className="w-full h-[250px] object-cover"
                />
                <div className="absolute inset-0 p-4 flex flex-col justify-end">
                  <h3 className="text-xl font-bold text-white mb-1">{services[3].title}</h3>
                  <p className="text-white text-xs opacity-75 group-hover:opacity-100 transition-opacity duration-300">
                    {services[3].description}
                  </p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Gray Line */}
      <div className="w-full h-px bg-gray-800"></div>

      {/* About Section */}
      <section className="py-20 bg-black relative">
        {/* Light Gray Layer */}
        <div className="absolute inset-0 bg-white/5"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-6"
            >
              <h2 className="text-4xl font-bold bg-gradient-to-b from-white via-gray-300 to-gray-500 text-transparent bg-clip-text">
                About Us
              </h2>

              {/* Decorative line below title */}
              <div className="relative w-full flex justify-center">
                <div className="w-40 h-0.5 bg-gradient-to-r from-transparent via-blue-400 to-transparent opacity-70"></div>
              </div>

              <p className="text-lg text-gray-300 leading-relaxed">
                We're a team of passionate designers and developers creating exceptional digital experiences.
                Our mission is to transform your ideas into powerful, innovative solutions that drive success.
              </p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <Link 
                  href="/about" 
                  className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors group"
                >
                  <span className="mr-2">Learn more about us</span>
                  <ArrowRight className="h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Separator Line */}
      <div className="w-full h-px bg-gray-800"></div>

      <Footer />
    </main>
  )
}
