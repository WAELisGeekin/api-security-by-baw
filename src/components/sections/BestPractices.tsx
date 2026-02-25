import { CheckCircle2 } from "lucide-react";
import SectionCard from "../SectionCard";

const practices = [
  { icon: "🔒", title: "Always Use HTTPS", desc: "Encrypt all traffic. Never send tokens over HTTP." },
  { icon: "⏱️", title: "Short Expiration", desc: "Access tokens: 15–60 min. Refresh as needed." },
  { icon: "🔄", title: "Refresh Tokens", desc: "Long-lived refresh tokens renew access tokens." },
  { icon: "👮", title: "Role-Based Access", desc: "Encode roles in JWT. Enforce on every endpoint." },
  { icon: "🍪", title: "Secure Storage", desc: "httpOnly + Secure + SameSite cookies." },
  { icon: "🛡️", title: "Validate Everything", desc: "Check signature, exp, issuer, audience." },
];

const BestPractices = () => (
  <SectionCard id="best-practices" title="Best Practices" subtitle="Follow these to build secure APIs" icon={CheckCircle2} index={8}>
    <div className="grid sm:grid-cols-2 gap-3">
      {practices.map((p, i) => (
        <div key={p.title} className="flex gap-3 bg-secondary rounded-xl p-4 border border-border hover:border-primary/30 transition-all duration-200 hover:scale-[1.02] hover:glow-purple-sm"
          style={{ animationDelay: `${i * 0.08}s` }}
        >
          <span className="text-2xl shrink-0">{p.icon}</span>
          <div>
            <h4 className="font-bold text-sm text-foreground font-display">{p.title}</h4>
            <p className="text-xs text-muted-foreground">{p.desc}</p>
          </div>
        </div>
      ))}
    </div>
  </SectionCard>
);

export default BestPractices;
