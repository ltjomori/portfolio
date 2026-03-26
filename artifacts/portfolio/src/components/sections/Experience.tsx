import { motion } from "framer-motion"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const experiences = [
  {
    company: "Mastercard",
    role: "Associate PM",
    period: "Aug 2025 – Present",
    bullets: [
      "Leading 0→1 development of a new AI analytics product to unlock 400+ issuer growth opportunities",
      "Scaled UI enhancements across three regional platforms, improving usability by 60% and reducing churn by 15%"
    ],
    current: true
  },
  {
    company: "Cisco Meraki",
    role: "PM Intern",
    period: "Sep – Dec 2024",
    bullets: [
      "Designed AI assistant intents across networking products impacting 750k customers",
      "Built an LLM-powered feedback prioritization dashboard to align roadmap decisions to measurable OKRs"
    ]
  },
  {
    company: "Mastercard",
    role: "APM Intern",
    period: "Jun – Aug 2024",
    bullets: [
      "Delivered an AI assistant MVP to 300+ clients, automating analytics queries and driving 25% platform adoption growth",
      "Accelerated European market expansion by onboarding 100+ international clients and cutting data validation errors by 40%"
    ]
  },
  {
    company: "Microsoft",
    role: "PM Intern",
    period: "Sep – Dec 2023",
    bullets: [
      "Shaped the accessibility roadmap for Microsoft Word through competitive analysis and 25+ user interviews",
      "Authored technical specs for hyperlink inspection and navigation improvements currently in development"
    ]
  },
  {
    company: "Atlassian",
    role: "Product Marketing Intern",
    period: "Sep 2022 – Jan 2023",
    bullets: [
      "Launched a GTM strategy for an enterprise product targeting 200k+ users",
      "Drove adoption of Confluence and Trello through data-driven persona analysis and targeted campaigns"
    ]
  }
]

export function Experience() {
  return (
    <section id="experience" className="py-24 sm:py-32 bg-secondary/20 border-y border-white/5">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-white">Experience</h2>
          <p className="mt-4 text-muted-foreground text-lg">My professional journey so far.</p>
        </motion.div>

        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="group relative overflow-hidden bg-card/50 hover:bg-card/80 backdrop-blur-sm border-white/5 hover:border-white/10 transition-all duration-500">
                {exp.current && (
                  <div className="absolute top-0 right-0 p-6 pointer-events-none">
                    <Badge variant="gradient" className="shadow-none">Current</Badge>
                  </div>
                )}
                
                {/* Subtle gradient hover effect on card border */}
                <div className="absolute inset-0 bg-gradient-accent opacity-0 group-hover:opacity-[0.03] transition-opacity duration-500 pointer-events-none" />

                <CardHeader className="pb-4">
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 sm:gap-4">
                    <CardTitle className="text-2xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-orange-400 group-hover:to-pink-500 transition-all duration-300">
                      {exp.company}
                    </CardTitle>
                    <span className="text-sm font-medium text-muted-foreground shrink-0">{exp.period}</span>
                  </div>
                  <CardDescription className="text-lg font-medium text-zinc-300">
                    {exp.role}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {exp.bullets.map((bullet, i) => (
                      <li key={i} className="flex gap-3 text-muted-foreground leading-relaxed">
                        <span className="text-pink-500 mt-1.5 shrink-0">•</span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
