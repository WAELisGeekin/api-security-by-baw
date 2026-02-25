import { ShieldCheck } from "lucide-react";
import SectionCard from "../SectionCard";

const PublicVsSecure = () => (
  <SectionCard id="public-vs-secure" title="Public API vs Secure API" subtitle="Not all APIs are created equal" icon={ShieldCheck}>
    {/* Comparison Table */}
    <div className="overflow-x-auto my-4">
      <table className="w-full text-sm border-collapse">
        <thead>
          <tr className="bg-accent">
            <th className="text-left p-3 font-semibold text-foreground rounded-tl-lg">Feature</th>
            <th className="text-left p-3 font-semibold text-foreground">Public API</th>
            <th className="text-left p-3 font-semibold text-foreground rounded-tr-lg">Secure API</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-border">
          {[
            ["Authentication", "❌ Not required", "✅ Required (JWT, API Key)"],
            ["Access Control", "🌍 Anyone can access", "🔒 Restricted to authorized users"],
            ["Data Sensitivity", "📢 Public data only", "🔐 Sensitive / private data"],
            ["Rate Limiting", "⚠️ Often limited", "✅ Controlled per user"],
            ["Example", "Open weather data", "Banking transactions"],
          ].map(([feature, pub, sec], i) => (
            <tr key={i} className="hover:bg-muted/50 transition-colors">
              <td className="p-3 font-medium text-foreground">{feature}</td>
              <td className="p-3 text-muted-foreground">{pub}</td>
              <td className="p-3 text-muted-foreground">{sec}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>

    <h3 className="font-bold text-lg text-foreground mt-8 mb-4">Visual Analogy</h3>
    <div className="grid md:grid-cols-2 gap-4">
      <div className="bg-muted rounded-lg p-6 text-center">
        <div className="text-4xl mb-3">🏞️</div>
        <h4 className="font-bold text-foreground mb-1">Public Park</h4>
        <p className="text-sm text-muted-foreground">
          Anyone can enter freely. No ID check. Open to all visitors.
          Like a <strong>public API</strong> — no authentication needed.
        </p>
      </div>
      <div className="bg-accent rounded-lg p-6 text-center border border-primary/20">
        <div className="text-4xl mb-3">✈️</div>
        <h4 className="font-bold text-primary mb-1">Airport Security</h4>
        <p className="text-sm text-muted-foreground">
          Passport check, boarding pass verification, security screening.
          Like a <strong>secure API</strong> — must prove your identity.
        </p>
      </div>
    </div>
  </SectionCard>
);

export default PublicVsSecure;
