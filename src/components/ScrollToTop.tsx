// src/components/ScrollToTop.tsx
import { useEffect } from "react"
import { useLocation } from "react-router-dom"

export function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" }) // Smooth scroll
  }, [pathname])

  return null
}