"use client";

import { useState } from "react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/dashboard", label: "Dashboard" },
  { href: "/settings", label: "Settings" },
];

export function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        aria-label="Toggle navigation menu"
        aria-expanded={open}
        onClick={() => setOpen((prev) => !prev)}
        className="flex flex-col gap-1.5 p-2 md:hidden"
      >
        <span className="block h-0.5 w-6 bg-foreground transition-transform" />
        <span className="block h-0.5 w-6 bg-foreground transition-transform" />
        <span className="block h-0.5 w-6 bg-foreground transition-transform" />
      </button>

      {open && (
        <nav
          aria-label="Mobile navigation"
          className="absolute left-0 top-full z-50 w-full border-b border-border bg-background shadow-md md:hidden"
        >
          <ul className="flex flex-col px-4 py-3">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block py-2 text-sm font-medium text-foreground hover:text-primary"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </>
  );
}
