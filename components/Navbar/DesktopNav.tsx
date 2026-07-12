import Link from "next/link";
import FormationMenu from "./FormationMenu";
import { navLinks } from "./links";

export default function DesktopNav() {
  return (
    <nav className="hidden md:flex justify-center gap-8">
      {navLinks.map((link) =>
        link.label === "Formations" ? (
          <FormationMenu key={link.href} />
        ) : (
          <Link
            key={link.href}
            href={link.href}
            className="
              relative
              text-sm
              font-semibold
              uppercase
              tracking-wide
              text-slate-600
              hover:text-blue-900
              transition
            "
          >
            {link.label}
          </Link>
        )
      )}
    </nav>
  );
}
