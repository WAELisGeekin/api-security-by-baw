import { useState } from "react";
import { Play, Globe, Lock, LogIn, ShieldCheck, Trash2 } from "lucide-react";
import SectionCard from "../SectionCard";

type LogEntry = { type: "success" | "error" | "info"; message: string; status?: number; time: string };

const InteractiveDemo = () => {
  const [token, setToken] = useState<string | null>(null);
  const [logs, setLogs] = useState<LogEntry[]>([]);
  const [animating, setAnimating] = useState<string | null>(null);

  const now = () => new Date().toLocaleTimeString();
  const addLog = (entry: Omit<LogEntry, "time">) => setLogs((prev) => [...prev, { ...entry, time: now() }]);
  const clearLogs = () => { setLogs([]); setToken(null); };

  const animateBtn = (id: string, fn: () => void) => {
    setAnimating(id);
    setTimeout(() => { fn(); setAnimating(null); }, 600);
  };

  const accessPublicApi = () => animateBtn("public", () => {
    addLog({ type: "info", message: "→ GET /api/public/weather" });
    setTimeout(() => addLog({ type: "success", status: 200, message: '✓ { "temp": "24°C", "city": "Riyadh", "condition": "Sunny" }' }), 400);
  });

  const accessSecureWithoutToken = () => animateBtn("no-token", () => {
    addLog({ type: "info", message: "→ GET /api/secure/profile  (No Token)" });
    setTimeout(() => addLog({ type: "error", status: 401, message: '✗ { "error": "Unauthorized — No token provided" }' }), 400);
  });

  const login = () => animateBtn("login", () => {
    addLog({ type: "info", message: '→ POST /api/login  { user: "alice" }' });
    setTimeout(() => {
      const fakeToken = "eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyIjoiYWxpY2UiLCJyb2xlIjoiYWRtaW4ifQ.s3cr3t";
      setToken(fakeToken);
      addLog({ type: "success", status: 200, message: `✓ Token received: ${fakeToken.slice(0, 30)}...` });
    }, 700);
  });

  const accessSecureWithToken = () => animateBtn("with-token", () => {
    if (!token) { addLog({ type: "error", status: 401, message: "✗ No token! Login first." }); return; }
    addLog({ type: "info", message: `→ GET /api/secure/profile  [Bearer ${token.slice(0, 18)}...]` });
    setTimeout(() => addLog({ type: "success", status: 200, message: '✓ { "user": "alice", "role": "admin", "email": "alice@univ.edu" }' }), 400);
  });

  const buttons = [
    { id: "public", label: "Public API", icon: Globe, onClick: accessPublicApi, style: "bg-info/20 text-info border-info/30 hover:bg-info/30" },
    { id: "no-token", label: "Secure (No Token)", icon: Lock, onClick: accessSecureWithoutToken, style: "bg-destructive/20 text-destructive border-destructive/30 hover:bg-destructive/30" },
    { id: "login", label: "Login → Token", icon: LogIn, onClick: login, style: "gradient-hero text-primary-foreground border-transparent glow-purple-sm hover:opacity-90" },
    { id: "with-token", label: "Secure + Token", icon: ShieldCheck, onClick: accessSecureWithToken, style: "bg-success/20 text-success border-success/30 hover:bg-success/30" },
  ];

  return (
    <SectionCard id="demo" title="Interactive Demo" subtitle="Simulate real API requests — click & watch!" icon={Play} index={6}>
      <p className="text-sm text-muted-foreground mb-5">
        Click the buttons to simulate API calls. Follow the sequence: <span className="text-primary font-medium">Public → Secure (fail) → Login → Secure (success)</span>
      </p>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mb-5">
        {buttons.map((b) => (
          <button
            key={b.id}
            onClick={b.onClick}
            className={`flex flex-col items-center gap-2 rounded-xl px-3 py-4 text-xs font-semibold transition-all duration-200 border ${b.style} ${
              animating === b.id ? "scale-95 opacity-80" : "hover:scale-[1.03]"
            }`}
          >
            <b.icon className={`w-6 h-6 ${animating === b.id ? "animate-bounce" : ""}`} />
            {b.label}
          </button>
        ))}
      </div>

      {token && (
        <div className="bg-primary/10 border border-primary/20 rounded-xl px-4 py-3 mb-4 text-xs font-mono text-primary break-all animate-fade-in glow-purple-sm">
          🔑 <span className="font-bold">Active Token:</span> {token}
        </div>
      )}

      {/* Console */}
      <div className="bg-code-bg rounded-xl overflow-hidden border border-border glow-purple-sm">
        <div className="flex items-center justify-between px-4 py-2.5 bg-code-header border-b border-border">
          <div className="flex items-center gap-2">
            <div className="flex gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-destructive/60" />
              <div className="w-2.5 h-2.5 rounded-full bg-warning/60" />
              <div className="w-2.5 h-2.5 rounded-full bg-success/60" />
            </div>
            <span className="text-xs font-mono text-muted-foreground ml-2">API Console</span>
          </div>
          <button onClick={clearLogs} className="flex items-center gap-1 text-xs text-muted-foreground hover:text-destructive transition-colors">
            <Trash2 className="w-3 h-3" /> Clear
          </button>
        </div>
        <div className="p-4 font-mono text-xs space-y-1.5 min-h-[140px] max-h-[300px] overflow-y-auto">
          {logs.length === 0 && (
            <span className="text-muted-foreground/40">// Click a button above to make an API request...</span>
          )}
          {logs.map((log, i) => (
            <div key={i} className={`animate-fade-in flex gap-2 ${
              log.type === "success" ? "text-success" : log.type === "error" ? "text-destructive" : "text-info"
            }`}>
              <span className="text-muted-foreground/40 shrink-0">[{log.time}]</span>
              {log.status && <span className="font-bold shrink-0">{log.status}</span>}
              <span>{log.message}</span>
            </div>
          ))}
        </div>
      </div>
    </SectionCard>
  );
};

export default InteractiveDemo;
