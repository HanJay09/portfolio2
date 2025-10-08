import { Github, Linkedin, Mail, Twitter } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center px-6 py-20 pt-16 relative overflow-hidden"
    >
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-chart-1/30 to-chart-2/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-br from-chart-3/25 to-chart-4/15 rounded-full blur-3xl animate-float-delayed" />
      </div>

      <div className="max-w-7xl w-full grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-balance">Hello, I&apos;m Han Jay</h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl text-pretty leading-relaxed">
              I craft elegant, performant web applications with modern technologies. Specializing in React, Next.js,
              Node.js, and TypeScript.
            </p>
          </div>

          <div className="flex flex-wrap gap-4 items-center">
            <Button asChild size="lg">
              <a href="#contact">Get in touch</a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href="#projects">View work</a>
            </Button>
          </div>

          <div className="flex gap-4 pt-4">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Twitter"
            >
              <Twitter className="w-6 h-6" />
            </a>
            <a
              href="mailto:hello@example.com"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Email"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>

        <div className="hidden lg:flex justify-center items-center">
          <div className="relative w-full max-w-lg aspect-square">
            <svg viewBox="0 0 400 400" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
              {/* Animated background circles */}
              <circle
                cx="200"
                cy="200"
                r="150"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
                className="text-chart-1/30 animate-spin-slow"
                style={{ transformOrigin: "center" }}
              />
              <circle
                cx="200"
                cy="200"
                r="120"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
                className="text-chart-2/30 animate-spin-reverse"
                style={{ transformOrigin: "center" }}
              />

              {/* Floating geometric shapes */}
              <rect x="150" y="100" width="60" height="60" rx="8" className="fill-chart-1/40 animate-float" />
              <circle cx="280" cy="150" r="30" className="fill-chart-2/40 animate-float-delayed" />
              <polygon points="200,250 230,300 170,300" className="fill-chart-3/40 animate-float-slow" />
              <rect x="250" y="280" width="50" height="50" rx="25" className="fill-chart-4/40 animate-float" />

              {/* Central code symbol */}
              <g className="animate-pulse-slow">
                <text
                  x="200"
                  y="210"
                  fontSize="80"
                  fontWeight="bold"
                  textAnchor="middle"
                  className="fill-foreground/80 font-mono"
                >
                  {"</>"}
                </text>
              </g>

              {/* Orbiting dots */}
              <circle
                cx="200"
                cy="50"
                r="8"
                className="fill-chart-1 animate-orbit"
                style={{ transformOrigin: "200px 200px" }}
              />
              <circle
                cx="350"
                cy="200"
                r="8"
                className="fill-chart-2 animate-orbit-delayed"
                style={{ transformOrigin: "200px 200px" }}
              />
              <circle
                cx="200"
                cy="350"
                r="8"
                className="fill-chart-3 animate-orbit-slow"
                style={{ transformOrigin: "200px 200px" }}
              />
            </svg>
          </div>
        </div>
      </div>
    </section>
  )
}
