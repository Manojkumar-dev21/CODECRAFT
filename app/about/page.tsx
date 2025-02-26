"use client"

import { motion } from "framer-motion"
import { Navbar } from "@/components/navbar"
import { PageHeader } from "@/components/page-header"
import { Footer } from "@/components/footer"
import Image from "next/image"

export default function AboutPage() {
  const stats = [
    { value: "", label: "" },
    { value: "", label: "" },
    { value: "", label: "" },
    { value: "", label: "" },
  ]

  return (
    <>
      <Navbar />
      <main className="pt-20">
        <PageHeader
          title="About Us"
          subtitle="We're a team of passionate designers and developers creating exceptional digital experiences."
          badge="Our Story"
        />

        <section className="container mx-auto px-4 py-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="w-full h-auto"
            >
              <Image src="/About.png" alt="About Us" width={600} height={400} className="rounded-lg shadow-lg" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="space-y-6"
            >
              <h2 className="text-3xl font-bold bg-gradient-to-b from-white via-gray-300 to-gray-500 text-transparent bg-clip-text">
                Creating Digital Excellence
              </h2>
              <p className="bg-gradient-to-b from-gray-300 to-gray-500 text-transparent bg-clip-text">
                Founded in 2021, CodeCraft has been at the forefront of web development and design innovation. Our
                mission is to help businesses succeed in the digital world through cutting-edge technology and
                exceptional design.
              </p>
              <p className="bg-gradient-to-b from-gray-300 to-gray-500 text-transparent bg-clip-text">
                We believe in creating websites that not only look beautiful but also perform exceptionally well. Our
                team of experts combines creativity with technical expertise to deliver solutions that drive real
                business results.
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl font-bold bg-gradient-to-b from-white via-gray-300 to-gray-500 text-transparent bg-clip-text mb-2">
                  {stat.value}
                </div>
                <div className="bg-gradient-to-b from-gray-300 to-gray-500 text-transparent bg-clip-text">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
