import { useState } from "react";
import { Play, Globe, Lock, LogIn, ShieldCheck } from "lucide-react";
import SectionCard from "../SectionCard";

type LogEntry = { type: "success" | "error" | "info"; message: string; status?: number };

const InteractiveDemo = () => {
  const [token, setToken] = useState<string | null>(null);
  const [logs, setLogs] = useState<LogEntry[]>([]);

  const addLog = (entry: LogEntry) => setLogs((prev) => [...prev, entry]);
  const clearLogs = () => { setLogs([]); setToken(null); };

  const accessPublicApi = () => {
    addLog({ type: "info", message: "GET /api/public/data" });
    setTimeout(() => {
      addLog({
        type: "success",
        status: 200,
        message: '{ "data": "Public weather data", "temp": "24°C", "city": "Riyadh" }',
      });
    }, 500);
  };

  const accessSecureWithoutToken = () => {
    addLog({ type: "info", message: "GET /api/secure/profile  (No token)" });
    setTimeout(() => {
      addLog({
        type: "error",
        status: 401,
        message: '{ "error": "Unauthorized — No token provided" }',
      });
    }, 500);
  };

  const login = () => {
    addLog({ type: "info", message: 'POST /api/login  { "user": "alice", "pass": "***" }' });
    setTimeout(() => {
      const fakeToken = "eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyIjoiYWxpY2UifQ.abc123";
      setToken(fakeToken);
      addLog({
        type: "success",
        status: 200,
        message: `{ "token": "${fakeToken}" }`,
      });
    }, 800);
  };

  const accessSecureWithToken = () => {
    if (!token) {
      addLog({ type: "error", status: 401, message: "No token! Login first." });
      return;
    }
    addLog({ type: "info", message: `GET /api/secure/profile  Authorization: Bearer ${token.slice(0, 20)}...` });
    setTimeout(() => {
      addLog({
        type: "success",
        status: 200,
        message: '{ "user": "alice", "role": "admin", "email": "alice@univ.edu" }',
      });
    }, 500);
  };

  return (
    <SectionCard id="demo" title="Interactive Demo" subtitle="Try simulated API requests — see the difference!" icon={Play}>
      <p className="text-sm text-muted-foreground mb-4">
        Click the buttons below to simulate real API calls. Watch the console to see how public
        and secure APIs respond differently.
      </p>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mb-4">
        <button onClick={accessPublicApi} className="flex flex-col items-center gap-1.5 bg-accent hover:bg-accent/80 text-accent-foreground rounded-lg px-3 py-3 text-xs font-medium transition-colors border border-primary/20">
          <Globe className="w-5 h-5" />
          Access Public API
        </button>
        <button onClick={accessSecureWithoutToken} className="flex flex-col items-center gap-1.5 bg-destructive/10 hover:bg-destructive/20 text-destructive rounded-lg px-3 py-3 text-xs font-medium transition-colors border border-destructive/20">
          <Lock className="w-5 h-5" />
          Secure (No Token)
        </button>
        <button onClick={login} className="flex flex-col items-center gap-1.5 gradient-hero text-primary-foreground rounded-lg px-3 py-3 text-xs font-medium transition-colors">
          <LogIn className="w-5 h-5" />
          Login → Get Token
        </button>
        <button onClick={accessSecureWithToken} className="flex flex-col items-center gap-1.5 bg-primary text-primary-foreground rounded-lg px-3 py-3 text-xs font-medium transition-colors hover:opacity-90">
          <ShieldCheck className="w-5 h-5" />
          Secure (With Token)
        </button>
      </div>

      {token && (
        <div className="bg-accent border border-primary/20 rounded-lg px-4 py-2 mb-4 text-xs font-mono text-primary break-all">
          🔑 Token: {token}
        </div>
      )}

      {/* Console */}
      <div className="bg-code-bg rounded-lg overflow-hidden">
        <div className="flex items-center justify-between px-4 py-2 bg-code-header">
          <span className="text-xs font-mono text-code-fg/70">API Console</span>
          <button onClick={clearLogs} className="text-xs text-code-fg/50 hover:text-code-fg transition-colors">
            Clear
          </button>
        </div>
        <div className="p-4 font-mono text-xs space-y-1.5 min-h-[120px] max-h-[300px] overflow-y-auto">
          {logs.length === 0 && (
            <span className="text-code-fg/30">// Click a button above to make an API request...</span>
          )}
          {logs.map((log, i) => (
            <div key={i} className={
              log.type === "success" ? "text-green-400" :
              log.type === "error" ? "text-red-400" :
              "text-blue-400"
            }>
              {log.status && <span className="opacity-60">[{log.status}] </span>}
              {log.message}
            </div>
          ))}
        </div>
      </div>
    </SectionCard>
  );
};

export default InteractiveDemo;
