import Link from "next/link"
import Image from "next/image"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata = {
  title: "Privacy Policy - Profit Protector",
  description: "Privacy Policy for Profit Protector mobile application",
}

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-background/80 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-4xl items-center justify-between px-4 sm:px-6">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/pp-logo-whitebg-F5hnwddzrhbrAnmIWYN6mC0mdoWai5.png"
              alt="Profit Protector Logo"
              width={40}
              height={40}
              className="h-10 w-10"
            />
            <span className="text-lg font-bold text-foreground">Profit Protector</span>
          </Link>
          <Link href="/">
            <Button variant="ghost" size="sm">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Button>
          </Link>
        </div>
      </header>

      {/* Content */}
      <main className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:py-16">
        <div className="mb-8">
          <h1 className="mb-2 text-3xl font-bold text-foreground sm:text-4xl">Privacy Policy</h1>
          <p className="text-muted-foreground">Last updated: 26 April 2026</p>
        </div>

        <div className="prose prose-neutral max-w-none dark:prose-invert">
          <section className="mb-8">
            <h2 className="mb-4 text-xl font-semibold text-foreground">1. Introduction</h2>
            <p className="mb-4 text-muted-foreground leading-relaxed">
              Welcome to Profit Protector (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;). This Privacy Policy explains how we collect, use, 
              disclose, and safeguard your information when you use our mobile application and related services 
              (collectively, the &ldquo;Service&rdquo;). Please read this privacy policy carefully.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="mb-4 text-xl font-semibold text-foreground">2. Information We Collect</h2>
            
            <h3 className="mb-3 text-lg font-medium text-foreground">2.1 Information You Provide</h3>
            <ul className="mb-4 list-disc space-y-2 pl-6 text-muted-foreground">
              <li>Account information (name, email address, phone number)</li>
              <li>Business information (business name, type, address)</li>
              <li>Product and inventory data</li>
              <li>Sales and transaction records</li>
              <li>Customer information you enter into the app</li>
              <li>Payment information for subscription services</li>
            </ul>

            <h3 className="mb-3 text-lg font-medium text-foreground">2.2 Automatically Collected Information</h3>
            <ul className="mb-4 list-disc space-y-2 pl-6 text-muted-foreground">
              <li>Device information (device type, operating system)</li>
              <li>Usage data (features used, interaction patterns)</li>
              <li>Log data (access times, error reports)</li>
              <li>Location data (only when explicitly permitted)</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="mb-4 text-xl font-semibold text-foreground">3. How We Use Your Information</h2>
            <p className="mb-4 text-muted-foreground leading-relaxed">We use the collected information to:</p>
            <ul className="mb-4 list-disc space-y-2 pl-6 text-muted-foreground">
              <li>Provide and maintain our Service</li>
              <li>Process transactions and send related information</li>
              <li>Sync your data across devices when you choose to enable this feature</li>
              <li>Send administrative information (updates, security alerts)</li>
              <li>Respond to your comments, questions, and support requests</li>
              <li>Improve our Service and develop new features</li>
              <li>Monitor usage patterns and analyze trends</li>
              <li>Detect, prevent, and address technical issues</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="mb-4 text-xl font-semibold text-foreground">4. Data Storage and Security</h2>
            
            <h3 className="mb-3 text-lg font-medium text-foreground">4.1 Local Storage</h3>
            <p className="mb-4 text-muted-foreground leading-relaxed">
              Your business data is primarily stored locally on your device. This ensures you have full access 
              to your data even without an internet connection.
            </p>

            <h3 className="mb-3 text-lg font-medium text-foreground">4.2 Cloud Sync</h3>
            <p className="mb-4 text-muted-foreground leading-relaxed">
              When you enable cloud sync, your data is securely transmitted and stored on our servers. 
              We use industry-standard encryption protocols to protect your data during transmission and storage.
            </p>

            <h3 className="mb-3 text-lg font-medium text-foreground">4.3 Security Measures</h3>
            <p className="mb-4 text-muted-foreground leading-relaxed">
              We implement appropriate technical and organizational security measures to protect your personal 
              information. However, no method of transmission over the Internet or electronic storage is 
              100% secure.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="mb-4 text-xl font-semibold text-foreground">5. Data Sharing and Disclosure</h2>
            <p className="mb-4 text-muted-foreground leading-relaxed">We may share your information in the following situations:</p>
            <ul className="mb-4 list-disc space-y-2 pl-6 text-muted-foreground">
              <li><strong className="text-foreground">With Service Providers:</strong> We may share your information with third-party vendors who perform services on our behalf</li>
              <li><strong className="text-foreground">For Business Transfers:</strong> In connection with any merger, sale of company assets, or acquisition</li>
              <li><strong className="text-foreground">With Your Consent:</strong> We may disclose your information for any other purpose with your consent</li>
              <li><strong className="text-foreground">Legal Requirements:</strong> If required by law or in response to valid requests by public authorities</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed">
              We do not sell your personal information to third parties.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="mb-4 text-xl font-semibold text-foreground">6. Your Rights and Choices</h2>
            <p className="mb-4 text-muted-foreground leading-relaxed">You have the right to:</p>
            <ul className="mb-4 list-disc space-y-2 pl-6 text-muted-foreground">
              <li>Access and receive a copy of your personal data</li>
              <li>Request correction of inaccurate data</li>
              <li>Request deletion of your data</li>
              <li>Object to processing of your data</li>
              <li>Request restriction of processing</li>
              <li>Data portability</li>
              <li>Withdraw consent at any time</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="mb-4 text-xl font-semibold text-foreground">7. Data Retention</h2>
            <p className="mb-4 text-muted-foreground leading-relaxed">
              We retain your personal information for as long as your account is active or as needed to provide 
              you services. We will retain and use your information as necessary to comply with our legal 
              obligations, resolve disputes, and enforce our agreements.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="mb-4 text-xl font-semibold text-foreground">8. Children&apos;s Privacy</h2>
            <p className="mb-4 text-muted-foreground leading-relaxed">
              Our Service is not intended for children under 13 years of age. We do not knowingly collect 
              personal information from children under 13.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="mb-4 text-xl font-semibold text-foreground">9. Changes to This Privacy Policy</h2>
            <p className="mb-4 text-muted-foreground leading-relaxed">
              We may update our Privacy Policy from time to time. We will notify you of any changes by 
              posting the new Privacy Policy on this page and updating the &ldquo;Last updated&rdquo; date.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="mb-4 text-xl font-semibold text-foreground">10. Contact Us</h2>
            <p className="mb-4 text-muted-foreground leading-relaxed">
              If you have any questions about this Privacy Policy, please contact us:
            </p>
            <ul className="list-disc space-y-2 pl-6 text-muted-foreground">
              <li>Email: <a href="mailto:privacy@profitprotector.app" className="text-primary hover:underline">privacy@profitprotector.app</a></li>
              <li>Through the app&apos;s support feature</li>
            </ul>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-border bg-background py-8">
        <div className="mx-auto max-w-4xl px-4 text-center text-sm text-muted-foreground sm:px-6">
          <p>&copy; {new Date().getFullYear()} Profit Protector. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
