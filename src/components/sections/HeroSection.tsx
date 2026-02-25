import { Shield, ArrowRight } from "lucide-react";

const HeroSection = () => (
  <section id="home" className="scroll-mt-20 mb-8">
    <div className="gradient-hero rounded-xl p-8 md:p-12 text-primary-foreground">
      <div className="max-w-2xl">
        <div className="flex items-center gap-2 mb-4">
          <Shield className="w-8 h-8" />
          <span className="text-sm font-medium bg-primary-foreground/20 px-3 py-1 rounded-full">
            University Presentation
          </span>
        </div>
        <h1 className="text-3xl md:text-5xl font-extrabold mb-4 leading-tight">
          Understanding API Security
        </h1>
        <p className="text-lg md:text-xl opacity-90 mb-2 font-medium">
          Public vs Secure APIs with JWT Authentication
        </p>
        <p className="opacity-80 mb-8 max-w-xl leading-relaxed">
          APIs power the modern web. But without proper security, they become open doors for attackers.
          Learn how JWT authentication protects your APIs and why it matters.
        </p>
        <a
          href="#what-is-api"
          className="inline-flex items-center gap-2 bg-primary-foreground text-primary font-semibold px-6 py-3 rounded-lg hover:opacity-90 transition-opacity"
        >
          Start Learning
          <ArrowRight className="w-4 h-4" />
        </a>
      </div>
    </div>
  </section>
);

export default HeroSection;
