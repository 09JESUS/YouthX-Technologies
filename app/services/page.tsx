import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Code2, Shield, Smartphone, TrendingUp, Users, Zap, Database, Cloud } from "lucide-react"

export default function ServicesPage() {
  const services = [
    {
      icon: TrendingUp,
      title: "IT Consulting & Strategy",
      description: "Strategic technology guidance to align IT with your business goals",
      details: [
        "Technology roadmap development",
        "IT infrastructure assessment",
        "Digital strategy planning",
        "Technology vendor selection",
      ],
    },
    {
      icon: Zap,
      title: "Digital Transformation",
      description: "Modernize your operations with cutting-edge digital solutions",
      details: [
        "Process digitization",
        "Legacy system modernization",
        "Cloud migration strategies",
        "Change management support",
      ],
    },
    {
      icon: Code2,
      title: "Custom Software & App Development",
      description: "Tailored applications built to solve your unique challenges",
      details: [
        "Web application development",
        "Mobile app development (iOS & Android)",
        "API development and integration",
        "Custom business software",
      ],
    },
    {
      icon: Shield,
      title: "Cybersecurity Guidance",
      description: "Protect your business with comprehensive security strategies",
      details: [
        "Security audits and assessments",
        "Compliance consulting",
        "Security policy development",
        "Incident response planning",
      ],
    },
    {
      icon: Smartphone,
      title: "Digital Automation",
      description: "Streamline workflows and boost efficiency with automation",
      details: [
        "Workflow automation",
        "Robotic process automation (RPA)",
        "Integration of business systems",
        "Custom automation solutions",
      ],
    },
    {
      icon: Users,
      title: "Training & Support",
      description: "Empower your team with expert training and ongoing support",
      details: [
        "Technology training programs",
        "User adoption strategies",
        "Ongoing technical support",
        "Documentation and knowledge transfer",
      ],
    },
    {
      icon: Database,
      title: "Data Management & Analytics",
      description: "Transform your data into actionable business insights",
      details: [
        "Database design and optimization",
        "Business intelligence solutions",
        "Data visualization dashboards",
        "Predictive analytics",
      ],
    },
    {
      icon: Cloud,
      title: "Cloud Solutions",
      description: "Leverage cloud technology for scalability and efficiency",
      details: [
        "Cloud infrastructure setup",
        "Multi-cloud strategies",
        "Cloud cost optimization",
        "Serverless architecture",
      ],
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
              Our <span className="text-primary">Services</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Comprehensive technology solutions designed to drive your business forward
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="border-border bg-card hover:border-primary transition-all hover:shadow-lg">
                <CardHeader>
                  <service.icon className="w-12 h-12 text-primary mb-4" />
                  <CardTitle className="text-2xl">{service.title}</CardTitle>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <span className="text-primary mt-1">•</span>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary/10">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-3xl md:text-4xl font-bold mb-6">Ready to Get Started?</h3>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Let's discuss which services are right for your business needs
            </p>
            <Link href="/contact">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                Contact Us Today
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
