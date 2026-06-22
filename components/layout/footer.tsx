import Link from "next/link";

const footerLinks = [
  { href: "/", label: "Home" },
  { href: "/dashboard", label: "Dashboard" },
  { href: "/settings", label: "Settings" },
  { href: "/privacy", label: "Privacy Policy" },
];

export default function Footer() {
  return (
    <footer className="border-t border-border bg-primary-soft">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {/* Brand */}
          <div>
            <p className="text-lg font-bold text-primary">Gordo Health</p>
            <p className="mt-2 text-sm text-muted">
              Your health, your journey.
            </p>
          </div>

          {/* Navigation links */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-foreground">
              Navigation
            </p>
            <ul className="mt-4 space-y-2">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted transition-colors hover:text-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-foreground">
              Contact
            </p>
            <ul className="mt-4 space-y-2 text-sm text-muted">
              <li>hello@gordohealth.com</li>
              <li>1-800-GORDO-HX</li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 border-t border-border pt-6 text-center text-xs text-muted">
          © {new Date().getFullYear()} Gordo Health. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
