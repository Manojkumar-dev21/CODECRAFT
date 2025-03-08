"use client"

import Link from "next/link"
import { ArrowRight, ChevronDown, Code, Layers, Zap } from "lucide-react"
import { motion } from "framer-motion"
import { useEffect, useRef, useState } from "react"
import Image from "next/image"

export function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  // Handle mouse movement for parallax effect
  const handleMouseMove = (e: React.MouseEvent) => {
    setMousePosition({
      x: e.clientX / window.innerWidth - 0.5,
      y: e.clientY / window.innerHeight - 0.5
    })
  }

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    // Set canvas dimensions
    const setCanvasDimensions = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    
    setCanvasDimensions()
    window.addEventListener('resize', setCanvasDimensions)

    // Grid properties
    const gridSize = 60
    const gridColor = 'rgba(30, 64, 110, 0.12)'

    // Draw grid with subtle highlight at intersections
    const drawGrid = () => {
      if (!ctx || !canvas) return
      
      // Draw vertical lines
      for (let x = 0; x <= canvas.width; x += gridSize) {
        ctx.beginPath()
        ctx.strokeStyle = gridColor
        ctx.lineWidth = 1
        ctx.moveTo(x, 0)
        ctx.lineTo(x, canvas.height)
        ctx.stroke()
      }
      
      // Draw horizontal lines
      for (let y = 0; y <= canvas.height; y += gridSize) {
        ctx.beginPath()
        ctx.strokeStyle = gridColor
        ctx.lineWidth = 1
        ctx.moveTo(0, y)
        ctx.lineTo(canvas.width, y)
        ctx.stroke()
      }
      
      // Draw subtle highlights at intersections
      for (let x = 0; x <= canvas.width; x += gridSize) {
        for (let y = 0; y <= canvas.height; y += gridSize) {
          ctx.beginPath()
          ctx.fillStyle = 'rgba(64, 144, 255, 0.05)'
          ctx.arc(x, y, 2, 0, Math.PI * 2)
          ctx.fill()
        }
      }
    }
    
    // Animation loop
    const animate = () => {
      if (!ctx || !canvas) return
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      
      drawGrid()
      
      requestAnimationFrame(animate)
    }
    animate()

    return () => {
      window.removeEventListener('resize', setCanvasDimensions)
    }
  }, [])

  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Background Canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 z-0" />
      
      {/* Animated background shapes */}
      <div className="absolute inset-0 z-10">
        <div className="absolute top-20 left-[10%] w-72 h-72 bg-blue-500/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-20 right-[10%] w-96 h-96 bg-purple-500/10 rounded-full blur-[120px]" />
      </div>
      
      {/* Hero content */}
      <div className="container mx-auto px-4 relative z-20 h-screen flex flex-col">
        {/* Main content area */}
        <div className="flex-1 flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
          {/* Left side - Text content */}
          <div className="w-full md:w-1/2 space-y-6 text-center md:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-4 py-2 rounded-full bg-blue-500/10 text-blue-400 text-sm font-medium mb-4">
                Next Generation Web Development
              </span>
            </motion.div>
            
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <span className="block">Building</span>
              <div className="relative">
                <span className="bg-gradient-to-r from-blue-400 to-violet-500 text-transparent bg-clip-text inline-block">
                  Digital Excellence
                </span>
                <motion.span 
                  className="absolute inset-0 bg-gradient-to-r from-blue-500 to-violet-600 text-transparent bg-clip-text inline-block"
                  animate={{ 
                    opacity: [0, 1, 0],
                    x: [0, -4, 4, -2, 0],
                    skewX: [0, -4, 8, -6, 0]
                  }}
                  transition={{ 
                    duration: 0.5, 
                    repeat: Infinity, 
                    repeatDelay: 5,
                    times: [0, 0.2, 0.4, 0.6, 1]
                  }}
                >
                  Digital Excellence
                </motion.span>
                <motion.span 
                  className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text inline-block"
                  animate={{ 
                    opacity: [0, 0.8, 0],
                    x: [0, 4, -4, 2, 0],
                    skewX: [0, 4, -8, 6, 0]
                  }}
                  transition={{ 
                    duration: 0.4, 
                    repeat: Infinity, 
                    repeatDelay: 5.2,
                    times: [0, 0.2, 0.4, 0.6, 1]
                  }}
                >
                  Digital Excellence
                </motion.span>
              </div>
            </motion.h1>
            
            <motion.p 
              className="text-lg md:text-xl text-gray-300 max-w-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              We create cutting-edge web applications that deliver exceptional user experiences and drive business growth.
            </motion.p>
            
            <motion.div 
              className="flex flex-wrap gap-4 justify-center md:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Link 
                href="/contact" 
                className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-all flex items-center gap-2 group"
              >
                Get Started
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
              
              <Link 
                href="/portfolio" 
                className="px-6 py-3 border border-blue-500/30 hover:border-blue-500/60 text-blue-400 rounded-lg font-medium transition-all"
              >
                View Our Work
              </Link>
            </motion.div>
          </div>
          
  
          <motion.div 
            className="w-full md:w-1/2 flex justify-center items-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative w-full max-w-md">
              {/* Tech HUD style container */}
              <div className="relative rounded-2xl bg-blue-950/40 border border-blue-500/30 backdrop-blur-sm overflow-hidden p-4">
                {/* Connection lines between mockups */}
                <div className="absolute z-0 inset-0 flex flex-col items-center justify-between">
                  <motion.div 
                    className="w-0.5 h-[28%] bg-gradient-to-b from-blue-500/0 via-blue-500/50 to-blue-500/0"
                    animate={{ opacity: [0.3, 0.7, 0.3] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                  <motion.div 
                    className="w-0.5 h-[28%] bg-gradient-to-b from-blue-500/0 via-blue-500/50 to-blue-500/0"
                    animate={{ opacity: [0.3, 0.7, 0.3] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                  />
                </div>
                
                {/* 1. Code Editor Mockup */}
                <div className="w-full bg-gray-900 rounded-lg overflow-hidden mb-3 shadow-lg relative z-10">
                  <div className="flex items-center justify-between px-3 py-1 bg-gray-800">
                    <div className="flex items-center gap-1">
                      <div className="w-2 h-2 rounded-full bg-red-500" />
                      <div className="w-2 h-2 rounded-full bg-yellow-500" />
                      <div className="w-2 h-2 rounded-full bg-green-500" />
                    </div>
                    <div className="text-xs text-gray-400 flex items-center">
                      <span className="mr-2">editor</span>
                      <motion.div 
                        className="w-1.5 h-1.5 rounded-full bg-green-500"
                        animate={{ opacity: [1, 0.5, 1] }}
                        transition={{ duration: 1, repeat: Infinity }}
                      />
                    </div>
                  </div>
                  <div className="p-3 text-left relative">
                    {/* Animated code typing effect with fade - looped */}
                    <motion.div 
                      className="absolute inset-0 bg-gray-900 z-10"
                      initial={{ opacity: 1 }}
                      animate={{ opacity: 0 }}
                      transition={{ duration: 2.5, delay: 1, repeat: Infinity, repeatDelay: 8 }}
                    />
                    
                    {/* Animated cursor - looped */}
                    <motion.div 
                      className="absolute h-3 w-1.5 bg-blue-400 z-20"
                      initial={{ left: 0, top: "1rem", opacity: 1 }}
                      animate={{ 
                        left: ["0%", "30%", "60%", "90%", "100%"],
                        top: ["1rem", "2rem", "3rem", "4rem", "5rem"],
                        opacity: [1, 1, 1, 1, 0]
                      }}
                      transition={{ 
                        duration: 2, 
                        delay: 1,
                        times: [0, 0.25, 0.5, 0.75, 1],
                        repeat: Infinity,
                        repeatDelay: 8
                      }}
                    />
                    
                    <pre className="text-xs text-gray-300 font-mono">
                      <span className="text-blue-400">import</span> {"{useState}"} <span className="text-blue-400">from</span> <span className="text-green-400">'react'</span>;
                      <br /><span className="text-blue-400">import</span> {"{OpenAI}"} <span className="text-blue-400">from</span> <span className="text-green-400">'openai'</span>;
                      <br />
                      <br /><span className="text-blue-400">const</span> <span className="text-yellow-400">AIAssistant</span> = () =&gt; {"{"}
                      <br />  <span className="text-blue-400">const</span> [<span className="text-purple-400">prompt</span>, <span className="text-purple-400">setPrompt</span>] = useState(<span className="text-green-400">''</span>);
                      <br />  <span className="text-blue-400">const</span> [<span className="text-purple-400">response</span>, <span className="text-purple-400">setResponse</span>] = useState(<span className="text-green-400">''</span>);
                      <br />  <span className="text-blue-400">const</span> [<span className="text-purple-400">loading</span>, <span className="text-purple-400">setLoading</span>] = useState(<span className="text-blue-400">false</span>);
                    </pre>
                  </div>
                </div>
                
                {/* 2. AI Response visualization */}
                <motion.div 
                  className="w-full bg-blue-900/30 rounded-lg overflow-hidden shadow-lg mb-3 relative z-10"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 5, repeat: Infinity, repeatDelay: 8 }}
                >
                  <div className="flex items-center justify-between px-3 py-1 bg-blue-950/80">
                    <div className="text-xs text-blue-300 flex items-center">
                      <svg className="w-3 h-3 mr-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20Z" fill="currentColor"/>
                        <path d="M12 17C14.7614 17 17 14.7614 17 12C17 9.23858 14.7614 7 12 7C9.23858 7 7 9.23858 7 12C7 14.7614 9.23858 17 12 17Z" fill="currentColor"/>
                      </svg>
                      AI Model
                    </div>
                    <div className="text-xs text-blue-300 flex items-center">
                      <motion.span
                        className="inline-block"
                        animate={{ opacity: [1, 0.5, 1] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        processing
                      </motion.span>
                    </div>
                  </div>
                  <div className="p-2 text-left">
                    <motion.div
                      initial={{ width: "0%" }}
                      animate={{ width: "100%" }}
                      transition={{ duration: 2, delay: 5.5, repeat: Infinity, repeatDelay: 8 }}
                      className="h-2 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full mb-2"
                    />
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.5, delay: 7.5, repeat: Infinity, repeatDelay: 8 }}
                    >
                      <div className="flex justify-between items-center">
                        <p className="text-xs text-blue-100 font-mono">Analyzing code patterns...</p>
                        <motion.span 
                          className="text-xs text-blue-300"
                          animate={{ opacity: [1, 0.5, 1] }}
                          transition={{ duration: 0.8, repeat: Infinity }}
                        >
                          67%
                        </motion.span>
                      </div>
                      <div className="mt-1 grid grid-cols-3 gap-1">
                        {[1, 2, 3].map((i) => (
                          <motion.div 
                            key={i}
                            className="h-1.5 bg-blue-500/30 rounded-full"
                            animate={{ opacity: [0.3, 0.7, 0.3] }}
                            transition={{ 
                              duration: 1.5, 
                              repeat: Infinity, 
                              delay: i * 0.2 
                            }}
                          />
                        ))}
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
                
                {/* 3. Terminal window */}
                <div className="w-full bg-black rounded-lg overflow-hidden shadow-lg relative z-10">
                  <div className="flex items-center justify-between px-3 py-1 bg-gray-900">
                    <div className="text-xs text-gray-400">terminal</div>
                    <motion.div 
                      className="flex items-center gap-1"
                      animate={{ opacity: [1, 0.7, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <div className="w-1 h-1 rounded-full bg-blue-500" />
                      <div className="w-1 h-1 rounded-full bg-blue-500" />
                      <div className="w-1 h-1 rounded-full bg-blue-500" />
                    </motion.div>
                  </div>
                  <div className="p-2 text-left relative">
                    {/* Animated terminal typing effect - looped */}
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      transition={{ duration: 0.5, delay: 3, repeat: Infinity, repeatDelay: 8 }}
                    >
                      <pre className="text-xs text-green-400 font-mono">
                        $ npm install openai
                      </pre>
                    </motion.div>
                    
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3, delay: 3.5, repeat: Infinity, repeatDelay: 8 }}
                    >
                      <pre className="text-xs text-gray-400 font-mono">
                        ✓ Installing OpenAI SDK...
                      </pre>
                    </motion.div>
                    
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3, delay: 4, repeat: Infinity, repeatDelay: 8 }}
                    >
                      <pre className="text-xs text-white font-mono">
                        ✓ AI integration ready!
                      </pre>
                    </motion.div>
                    
                    {/* Blinking cursor */}
                    <motion.div 
                      className="inline-block w-1.5 h-3 bg-green-400 ml-1"
                      animate={{ opacity: [1, 0, 1] }}
                      transition={{ duration: 1, repeat: Infinity }}
                    />
                  </div>
                </div>
                
                {/* Tech HUD decorative elements */}
                <div className="absolute top-0 right-0 w-16 h-16 pointer-events-none">
                  <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 8C0 3.58172 3.58172 0 8 0H64V56C64 60.4183 60.4183 64 56 64H0V8Z" fill="none" stroke="rgba(59, 130, 246, 0.2)" strokeWidth="1" />
                    <path d="M63 1V16M48 1H63" stroke="rgba(59, 130, 246, 0.6)" strokeWidth="1" />
                  </svg>
                </div>
                <div className="absolute bottom-0 left-0 w-16 h-16 pointer-events-none">
                  <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M64 56C64 60.4183 60.4183 64 56 64H0V8C0 3.58172 3.58172 0 8 0H64V56Z" fill="none" stroke="rgba(59, 130, 246, 0.2)" strokeWidth="1" />
                    <path d="M1 63V48M16 63H1" stroke="rgba(59, 130, 246, 0.6)" strokeWidth="1" />
                  </svg>
                </div>
                
                {/* Data flow lines */}
                <motion.div 
                  className="absolute left-0 top-1/4 h-0.5 w-3 bg-blue-500/50"
                  animate={{ opacity: [0.3, 0.7, 0.3] }}
                  transition={{ duration: 1.5, repeat: Infinity, delay: 0.2 }}
                />
                <motion.div 
                  className="absolute right-0 top-1/4 h-0.5 w-3 bg-blue-500/50"
                  animate={{ opacity: [0.3, 0.7, 0.3] }}
                  transition={{ duration: 1.5, repeat: Infinity, delay: 0.5 }}
                />
                <motion.div 
                  className="absolute left-0 top-2/4 h-0.5 w-3 bg-blue-500/50"
                  animate={{ opacity: [0.3, 0.7, 0.3] }}
                  transition={{ duration: 1.5, repeat: Infinity, delay: 0.8 }}
                />
                <motion.div 
                  className="absolute right-0 top-2/4 h-0.5 w-3 bg-blue-500/50"
                  animate={{ opacity: [0.3, 0.7, 0.3] }}
                  transition={{ duration: 1.5, repeat: Infinity, delay: 1.1 }}
                />
                
                {/* Additional data flow indicators */}
                <motion.div
                  className="absolute left-1/4 top-0 w-0.5 h-3 bg-blue-500/50"
                  animate={{ opacity: [0.3, 0.7, 0.3] }}
                  transition={{ duration: 1.5, repeat: Infinity, delay: 0.3 }}
                />
                <motion.div
                  className="absolute right-1/4 bottom-0 w-0.5 h-3 bg-blue-500/50"
                  animate={{ opacity: [0.3, 0.7, 0.3] }}
                  transition={{ duration: 1.5, repeat: Infinity, delay: 0.6 }}
                />
                
                {/* Circuit-like pattern overlay */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-10" xmlns="http://www.w3.org/2000/svg">
                  <pattern id="circuit-pattern" x="0" y="0" width="50" height="50" patternUnits="userSpaceOnUse">
                    <path d="M10 0 L10 10 L0 10" stroke="rgba(59, 130, 246, 0.5)" strokeWidth="0.5" fill="none" />
                    <path d="M40 0 L40 10 L50 10" stroke="rgba(59, 130, 246, 0.5)" strokeWidth="0.5" fill="none" />
                    <path d="M10 40 L10 50 L0 50" stroke="rgba(59, 130, 246, 0.5)" strokeWidth="0.5" fill="none" />
                    <path d="M40 40 L40 50 L50 50" stroke="rgba(59, 130, 246, 0.5)" strokeWidth="0.5" fill="none" />
                    <circle cx="10" cy="10" r="1" fill="rgba(59, 130, 246, 0.5)" />
                    <circle cx="40" cy="10" r="1" fill="rgba(59, 130, 246, 0.5)" />
                    <circle cx="10" cy="40" r="1" fill="rgba(59, 130, 246, 0.5)" />
                    <circle cx="40" cy="40" r="1" fill="rgba(59, 130, 246, 0.5)" />
                  </pattern>
                  <rect x="0" y="0" width="100%" height="100%" fill="url(#circuit-pattern)" />
                </svg>
              </div>
              
              {/* Floating elements with connectivity */}
              <div className="absolute -top-3 -right-3 w-12 h-12 bg-blue-900/40 rounded-full backdrop-blur-sm border border-blue-500/30 flex items-center justify-center text-white">
                <Code className="w-5 h-5" />
                <motion.div 
                  className="absolute inset-0 rounded-full border border-blue-400/50"
                  animate={{ scale: [1, 1.2, 1], opacity: [0.7, 0, 0.7] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </div>
              
              <motion.div 
                className="absolute -bottom-3 -left-3 w-12 h-12 bg-blue-900/40 rounded-full backdrop-blur-sm border border-blue-500/30 flex items-center justify-center text-white"
                animate={{ 
                  boxShadow: ['0 0 0 rgba(59, 130, 246, 0)', '0 0 15px rgba(59, 130, 246, 0.5)', '0 0 0 rgba(59, 130, 246, 0)']
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Zap className="w-5 h-5" />
              </motion.div>
              
              <motion.div 
                className="absolute top-1/2 -right-3 transform -translate-y-1/2 w-12 h-12 bg-blue-900/40 rounded-full backdrop-blur-sm border border-blue-500/30 flex items-center justify-center text-white"
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                <div className="w-8 h-8 flex items-center justify-center">
                  <Layers className="w-5 h-5" />
                </div>
              </motion.div>
              
              {/* Connection lines between floating elements */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none" xmlns="http://www.w3.org/2000/svg">
                <motion.path 
                  d="M9 9 L9 50 L50 50" 
                  stroke="rgba(59, 130, 246, 0.3)" 
                  strokeWidth="1" 
                  fill="none"
                  strokeDasharray="5,5"
                  animate={{ strokeDashoffset: [0, -20] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                />
                <motion.path 
                  d="M100 9 L100 50 L50 50" 
                  stroke="rgba(59, 130, 246, 0.3)" 
                  strokeWidth="1" 
                  fill="none"
                  strokeDasharray="5,5"
                  animate={{ strokeDashoffset: [0, -20] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                />
              </svg>
              
              {/* Tech HUD data points */}
              <div className="absolute top-1/4 left-0 transform -translate-x-2 flex items-center">
                <motion.div 
                  className="w-1.5 h-1.5 bg-blue-500 rounded-full"
                  animate={{ opacity: [1, 0.3, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                />
                <motion.div 
                  className="h-px w-8 bg-blue-500/30 ml-1"
                  animate={{ opacity: [0.3, 0.7, 0.3] }}
                  transition={{ duration: 1.5, repeat: Infinity, delay: 0.2 }}
                />
              </div>
              
              <div className="absolute top-2/4 right-0 transform translate-x-2 flex items-center">
                <motion.div 
                  className="h-px w-8 bg-blue-500/30 mr-1"
                  animate={{ opacity: [0.3, 0.7, 0.3] }}
                  transition={{ duration: 1.5, repeat: Infinity, delay: 0.2 }}
                />
                <motion.div 
                  className="w-1.5 h-1.5 bg-blue-500 rounded-full"
                  animate={{ opacity: [1, 0.3, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                />
              </div>
              
              {/* Status indicator */}
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-blue-900/40 backdrop-blur-sm border border-blue-500/30 rounded-full px-3 py-1 text-xs text-blue-300 flex items-center">
                <motion.div 
                  className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2"
                  animate={{ opacity: [1, 0.4, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                />
                <span>system connected</span>
              </div>
              
              {/* 3D perspective effect */}
              <motion.div
                className="absolute inset-0 pointer-events-none"
                animate={{
                  rotateX: [0, 0.5, 0],
                  rotateY: [0, -0.5, 0],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                style={{
                  transformStyle: "preserve-3d",
                  perspective: "1000px"
                }}
              />
            </div>
          </motion.div>
        </div>
        
        {/* Scroll indicator */}
        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-blue-400/70"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
        >
          <span className="text-sm mb-2">Scroll to explore</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ChevronDown className="w-5 h-5" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

