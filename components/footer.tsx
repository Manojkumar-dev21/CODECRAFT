import { Code, FacebookIcon, Instagram, Linkedin, Twitter } from "lucide-react"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black relative">
      {/* Grid Background with Gradient */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-950/20 to-transparent"></div>
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(56, 189, 248, 0.05) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(56, 189, 248, 0.05) 1px, transparent 1px)
            `,
            backgroundSize: "4rem 4rem",
          }}
        ></div>
      </div>

      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <span className="text-xl md:text-2xl font-bold">
                CODE<span className="text-blue-400">CRAFT</span>
              </span>
            </Link>
            <p className="text-sm text-gray-400">
              Creating exceptional digital experiences through innovative design and development solutions.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              {["Web Design", "Development", "UI/UX Design", "SEO", "Consulting"].map((service) => (
                <li key={service}>
                  <Link href="/services" className="text-sm text-gray-400 hover:text-white transition-colors">
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              {["About","Careers", "Contact"].map((item) => (
                <li key={item}>
                  <Link
                    href={`/${item.toLowerCase()}`}
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold mb-4">Connect</h3>
            <div className="flex space-x-4">
              {[Twitter, FacebookIcon, Instagram, Linkedin].map((Icon, i) => (
                <Link key={i} href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Icon className="h-5 w-5" />
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} CODECRAFT. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

