import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function TermsPage() {
  return (
    <div className="min-h-screen">
      <Header />

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-8">Terms of Service</h1>
            <div className="prose prose-invert max-w-none space-y-6 text-muted-foreground">
              <p className="text-lg">Last updated: January 2025</p>

              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-foreground">1. Acceptance of Terms</h2>
                <p className="leading-relaxed">
                  By accessing and using YouthX Technologies services, you accept and agree to be bound by the terms and
                  provision of this agreement.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-foreground">2. Services</h2>
                <p className="leading-relaxed">
                  YouthX Technologies provides technology consulting, software development, and related services as
                  described on our website. We reserve the right to modify or discontinue services at any time.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-foreground">3. User Responsibilities</h2>
                <p className="leading-relaxed">You agree to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Provide accurate and complete information</li>
                  <li>Maintain the security of your account credentials</li>
                  <li>Comply with all applicable laws and regulations</li>
                  <li>Not use our services for any unlawful purpose</li>
                </ul>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-foreground">4. Intellectual Property</h2>
                <p className="leading-relaxed">
                  All content, features, and functionality of our services are owned by YouthX Technologies and are
                  protected by international copyright, trademark, and other intellectual property laws.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-foreground">5. Limitation of Liability</h2>
                <p className="leading-relaxed">
                  YouthX Technologies shall not be liable for any indirect, incidental, special, consequential, or
                  punitive damages resulting from your use of our services.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-foreground">6. Contact</h2>
                <p className="leading-relaxed">
                  For questions about these Terms of Service, please contact us at legal@youthxtech.com
                </p>
              </section>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
