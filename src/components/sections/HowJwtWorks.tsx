import { Workflow } from "lucide-react";
import SectionCard from "../SectionCard";
import CodeBlock from "../CodeBlock";

const HowJwtWorks = () => (
  <SectionCard id="how-jwt-works" title="How JWT Authentication Works" subtitle="The complete login and request flow" icon={Workflow}>
    {/* Step-by-step flow */}
    <div className="space-y-4 mb-8">
      {[
        {
          step: 1,
          title: "User Logs In",
          desc: "Client sends username & password to the server.",
          emoji: "👤",
          code: `POST /api/login
Content-Type: application/json

{
  "username": "alice",
  "password": "securePass123"
}`,
        },
        {
          step: 2,
          title: "Server Validates & Issues Token",
          desc: "Server checks credentials and returns a signed JWT.",
          emoji: "🔐",
          code: `// Server response
{
  "token": "eyJhbGciOiJIUzI1NiJ9.eyJ1c2Vy..."
  "expiresIn": 3600
}`,
        },
        {
          step: 3,
          title: "Client Stores Token",
          desc: "The token is stored (memory, localStorage, or httpOnly cookie).",
          emoji: "💾",
          code: `// Store token for future requests
localStorage.setItem("token", data.token);`,
        },
        {
          step: 4,
          title: "Client Sends Authenticated Requests",
          desc: "Every API call includes the token in the Authorization header.",
          emoji: "📡",
          code: `fetch("/api/profile", {
  headers: {
    "Authorization": "Bearer eyJhbGci..."
  }
});`,
        },
        {
          step: 5,
          title: "Server Verifies Token",
          desc: "Server decodes and verifies the token signature before responding.",
          emoji: "✅",
          code: `// Server middleware
const decoded = jwt.verify(token, SECRET_KEY);
// { user: "alice", role: "admin" }`,
        },
      ].map((s) => (
        <div key={s.step} className="flex gap-4">
          <div className="flex flex-col items-center">
            <div className="w-10 h-10 rounded-full gradient-hero flex items-center justify-center text-primary-foreground font-bold text-sm shrink-0">
              {s.step}
            </div>
            {s.step < 5 && <div className="w-0.5 flex-1 bg-primary/20 mt-1" />}
          </div>
          <div className="flex-1 pb-4">
            <div className="flex items-center gap-2 mb-1">
              <span className="text-xl">{s.emoji}</span>
              <h4 className="font-bold text-foreground">{s.title}</h4>
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
