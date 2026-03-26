import { motion } from "framer-motion"

export function About() {
  const stats = [
    { label: "Companies", value: "5" },
    { label: "Experience", value: "3+ yrs" },
    { label: "Education", value: "UC Berkeley" },
  ]

  return (
    <section id="about" className="py-24 sm:py-32 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="grid md:grid-cols-[1fr_2fr] gap-12 md:gap-24 items-start"
        >
          <div>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-white mb-6">About Me</h2>
            <div className="flex flex-col gap-4">
              {stats.map((stat, i) => (
                <div key={i} className="flex items-center gap-4 py-3 border-b border-white/5 last:border-0">
                  <span className="text-4xl font-display font-light text-white/20">{`0${i + 1}`}</span>
                  <div>
                    <div className="text-lg font-bold text-white">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="prose prose-invert prose-lg max-w-none">
            <p className="text-xl sm:text-2xl leading-relaxed text-muted-foreground font-light">
              I'm a UC Berkeley Data Science graduate and Associate PM at <span className="text-white font-medium">Mastercard</span>, where I'm building a data SaaS product for banks. 
            </p>
            <p className="text-xl sm:text-2xl leading-relaxed text-muted-foreground font-light mt-6">
              Previously, I've worked across <span className="text-white font-medium">Cisco Meraki, Microsoft, and Atlassian</span> — experiences that shaped my approach to product thinking: <strong className="text-gradient">data-informed, user-obsessed, and always shipping.</strong>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
