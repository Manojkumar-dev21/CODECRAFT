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
      icon: Zap,
    },
    {
      title: "Secure by Design",
      description: "Built with security best practices to protect your data and users.",
      icon: Shield,
    },
    {
      title: "Mobile First",
      description: "Responsive designs that work perfectly on all devices and screen sizes.",
      icon: Smartphone,
    },
    {
      title: "Modern Tech Stack",
      description: "Using the latest technologies to build scalable and maintainable applications.",
      icon: Code,
    },
    {
      title: "SEO Optimized",
      description: "Built with search engines in mind to improve your online visibility.",
      icon: BarChart,
    },
    {
      title: "User-Centric",
      description: "Focused on creating the best possible experience for your users.",
      icon: Users,
    },
    {
      title: "Quick Delivery",
      description: "Efficient development process to get your project launched faster.",
      icon: Clock,
    },
    {
      title: "Cloud Ready",
      description: "Designed to work seamlessly with modern cloud infrastructure.",
      icon: Cloud,
    },
    {
      title: "Scalable Solutions",
      description: "Built to grow with your business and handle increasing demands.",
      icon: Rocket,
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
              <FeatureCard key={feature.title} {...feature}>
                <h3 className="text-xl font-semibold mb-2 bg-gradient-to-b from-white via-gray-300 to-gray-500 text-transparent bg-clip-text">
                  {feature.title}
                </h3>
                <p className="bg-gradient-to-b from-gray-300 to-gray-500 text-transparent bg-clip-text">
                  {feature.description}
                </p>
              </FeatureCard>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

