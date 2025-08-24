import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import heroImage1 from "@/assets/hero-education-1.jpg"
import heroImage2 from "@/assets/hero-study-abroad-2.jpg"
import heroImage3 from "@/assets/hero-consultation-3.jpg"
import heroImage4 from "@/assets/hero-recruitment-4.jpg"

const slides = [
  {
    id: 1,
    image: heroImage1,
    title: "Your Gateway to Global Education",
    subtitle: "Expert guidance for international students seeking world-class education opportunities",
  },
  {
    id: 2,
    image: heroImage2,
    title: "Study Abroad with Confidence",
    subtitle: "Comprehensive support from application to graduation in top universities worldwide",
  },
  {
    id: 3,
    image: heroImage3,
    title: "Professional Career Consultation",
    subtitle: "Personalized career guidance and consultation services for your professional growth",
  },
  {
    id: 4,
    image: heroImage4,
    title: "International Recruitment Solutions",
    subtitle: "Connecting talented professionals with global career opportunities",
  }
]

export function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
    setIsAutoPlaying(false)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
    setIsAutoPlaying(false)
  }

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
    setIsAutoPlaying(false)
  }

  return (
    <section className="relative h-[70vh] lg:h-[80vh] overflow-hidden">
      {/* Slides */}
      <div className="relative h-full">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-all duration-700 ease-in-out ${
              index === currentSlide ? "opacity-100 scale-100" : "opacity-0 scale-105"
            }`}
          >
            <div
              className="h-full bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/40" />
              
              {/* Content */}
              <div className="relative h-full flex items-center justify-center">
                <div className="container mx-auto px-4 text-center text-white">
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 fade-in visible">
                    {slide.title}
                  </h1>
                  <p className="text-lg md:text-xl lg:text-2xl mb-8 max-w-3xl mx-auto opacity-90 fade-in visible">
                    {slide.subtitle}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <Button
        variant="ghost"
        size="icon"
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white border border-white/30"
        onClick={prevSlide}
      >
        <ChevronLeft className="h-6 w-6" />
      </Button>
      <Button
        variant="ghost"
        size="icon"
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white border border-white/30"
        onClick={nextSlide}
      >
        <ChevronRight className="h-6 w-6" />
      </Button>

      {/* Dots Indicator */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-4">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide ? "bg-white" : "bg-white/50"
            }`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>
    </section>
  )
}