import { type ReactNode } from "react";
import { type LucideIcon } from "lucide-react";

interface SectionCardProps {
  id: string;
  title: string;
  subtitle?: string;
  icon?: LucideIcon;
  children: ReactNode;
}

const SectionCard = ({ id, title, subtitle, icon: Icon, children }: SectionCardProps) => (
  <section id={id} className="scroll-mt-20 mb-8">
    <div className="bg-card rounded-xl border border-border shadow-card p-6 md:p-8">
      <div className="flex items-start gap-3 mb-6">
        {Icon && (
          <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center shrink-0 mt-0.5">
            <Icon className="w-5 h-5 text-primary" />
          </div>
        )}
        <div>
          <h2 className="text-2xl font-bold text-foreground">{title}</h2>
          {subtitle && <p className="text-muted-foreground mt-1">{subtitle}</p>}
        </div>
      </div>
      <div className="prose-custom">{children}</div>
    </div>
  </section>
);

export default SectionCard;
