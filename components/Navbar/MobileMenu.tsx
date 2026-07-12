"use client";

import Link from "next/link";
import { Menu, Phone, Car } from "lucide-react";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

import { navLinks } from "./links";

export default function MobileMenu() {
  return (
    <div className="md:hidden">
      <Sheet>
        <SheetTrigger
          render={
            <button className="flex items-center justify-center w-11 h-11 rounded-full cursor-pointer bg-blue-900 text-white hover:bg-blue-800 transition">
              <Menu className="w-6 h-6" />
            </button>
          }
        />

        <SheetContent
          side="right"
          className="bg-white border-l border-slate-200 w-[320px] px-6 [&>button]:top-7 [&>button]:right-6"
        >
          {/* HEADER MENU */}
          <div className="flex items-center gap-2 mt-6 mb-12">
            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-yellow-400 text-blue-900">
              <Car className="w-5 h-5" />
            </div>

            <span className="font-black text-xl text-blue-900">
              Auto<span className="text-yellow-500">Drive</span>
            </span>
          </div>

          {/* LINKS */}
          <nav className="flex flex-col gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="
                border-b-amber-300
                 border-b-2
                  text-lg
                  font-semibold
                  text-slate-700
                  hover:text-blue-900
                  transition
                  relative
                  group
                "
              >
                {link.label}

                <span
                  className="
                  block
                  h-0.5
                  w-0
                  bg-yellow-400
                  transition-all
                  duration-300
                  group-hover:w-10
                  mt-1
                "
                />
              </Link>
            ))}
          </nav>

          {/* CONTACT */}
          <div className="absolute bottom-8 left-6 right-6">
            <a
              href="tel:0102030405"
              className="
                flex
                items-center
                justify-center
                gap-3
                bg-blue-900
                text-white
                py-4
                rounded-xl
                font-bold
                hover:bg-blue-800
                transition
              "
            >
              <Phone className="w-5 h-5 text-yellow-400" />
              Appeler l'auto-école
            </a>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}
