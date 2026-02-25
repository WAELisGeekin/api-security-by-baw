import { Workflow } from "lucide-react";
import SectionCard from "../SectionCard";
import CodeBlock from "../CodeBlock";

const HowJwtWorks = () => (
  <SectionCard id="how-jwt-works" title="How JWT Authentication Works" subtitle="The complete login → token → request flow" icon={Workflow} index={5}>
    <div className="space-y-1 mb-4">
      {[
        {
          step: 1, title: "User Logs In", emoji: "👤",
          desc: "Client sends username & password to the server.",
          code: `POST /api/login
{ "username": "wail", "password": "securePass123" }`,
        },
        {
          step: 2, title: "Server Issues Token", emoji: "🔐",
          desc: "Server validates credentials and returns a signed JWT.",
          code: `// Server response (200 OK)
{ "token": "eyJhbGci...", "expiresIn": 3600 }`,
        },
        {
          step: 3, title: "Client Stores Token", emoji: "💾",
          desc: "Token is saved for future authenticated requests.",
          code: `localStorage.setItem("token", data.token);`,
        },
        {
          step: 4, title: "Authenticated Requests", emoji: "📡",
          desc: "Every API call includes the token in the Authorization header.",
          code: `fetch("/api/profile", {
  headers: { "Authorization": "Bearer eyJhbGci..." }
});`,
        },
        {
          step: 5, title: "Server Verifies", emoji: "✅",
          desc: "Server decodes the token, checks the signature, and responds.",
          code: `const user = jwt.verify(token, SECRET_KEY);
// { user: "wail", role: "admin" } → Access granted!`,
        },
      ].map((s) => (
        <div key={s.step} className="flex gap-4">
          <div className="flex flex-col items-center">
            <div className="w-10 h-10 rounded-full gradient-hero flex items-center justify-center text-primary-foreground font-bold text-sm shrink-0 glow-purple-sm animate-pulse-glow" style={{ animationDelay: `${s.step * 0.3}s` }}>
              {s.step}
            </div>
            {s.step < 5 && <div className="w-0.5 flex-1 bg-gradient-to-b from-primary/40 to-transparent mt-1 min-h-[20px]" />}
          </div>
          <div className="flex-1 pb-2">
            <div className="flex items-center gap-2 mb-1">
              <span className="text-xl">{s.emoji}</span>
              <h4 className="font-bold text-foreground font-display">{s.title}</h4>
            </div>
            <p className="text-sm text-muted-foreground mb-2">{s.desc}</p>
            <CodeBlock code={s.code} title={`Step ${s.step}`} />
          </div>
        </div>
      ))}
    </div>
  </SectionCard>
);

export default HowJwtWorks;
