"use client";

import { useState } from "react";
import { ChevronDown, Car, Bike } from "lucide-react";

import SmartLink from "../shared/SmartLink";

export default function MobileFormationMenu() {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <button
        onClick={() => setOpen(!open)}
        className="
          w-full
          flex
          items-center
          justify-between
          text-lg
          font-bold
          text-blue-900
          transition
        "
      >
        Formations
        <div
          className={`
            flex
            items-center
            justify-center
            w-8
            h-8
            rounded-full
            bg-yellow-400
            transition-transform
            duration-300
            ${open ? "rotate-180" : ""}
          `}
        >
          <ChevronDown className="w-5 h-5 text-blue-900" />
        </div>
      </button>

      <div
        className={`
          overflow-hidden
          transition-all
          duration-300
          ease-out
          ${open ? "max-h-52 opacity-100 mt-4" : "max-h-0 opacity-0"}
        `}
      >
        <div className="flex flex-col gap-3 pl-2">
          <SmartLink
            href="/formations/voiture"
            className="
              flex
              items-center
              gap-4
              p-3
              rounded-xl
              bg-slate-50
              border
              border-slate-200
              hover:border-yellow-400
              hover:bg-yellow-50
              transition
            "
          >
            <div
              className="
              flex
              items-center
              justify-center
              w-10
              h-10
              rounded-lg
              bg-yellow-400
              text-blue-900
            "
            >
              <Car className="w-5 h-5" />
            </div>

            <div>
              <p className="font-bold text-blue-900">Permis voiture</p>

              <p className="text-xs text-slate-500">Formation B</p>
            </div>
          </SmartLink>

          <SmartLink
            href="/formations/moto"
            className="
              flex
              items-center
              gap-4
              p-3
              rounded-xl
              bg-slate-50
              border
              border-slate-200
              hover:border-yellow-400
              hover:bg-yellow-50
              transition
            "
          >
            <div
              className="
              flex
              items-center
              justify-center
              w-10
              h-10
              rounded-lg
              bg-yellow-400
              text-blue-900
            "
            >
              <Bike className="w-5 h-5" />
            </div>

            <div>
              <p className="font-bold text-blue-900">Permis moto</p>

              <p className="text-xs text-slate-500">Formation A</p>
            </div>
          </SmartLink>
        </div>
      </div>
    </div>
  );
}
