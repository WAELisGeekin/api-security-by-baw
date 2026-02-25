import { Lock, ArrowRight } from "lucide-react";
import SectionCard from "../SectionCard";

const AuthVsAuthz = () => (
  <SectionCard id="auth-vs-authz" title="Authentication vs Authorization" subtitle="Two different but equally important concepts" icon={Lock} index={3}>
    <div className="grid md:grid-cols-2 gap-4 mb-6">
      <div className="bg-secondary rounded-xl p-6 border border-border hover:border-info/30 transition-all duration-300 hover:scale-[1.02]">
        <div className="text-4xl mb-3">🪪</div>
        <h4 className="font-bold text-foreground text-lg mb-1 font-display">Authentication</h4>
        <p className="text-primary text-sm font-medium mb-3">"Who are you?"</p>
        <ul className="text-sm text-muted-foreground space-y-2">
          <li className="flex items-center gap-2">• Login with credentials</li>
          <li className="flex items-center gap-2">• Biometric scan</li>
          <li className="flex items-center gap-2">• JWT token check</li>
        </ul>
      </div>
      <div className="gradient-hero-subtle rounded-xl p-6 border border-primary/20 hover:border-primary/50 transition-all duration-300 hover:scale-[1.02] glow-purple-sm">
        <div className="text-4xl mb-3">🔑</div>
        <h4 className="font-bold text-primary text-lg mb-1 font-display">Authorization</h4>
        <p className="text-accent text-sm font-medium mb-3">"What can you do?"</p>
        <ul className="text-sm text-muted-foreground space-y-2">
          <li className="flex items-center gap-2">• Admin vs User role</li>
          <li className="flex items-center gap-2">• Read vs Write access</li>
          <li className="flex items-center gap-2">• Resource permissions</li>
        </ul>
      </div>
    </div>

    {/* Flow Diagram */}
    <div className="bg-secondary/50 rounded-xl p-6 border border-border">
      <h4 className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-5 text-center">Complete Flow</h4>
      <div className="flex flex-col gap-3">
        {[
          { step: "1", label: "User sends credentials", emoji: "👤", color: "border-info/30 bg-info/10" },
          { step: "2", label: "Server verifies identity (AuthN)", emoji: "🔍", color: "border-warning/30 bg-warning/10" },
          { step: "3", label: "Token issued ✅", emoji: "🎫", color: "border-success/30 bg-success/10" },
          { step: "4", label: "Check permissions (AuthZ)", emoji: "🔑", color: "border-primary/30 gradient-hero-subtle" },
          { step: "5", label: "Access granted or denied", emoji: "✅", color: "border-success/30 bg-success/10" },
        ].map((s, i) => (
          <div key={i} className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full gradient-hero flex items-center justify-center text-primary-foreground font-bold text-sm shrink-0 glow-purple-sm">
              {s.step}
            </div>
            <div className={`flex-1 flex items-center gap-3 ${s.color} border rounded-xl px-4 py-3 transition-transform hover:scale-[1.01] duration-200`}>
              <span className="text-xl">{s.emoji}</span>
              <span className="text-sm text-foreground font-medium">{s.label}</span>
            </div>
            {i < 4 && <ArrowRight className="w-4 h-4 text-primary/50 hidden md:block rotate-90 md:!rotate-0" />}
          </div>
        ))}
      </div>
    </div>
  </SectionCard>
);

export default AuthVsAuthz;
