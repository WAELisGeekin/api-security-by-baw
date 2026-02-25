import { useState } from "react";
import { Check, Copy } from "lucide-react";

interface CodeBlockProps {
  code: string;
  language?: string;
  title?: string;
}

const CodeBlock = ({ code, language = "javascript", title }: CodeBlockProps) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="rounded-lg overflow-hidden border border-border my-4">
      <div className="flex items-center justify-between px-4 py-2 bg-code-header">
        <span className="text-xs font-mono text-code-fg/70">{title || language}</span>
        <button
          onClick={handleCopy}
          className="flex items-center gap-1.5 text-xs text-code-fg/70 hover:text-code-fg transition-colors"
        >
          {copied ? (
            <>
              <Check className="w-3.5 h-3.5" />
              Copied!
            </>
          ) : (
            <>
              <Copy className="w-3.5 h-3.5" />
              Copy
            </>
          )}
        </button>
      </div>
      <pre className="p-4 overflow-x-auto !rounded-none !rounded-b-lg">
        <code>{code}</code>
      </pre>
    </div>
  );
};

export default CodeBlock;
