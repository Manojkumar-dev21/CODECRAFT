"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { PageHeader } from "@/components/page-header"
import { Footer } from "@/components/footer"

const portfolioItems = [
  { title: "E-commerce Platform", image: "/portfolio-1.jpg", category: "Web Development" },
  { title: "Mobile Banking App", image: "/portfolio-2.jpg", category: "Mobile App" },
  { title: "Corporate Website Redesign", image: "/portfolio-3.jpg", category: "Web Design" },
  { title: "Social Media Dashboard", image: "/portfolio-4.jpg", category: "UI/UX Design" },
  { title: "Fitness Tracking App", image: "/portfolio-5.jpg", category: "Mobile App" },
  { title: "Restaurant Booking System", image: "/portfolio-6.jpg", category: "Web Development" },
  { title: "Travel Blog", image: "/portfolio-7.jpg", category: "Web Design" },
  { title: "Task Management Tool", image: "/portfolio-8.jpg", category: "Web Application" },
]

export default function PortfolioPage() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        <PageHeader
          title="Our Portfolio"
          subtitle="Explore our diverse range of projects showcasing our expertise in web design and development."
          badge="Our Work"
        />

        <section className="container mx-auto px-4 py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {portfolioItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`rounded-2xl overflow-hidden ${
                  index === 3 || index === 4 ? "md:col-span-2 md:row-span-2" : ""
                }`}
              >
                <Link
                  href={`/portfolio/${item.title.toLowerCase().replace(/\s+/g, "-")}`}
                  className="group block relative"
                >
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={item.title}
                    width={800}
                    height={600}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                    <h3 className="text-xl font-semibold mb-2 bg-gradient-to-b from-white via-gray-300 to-gray-500 text-transparent bg-clip-text">
                      {item.title}
                    </h3>
                    <p className="text-sm bg-gradient-to-b from-gray-300 to-gray-500 text-transparent bg-clip-text">
                      {item.category}
                    </p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

