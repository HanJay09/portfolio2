import { Badge } from "@/components/ui/badge"

const experiences = [
  {
    period: "2023 — Present",
    title: "Senior Full-Stack Developer",
    company: "Tech Innovations Inc",
    description:
      "Lead development of enterprise web applications using Next.js, TypeScript, and Node.js. Architected scalable microservices and mentored junior developers.",
    skills: ["Next.js", "TypeScript", "Node.js", "PostgreSQL", "AWS"],
  },
  {
    period: "2021 — 2023",
    title: "Full-Stack Developer",
    company: "Digital Solutions Co",
    description:
      "Built and maintained multiple client projects using React and Express. Implemented CI/CD pipelines and improved application performance by 40%.",
    skills: ["React", "Express", "MongoDB", "Docker", "GraphQL"],
  },
  {
    period: "2019 — 2021",
    title: "Frontend Developer",
    company: "Creative Agency",
    description:
      "Developed responsive web applications and collaborated with designers to create pixel-perfect interfaces. Focused on accessibility and performance optimization.",
    skills: ["React", "JavaScript", "CSS", "Figma", "Git"],
  },
]

export function Experience() {
  return (
    <section id="experience" className="px-6 py-20 md:py-32 bg-secondary/30">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-sm uppercase tracking-wider text-muted-foreground mb-12">Experience</h2>
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div key={index} className="group">
              <div className="grid md:grid-cols-[200px_1fr] gap-6">
                <div className="text-sm text-muted-foreground">{exp.period}</div>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-semibold mb-1">{exp.title}</h3>
                    <p className="text-muted-foreground">{exp.company}</p>
                  </div>
                  <p className="leading-relaxed text-pretty">{exp.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill) => (
                      <Badge key={skill} variant="secondary">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
