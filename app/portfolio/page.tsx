import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

export default function PortfolioPage() {
  const projects = [
    {
      title: "E-Commerce Platform Modernization",
      description:
        "Transformed a legacy e-commerce system into a modern, scalable platform with improved performance and user experience.",
      tags: ["Web Development", "Cloud Migration", "UX Design"],
      results: "300% increase in page load speed, 45% boost in conversion rates",
    },
    {
      title: "Healthcare Management System",
      description:
        "Developed a comprehensive patient management system with appointment scheduling, electronic health records, and billing integration.",
      tags: ["Custom Software", "Healthcare", "Security"],
      results: "Reduced administrative time by 60%, improved patient satisfaction scores",
    },
    {
      title: "Financial Services Automation",
      description:
        "Implemented RPA solutions to automate repetitive financial processes, reducing manual work and improving accuracy.",
      tags: ["Automation", "Finance", "Integration"],
      results: "Saved 200+ hours monthly, 99.9% accuracy in automated processes",
    },
    {
      title: "Mobile App for Logistics Company",
      description: "Built a cross-platform mobile application for real-time package tracking and delivery management.",
      tags: ["Mobile Development", "Real-time", "Logistics"],
      results: "4.8-star rating, 50,000+ downloads in first 6 months",
    },
    {
      title: "Cybersecurity Assessment & Implementation",
      description:
        "Conducted comprehensive security audit and implemented multi-layered security measures for a financial institution.",
      tags: ["Cybersecurity", "Compliance", "Risk Management"],
      results: "Achieved SOC 2 compliance, zero security incidents post-implementation",
    },
    {
      title: "AI-Powered Customer Service Platform",
      description:
        "Developed an intelligent chatbot and ticketing system that handles customer inquiries with natural language processing.",
      tags: ["AI/ML", "Customer Service", "Automation"],
      results: "Reduced response time by 80%, handled 70% of inquiries automatically",
    },
  ]

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-background" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">
              Our <span className="text-primary">Portfolio</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Explore our successful projects and the impact we've made for businesses across industries
            </p>
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="border-border bg-card hover:border-primary transition-all hover:shadow-lg flex flex-col"
              >
                <CardHeader>
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                  <CardDescription className="text-sm leading-relaxed">{project.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col justify-between">
                  <div className="space-y-4">
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, idx) => (
                        <Badge key={idx} variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <div className="pt-4 border-t border-border">
                      <p className="text-sm font-semibold text-foreground mb-2">Results:</p>
                      <p className="text-sm text-muted-foreground">{project.results}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-card/30">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Our Impact</h2>
            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">50+</div>
                <div className="text-muted-foreground">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">30+</div>
                <div className="text-muted-foreground">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">98%</div>
                <div className="text-muted-foreground">Client Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">24/7</div>
                <div className="text-muted-foreground">Support Available</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary/10">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-3xl md:text-4xl font-bold mb-6">Start Your Success Story</h3>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Ready to join our portfolio of successful projects? Let's create something amazing together.
            </p>
            <Link href="/contact">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                Get Started
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
