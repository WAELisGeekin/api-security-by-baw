import { useEffect, useState } from "react";
import { BookOpen, Globe, ShieldCheck, KeyRound, Workflow, Play, AlertTriangle, CheckCircle2, HelpCircle, GraduationCap, Lock } from "lucide-react";

const tocItems = [
  { id: "home", label: "Introduction", icon: BookOpen },
  { id: "what-is-api", label: "What is an API?", icon: Globe },
  { id: "public-vs-secure", label: "Public vs Secure API", icon: ShieldCheck },
  { id: "auth-vs-authz", label: "Auth vs Authorization", icon: Lock },
  { id: "what-is-jwt", label: "What is JWT?", icon: KeyRound },
  { id: "how-jwt-works", label: "How JWT Works", icon: Workflow },
  { id: "demo", label: "Interactive Demo", icon: Play },
  { id: "risks", label: "Security Risks", icon: AlertTriangle },
  { id: "best-practices", label: "Best Practices", icon: CheckCircle2 },
  { id: "conclusion", label: "Conclusion", icon: GraduationCap },
  { id: "quiz", label: "Quiz", icon: HelpCircle },
];

interface TableOfContentsProps {
  open: boolean;
}

const TableOfContents = ({ open }: TableOfContentsProps) => {
  const [activeId, setActiveId] = useState("home");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting);
        if (visible.length > 0) {
          setActiveId(visible[0].target.id);
        }
      },
      { rootMargin: "-80px 0px -60% 0px", threshold: 0.1 }
    );

    tocItems.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  if (!open) return null;

  return (
    <aside className="hidden lg:block fixed left-0 top-[3.75rem] w-64 h-[calc(100vh-3.75rem)] border-r border-border bg-card overflow-y-auto z-40">
      <div className="p-4">
        <h3 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">
          Table of Contents
        </h3>
        <nav className="space-y-0.5">
          {tocItems.map(({ id, label, icon: Icon }) => (
            <a
              key={id}
              href={`#${id}`}
              className={`flex items-center gap-2.5 px-3 py-2 text-sm rounded-md transition-colors ${
                activeId === id
                  ? "bg-accent text-primary font-medium"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted"
              }`}
            >
              <Icon className="w-4 h-4 shrink-0" />
              <span>{label}</span>
            </a>
          ))}
        </nav>
      </div>
    </aside>
  );
};

export default TableOfContents;
