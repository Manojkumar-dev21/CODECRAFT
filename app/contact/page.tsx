"use client"

import { motion } from "framer-motion"
import { Mail, MessageSquare, Phone, MapPin } from "lucide-react"
import { Navbar } from "@/components/navbar"
import { PageHeader } from "@/components/page-header"
import { ContactForm } from "@/components/contact-form"
import { Footer } from "@/components/footer"

export default function ContactPage() {
  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: "+91 8072928382",
      description: "Monday - Friday from 9am to 5pm"
    },
    {
      icon: Mail,
      title: "Email",
      details: "codecraft.inc01@gmail.com",
      description: "for Sales & Collebration"
    },
    {
      icon: MapPin,
      title: "Office",
      details: "Coimbatore, Tamil Nadu",
      description: "India"
    }
  ]

  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />
      <div className="pt-20">
        <PageHeader
          title="Contact Us"
          subtitle="Get in touch with us. We'd love to hear from you."
          badge="Contact"
        />
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8 mb-20">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className="bg-zinc-900/50 p-4 sm:p-6 lg:p-8 rounded-xl text-center transform-gpu transition-all duration-300 
                    hover:bg-blue-950/30 hover:shadow-[0_0_30px_rgba(29,78,216,0.3)] hover:-translate-y-2 
                    backdrop-blur-sm border border-zinc-800/50 hover:border-blue-500/50
                    perspective-1000 hover:rotate-[0.5deg]"
                >
                  <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-gradient-to-br from-blue-500 to-blue-700 
                    rounded-full flex items-center justify-center mx-auto mb-4 lg:mb-6 
                    shadow-[0_0_20px_rgba(29,78,216,0.3)]">
                    <info.icon className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-white" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold mb-2 lg:mb-3 text-blue-500">{info.title}</h3>
                  <p className="text-white text-sm sm:text-base lg:text-lg mb-2 break-words">{info.details}</p>
                  <p className="text-zinc-400 text-xs sm:text-sm">{info.description}</p>
                </motion.div>
              ))}
            </div>
            <ContactForm />
          </div>
        </section>
      </div>
      <Footer />
    </main>
  )
}

