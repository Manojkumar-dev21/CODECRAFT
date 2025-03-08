"use client"

import { motion } from "framer-motion"
import * as LucideIcons from "lucide-react"
import { LucideIcon } from "lucide-react"

interface FeatureCardProps {
  title: string
  description: string
  iconName: keyof typeof LucideIcons
}

export const FeatureCard = ({ title, description, iconName }: FeatureCardProps) => {
  const Icon = LucideIcons[iconName] as LucideIcon
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="p-6 rounded-2xl bg-white/5 hover:bg-white/10 transition-colors"
    >
      <Icon className="h-12 w-12 text-blue-500 mb-4" />
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </motion.div>
  )
}

