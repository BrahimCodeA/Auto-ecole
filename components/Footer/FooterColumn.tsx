import { ReactNode } from "react";

interface FooterColumnProps {
  title: string;
  children: ReactNode;
}

export default function FooterColumn({ title, children }: FooterColumnProps) {
  return (
    <div>
      <h3 className="text-sm uppercase tracking-wide text-yellow-400 font-bold">
        {title}
      </h3>

      <div className="mt-5 space-y-3 text-[15px] text-blue-50">{children}</div>
    </div>
  );
}
