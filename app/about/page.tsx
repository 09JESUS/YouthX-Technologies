import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Target, Eye, Lightbulb, Users, Rocket } from "lucide-react"
import Image from "next/image"

export default function AboutPage() {
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
                width={100}
                height={100}
                className="object-contain"
              />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">
              About <span className="text-primary">YouthX Technologies</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">Powered by the Next Generation</p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card className="border-border bg-card">
              <CardHeader>
                <Target className="w-12 h-12 text-primary mb-4" />
                <CardTitle className="text-2xl">Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  To empower businesses through cutting-edge technology solutions delivered by the next generation of
                  tech leaders. We bridge the gap between innovation and practical business needs, making advanced
                  technology accessible to organizations of all sizes.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border bg-card">
              <CardHeader>
                <Eye className="w-12 h-12 text-primary mb-4" />
                <CardTitle className="text-2xl">Our Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  To become the trusted technology partner for businesses seeking innovative, agile, and
                  forward-thinking solutions. We envision a future where youth-led innovation drives digital
                  transformation across industries.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About Content */}
      <section className="py-20 bg-card/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-8">
            <div>
              <h2 className="text-3xl font-bold mb-6">Who We Are</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  YouthX Technologies is a youth-led technology services company that helps businesses leverage modern
                  technology for growth, efficiency, and digital transformation. We specialize in IT consulting, custom
                  software and app development, digital automation, and cybersecurity guidance.
                </p>
                <p>
                  We target SMEs, startups, and established businesses, positioning ourselves as an innovative, agile,
                  and trusted technology partner. Our team brings fresh perspectives and cutting-edge expertise to solve
                  complex business challenges.
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-6">What Sets Us Apart</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <Card className="border-border bg-card">
                  <CardHeader>
                    <Lightbulb className="w-10 h-10 text-primary mb-3" />
                    <CardTitle>Innovation First</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      We bring fresh, creative approaches to technology challenges, leveraging the latest tools and
                      methodologies.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-border bg-card">
                  <CardHeader>
                    <Users className="w-10 h-10 text-primary mb-3" />
                    <CardTitle>Youth-Led Excellence</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Our young team combines energy, adaptability, and deep technical expertise to deliver exceptional
                      results.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-border bg-card">
                  <CardHeader>
                    <Rocket className="w-10 h-10 text-primary mb-3" />
                    <CardTitle>Agile & Responsive</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      We move fast and adapt quickly, ensuring your projects are delivered on time and exceed
                      expectations.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary/10">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-3xl md:text-4xl font-bold mb-6">Let's Work Together</h3>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Ready to experience the YouthX difference? Get in touch to discuss your technology needs.
            </p>
            <Link href="/contact">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
