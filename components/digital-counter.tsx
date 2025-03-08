"use client"

import { useState, useEffect, ReactNode } from "react"
import { motion } from "framer-motion"

interface DigitalCounterProps {
  value: number
  label: string
  icon: ReactNode
  delay?: number
}

export function DigitalCounter({ value, label, icon, delay = 0 }: DigitalCounterProps) {
  const [count, setCount] = useState(0)
  const [isFlipping, setIsFlipping] = useState(false)
  
  useEffect(() => {
    const timeout = setTimeout(() => {
      const duration = 2000 // 2 seconds to count up
      const interval = Math.max(50, duration / value) // Update every 50ms or slower
      
      let startTime: number | null = null
      let animationFrame: number
      
      const updateCounter = (timestamp: number) => {
        if (!startTime) startTime = timestamp
        const progress = timestamp - startTime
        const percentage = Math.min(progress / duration, 1)
        
        const nextCount = Math.floor(percentage * value)
        
        if (nextCount !== count) {
          setCount(nextCount)
          setIsFlipping(true)
          setTimeout(() => setIsFlipping(false), 300)
        }
        
        if (percentage < 1) {
          animationFrame = requestAnimationFrame(updateCounter)
        } else {
          setCount(value)
        }
      }
      
      animationFrame = requestAnimationFrame(updateCounter)
      
      return () => cancelAnimationFrame(animationFrame)
    }, delay * 1000)
    
    return () => clearTimeout(timeout)
  }, [value, delay, count])
  
  return (
    <motion.div 
      className="relative rounded-xl bg-blue-950/40 border border-blue-500/30 backdrop-blur-sm overflow-hidden p-6"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
    >
      {/* Tech HUD corner elements */}
      <div className="absolute top-0 right-0 w-8 h-8 pointer-events-none">
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 4C0 1.79086 1.79086 0 4 0H32V28C32 30.2091 30.2091 32 28 32H0V4Z" fill="none" stroke="rgba(59, 130, 246, 0.2)" strokeWidth="1" />
          <path d="M31 1V8M24 1H31" stroke="rgba(59, 130, 246, 0.6)" strokeWidth="1" />
        </svg>
      </div>
      
      <div className="flex items-center mb-4">
        <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-white mr-3">
          {icon}
        </div>
        <h3 className="text-lg font-medium text-gray-200">{label}</h3>
      </div>
      
      <div className="flex items-baseline">
        <div className={`text-4xl font-bold text-blue-400 ${isFlipping ? 'digit-flip' : ''}`}>
          {count}
        </div>
        <div className="text-lg text-blue-300 ml-1">+</div>
      </div>
      
      {/* Data flow lines */}
      <motion.div 
        className="absolute left-0 bottom-1/4 h-0.5 w-2 bg-blue-500/50"
        animate={{ opacity: [0.3, 0.7, 0.3] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      />
      
      {/* Tech HUD status indicator */}
      <div className="mt-4 flex items-center text-xs text-blue-400">
        <motion.div 
          className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2"
          animate={{ opacity: [1, 0.4, 1] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        />
        <span>data.verified</span>
      </div>
    </motion.div>
  )
}