"use client"

import { motion } from "framer-motion"
import { Navbar } from "@/components/navbar"
import { PageHeader } from "@/components/page-header"
import { Footer } from "@/components/footer"
import Image from "next/image"
import { Award, CheckCircle, Users, Code } from "lucide-react"

export default function AboutPage() {
  const stats = [
    { value: "10+", label: "Years Experience", icon: <Award className="w-6 h-6" /> },
    { value: "250+", label: "Projects Completed", icon: <CheckCircle className="w-6 h-6" /> },
    { value: "120+", label: "Happy Clients", icon: <Users className="w-6 h-6" /> },
    { value: "15+", label: "Tech Stack", icon: <Code className="w-6 h-6" /> },
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
              className="w-full h-auto relative"
            >
              {/* Tech frame around image */}
              <div className="absolute -inset-4 border border-blue-500/30 rounded-xl">
                {/* Corner elements */}
                <div className="absolute top-0 right-0 w-8 h-8">
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 4C0 1.79086 1.79086 0 4 0H32V28C32 30.2091 30.2091 32 28 32H0V4Z" fill="none" stroke="rgba(59, 130, 246, 0.2)" strokeWidth="1" />
                    <path d="M31 1V8M24 1H31" stroke="rgba(59, 130, 246, 0.6)" strokeWidth="1" />
                  </svg>
                </div>
                <div className="absolute bottom-0 left-0 w-8 h-8">
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M32 28C32 30.2091 30.2091 32 28 32H0V4C0 1.79086 1.79086 0 4 0H32V28Z" fill="none" stroke="rgba(59, 130, 246, 0.2)" strokeWidth="1" />
                    <path d="M1 31V24M8 31H1" stroke="rgba(59, 130, 246, 0.6)" strokeWidth="1" />
                  </svg>
                </div>
              </div>
              
              <Image src="/About.png" alt="About Us" width={600} height={400} className="rounded-lg shadow-lg relative z-10" />
              
              {/* Scanning effect */}
              <motion.div 
                className="absolute inset-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500/50 to-transparent z-20"
                animate={{ top: ["0%", "100%", "0%"] }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="space-y-6"
            >
              <div className="relative mb-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <span className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/10 text-blue-400 text-sm font-medium mb-4 border border-blue-500/20 relative overflow-hidden group">
                    <span className="relative z-10 flex items-center">
                      <motion.span 
                        className="w-2 h-2 bg-blue-400 rounded-full mr-2"
                        animate={{ opacity: [1, 0.4, 1] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      />
                      Our Mission
                    </span>
                    <motion.span 
                      className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-blue-400/5"
                      animate={{ x: ['-100%', '100%'] }}
                      transition={{ duration: 3, repeat: Infinity, repeatDelay: 1 }}
                    />
                  </span>
                </motion.div>
              </div>
              
              <h2 className="text-3xl font-bold text-white">
                Creating Digital <span className="text-blue-500">Excellence</span>
              </h2>
              
              <p className="text-gray-300">
                Founded in 2021, CodeCraft has been at the forefront of web development and design innovation. Our
                mission is to help businesses succeed in the digital world through cutting-edge technology and
                exceptional design.
              </p>
              
              <p className="text-gray-300">
                We believe in creating websites that not only look beautiful but also perform exceptionally well. Our
                team of experts combines creativity with technical expertise to deliver solutions that drive real
                business results.
              </p>
              
              {/* Tech-style decorative element */}
              <motion.div 
                className="w-32 h-1 bg-gradient-to-r from-blue-500 to-purple-500"
                initial={{ width: 0 }}
                whileInView={{ width: "8rem" }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              />
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
                className="relative rounded-xl bg-blue-950/40 border border-blue-500/30 backdrop-blur-sm overflow-hidden p-6"
              >
                {/* Tech HUD corner elements */}
                <div className="absolute top-0 right-0 w-6 h-6 pointer-events-none">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 3C0 1.34315 1.34315 0 3 0H24V21C24 22.6569 22.6569 24 21 24H0V3Z" fill="none" stroke="rgba(59, 130, 246, 0.2)" strokeWidth="1" />
                    <path d="M23 1V6M18 1H23" stroke="rgba(59, 130, 246, 0.6)" strokeWidth="1" />
                  </svg>
                </div>
                
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-blue-600 mb-4 flex items-center justify-center text-white">
                  {stat.icon}
                </div>
                
                <div className="text-3xl font-bold text-blue-400 mb-1">
                  {stat.value}
                </div>
                
                <div className="text-gray-300">
                  {stat.label}
                </div>
                
                {/* Tech HUD status indicator */}
                <div className="mt-4 flex items-center text-xs text-blue-400">
                  <motion.div 
                    className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2"
                    animate={{ opacity: [1, 0.4, 1] }}
                    transition={{ duration: 1.5, repeat: Infinity, delay: index * 0.1 }}
                  />
                  <span>data.verified</span>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
        
        {/* Team Section */}
        <section className="container mx-auto px-4 py-20">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/10 text-blue-400 text-sm font-medium mb-4 border border-blue-500/20">
                <motion.span 
                  className="w-2 h-2 bg-blue-400 rounded-full mr-2"
                  animate={{ opacity: [1, 0.4, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                />
                Our Team
              </span>
            </motion.div>
            
            <h2 className="text-3xl font-bold text-white mb-6">Meet Our <span className="text-blue-500">Experts</span></h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Our talented team combines creativity, technical expertise, and industry experience to deliver exceptional results.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Team member cards would go here */}
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
