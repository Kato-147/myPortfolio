import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import Sidebar from "@/components/Sidebar"
import { ThemeProvider } from "@/components/theme-provider"
import { BackgroundLines } from "@/components/ui/background-lines"
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Kato Portfolio",
  description: "Personal portfolio website of Kato",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="vi" suppressHydrationWarning>
      <body className={inter.className}>
        {/* defaultTheme="system" */}
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <div className="min-h-screen flex flex-col bg-background">
            <Header />
            <main className="flex-1 flex">
              <div className="hidden lg:block lg:w-1/3 xl:w-1/4">
                <Sidebar />
              </div>

              <div className="w-full lg:w-2/3 xl:w-3/4 p-6 lg:p-8">
                <div className="lg:hidden mb-6">
                  <Sidebar />
                </div>
                          
                {children}       
              </div>

            </main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
