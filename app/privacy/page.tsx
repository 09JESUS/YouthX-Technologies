import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function PrivacyPage() {
  return (
    <div className="min-h-screen">
      <Header />

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-8">Privacy Policy</h1>
            <div className="prose prose-invert max-w-none space-y-6 text-muted-foreground">
              <p className="text-lg">Last updated: January 2025</p>

              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-foreground">1. Information We Collect</h2>
                <p className="leading-relaxed">
                  YouthX Technologies collects information that you provide directly to us, including name, email
                  address, company information, and any other information you choose to provide when contacting us or
                  using our services.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-foreground">2. How We Use Your Information</h2>
                <p className="leading-relaxed">We use the information we collect to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Provide, maintain, and improve our services</li>
                  <li>Respond to your inquiries and requests</li>
                  <li>Send you technical notices and support messages</li>
                  <li>Communicate with you about products, services, and events</li>
                </ul>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-foreground">3. Information Sharing</h2>
                <p className="leading-relaxed">
                  We do not share your personal information with third parties except as described in this policy or
                  with your consent. We may share information with service providers who perform services on our behalf.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-foreground">4. Data Security</h2>
                <p className="leading-relaxed">
                  We take reasonable measures to help protect your personal information from loss, theft, misuse, and
                  unauthorized access, disclosure, alteration, and destruction.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-foreground">5. Contact Us</h2>
                <p className="leading-relaxed">
                  If you have any questions about this Privacy Policy, please contact us at privacy@youthxtech.com
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
