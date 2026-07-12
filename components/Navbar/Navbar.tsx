import Logo from "./Logo";
import DesktopNav from "./DesktopNav";
import MobileMenu from "./MobileMenu";
import DesktopContact from "./DesktopContact";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-xl border-b border-slate-200">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4 md:grid md:grid-cols-3">
        <Logo />

        <DesktopNav />

        <div className="flex justify-end">
          <DesktopContact />
          <MobileMenu />
        </div>
      </div>
    </header>
  );
}
