import { AlertTriangle } from "lucide-react";
import SectionCard from "../SectionCard";

const risks = [
  { emoji: "🕵️", title: "Token Theft", desc: "Stolen JWT = full impersonation. Always use HTTPS.", color: "border-destructive/20 bg-destructive/5 hover:border-destructive/40" },
  { emoji: "🔓", title: "Weak Secret Key", desc: "Short keys can be brute-forced. Use 256+ bit secrets.", color: "border-warning/20 bg-warning/5 hover:border-warning/40" },
  { emoji: "⏰", title: "No Expiration", desc: "Tokens without exp last forever. Set short TTL.", color: "border-info/20 bg-info/5 hover:border-info/40" },
  { emoji: "💾", title: "Insecure Storage", desc: "localStorage is vulnerable to XSS. Use httpOnly cookies.", color: "border-accent/20 bg-accent/5 hover:border-accent/40" },
  { emoji: "🚫", title: "No Revocation", desc: "JWTs can't be invalidated. Use blocklists + short TTL.", color: "border-primary/20 bg-primary/5 hover:border-primary/40" },
];

const SecurityRisks = () => (
  <SectionCard id="risks" title="Security Risks" subtitle="Common JWT vulnerabilities to avoid" icon={AlertTriangle} index={7}>
    <div className="space-y-3">
      {risks.map((r, i) => (
        <div key={r.title} className={`flex gap-4 ${r.color} border rounded-xl p-4 transition-all duration-200 hover:scale-[1.01]`}
          style={{ animationDelay: `${i * 0.1}s` }}
        >
          <span className="text-3xl shrink-0">{r.emoji}</span>
          <div>
            <h4 className="font-bold text-sm text-foreground font-display">{r.title}</h4>
            <p className="text-sm text-muted-foreground">{r.desc}</p>
          </div>
        </div>
      ))}
    </div>
  </SectionCard>
);

export default SecurityRisks;
