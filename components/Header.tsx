"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"
import { useState, useEffect } from "react"
import { ThemeToggle } from "./theme-toggle"
import { useTheme } from "next-themes"
import { Boxes } from "./ui/background-boxes"

const navigation = [
  { name: "About Me", href: "/" },
  { name: "Service", href: "/service" },
  { name: "Product", href: "/product" },
  { name: "Resume", href: "/resume" },
  { name: "Contact", href: "/contact" },
]

export default function Header() {
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { setTheme } = useTheme()

  useEffect(() => {
    setTheme("dark")
  }, [setTheme])

  return (
    <header className="bg-white dark:bg-gray-900 shadow-sm border-b border-gray-200 dark:border-gray-700 relative overflow-hidden  ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">

        <div className="absolute inset-0 w-full h-full bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />

        <Boxes />

        <div className="flex justify-between items-center h-16">

       
          
          {/* Logo */}
          <Link
            href="/"
            className="text-2xl font-bold text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors  z-20"
          >
            Kato
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8  z-20">
            <nav className="flex space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`text-sm font-medium transition-colors hover:text-blue-600 dark:hover:text-blue-400 ${
                    pathname === item.href
                      ? "text-blue-600 dark:text-blue-400 border-b-2 border-blue-600 dark:border-blue-400 pb-1"
                      : "text-gray-700 dark:text-gray-300"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
            <ThemeToggle />
          </div>

          {/* Mobile menu button and theme toggle */}
          <div className="md:hidden flex items-center space-x-2 relative z-20">
            <ThemeToggle />
            <button
              type="button"
              className="p-2 rounded-md text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-800"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>


        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200 dark:border-gray-700 relative z-30 ">
            <nav className="flex flex-col space-y-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`text-sm font-medium transition-colors hover:text-blue-600 dark:hover:text-blue-400 ${
                    pathname === item.href ? "text-blue-600 dark:text-blue-400" : "text-gray-700 dark:text-gray-300"
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
