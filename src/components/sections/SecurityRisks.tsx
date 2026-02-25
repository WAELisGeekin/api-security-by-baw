import { AlertTriangle } from "lucide-react";
import SectionCard from "../SectionCard";

const risks = [
  { emoji: "🕵️", title: "Token Theft", desc: "If an attacker steals a JWT, they can impersonate the user. Always use HTTPS and httpOnly cookies." },
  { emoji: "🔓", title: "Weak Secret Key", desc: "Short or guessable signing keys can be brute-forced. Use long, random secrets (256+ bits)." },
  { emoji: "⏰", title: "No Expiration", desc: "Tokens without expiry remain valid forever. Always set short exp claims." },
  { emoji: "💾", title: "Insecure Storage", desc: "Storing tokens in localStorage exposes them to XSS attacks. Prefer httpOnly cookies." },
  { emoji: "🚫", title: "No Token Revocation", desc: "JWTs can't be invalidated once issued. Implement a blacklist or short-lived tokens with refresh." },
];

const SecurityRisks = () => (
  <SectionCard id="risks" title="Security Risks" subtitle="Common JWT vulnerabilities you must avoid" icon={AlertTriangle}>
    <div className="space-y-3">
      {risks.map((r) => (
        <div key={r.title} className="flex gap-3 bg-destructive/5 border border-destructive/10 rounded-lg p-4">
          <span className="text-2xl shrink-0">{r.emoji}</span>
          <div>
            <h4 className="font-bold text-sm text-foreground">{r.title}</h4>
            <p className="text-sm text-muted-foreground">{r.desc}</p>
          </div>
        </div>
      ))}
    </div>
  </SectionCard>
);

export default SecurityRisks;
