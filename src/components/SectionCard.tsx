import { type ReactNode, useEffect, useRef, useState } from "react";
import { type LucideIcon, Maximize2, Minimize2 } from "lucide-react";

interface SectionCardProps {
  id: string;
  title: string;
  subtitle?: string;
  icon?: LucideIcon;
  children: ReactNode;
  index?: number;
}

const SectionCard = ({ id, title, subtitle, icon: Icon, children, index = 0 }: SectionCardProps) => {
  const [expanded, setExpanded] = useState(false);
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  // Lock body scroll when expanded
  useEffect(() => {
    if (expanded) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [expanded]);

  const card = (
    <div className={`relative bg-card rounded-xl border border-border shadow-card p-5 md:p-8 transition-all duration-300 hover:shadow-card-hover hover:border-primary/30 group ${expanded ? "max-w-4xl mx-auto my-4" : ""}`}>
      {/* Expand/collapse button */}
      <button
        onClick={(e) => { e.stopPropagation(); setExpanded(!expanded); }}
        className="absolute top-4 right-4 w-8 h-8 rounded-lg bg-secondary hover:bg-primary/20 flex items-center justify-center transition-all duration-200 opacity-60 hover:opacity-100 z-10"
        aria-label={expanded ? "Collapse section" : "Expand section"}
      >
        {expanded ? <Minimize2 className="w-4 h-4 text-primary" /> : <Maximize2 className="w-4 h-4 text-muted-foreground" />}
      </button>

      <div className="flex items-start gap-3 mb-6 pr-10">
        {Icon && (
          <div className="w-10 h-10 rounded-xl gradient-hero flex items-center justify-center shrink-0 mt-0.5 glow-purple-sm">
            <Icon className="w-5 h-5 text-primary-foreground" />
          </div>
        )}
        <div>
          <h2 className={`font-bold text-foreground font-display ${expanded ? "text-2xl md:text-3xl" : "text-xl md:text-2xl"}`}>{title}</h2>
          {subtitle && <p className="text-muted-foreground mt-1 text-sm">{subtitle}</p>}
        </div>
      </div>
      <div className={expanded ? "text-base md:text-lg" : ""}>{children}</div>
    </div>
  );

  if (expanded) {
    return (
      <>
        <section id={id} ref={ref} className="scroll-mt-20 mb-6" />
        <div className="section-expanded bg-dots" onClick={() => setExpanded(false)}>
          <div className="pt-16 pb-8 px-4" onClick={(e) => e.stopPropagation()}>
            <div className="max-w-4xl mx-auto">
              <button
                onClick={() => setExpanded(false)}
                className="mb-4 text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-1"
              >
                ← Back to all sections
              </button>
              {card}
            </div>
          </div>
        </div>
      </>
    );
  }

  return (
    <section
      id={id}
      ref={ref}
      className={`scroll-mt-20 mb-6 cursor-pointer transition-all duration-700 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      {card}
    </section>
  );
};

export default SectionCard;
