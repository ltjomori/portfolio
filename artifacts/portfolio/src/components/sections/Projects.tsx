import { motion } from "framer-motion"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowUpRight } from "lucide-react"

export function Projects() {
  const projects = [
    {
      title: "Cookmi",
      description: "A personalized recipe book that consolidates all your favorite social media meals, snacks, and desserts into one place.",
      badge: "In Development",
      badgeVariant: "gradient" as const,
      active: true
    },
    {
      title: "Placeholder Project",
      description: "A new idea currently brewing. More details and case study will be published once the MVP is finalized.",
      badge: "Coming Soon",
      badgeVariant: "secondary" as const,
      active: false
    },
    {
      title: "Placeholder Project",
      description: "Exploring the intersection of LLMs and personal productivity. Check back later for updates.",
      badge: "Coming Soon",
      badgeVariant: "secondary" as const,
      active: false
    }
  ]

  return (
    <section id="projects" className="py-24 sm:py-32 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-white">Projects</h2>
          <p className="mt-4 text-muted-foreground text-lg">Things I'm tinkering with outside of work.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="h-full"
            >
              <Card className={`h-full flex flex-col ${
                project.active 
                  ? "bg-card/50 hover:bg-card hover:-translate-y-1 border-white/10 hover:border-pink-500/50 cursor-pointer group" 
                  : "bg-secondary/20 border-white/5 opacity-60 grayscale-[50%]"
                } transition-all duration-300 relative overflow-hidden`}
              >
                {project.active && (
                  <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity transform translate-x-2 -translate-y-2 group-hover:translate-x-0 group-hover:translate-y-0 duration-300">
                    <ArrowUpRight className="w-6 h-6 text-pink-500" />
                  </div>
                )}
                
                <CardHeader className="pb-4">
                  <div className="mb-4">
                    <Badge variant={project.badgeVariant}>{project.badge}</Badge>
                  </div>
                  <CardTitle className="text-xl text-white font-bold">{project.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-1">
                  <CardDescription className="text-base leading-relaxed">
                    {project.description}
                  </CardDescription>
                </CardContent>
                
                {project.active && (
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-accent transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500" />
                )}
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
