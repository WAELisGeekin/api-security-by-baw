import { ShieldCheck } from "lucide-react";
import SectionCard from "../SectionCard";

const PublicVsSecure = () => (
  <SectionCard id="public-vs-secure" title="Public API vs Secure API" subtitle="Not all APIs are created equal" icon={ShieldCheck} index={2}>
    {/* Comparison Table */}
    <div className="overflow-x-auto my-4">
      <table className="w-full text-sm border-collapse">
        <thead>
          <tr className="bg-secondary">
            <th className="text-left p-3 font-bold text-foreground rounded-tl-xl">Feature</th>
            <th className="text-left p-3 font-bold text-foreground">🌍 Public API</th>
            <th className="text-left p-3 font-bold text-foreground rounded-tr-xl">🔒 Secure API</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-border">
          {[
            ["Authentication", "❌ Not required", "✅ Required (JWT, Key)"],
            ["Access", "Anyone can call", "Authorized users only"],
            ["Data", "Public information", "Sensitive / private"],
            ["Rate Limiting", "⚠️ Often limited", "✅ Per-user control"],
            ["Example", "Weather data", "Banking API"],
          ].map(([feature, pub, sec], i) => (
            <tr key={i} className="hover:bg-secondary/50 transition-colors">
              <td className="p-3 font-medium text-foreground">{feature}</td>
              <td className="p-3 text-muted-foreground">{pub}</td>
              <td className="p-3 text-muted-foreground">{sec}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>

    <h3 className="font-bold text-foreground mt-8 mb-4 font-display">Visual Analogy</h3>
    <div className="grid md:grid-cols-2 gap-4">
      <div className="bg-secondary rounded-xl p-6 text-center border border-border hover:border-info/30 transition-all duration-300 hover:scale-[1.02] group">
        <div className="text-5xl mb-3 group-hover:scale-110 transition-transform duration-300">🏞️</div>
        <h4 className="font-bold text-foreground text-lg mb-2">Public Park</h4>
        <p className="text-sm text-muted-foreground">
          Open to everyone. No gates, no ID.
          <br />
          <span className="text-info font-medium">= Public API</span>
        </p>
      </div>
      <div className="gradient-hero-subtle rounded-xl p-6 text-center border border-primary/20 hover:border-primary/50 transition-all duration-300 hover:scale-[1.02] glow-purple-sm group">
        <div className="text-5xl mb-3 group-hover:scale-110 transition-transform duration-300">✈️</div>
        <h4 className="font-bold text-primary text-lg mb-2">Airport Security</h4>
        <p className="text-sm text-muted-foreground">
          Passport + boarding pass + screening.
          <br />
          <span className="text-primary font-medium">= Secure API with JWT</span>
        </p>
      </div>
    </div>
  </SectionCard>
);

export default PublicVsSecure;
