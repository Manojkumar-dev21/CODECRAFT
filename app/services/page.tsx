"use client"

import { Navbar } from "@/components/navbar"
import { PageHeader } from "@/components/page-header"
import { Footer } from "@/components/footer"
import Link from "next/link"
import Image from "next/image"

export default function ServicesPage() {
  const services = [
    {
      title: "Web Development",
      description: "Creating beautiful, responsive websites that engage your audience.",
      image: "/Webdesign.png",
      href: "/services/web-design",
    },
    {
      title: "Mobile Development",
      description: "Building powerful mobile applications for seamless experiences.",
      image: "/Mobile developement.png",
      href: "/services/mobile-development",
    },
    {
      title: "UI/UX Design",
      description: "Designing intuitive interfaces that delight users.",
      image: "/UI.png",
      href: "/services/ui-ux-design",
    },
    {
      title: "SEO Optimization",
      description: "Improving your visibility online and driving organic traffic.",
      image: "/Seo.png",
      href: "/services/seo",
    },
  ]

  return (
    <>
      <Navbar />
      <main className="pt-20">
        <PageHeader
          title="Our Services"
          subtitle="Comprehensive solutions for your digital needs"
          badge="Services"
        />
        
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 auto-rows-[250px] gap-4 relative">
              {/* Large Web Development Card */}
              <Link 
                href={services[0].href}
                className="md:col-span-2 lg:col-span-2 lg:row-span-2 group relative overflow-hidden border border-blue-900/50 rounded-2xl bg-blue-950/30 backdrop-blur-sm"
                style={{
                  backgroundImage: `url('/card.svg')`,
                  backgroundSize: '100% 100%',
                  backgroundRepeat: 'no-repeat',
                  padding: '1px',
                  boxShadow: `
                    0 0 0 1px rgba(30, 58, 138, 0.1) inset,
                    0 4px 20px -2px rgba(30, 58, 138, 0.1),
                    0 2px 6px -1px rgba(255, 255, 255, 0.05)
                  `
                }}
              >
                <div className="w-full h-full relative overflow-hidden bg-gradient-to-b from-blue-950/50 to-transparent">
                  <div className="absolute inset-0 bg-black bg-opacity-50 group-hover:bg-opacity-75 transition-all duration-300" />
                  <Image
                    src={services[0].image}
                    alt={services[0].title}
                    width={800}
                    height={600}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 p-8 flex flex-col justify-end">
                    <h3 className="text-3xl font-bold text-white mb-3">{services[0].title}</h3>
                    <p className="text-white text-lg opacity-75 group-hover:opacity-100 transition-opacity duration-300">
                      {services[0].description}
                    </p>
                  </div>
                </div>
              </Link>

              {/* Mobile Development Card */}
              <Link 
                href={services[1].href}
                className="md:col-span-2 lg:col-span-2 group relative overflow-hidden border border-blue-900/50 rounded-2xl bg-blue-950/30 backdrop-blur-sm"
                style={{
                  backgroundImage: `url('/card.svg')`,
                  backgroundSize: '100% 100%',
                  backgroundRepeat: 'no-repeat',
                  padding: '1px',
                  boxShadow: `
                    0 0 0 1px rgba(30, 58, 138, 0.1) inset,
                    0 4px 20px -2px rgba(30, 58, 138, 0.1),
                    0 2px 6px -1px rgba(255, 255, 255, 0.05)
                  `
                }}
              >
                <div className="absolute inset-0 bg-black bg-opacity-50 group-hover:bg-opacity-75 transition-all duration-300" />
                <Image
                  src={services[1].image}
                  alt={services[1].title}
                  width={800}
                  height={600}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                  <h3 className="text-3xl font-bold text-white mb-3">{services[1].title}</h3>
                  <p className="text-white text-lg opacity-75 group-hover:opacity-100 transition-opacity duration-300">
                    {services[1].description}
                  </p>
                </div>
              </Link>

              {/* UI/UX Design Card */}
              <Link 
                href={services[2].href}
                className="lg:col-span-1 group relative overflow-hidden border border-blue-900/50 rounded-2xl bg-blue-950/30 backdrop-blur-sm"
                style={{
                  backgroundImage: `url('/card.svg')`,
                  backgroundSize: '100% 100%',
                  backgroundRepeat: 'no-repeat',
                  padding: '1px',
                  boxShadow: `
                    0 0 0 1px rgba(30, 58, 138, 0.1) inset,
                    0 4px 20px -2px rgba(30, 58, 138, 0.1),
                    0 2px 6px -1px rgba(255, 255, 255, 0.05)
                  `
                }}
              >
                <div className="absolute inset-0 bg-black bg-opacity-50 group-hover:bg-opacity-75 transition-all duration-300" />
                <Image
                  src={services[2].image}
                  alt={services[2].title}
                  width={800}
                  height={600}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                  <h3 className="text-3xl font-bold text-white mb-3">{services[2].title}</h3>
                  <p className="text-white text-lg opacity-75 group-hover:opacity-100 transition-opacity duration-300">
                    {services[2].description}
                  </p>
                </div>
              </Link>

              {/* SEO Card */}
              <Link 
                href={services[3].href}
                className="lg:col-span-1 group relative overflow-hidden border border-blue-900/50 rounded-2xl bg-blue-950/30 backdrop-blur-sm"
                style={{
                  backgroundImage: `url('/card.svg')`,
                  backgroundSize: '100% 100%',
                  backgroundRepeat: 'no-repeat',
                  padding: '1px',
                  boxShadow: `
                    0 0 0 1px rgba(30, 58, 138, 0.1) inset,
                    0 4px 20px -2px rgba(30, 58, 138, 0.1),
                    0 2px 6px -1px rgba(255, 255, 255, 0.05)
                  `
                }}
              >
                <div className="absolute inset-0 bg-black bg-opacity-50 group-hover:bg-opacity-75 transition-all duration-300" />
                <Image
                  src={services[3].image}
                  alt={services[3].title}
                  width={800}
                  height={600}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                  <h3 className="text-3xl font-bold text-white mb-3">{services[3].title}</h3>
                  <p className="text-white text-lg opacity-75 group-hover:opacity-100 transition-opacity duration-300">
                    {services[3].description}
                  </p>
                </div>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

