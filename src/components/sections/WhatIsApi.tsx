import { Globe, ArrowRight } from "lucide-react";
import SectionCard from "../SectionCard";
import CodeBlock from "../CodeBlock";

const WhatIsApi = () => (
  <SectionCard id="what-is-api" title="What is an API?" subtitle="Application Programming Interface — the bridge between systems" icon={Globe} index={1}>
    <p className="text-muted-foreground mb-6 leading-relaxed">
      An <strong className="text-foreground">API</strong> is a set of rules that lets one application talk to another.
      Think of it as a <span className="text-primary font-medium">waiter in a restaurant</span> — you tell the waiter your order, and they bring food from the kitchen.
    </p>

    {/* Interactive Diagram */}
    <div className="bg-secondary/50 rounded-xl p-6 my-6 border border-border">
      <h4 className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-5 text-center">How an API Works</h4>
      <div className="flex flex-col md:flex-row items-center justify-center gap-3">
        {[
          { emoji: "📱", label: "Client", sub: "Your App", color: "bg-info/20 border-info/30" },
          null,
          { emoji: "⚡", label: "API", sub: "REST Endpoint", color: "gradient-hero-subtle border-primary/30" },
          null,
          { emoji: "🗄️", label: "Server", sub: "Database", color: "bg-accent/20 border-accent/30" },
        ].map((item, i) =>
          item ? (
            <div key={i} className={`${item.color} border rounded-xl px-6 py-4 text-center min-w-[110px] transition-transform hover:scale-105 duration-200`}>
              <div className="text-3xl mb-1">{item.emoji}</div>
              <div className="font-bold text-sm text-foreground">{item.label}</div>
              <div className="text-[10px] text-muted-foreground mt-0.5">{item.sub}</div>
            </div>
          ) : (
            <ArrowRight key={i} className="w-5 h-5 text-primary rotate-0 md:rotate-0 rotate-90 md:!rotate-0 shrink-0" />
          )
        )}
      </div>
    </div>

    <h3 className="font-bold text-foreground mt-6 mb-3 font-display">Real-World Examples</h3>
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
      {[
        { emoji: "🌤️", title: "Weather API", desc: "Real-time weather data", color: "border-info/20 hover:border-info/40" },
        { emoji: "💳", title: "Payment API", desc: "Stripe, PayPal processing", color: "border-success/20 hover:border-success/40" },
        { emoji: "🗺️", title: "Maps API", desc: "Google Maps integration", color: "border-warning/20 hover:border-warning/40" },
      ].map((ex) => (
        <div key={ex.title} className={`bg-secondary rounded-xl p-4 border ${ex.color} transition-all duration-200 hover:scale-[1.02]`}>
          <span className="text-2xl">{ex.emoji}</span>
          <div className="font-semibold text-sm text-foreground mt-2">{ex.title}</div>
          <div className="text-xs text-muted-foreground">{ex.desc}</div>
        </div>
      ))}
    </div>

    <CodeBlock
      title="Example API Request"
      code={`// Fetching data from a public API
const response = await fetch("https://api.weather.com/current");
const data = await response.json();

console.log(data);
// { temp: "24°C", city: "SBA", condition: "Sunny" }`}
    />
  </SectionCard>
);

export default WhatIsApi;
