import { Button } from "@/components/ui/button"
import { Mail } from "lucide-react"

export function Contact() {
  return (
    <section id="contact" className="px-6 py-20 md:py-32 bg-secondary/30">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-sm uppercase tracking-wider text-muted-foreground mb-8">Get In Touch</h2>
        <div className="space-y-6">
          <h3 className="text-3xl md:text-5xl font-bold text-balance">Let&apos;s work together</h3>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
            I&apos;m always interested in hearing about new projects and opportunities. Whether you have a question or just
            want to say hi, feel free to reach out.
          </p>
          <div className="pt-4">
            <Button asChild size="lg">
              <a href="mailto:hello@example.com" className="inline-flex items-center gap-2">
                <Mail className="w-5 h-5" />
                hello@example.com
              </a>
            </Button>
          </div>
        </div>
        <div className="mt-20 pt-8 border-t border-border">
          <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} All rights reserved.</p>
        </div>
      </div>
    </section>
  )
}
