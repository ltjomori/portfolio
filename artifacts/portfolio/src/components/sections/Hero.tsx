import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowDown, MapPin } from "lucide-react"

export function Hero() {
  const scrollToExperience = () => {
    const el = document.getElementById("experience")
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 80
      window.scrollTo({ top, behavior: "smooth" })
    }
  }

  return (
    <section className="relative min-h-[100svh] flex flex-col justify-center overflow-hidden pt-20">
      {/* Animated Background Blob */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-accent rounded-full blur-[120px] opacity-[0.15] animate-blob pointer-events-none" />
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 w-full relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <div className="flex items-center gap-2 mb-6 text-sm font-medium text-muted-foreground">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-pink-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-pink-500"></span>
            </span>
            <MapPin className="w-4 h-4 ml-1" /> New York City
          </div>
          
          <h1 className="text-5xl sm:text-7xl md:text-8xl font-display font-bold tracking-tighter text-white mb-4">
            Lucas Omori
          </h1>
          
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-medium text-muted-foreground mb-8">
            <span className="text-gradient font-bold">Product Manager</span> building at the intersection of data and human experience.
          </h2>
          
          <div className="flex flex-wrap items-center gap-4 mt-12">
            <Button size="lg" variant="gradient" onClick={scrollToExperience} className="group">
              View My Work
              <ArrowDown className="ml-2 w-4 h-4 group-hover:translate-y-1 transition-transform" />
            </Button>
            
            <Button size="lg" variant="outline" className="rounded-2xl border-white/10" asChild>
              <a href="#contact">Get in Touch</a>
            </Button>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground/50"
      >
        <span className="text-xs uppercase tracking-widest font-medium">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-muted-foreground/50 to-transparent" />
      </motion.div>
    </section>
  )
}
