import { CheckCircle2 } from "lucide-react";
import SectionCard from "../SectionCard";

const practices = [
  { icon: "🔒", title: "Always Use HTTPS", desc: "Encrypt all API traffic. Never send tokens over plain HTTP." },
  { icon: "⏱️", title: "Short Token Expiration", desc: "Set access tokens to expire in 15–60 minutes." },
  { icon: "🔄", title: "Use Refresh Tokens", desc: "Issue long-lived refresh tokens to get new access tokens without re-login." },
  { icon: "👮", title: "Role-Based Access Control", desc: "Include roles/permissions in JWT claims. Enforce on every endpoint." },
  { icon: "🍪", title: "Secure Token Storage", desc: "Use httpOnly, Secure, SameSite cookies instead of localStorage." },
  { icon: "🛡️", title: "Validate Everything", desc: "Check signature, expiration, issuer, and audience on every request." },
];

const BestPractices = () => (
  <SectionCard id="best-practices" title="Best Practices" subtitle="Follow these to build secure APIs" icon={CheckCircle2}>
    <div className="grid md:grid-cols-2 gap-3">
      {practices.map((p) => (
        <div key={p.title} className="flex gap-3 bg-accent/50 border border-primary/10 rounded-lg p-4">
          <span className="text-2xl shrink-0">{p.icon}</span>
          <div>
            <h4 className="font-bold text-sm text-foreground">{p.title}</h4>
            <p className="text-sm text-muted-foreground">{p.desc}</p>
          </div>
        </div>
      ))}
    </div>
  </SectionCard>
);

export default BestPractices;
