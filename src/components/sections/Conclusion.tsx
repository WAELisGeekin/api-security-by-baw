import { GraduationCap, Shield } from "lucide-react";

const Conclusion = () => (
  <section id="conclusion" className="scroll-mt-20 mb-6">
    <div className="relative overflow-hidden rounded-2xl gradient-hero p-8 md:p-14 text-center glow-purple">
      <div className="absolute inset-0 bg-grid opacity-10" />
      <div className="absolute top-5 right-10 w-40 h-40 bg-accent/20 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-5 left-10 w-32 h-32 bg-primary/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }} />

      <div className="relative z-10">
        <div className="flex justify-center mb-6">
          <div className="w-16 h-16 rounded-2xl bg-primary-foreground/15 backdrop-blur-sm flex items-center justify-center animate-pulse-glow">
            <Shield className="w-8 h-8 text-primary-foreground" />
          </div>
        </div>
        <blockquote className="text-2xl md:text-4xl font-extrabold mb-6 leading-tight text-primary-foreground font-display">
          "Security is not a feature —<br />
          <span className="opacity-80">it is a responsibility."</span>
        </blockquote>
        <p className="text-primary-foreground/60 max-w-lg mx-auto leading-relaxed text-sm md:text-base">
          Every API you build should be designed with security from day one.
          JWT is powerful — but only when implemented correctly.
        </p>
        <div className="mt-6 flex justify-center">
          <GraduationCap className="w-6 h-6 text-primary-foreground/40" />
        </div>
      </div>
    </div>
  </section>
);

export default Conclusion;
