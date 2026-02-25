import { Shield, ArrowRight, Zap, Lock, Eye } from "lucide-react";

const HeroSection = () => (
  <section id="home" className="scroll-mt-20 mb-8">
    <div className="relative overflow-hidden rounded-2xl gradient-hero p-8 md:p-14 glow-purple">
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-grid opacity-20" />
      <div className="absolute top-10 right-10 w-32 h-32 bg-primary/20 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-10 left-10 w-40 h-40 bg-accent/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "1.5s" }} />

      <div className="relative z-10 max-w-2xl">
        <div className="flex items-center gap-2 mb-6 animate-fade-in">
          <span className="text-xs font-bold uppercase tracking-[0.15em] bg-primary-foreground/15 backdrop-blur-sm px-4 py-1.5 rounded-full text-primary-foreground border border-primary-foreground/20">
            🎓 University Presentation
          </span>
        </div>
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4 leading-tight text-primary-foreground font-display animate-fade-in" style={{ animationDelay: "0.1s" }}>
          Understanding<br />
          <span className="opacity-90">API Security</span>
        </h1>
        <p className="text-lg md:text-xl text-primary-foreground/80 mb-2 font-medium animate-fade-in" style={{ animationDelay: "0.2s" }}>
          Public vs Secure APIs with JWT Authentication
        </p>
        <p className="text-primary-foreground/60 mb-8 max-w-xl leading-relaxed animate-fade-in" style={{ animationDelay: "0.3s" }}>
          APIs power the modern web. Without proper security, they become open doors for attackers.
          Explore this interactive playground to learn how JWT protects your APIs.
        </p>

        {/* Feature pills */}
        <div className="flex flex-wrap gap-2 mb-8 animate-fade-in" style={{ animationDelay: "0.4s" }}>
          {[
            { icon: Zap, label: "Interactive Demo" },
            { icon: Lock, label: "JWT Deep Dive" },
            { icon: Eye, label: "Visual Diagrams" },
          ].map((f) => (
            <div key={f.label} className="flex items-center gap-1.5 bg-primary-foreground/10 backdrop-blur-sm px-3 py-1.5 rounded-full text-xs text-primary-foreground/80 border border-primary-foreground/10">
              <f.icon className="w-3 h-3" />
              {f.label}
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row gap-3 animate-fade-in" style={{ animationDelay: "0.5s" }}>
          <a
            href="#what-is-api"
            className="inline-flex items-center justify-center gap-2 bg-primary-foreground text-background font-bold px-7 py-3.5 rounded-xl hover:scale-105 transition-transform duration-200 shadow-lg"
          >
            Start Learning
            <ArrowRight className="w-4 h-4" />
          </a>
          <a
            href="#demo"
            className="inline-flex items-center justify-center gap-2 bg-primary-foreground/15 backdrop-blur-sm text-primary-foreground font-semibold px-7 py-3.5 rounded-xl border border-primary-foreground/20 hover:bg-primary-foreground/25 transition-colors"
          >
            Try the Demo
            <Shield className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default HeroSection;
