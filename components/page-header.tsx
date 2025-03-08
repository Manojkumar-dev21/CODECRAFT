"use client"

import { motion } from "framer-motion"

interface PageHeaderProps {
  title: string
  subtitle: string
  badge?: string
}

export function PageHeader({ title, subtitle, badge }: PageHeaderProps) {
  return (
    <div className="container mx-auto px-4 py-20 text-center space-y-8">
      {badge && (
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="inline-block">
          <div className="bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-medium">{badge}</div>
        </motion.div>
      )}

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="text-4xl md:text-5xl font-bold tracking-tight bg-gradient-to-b from-white via-gray-300 to-gray-500 text-transparent bg-clip-text"
      >
        {title}
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="max-w-2xl mx-auto text-lg bg-gradient-to-b from-gray-300 to-gray-500 text-transparent bg-clip-text"
      >
        {subtitle}
      </motion.p>
    </div>
  )
}

