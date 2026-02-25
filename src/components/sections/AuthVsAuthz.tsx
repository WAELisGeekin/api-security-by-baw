import { Lock } from "lucide-react";
import SectionCard from "../SectionCard";

const AuthVsAuthz = () => (
  <SectionCard id="auth-vs-authz" title="Authentication vs Authorization" subtitle="Two different but equally important concepts" icon={Lock}>
    <div className="grid md:grid-cols-2 gap-4 mb-6">
      <div className="bg-muted rounded-lg p-6">
        <div className="text-3xl mb-3">🪪</div>
        <h4 className="font-bold text-foreground text-lg mb-2">Authentication (AuthN)</h4>
        <p className="text-sm text-muted-foreground mb-3">
          <em>"Who are you?"</em> — Verifying the identity of a user.
        </p>
        <ul className="text-sm text-muted-foreground space-y-1">
          <li>• Login with username & password</li>
          <li>• Biometric verification</li>
          <li>• JWT token validation</li>
        </ul>
      </div>
      <div className="bg-accent rounded-lg p-6 border border-primary/20">
        <div className="text-3xl mb-3">🔑</div>
        <h4 className="font-bold text-primary text-lg mb-2">Authorization (AuthZ)</h4>
        <p className="text-sm text-muted-foreground mb-3">
          <em>"What can you do?"</em> — Determining permissions.
        </p>
        <ul className="text-sm text-muted-foreground space-y-1">
          <li>• Admin vs regular user</li>
          <li>• Read-only vs read-write</li>
          <li>• Role-based access control</li>
        </ul>
      </div>
    </div>

    {/* Flow Diagram */}
    <div className="bg-muted rounded-lg p-6">
      <h4 className="font-semibold text-foreground mb-4 text-center">Authentication & Authorization Flow</h4>
      <div className="flex flex-col md:flex-row items-center justify-center gap-3 text-center">
        {[
          { step: "1", label: "User sends credentials", emoji: "👤" },
          { step: "2", label: "Server verifies identity", emoji: "🔍" },
          { step: "3", label: "Token issued (AuthN ✅)", emoji: "🎫" },
          { step: "4", label: "Check permissions (AuthZ)", emoji: "🔑" },
          { step: "5", label: "Access granted or denied", emoji: "✅" },
        ].map((s, i) => (
          <div key={i} className="flex items-center gap-3">
            <div className="bg-card border border-border rounded-lg px-4 py-3 shadow-card min-w-[120px]">
              <div className="text-xl mb-1">{s.emoji}</div>
              <div className="text-xs font-semibold text-primary">Step {s.step}</div>
              <div className="text-xs text-muted-foreground">{s.label}</div>
            </div>
            {i < 4 && <span className="text-primary font-bold hidden md:block">→</span>}
          </div>
        ))}
      </div>
    </div>
  </SectionCard>
);

export default AuthVsAuthz;
