import { ArrowUpRight } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"

const projects = [
  {
    title: "E-Commerce Platform",
    description:
      "A full-featured e-commerce platform with real-time inventory management, payment processing, and admin dashboard.",
    tech: ["Next.js", "Stripe", "PostgreSQL", "Tailwind CSS"],
    link: "#",
    image: "/modern-ecommerce-dashboard.png",
  },
  {
    title: "Task Management App",
    description:
      "Collaborative task management application with real-time updates, team workspaces, and advanced filtering.",
    tech: ["React", "Node.js", "Socket.io", "MongoDB"],
    link: "#",
    image: "/task-management-kanban.png",
  },
  {
    title: "AI Content Generator",
    description:
      "AI-powered content generation tool using OpenAI API with custom prompts and content optimization features.",
    tech: ["Next.js", "OpenAI", "TypeScript", "Vercel"],
    link: "#",
    image: "/ai-content-generator-interface-modern.jpg",
  },
  {
    title: "Analytics Dashboard",
    description: "Real-time analytics dashboard with interactive charts, data visualization, and export capabilities.",
    tech: ["React", "D3.js", "Express", "Redis"],
    link: "#",
    image: "/analytics-dashboard-charts.png",
  },
]

export function Projects() {
  return (
    <section id="projects" className="px-6 py-20 md:py-32">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-sm uppercase tracking-wider text-muted-foreground mb-12">Selected Projects</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <a
              key={index}
              href={project.link}
              className="group block rounded-lg border border-border hover:border-foreground/20 transition-all hover:bg-secondary/50 overflow-hidden"
            >
              <div className="relative aspect-video w-full overflow-hidden bg-muted">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <div className="flex items-start justify-between gap-4 mb-3">
                  <h3 className="text-xl font-semibold group-hover:text-accent transition-colors">{project.title}</h3>
                  <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-foreground transition-colors flex-shrink-0" />
                </div>
                <p className="text-muted-foreground leading-relaxed mb-4 text-pretty">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <Badge key={tech} variant="outline">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
