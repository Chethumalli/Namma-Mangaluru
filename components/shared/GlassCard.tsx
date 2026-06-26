import { ReactNode } from "react";

interface GlassCardProps {
  children: ReactNode;
}

export default function GlassCard({
  children,
}: GlassCardProps) {
  return (
    <div
      className="
        rounded-3xl
        p-8
        border
        border-white/20
        bg-gradient-to-br
        from-sky-900/90
        via-slate-900/90
        to-cyan-900/80
        backdrop-blur-2xl
        shadow-2xl
        transition-all
        duration-300
        hover:-translate-y-2
      "
    >
      {children}
    </div>
  );
}