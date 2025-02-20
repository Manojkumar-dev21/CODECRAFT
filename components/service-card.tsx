"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

interface ServiceCardProps {
  title: string
  description: string
  image: string
  href: string
}

export function ServiceCard({ title, description, image, href }: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="group relative overflow-hidden rounded-2xl bg-white/5"
    >
      <div className="relative aspect-video overflow-hidden">
        <Image
          src={image || "/public"}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-400 mb-4">{description}</p>
        <Link href={href} className="inline-flex items-center text-blue-500 hover:text-blue-400 transition-colors">
          Learn more <ArrowRight className="ml-2 h-4 w-4" />
        </Link>
      </div>
    </motion.div>
  )
}

