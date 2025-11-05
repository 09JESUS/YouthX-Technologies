import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Code2, Shield, Smartphone, TrendingUp, Users, Zap } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-background" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-8 flex justify-center">
              <Image
                src="/logo-icon.png"
                alt="YouthX Technologies Logo"
                width={120}
                height={120}
                className="object-contain animate-pulse"
              />
            </div>
            <h2 className="text-4xl md:text-6xl font-bold mb-6 text-balance">
              Empowering Businesses Through <span className="text-primary">Technology</span>
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 text-pretty max-w-2xl mx-auto leading-relaxed">
              Youth-led technology services company helping businesses leverage modern technology for growth,
              efficiency, and digital transformation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                  Get Started
                </Button>
              </Link>
              <Link href="/about">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-primary text-primary hover:bg-primary/10 bg-transparent"
                >
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview Section */}
      <section className="py-20 bg-card/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Comprehensive technology solutions tailored to your business needs
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="border-border bg-card hover:border-primary transition-colors">
              <CardHeader>
                <TrendingUp className="w-12 h-12 text-primary mb-4" />
                <CardTitle>IT Consulting & Strategy</CardTitle>
                <CardDescription>Strategic technology guidance to align IT with your business goals</CardDescription>
              </CardHeader>
            </Card>
            <Card className="border-border bg-card hover:border-primary transition-colors">
              <CardHeader>
                <Zap className="w-12 h-12 text-primary mb-4" />
                <CardTitle>Digital Transformation</CardTitle>
                <CardDescription>Modernize your operations with cutting-edge digital solutions</CardDescription>
              </CardHeader>
            </Card>
            <Card className="border-border bg-card hover:border-primary transition-colors">
              <CardHeader>
                <Code2 className="w-12 h-12 text-primary mb-4" />
                <CardTitle>Custom Software Development</CardTitle>
                <CardDescription>Tailored applications built to solve your unique challenges</CardDescription>
              </CardHeader>
            </Card>
            <Card className="border-border bg-card hover:border-primary transition-colors">
              <CardHeader>
                <Shield className="w-12 h-12 text-primary mb-4" />
                <CardTitle>Cybersecurity Guidance</CardTitle>
                <CardDescription>Protect your business with comprehensive security strategies</CardDescription>
              </CardHeader>
            </Card>
            <Card className="border-border bg-card hover:border-primary transition-colors">
              <CardHeader>
                <Smartphone className="w-12 h-12 text-primary mb-4" />
                <CardTitle>Digital Automation</CardTitle>
                <CardDescription>Streamline workflows and boost efficiency with automation</CardDescription>
              </CardHeader>
            </Card>
            <Card className="border-border bg-card hover:border-primary transition-colors">
              <CardHeader>
                <Users className="w-12 h-12 text-primary mb-4" />
                <CardTitle>Training & Support</CardTitle>
                <CardDescription>Empower your team with expert training and ongoing support</CardDescription>
              </CardHeader>
            </Card>
          </div>
          <div className="text-center mt-8">
            <Link href="/services">
              <Button variant="outline" className="border-primary text-primary hover:bg-primary/10 bg-transparent">
                View All Services
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary/10">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Business?</h3>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Let's discuss how YouthX Technologies can help you achieve your digital transformation goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                  Contact Us
                </Button>
              </Link>
              <Link href="/contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-primary text-primary hover:bg-primary/10 bg-transparent"
                >
                  Schedule a Consultation
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
