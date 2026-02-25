import { KeyRound } from "lucide-react";
import SectionCard from "../SectionCard";
import CodeBlock from "../CodeBlock";

const WhatIsJwt = () => (
  <SectionCard id="what-is-jwt" title="What is JWT?" subtitle="JSON Web Token — A compact, self-contained token for secure data transfer" icon={KeyRound}>
    <p className="text-muted-foreground mb-4 leading-relaxed">
      <strong className="text-foreground">JWT (JSON Web Token)</strong> is an open standard (RFC 7519)
      for securely transmitting information between parties as a JSON object. It is digitally signed,
      so it can be verified and trusted.
    </p>

    {/* JWT Structure */}
    <h3 className="font-bold text-lg text-foreground mt-6 mb-3">JWT Structure</h3>
    <div className="bg-code-bg rounded-lg p-6 my-4">
      <div className="flex flex-col md:flex-row items-center justify-center gap-1 font-mono text-lg">
        <span className="text-red-400 font-bold">Header</span>
        <span className="text-code-fg/50">.</span>
        <span className="text-purple-400 font-bold">Payload</span>
        <span className="text-code-fg/50">.</span>
        <span className="text-cyan-400 font-bold">Signature</span>
      </div>
      <div className="mt-4 text-xs text-code-fg/60 text-center font-mono break-all">
        <span className="text-red-400">eyJhbGciOiJIUzI1NiJ9</span>
        <span className="text-code-fg/40">.</span>
        <span className="text-purple-400">eyJ1c2VyIjoiYWxpY2UiLCJyb2xlIjoiYWRtaW4ifQ</span>
        <span className="text-code-fg/40">.</span>
        <span className="text-cyan-400">SflKxwRJSMeKKF2QT4fwpM</span>
      </div>
    </div>

    <div className="grid md:grid-cols-3 gap-3 my-6">
      <div className="bg-muted rounded-lg p-4 border-t-4 border-t-red-400">
        <h4 className="font-bold text-sm text-foreground mb-1">Header</h4>
        <p className="text-xs text-muted-foreground">Algorithm & token type</p>
        <CodeBlock code={`{
  "alg": "HS256",
  "typ": "JWT"
}`} title="Header (JSON)" />
      </div>
      <div className="bg-muted rounded-lg p-4 border-t-4 border-t-purple-400">
        <h4 className="font-bold text-sm text-foreground mb-1">Payload</h4>
        <p className="text-xs text-muted-foreground">User data & claims</p>
        <CodeBlock code={`{
  "sub": "1234",
  "name": "Alice",
  "role": "admin",
  "exp": 1716239022
}`} title="Payload (JSON)" />
      </div>
      <div className="bg-muted rounded-lg p-4 border-t-4 border-t-cyan-400">
        <h4 className="font-bold text-sm text-foreground mb-1">Signature</h4>
        <p className="text-xs text-muted-foreground">Verification hash</p>
        <CodeBlock code={`HMACSHA256(
  base64(header) + "." +
  base64(payload),
  secret_key
)`} title="Signature" />
      </div>
    </div>
  </SectionCard>
);

export default WhatIsJwt;
