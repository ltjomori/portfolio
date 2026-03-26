import { useState } from "react"
import { motion } from "framer-motion"
import { Mail, Linkedin, FileText, Check, ArrowUpRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useToast } from "@/components/ui/use-toast"

export function Contact() {
  const [copied, setCopied] = useState(false)
  const { toast } = useToast()
  
  const email = "lucastjomori@gmail.com"

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email)
    setCopied(true)
    toast({
      title: "Copied to clipboard!",
      description: "Email address has been copied to your clipboard.",
      duration: 3000,
    })
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section id="contact" className="py-24 sm:py-32 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl sm:text-5xl md:text-7xl font-display font-bold text-white mb-6">
            Let's build something <span className="text-gradient">great</span> together.
          </h2>
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto font-light">
            Always open to chatting about product, data, or the next concert you're going to.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
            <Button 
              size="lg" 
              variant="gradient" 
              className="w-full sm:w-auto text-lg h-16 px-8 rounded-2xl group"
              onClick={handleCopyEmail}
            >
              {copied ? (
                <>
                  <Check className="mr-2 h-5 w-5" /> Copied!
                </>
              ) : (
                <>
                  <Mail className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" /> {email}
                </>
              )}
            </Button>
            
            <div className="flex gap-4 w-full sm:w-auto">
              <Button 
                size="lg" 
                variant="outline" 
                className="w-full sm:w-auto h-16 rounded-2xl border-white/10 hover:border-white/20 hover:bg-white/5 group"
                asChild
              >
                <a href="https://www.linkedin.com/in/lucasomori/" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="mr-2 h-5 w-5 text-[#0A66C2]" /> LinkedIn
                  <ArrowUpRight className="ml-2 h-4 w-4 opacity-50 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </a>
              </Button>

              <Button 
                size="lg" 
                variant="outline" 
                className="w-full sm:w-auto h-16 rounded-2xl border-white/10 hover:border-white/20 hover:bg-white/5 group"
                asChild
              >
                <a href="https://drive.google.com/file/d/1Vow43qSKBYuxpdfO3fT682QglBri9wnQ/view?usp=drive_link" target="_blank" rel="noopener noreferrer">
                  <FileText className="mr-2 h-5 w-5 text-purple-400" /> Resume
                  <ArrowUpRight className="ml-2 h-4 w-4 opacity-50 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </a>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Footer minimal */}
      <div className="absolute bottom-8 left-0 right-0 text-center text-sm text-muted-foreground/60">
        © {new Date().getFullYear()} Lucas Omori. Designed & Built with intent.
      </div>
    </section>
  )
}
