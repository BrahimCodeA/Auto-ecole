import SmartLink from "../shared/SmartLink";

export default function DesktopContact() {
  return (
    <div className="hidden lg:flex justify-end">
      <SmartLink
        href="tel:0102030405"
        className="group flex items-center gap-3"
      >
        <div className="flex items-center justify-center w-10 h-10 rounded-full bg-yellow-400 text-blue-900 group-hover:bg-blue-900 group-hover:text-yellow-400 transition-colors duration-300">
          <span className="text-lg">☎</span>
        </div>

        <div className="leading-tight">
          <p className="text-xs text-slate-500">Besoin d'informations ?</p>

          <p className="font-bold text-blue-900 group-hover:text-blue-700 transition">
            01 02 03 04 05
          </p>
        </div>
      </SmartLink>
    </div>
  );
}
