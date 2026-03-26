import { motion } from "framer-motion"
import { Video, Headphones, Mic2 } from "lucide-react"

export function BeyondWork() {
  const interests = [
    {
      icon: <Video className="w-8 h-8" />,
      title: "Vlogging",
      color: "from-orange-500/20 to-orange-500/5 text-orange-400 border-orange-500/20"
    },
    {
      icon: <Headphones className="w-8 h-8" />,
      title: "Music",
      color: "from-pink-500/20 to-pink-500/5 text-pink-400 border-pink-500/20"
    },
    {
      icon: <Mic2 className="w-8 h-8" />,
      title: "Live Concerts (40+)",
      color: "from-purple-500/20 to-purple-500/5 text-purple-400 border-purple-500/20"
    }
  ]

  return (
    <section id="beyond" className="py-24 sm:py-32 bg-secondary/20 border-y border-white/5 relative overflow-hidden">
      
      {/* Decorative gradient blur */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid lg:grid-cols-[1fr_1fr] gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-white mb-6">Beyond the Product</h2>
            <div className="prose prose-invert prose-lg max-w-none text-muted-foreground font-light leading-relaxed">
              <p>
                When I'm not writing PRDs or looking at data dashboards, I'm leaning into my creative side. 
                I'm a creative communicator and audience builder at heart, driven by an entrepreneurial spirit.
              </p>
              <p className="mt-4">
                Whether I'm vlogging my latest adventures, curating playlists, or adding to my tally of 40+ live concerts, 
                I'm always looking for ways to connect with people and tell great stories.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="grid sm:grid-cols-2 gap-4 lg:gap-6"
          >
            {interests.map((interest, index) => (
              <div 
                key={index}
                className={`p-8 rounded-3xl border bg-gradient-to-br backdrop-blur-sm ${interest.color} flex flex-col items-center justify-center text-center gap-4 hover:-translate-y-1 transition-transform duration-300 shadow-xl shadow-black/20 ${index === 2 ? 'sm:col-span-2' : ''}`}
              >
                {interest.icon}
                <h3 className="font-bold font-display text-lg text-white">{interest.title}</h3>
              </div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  )
}
