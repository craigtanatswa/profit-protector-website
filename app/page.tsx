"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import {
  TrendingUp,
  Package,
  Users,
  BarChart3,
  Wifi,
  Banknote,
  Check,
  Menu,
  X,
  ChevronRight,
  Shield,
  Zap,
  Clock,
  Smartphone,
} from "lucide-react"
import { useState } from "react"

// Scroll animation hook
function useScrollAnimation() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible")
          }
        })
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    )

    const elements = document.querySelectorAll(".scroll-animate")
    elements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])
}

// Logo component
function Logo({ className = "", variant = "white" }: { className?: string; variant?: "white" | "blue" }) {
  const src = variant === "white" 
    ? "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/pp-logo-whitebg-F5hnwddzrhbrAnmIWYN6mC0mdoWai5.png"
    : "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/pp-logo-blue-9f5G5oSyPFWorHqtglJmhLwBXV9qzS.png"
  
  return (
    <Image
      src={src}
      alt="Profit Protector Logo"
      width={48}
      height={48}
      className={className}
    />
  )
}

// Phone mockup component
function PhoneMockup({ 
  src, 
  alt, 
  className = "",
  priority = false 
}: { 
  src: string
  alt: string
  className?: string
  priority?: boolean
}) {
  return (
    <div className={`relative ${className}`}>
      <div className="relative mx-auto w-[280px] overflow-hidden rounded-[2.5rem] border-[8px] border-foreground/90 bg-foreground/90 shadow-2xl">
        <div className="absolute left-1/2 top-0 z-10 h-6 w-24 -translate-x-1/2 rounded-b-xl bg-foreground/90" />
        <Image
          src={src}
          alt={alt}
          width={280}
          height={560}
          className="w-full"
          priority={priority}
        />
      </div>
    </div>
  )
}

// Feature card component
function FeatureCard({
  icon: Icon,
  title,
  description,
  delay = 0,
}: {
  icon: React.ElementType
  title: string
  description: string
  delay?: number
}) {
  return (
    <Card className={`scroll-animate fade-up delay-${delay} group p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 bg-card border-border`}>
      <div className="mb-4 inline-flex rounded-xl bg-primary/10 p-3">
        <Icon className="h-6 w-6 text-primary" />
      </div>
      <h3 className="mb-2 text-lg font-semibold text-foreground">{title}</h3>
      <p className="text-sm leading-relaxed text-muted-foreground">{description}</p>
    </Card>
  )
}

// Benefit item component
function BenefitItem({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  return (
    <div className={`scroll-animate fade-up delay-${delay} flex items-start gap-3`}>
      <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent">
        <Check className="h-3 w-3 text-accent-foreground" />
      </div>
      <span className="text-muted-foreground">{children}</span>
    </div>
  )
}

export default function LandingPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  useScrollAnimation()

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 z-50 w-full border-b border-border/50 bg-background/80 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <Link href="/" className="flex items-center gap-2">
            <Logo className="h-10 w-10" variant="white" />
            <span className="text-lg font-bold text-foreground">Profit Protector</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-8 md:flex">
            <Link href="#features" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
              Features
            </Link>
            <Link href="#benefits" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
              Benefits
            </Link>
            <Link href="#screenshots" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
              App Preview
            </Link>
            <Link
              href="https://play.google.com/store/apps/details?id=com.profitprotector"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
                Download App
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="border-t border-border bg-background md:hidden">
            <div className="flex flex-col gap-4 p-4">
              <Link
                href="#features"
                className="text-muted-foreground hover:text-foreground"
                onClick={() => setMobileMenuOpen(false)}
              >
                Features
              </Link>
              <Link
                href="#benefits"
                className="text-muted-foreground hover:text-foreground"
                onClick={() => setMobileMenuOpen(false)}
              >
                Benefits
              </Link>
              <Link
                href="#screenshots"
                className="text-muted-foreground hover:text-foreground"
                onClick={() => setMobileMenuOpen(false)}
              >
                App Preview
              </Link>
              <Link
                href="https://play.google.com/store/apps/details?id=com.profitprotector"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="w-full bg-primary text-primary-foreground">Download App</Button>
              </Link>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-24 pb-16 lg:pt-32 lg:pb-24">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Hero Content */}
            <div className="animate-fade-in-up">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm text-primary">
                <Smartphone className="h-4 w-4" />
                <span>Now Available on Google Play</span>
              </div>
              <h1 className="mb-6 text-balance text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
                A Smarter Way to Run Your{" "}
                <span className="text-primary">Business</span>
              </h1>
              <p className="mb-8 max-w-lg text-pretty text-lg leading-relaxed text-muted-foreground">
                Profit Protector is a mobile business management app built for small shops and SMEs. 
                Track sales, inventory, customers, and profits in real-time - all from your pocket.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row">
                <Link
                  href="https://play.google.com/store/apps/details?id=com.profitprotector"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button size="lg" className="w-full bg-primary text-primary-foreground hover:bg-primary/90 sm:w-auto">
                    <svg viewBox="0 0 24 24" className="mr-2 h-5 w-5" fill="currentColor">
                      <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                    </svg>
                    Get it on Google Play
                  </Button>
                </Link>
                <Link href="#features">
                  <Button size="lg" variant="outline" className="w-full sm:w-auto">
                    Learn More
                    <ChevronRight className="ml-1 h-4 w-4" />
                  </Button>
                </Link>
              </div>
              {/* Trust indicators */}
              <div className="mt-10 flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Shield className="h-5 w-5 text-accent" />
                  <span>Secure & Private</span>
                </div>
                <div className="flex items-center gap-2">
                  <Zap className="h-5 w-5 text-accent" />
                  <span>100% Offline Ready</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-accent" />
                  <span>Real-time Sync</span>
                </div>
              </div>
            </div>

            {/* Hero Phone Mockup */}
            <div className="relative animate-slide-in-right">
              <div className="absolute -inset-4 -z-10 rounded-full bg-primary/10 blur-3xl" />
              <PhoneMockup
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot_20260525-222430_Profit%20Protector-zugq5SZdk8VqIJWcdUKVTtAORm91De.jpg"
                alt="Profit Protector Dashboard"
                className="animate-float"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-16 max-w-2xl text-center">
            <h2 className="scroll-animate fade-up mb-4 text-3xl font-bold text-foreground sm:text-4xl">
              Everything You Need to Manage Your Business
            </h2>
            <p className="scroll-animate fade-up delay-100 text-lg text-muted-foreground">
              Powerful features designed specifically for small shops and SMEs
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <FeatureCard
              icon={TrendingUp}
              title="Real Profit Visibility"
              description="See your actual profit on every sale instantly. Track margins and make smarter pricing decisions with real-time data."
              delay={100}
            />
            <FeatureCard
              icon={Package}
              title="Smart Inventory Management"
              description="Track stock levels in real-time with low stock alerts. Never run out of your best sellers again."
              delay={200}
            />
            <FeatureCard
              icon={Users}
              title="Customer & Credit Management"
              description="Keep track of customer purchases and outstanding credit. Know exactly who owes what at any time."
              delay={300}
            />
            <FeatureCard
              icon={BarChart3}
              title="Detailed Reports"
              description="Get comprehensive sales analytics with export options. View daily, weekly, monthly performance at a glance."
              delay={400}
            />
            <FeatureCard
              icon={Wifi}
              title="Works Offline"
              description="Full functionality without internet. Your data syncs automatically when you are back online."
              delay={500}
            />
            <FeatureCard
              icon={Banknote}
              title="Multi-Currency Support"
              description="Handle USD and local currency transactions seamlessly. Perfect for businesses dealing with multiple currencies."
              delay={600}
            />
          </div>
        </div>
      </section>

      {/* App Screenshots Section */}
      <section id="screenshots" className="bg-muted/50 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-16 max-w-2xl text-center">
            <h2 className="scroll-animate fade-up mb-4 text-3xl font-bold text-foreground sm:text-4xl">
              See It In Action
            </h2>
            <p className="scroll-animate fade-up delay-100 text-lg text-muted-foreground">
              Clean, intuitive interface designed for busy business owners
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Login Screen */}
            <div className="scroll-animate scale-in delay-100 flex flex-col items-center">
              <PhoneMockup
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot_20260525-212446_Profit%20Protector-AdHAwIiYfGrR802UG0vG0KGor8cAc4.jpg"
                alt="Login Screen"
              />
              <p className="mt-4 font-medium text-foreground">Easy Sign In</p>
              <p className="text-sm text-muted-foreground">Business owner or shopkeeper access</p>
            </div>

            {/* Sales History */}
            <div className="scroll-animate scale-in delay-200 flex flex-col items-center">
              <PhoneMockup
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot_20260525-212641_Profit%20Protector-2NdEZF7LHnR2nacnZeS6vo4uPOasjp.jpg"
                alt="Sales History"
              />
              <p className="mt-4 font-medium text-foreground">Sales History</p>
              <p className="text-sm text-muted-foreground">Track every transaction with profit</p>
            </div>

            {/* Stock Management */}
            <div className="scroll-animate scale-in delay-300 flex flex-col items-center">
              <PhoneMockup
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot_20260525-212652_Profit%20Protector-6APl5EsMj3TbQp5s0tpbL0YSPAlI6t.jpg"
                alt="Stock & Products"
              />
              <p className="mt-4 font-medium text-foreground">Stock & Products</p>
              <p className="text-sm text-muted-foreground">Real-time inventory with alerts</p>
            </div>

            {/* Reports */}
            <div className="scroll-animate scale-in delay-400 flex flex-col items-center">
              <PhoneMockup
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot_20260525-212702_Profit%20Protector-rKGUTs91WWsfR6DTOAqDT9xV6Mk1nS.jpg"
                alt="Reports & Analytics"
              />
              <p className="mt-4 font-medium text-foreground">Detailed Reports</p>
              <p className="text-sm text-muted-foreground">Analytics with PDF & CSV export</p>
            </div>

            {/* Customers */}
            <div className="scroll-animate scale-in delay-500 flex flex-col items-center">
              <PhoneMockup
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot_20260525-212711_Profit%20Protector-Z7IILA0ydJfnyAXAJHCmQhYroS9uf8.jpg"
                alt="Customer Management"
              />
              <p className="mt-4 font-medium text-foreground">Customer Management</p>
              <p className="text-sm text-muted-foreground">Track credit and payments</p>
            </div>

            {/* Settings */}
            <div className="scroll-animate scale-in delay-600 flex flex-col items-center">
              <PhoneMockup
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot_20260525-212734_Profit%20Protector-c1lIjDswT8sNV9wIOzMSsnrxxAJUNG.jpg"
                alt="Settings"
              />
              <p className="mt-4 font-medium text-foreground">Settings & Subscription</p>
              <p className="text-sm text-muted-foreground">Manage your business profile</p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div className="scroll-animate slide-left">
              <h2 className="mb-6 text-3xl font-bold text-foreground sm:text-4xl">
                Why Business Owners Love Profit Protector
              </h2>
              <p className="mb-8 text-lg text-muted-foreground">
                Built specifically for small shop owners and SMEs who need clarity on their business performance without complex accounting software.
              </p>

              <div className="grid gap-4 sm:grid-cols-2">
                <BenefitItem delay={100}>Know your real profit instantly</BenefitItem>
                <BenefitItem delay={200}>Never miss a low stock item</BenefitItem>
                <BenefitItem delay={300}>Track customer credit easily</BenefitItem>
                <BenefitItem delay={400}>Works without internet</BenefitItem>
                <BenefitItem delay={500}>Export reports to PDF/CSV</BenefitItem>
                <BenefitItem delay={600}>Simple, no accounting needed</BenefitItem>
              </div>
            </div>

            <div className="scroll-animate slide-right relative">
              <div className="absolute -inset-4 -z-10 rounded-3xl bg-gradient-to-br from-primary/10 to-accent/10 blur-2xl" />
              <Card className="overflow-hidden border-border bg-card p-8">
                <div className="mb-6 flex items-center gap-4">
                  <Logo className="h-16 w-16" variant="white" />
                  <div>
                    <h3 className="text-xl font-bold text-foreground">Profit Protector Pro</h3>
                    <p className="text-muted-foreground">Perfect for sole traders</p>
                  </div>
                </div>
                <div className="mb-6 space-y-3">
                  <div className="flex justify-between border-b border-border pb-3">
                    <span className="text-muted-foreground">Staff accounts</span>
                    <span className="font-medium text-foreground">Up to 1 staff member</span>
                  </div>
                  <div className="flex justify-between border-b border-border pb-3">
                    <span className="text-muted-foreground">Monthly</span>
                    <span className="font-bold text-primary">$10.00 / month</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Cloud sync</span>
                    <span className="font-medium text-accent">Included</span>
                  </div>
                </div>
                <Link
                  href="https://play.google.com/store/apps/details?id=com.profitprotector"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                    Start Free Trial
                  </Button>
                </Link>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary py-20 lg:py-24">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="scroll-animate fade-up mb-6 text-3xl font-bold text-primary-foreground sm:text-4xl">
            Ready to Protect Your Profits?
          </h2>
          <p className="scroll-animate fade-up delay-100 mx-auto mb-8 max-w-2xl text-lg text-primary-foreground/80">
            Join thousands of business owners who have taken control of their finances. 
            Download Profit Protector today and see the difference clarity makes.
          </p>
          <Link
            href="https://play.google.com/store/apps/details?id=com.profitprotector"
            target="_blank"
            rel="noopener noreferrer"
            className="scroll-animate scale-in delay-200 inline-block"
          >
            <Button size="lg" variant="secondary" className="animate-pulse-glow bg-white text-primary hover:bg-white/90">
              <svg viewBox="0 0 24 24" className="mr-2 h-5 w-5" fill="currentColor">
                <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
              </svg>
              Download on Google Play
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-background py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
            <div className="flex items-center gap-3">
              <Logo className="h-10 w-10" variant="white" />
              <div>
                <p className="font-semibold text-foreground">Profit Protector</p>
                <p className="text-sm text-muted-foreground">Business in your pocket</p>
              </div>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
              <Link href="#features" className="transition-colors hover:text-foreground">
                Features
              </Link>
              <Link href="#benefits" className="transition-colors hover:text-foreground">
                Benefits
              </Link>
              <Link href="/privacy" className="transition-colors hover:text-foreground">
                Privacy Policy
              </Link>
              <Link
                href="mailto:support@profitprotector.app"
                className="transition-colors hover:text-foreground"
              >
                Contact
              </Link>
            </div>
          </div>
          <div className="mt-8 border-t border-border pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; {new Date().getFullYear()} Profit Protector. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
