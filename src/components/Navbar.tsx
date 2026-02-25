import { Menu, X, Shield } from "lucide-react";
import { useState } from "react";

const sections = [
  { id: "home", label: "Home" },
  { id: "what-is-api", label: "What is an API?" },
  { id: "public-vs-secure", label: "Public vs Secure" },
  { id: "auth-vs-authz", label: "Auth vs Authz" },
  { id: "what-is-jwt", label: "JWT" },
  { id: "how-jwt-works", label: "JWT Flow" },
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
    <header className="fixed top-1 left-0 right-0 z-50 bg-card/95 backdrop-blur-sm border-b border-border shadow-card">
      <div className="flex items-center justify-between px-4 h-14">
        <div className="flex items-center gap-2">
          <button
            onClick={onToggleSidebar}
            className="hidden lg:flex items-center justify-center w-8 h-8 rounded-md hover:bg-muted transition-colors"
            aria-label="Toggle sidebar"
          >
            <Menu className="w-5 h-5 text-muted-foreground" />
          </button>
          <a href="#home" className="flex items-center gap-2">
            <Shield className="w-6 h-6 text-primary" />
            <span className="font-bold text-lg text-foreground">API Security</span>
          </a>
        </div>
        <nav className="hidden md:flex items-center gap-1">
          {sections.slice(0, 7).map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className="px-2.5 py-1.5 text-sm text-muted-foreground hover:text-primary hover:bg-accent rounded-md transition-colors"
            >
              {s.label}
            </a>
          ))}
        </nav>
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden w-8 h-8 flex items-center justify-center rounded-md hover:bg-muted"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>
      {mobileMenuOpen && (
        <nav className="md:hidden border-t border-border bg-card px-4 py-2 max-h-[70vh] overflow-y-auto">
          {sections.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2.5 text-sm text-muted-foreground hover:text-primary hover:bg-accent rounded-md transition-colors"
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
