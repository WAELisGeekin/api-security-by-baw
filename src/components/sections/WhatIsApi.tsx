import { Globe } from "lucide-react";
import SectionCard from "../SectionCard";
import CodeBlock from "../CodeBlock";

const WhatIsApi = () => (
  <SectionCard id="what-is-api" title="What is an API?" subtitle="Application Programming Interface — the bridge between systems" icon={Globe}>
    <p className="text-muted-foreground mb-4 leading-relaxed">
      An <strong className="text-foreground">API (Application Programming Interface)</strong> is a set of rules that allows
      one software application to talk to another. Think of it as a waiter in a restaurant — you (the client)
      tell the waiter (API) your order, and the waiter brings food from the kitchen (server).
    </p>

    {/* Diagram */}
    <div className="bg-muted rounded-lg p-6 my-6">
      <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-center">
        <div className="bg-card border border-border rounded-lg px-6 py-4 shadow-card">
          <div className="text-2xl mb-1">📱</div>
          <div className="font-semibold text-sm text-foreground">Client App</div>
          <div className="text-xs text-muted-foreground">Mobile / Web</div>
        </div>
        <div className="text-primary font-mono text-sm">→ HTTP Request →</div>
        <div className="bg-accent border border-primary/20 rounded-lg px-6 py-4 shadow-card">
          <div className="text-2xl mb-1">⚡</div>
          <div className="font-semibold text-sm text-primary">API</div>
          <div className="text-xs text-muted-foreground">REST / GraphQL</div>
        </div>
        <div className="text-primary font-mono text-sm">→ Query →</div>
        <div className="bg-card border border-border rounded-lg px-6 py-4 shadow-card">
          <div className="text-2xl mb-1">🗄️</div>
          <div className="font-semibold text-sm text-foreground">Server / DB</div>
          <div className="text-xs text-muted-foreground">Data Storage</div>
        </div>
      </div>
    </div>

    <h3 className="font-bold text-lg text-foreground mt-6 mb-3">Real-World Examples</h3>
    <div className="grid md:grid-cols-3 gap-3">
      {[
        { emoji: "🌤️", title: "Weather API", desc: "Apps fetch real-time weather data" },
        { emoji: "💳", title: "Payment API", desc: "Stripe processes payments securely" },
        { emoji: "🗺️", title: "Maps API", desc: "Google Maps embeds in your app" },
      ].map((ex) => (
        <div key={ex.title} className="bg-muted rounded-lg p-4">
          <span className="text-xl">{ex.emoji}</span>
          <div className="font-semibold text-sm text-foreground mt-1">{ex.title}</div>
          <div className="text-xs text-muted-foreground">{ex.desc}</div>
        </div>
      ))}
    </div>

    <CodeBlock
      title="Example API Request"
      code={`// Fetching data from a public API
fetch("https://api.example.com/users")
  .then(response => response.json())
  .then(data => console.log(data));`}
    />
  </SectionCard>
);

export default WhatIsApi;
