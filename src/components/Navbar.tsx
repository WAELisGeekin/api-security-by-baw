import { Menu, X, Shield, Sparkles } from "lucide-react";
import { useState } from "react";

const sections = [
  { id: "home", label: "Home" },
  { id: "what-is-api", label: "APIs" },
  { id: "public-vs-secure", label: "Public vs Secure" },
  { id: "auth-vs-authz", label: "Auth" },
  { id: "what-is-jwt", label: "JWT" },
  { id: "how-jwt-works", label: "Flow" },
  { id: "demo", label: "Demo" },
  { id: "risks", label: "Risks" },
  { id: "best-practices", label: "Best Practices" },
  { id: "quiz", label: "Quiz" },
];

interface NavbarProps {
  onToggleSidebar: () => void;
  sidebarOpen: boolean;
}

const Navbar = ({ onToggleSidebar, sidebarOpen }: NavbarProps) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-1 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border">
      <div className="flex items-center justify-between px-4 h-14">
        <div className="flex items-center gap-2">
          <button
            onClick={onToggleSidebar}
            className="hidden lg:flex items-center justify-center w-8 h-8 rounded-lg hover:bg-secondary transition-colors"
            aria-label="Toggle sidebar"
          >
            <Menu className="w-5 h-5 text-muted-foreground" />
          </button>
          <a href="#home" className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-lg gradient-hero flex items-center justify-center glow-purple-sm">
              <Shield className="w-4 h-4 text-primary-foreground" />
            </div>
            <span className="font-bold text-lg text-foreground font-display">
              API <span className="text-gradient">Security</span>
            </span>
          </a>
        </div>
        <nav className="hidden md:flex items-center gap-0.5">
          {sections.slice(0, 7).map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className="px-2.5 py-1.5 text-sm text-muted-foreground hover:text-primary hover:bg-secondary rounded-lg transition-all duration-200"
            >
              {s.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <div className="hidden md:flex items-center gap-1.5 text-xs text-muted-foreground bg-secondary px-3 py-1.5 rounded-full">
            <Sparkles className="w-3 h-3 text-primary" />
            <span>Interactive</span>
          </div>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden w-9 h-9 flex items-center justify-center rounded-lg hover:bg-secondary transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>
      {mobileMenuOpen && (
        <nav className="md:hidden border-t border-border bg-background/95 backdrop-blur-xl px-4 py-3 animate-fade-in">
          {sections.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-2 px-3 py-3 text-sm text-muted-foreground hover:text-primary hover:bg-secondary rounded-lg transition-colors"
            >
              {s.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
};

export default Navbar;
