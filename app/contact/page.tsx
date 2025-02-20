"use client"

import { motion } from "framer-motion"
import { Mail, MessageSquare, Phone, MapPin } from "lucide-react"
import { Navbar } from "@/components/navbar"
import { PageHeader } from "@/components/page-header"
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
    <>
      <Navbar />
      <main className="pt-20">
        <PageHeader
          title="Contact Us"
          subtitle="Get in touch with our team for any inquiries or support"
          badge="Contact"
        />
        
        <section className="container mx-auto px-4 py-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {contactInfo.map((info) => (
              <div
                key={info.title}
                className="bg-white/5 p-8 rounded-2xl hover:bg-white/10 transition-colors"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="bg-blue-500/10 p-4 rounded-full mb-4">
                    <info.icon className="h-6 w-6 text-blue-400" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{info.title}</h3>
                  <p className="text-blue-400 font-medium mb-2">{info.details}</p>
                  <p className="text-gray-400 text-sm">{info.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Contact Form Section */}
          <div className="mt-20 max-w-2xl mx-auto bg-white/5 p-8 rounded-2xl">
            <h2 className="text-2xl font-bold mb-6 text-center">Send us a Message</h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input
                  type="text"
                  placeholder="First Name"
                  className="bg-white/10 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  className="bg-white/10 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <input
                type="email"
                placeholder="Email Address"
                className="w-full bg-white/10 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <textarea
                placeholder="Your Message"
                rows={6}
                className="w-full bg-white/10 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

