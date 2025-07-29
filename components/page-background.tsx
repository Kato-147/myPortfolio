"use client"

import { usePathname } from "next/navigation"
import { useEffect } from "react"

const pageBackgrounds = {
  "/": {
    light: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    dark: "linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)",
  },
  "/service": {
    light: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
    dark: "linear-gradient(135deg, #2d1b69 0%, #11998e 100%)",
  },
  "/product": {
    light: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
    dark: "linear-gradient(135deg, #0c0c0c 0%, #1a1a2e 50%, #16213e 100%)",
  },
  "/resume": {
    light: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)",
    dark: "linear-gradient(135deg, #134e5e 0%, #71b280 100%)",
  },
  "/contact": {
    light: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)",
    dark: "linear-gradient(135deg, #360033 0%, #0b8793 100%)",
  },
}

export function PageBackground() {
  const pathname = usePathname()

  useEffect(() => {
    const background = pageBackgrounds[pathname as keyof typeof pageBackgrounds]
    if (background) {
      document.documentElement.style.setProperty("--page-bg-light", background.light)
      document.documentElement.style.setProperty("--page-bg-dark", background.dark)
    }
  }, [pathname])

  return null
}
