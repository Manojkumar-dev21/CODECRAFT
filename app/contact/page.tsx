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
            <ContactForm />
          </div>
        </section>
      </div>
      <Footer />
    </main>
  )
}

