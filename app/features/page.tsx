import { Navbar } from "@/components/navbar"
import { PageHeader } from "@/components/page-header"
import { FeatureCard } from "@/components/feature-card"
import { Footer } from "@/components/footer"
import { Rocket, Shield, Smartphone, Zap, Code, BarChart, Users, Clock, Cloud } from "lucide-react"

export default function FeaturesPage() {
  const features = [
    {
      title: "Lightning Fast",
      description: "Optimized for speed and performance to provide the best user experience.",
      iconName: "Zap" as const
    },
    {
      title: "Secure by Design",
      description: "Built with security best practices to protect your data and users.",
      iconName: "Shield" as const
    },
    {
      title: "Mobile First",
      description: "Responsive designs that work perfectly on all devices and screen sizes.",
      iconName: "Smartphone" as const
    },
    {
      title: "Modern Tech Stack",
      description: "Using the latest technologies to build scalable and maintainable applications.",
      iconName: "Code" as const
    },
    {
      title: "SEO Optimized",
      description: "Built with search engines in mind to improve your online visibility.",
      iconName: "BarChart" as const
    },
    {
      title: "User-Centric",
      description: "Focused on creating the best possible experience for your users.",
      iconName: "Users" as const
    },
    {
      title: "Quick Delivery",
      description: "Efficient development process to get your project launched faster.",
      iconName: "Clock" as const
    },
    {
      title: "Cloud Ready",
      description: "Designed to work seamlessly with modern cloud infrastructure.",
      iconName: "Cloud" as const
    },
    {
      title: "Scalable Solutions",
      description: "Built to grow with your business and handle increasing demands.",
      iconName: "Rocket" as const
    },
  ]

  return (
    <>
      <Navbar />
      <main className="pt-20">
        <PageHeader
          title="Our Features"
          subtitle="Discover what makes our web development services stand out from the rest."
          badge="Why Choose Us"
        />
        <section className="container mx-auto px-4 py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature) => (
              <FeatureCard 
                key={feature.title} 
                title={feature.title}
                description={feature.description}
                iconName={feature.iconName}
              />
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

