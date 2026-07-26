import Link from "next/link"
import Image from "next/image"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ParentCompanyCredit } from "@/components/parent-company-credit"

export const metadata = {
  title: "Delete your Profit Protector account",
  description:
    "How to delete your Profit Protector account and what data is removed. In-app steps and email fallback for Google Play account deletion requirements.",
}

export default function DeleteAccountPage() {
  return (
    <div className="min-h-screen bg-background">
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

      <main className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:py-16">
        <div className="mb-8">
          <h1 className="mb-2 text-3xl font-bold text-foreground sm:text-4xl">
            Delete your Profit Protector account
          </h1>
          <p className="text-muted-foreground leading-relaxed">
            This page explains how to permanently delete your <strong className="text-foreground">Profit Protector</strong>{" "}
            account and associated business data from the mobile app and our cloud services.
            No sign-in is required to read these instructions.
          </p>
        </div>

        <div className="max-w-none space-y-10">
          <section
            className="rounded-lg border border-primary/30 bg-primary/5 p-6 sm:p-8"
            aria-labelledby="how-to-delete"
          >
            <h2 id="how-to-delete" className="mb-4 text-xl font-semibold text-foreground sm:text-2xl">
              How to request account deletion
            </h2>
            <p className="mb-6 text-muted-foreground leading-relaxed">
              The primary way to delete your account is inside the Profit Protector app. You must be signed in as
              the <strong className="text-foreground">business owner</strong> (not as a shopkeeper or other staff
              member).
            </p>
            <ol className="mb-6 list-decimal space-y-3 pl-6 text-foreground">
              <li className="leading-relaxed">
                Open <strong>Settings</strong> → <strong>Account</strong> → <strong>Delete Account</strong>
              </li>
              <li className="leading-relaxed">Confirm the action</li>
              <li className="leading-relaxed">
                Type <strong>DELETE</strong> when prompted, then tap <strong>Delete My Account</strong>
              </li>
            </ol>
            <p className="text-muted-foreground leading-relaxed">
              Deletion is <strong className="text-foreground">permanent</strong>. It removes your login, business
              profile, and all cloud and local business data tied to that account once the process completes.
            </p>
          </section>

          <section aria-labelledby="email-fallback">
            <h2 id="email-fallback" className="mb-4 text-xl font-semibold text-foreground">
              Cannot use the app? Request deletion by email
            </h2>
            <p className="mb-4 text-muted-foreground leading-relaxed">
              If you cannot open the app or sign in as the business owner, email us with the details below. We verify
              ownership before deleting an account.
            </p>
            <ul className="mb-4 list-disc space-y-2 pl-6 text-muted-foreground">
              <li>
                Email:{" "}
                <a href="mailto:profitprotector.app@gmail.com?subject=Account%20deletion%20request" className="text-primary hover:underline">
                  profitprotector.app@gmail.com
                </a>
              </li>
              <li>Subject line: <strong className="text-foreground">Account deletion request</strong></li>
              <li>Your registered phone number</li>
              <li>Your business name as shown in the app</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed">
              We process verified deletion requests within <strong className="text-foreground">30 days</strong> (usually
              sooner).
            </p>
          </section>

          <section aria-labelledby="data-deleted">
            <h2 id="data-deleted" className="mb-4 text-xl font-semibold text-foreground">
              Data that is deleted
            </h2>
            <p className="mb-4 text-muted-foreground leading-relaxed">
              When your account deletion is completed, we remove:
            </p>
            <ul className="list-disc space-y-2 pl-6 text-muted-foreground">
              <li>Your authentication account (login credentials)</li>
              <li>Business profile and settings</li>
              <li>Products, inventory, and stock movement records</li>
              <li>Sales, receipts, and transaction history</li>
              <li>Customers, credit, and payment records</li>
              <li>Staff accounts under your business</li>
              <li>Cloud sync data associated with your business</li>
              <li>Local app data on your device after deletion completes</li>
            </ul>
          </section>

          <section aria-labelledby="data-kept">
            <h2 id="data-kept" className="mb-4 text-xl font-semibold text-foreground">
              Data that may be kept
            </h2>
            <ul className="list-disc space-y-2 pl-6 text-muted-foreground">
              <li>
                Legal, tax, or fraud-related records where retention is required by applicable law
              </li>
              <li>
                Server, security, and operational logs and backups for up to approximately{" "}
                <strong className="text-foreground">90 days</strong>, then removed or anonymized per our practices
              </li>
              <li>Aggregated, non-identifying statistics that cannot reasonably be linked back to you</li>
            </ul>
          </section>

          <section aria-labelledby="staff-accounts">
            <h2 id="staff-accounts" className="mb-4 text-xl font-semibold text-foreground">
              Shopkeeper and staff accounts
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Shopkeepers and other staff are not deleted through the owner&apos;s <strong className="text-foreground">Delete Account</strong>{" "}
              flow in the same way as removing the whole business. The business owner removes individual staff via{" "}
              <strong className="text-foreground">Settings</strong> → <strong className="text-foreground">Manage Staff</strong> →{" "}
              <strong className="text-foreground">Delete Staff Account</strong>. To delete the entire business and the
              owner&apos;s account permanently, use <strong className="text-foreground">Delete Account</strong> as described above.
            </p>
          </section>

          <section aria-labelledby="related-links">
            <h2 id="related-links" className="mb-4 text-xl font-semibold text-foreground">
              Related information
            </h2>
            <ul className="list-disc space-y-2 pl-6 text-muted-foreground">
              <li>
                <Link href="/privacy" className="text-primary hover:underline">
                  Privacy Policy
                </Link>
              </li>
              <li>
                Privacy questions:{" "}
                <a href="mailto:privacy@profitprotector.app" className="text-primary hover:underline">
                  privacy@profitprotector.app
                </a>
              </li>
            </ul>
          </section>
        </div>
      </main>

      <footer className="border-t border-border bg-background py-8">
        <div className="mx-auto max-w-4xl px-4 text-center text-sm text-muted-foreground sm:px-6">
          <p>
            &copy; {new Date().getFullYear()} Profit Protector. All rights reserved.{" "}
            <Link href="/privacy" className="text-primary hover:underline">
              Privacy Policy
            </Link>
          </p>
          <ParentCompanyCredit />
        </div>
      </footer>
    </div>
  )
}
