import Link from "next/link";
import { LogoIcon } from "../icons/logo";

export function Footer() {
  return (
    <footer className="border-t border-border/20 py-12 px-8">
      <div className="flex flex-wrap gap-8 items-start justify-bteween">
        <div className="space-y-4">
          <div className="flex items-center gap-0.5">
            <LogoIcon className="size-8" />
            <span className="font-bold tracking-tight">CareCover Pro</span>
          </div>

          <ul className="flex gap-1 items-center">
            <li className="list-none">
              <Link
                className="text-muted-foreground p-1 hover:underline uppercase tracking-wide text-sm"
                rel="noreferrer"
                target="_blank"
                href="https://x.com/carecover"
              >
                X
              </Link>
            </li>
            <li className="list-none">
              <Link
                className="text-muted-foreground p-1 hover:underline uppercase tracking-wide text-sm"
                rel="noreferrer"
                target="_blank"
                href="https://instagram.com/carecover"
              >
                instagram
              </Link>
            </li>

            <li className="list-none">
              <Link
                className="text-muted-foreground p-1 hover:underline uppercase tracking-wide text-sm"
                rel="noreferrer"
                target="_blank"
                href="https://linkedin.com/carecover"
              >
                linkedin
              </Link>
            </li>
          </ul>
        </div>

        <nav className="flex  gap-4 justify-evenly flex-1">
          <div className="space-y-4">
            <h2 className="font-semibold">Resources</h2>
            <ul className="flex flex-col gap-1">
              <li className="list-none">
                <Link
                  className="text-muted-foreground p-1 hover:underline text-sm"
                  href="/blog"
                >
                  Blog
                </Link>
              </li>
              <li className="list-none">
                <Link
                  className="text-muted-foreground p-1 hover:underline text-sm"
                  href="/webbinars"
                >
                  Webinars
                </Link>
              </li>
              <li className="list-none">
                <Link
                  className="text-muted-foreground p-1 hover:underline text-sm"
                  href="/community"
                >
                  Community
                </Link>
              </li>
              <li className="list-none">
                <Link
                  className="text-muted-foreground p-1 hover:underline text-sm"
                  href="/case-studies"
                >
                  Case Studies
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h2 className="font-semibold">Company</h2>
            <ul className="flex flex-col gap-1">
              <li className="list-none">
                <Link
                  className="text-muted-foreground p-1 hover:underline text-sm"
                  href="/about"
                >
                  About us
                </Link>
              </li>
              <li className="list-none">
                <Link
                  className="text-muted-foreground p-1 hover:underline text-sm"
                  href="/careers"
                >
                  Careers
                </Link>
              </li>
              <li className="list-none">
                <Link
                  className="text-muted-foreground p-1 hover:underline text-sm"
                  href="/contact"
                >
                  Contact
                </Link>
              </li>
              <li className="list-none">
                <Link
                  className="text-muted-foreground p-1 hover:underline text-sm"
                  href="/partners"
                >
                  Partners
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h2 className="font-semibold">Services</h2>
            <ul className="flex flex-col gap-1">
              <li className="list-none">
                <Link
                  className="text-muted-foreground p-1 hover:underline text-sm"
                  href="/about"
                >
                  Medical Treatments
                </Link>
              </li>
              <li className="list-none">
                <Link
                  className="text-muted-foreground p-1 hover:underline text-sm"
                  href="/careers"
                >
                  Emergency Treatments
                </Link>
              </li>
              <li className="list-none">
                <Link
                  className="text-muted-foreground p-1 hover:underline text-sm"
                  href="/contact"
                >
                  Specializations
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </footer>
  );
}
