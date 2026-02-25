import { KeyRound } from "lucide-react";
import SectionCard from "../SectionCard";
import CodeBlock from "../CodeBlock";

const WhatIsJwt = () => (
  <SectionCard id="what-is-jwt" title="What is JWT?" subtitle="JSON Web Token — compact, self-contained, digitally signed" icon={KeyRound} index={4}>
    <p className="text-muted-foreground mb-6 leading-relaxed">
      <strong className="text-foreground">JWT</strong> is an open standard (RFC 7519)
      for securely transmitting information as a JSON object. It's digitally signed, so it can be verified and trusted.
    </p>

    {/* JWT Structure Visual */}
    <div className="bg-code-bg rounded-xl p-6 my-6 border border-border glow-purple-sm">
      <h4 className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-4 text-center">JWT Structure</h4>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-2 font-mono text-xl font-bold mb-4">
        <span className="text-destructive px-3 py-1 bg-destructive/10 rounded-lg border border-destructive/20">Header</span>
        <span className="text-muted-foreground text-2xl">.</span>
        <span className="text-primary px-3 py-1 bg-primary/10 rounded-lg border border-primary/20">Payload</span>
        <span className="text-muted-foreground text-2xl">.</span>
        <span className="text-info px-3 py-1 bg-info/10 rounded-lg border border-info/20">Signature</span>
      </div>
      <div className="text-[11px] text-muted-foreground text-center font-mono break-all leading-relaxed px-2">
        <span className="text-destructive/80">eyJhbGciOiJIUzI1NiJ9</span>
        <span className="text-muted-foreground/40">.</span>
        <span className="text-primary/80">eyJ1c2VyIjoiYWxpY2UiLCJyb2xlIjoiYWRtaW4ifQ</span>
        <span className="text-muted-foreground/40">.</span>
        <span className="text-info/80">SflKxwRJSMeKKF2QT4fwpMeJf36POk</span>
      </div>
    </div>

    {/* Three parts */}
    <div className="grid md:grid-cols-3 gap-3 my-6">
      <div className="bg-secondary rounded-xl p-4 border-t-4 border-t-destructive/60 hover:scale-[1.02] transition-transform duration-200">
        <h4 className="font-bold text-sm text-foreground mb-1 font-display">🔴 Header</h4>
        <p className="text-xs text-muted-foreground mb-2">Algorithm & token type</p>
        <CodeBlock code={`{
  "alg": "HS256",
  "typ": "JWT"
}`} title="Header" />
      </div>
      <div className="bg-secondary rounded-xl p-4 border-t-4 border-t-primary/60 hover:scale-[1.02] transition-transform duration-200">
        <h4 className="font-bold text-sm text-foreground mb-1 font-display">🟣 Payload</h4>
        <p className="text-xs text-muted-foreground mb-2">User data & claims</p>
        <CodeBlock code={`{
  "sub": "1234",
  "name": "Alice",
  "role": "admin",
  "exp": 1716239022
}`} title="Payload" />
      </div>
      <div className="bg-secondary rounded-xl p-4 border-t-4 border-t-info/60 hover:scale-[1.02] transition-transform duration-200">
        <h4 className="font-bold text-sm text-foreground mb-1 font-display">🔵 Signature</h4>
        <p className="text-xs text-muted-foreground mb-2">Verification hash</p>
        <CodeBlock code={`HMACSHA256(
  base64(header) + "."
  + base64(payload),
  secret_key
)`} title="Signature" />
      </div>
    </div>
  </SectionCard>
);

export default WhatIsJwt;
