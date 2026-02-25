import { useState } from "react";
import { HelpCircle, CheckCircle2, XCircle } from "lucide-react";
import SectionCard from "../SectionCard";

interface Question {
  q: string;
  options: string[];
  correct: number;
  explanation: string;
}

const questions: Question[] = [
  {
    q: "What does JWT stand for?",
    options: ["Java Web Token", "JSON Web Token", "JavaScript Web Transfer", "JSON Web Transfer"],
    correct: 1,
    explanation: "JWT stands for JSON Web Token — an open standard (RFC 7519) for secure data transfer.",
  },
  {
    q: "Which part of a JWT contains the user data?",
    options: ["Header", "Payload", "Signature", "Secret Key"],
    correct: 1,
    explanation: "The Payload contains claims — user data, roles, expiration, etc.",
  },
  {
    q: "What HTTP status code means 'Unauthorized'?",
    options: ["200", "403", "401", "500"],
    correct: 2,
    explanation: "401 Unauthorized means the request lacks valid authentication credentials.",
  },
  {
    q: "Where should you send a JWT token in API requests?",
    options: ["URL query string", "Authorization header", "Request body", "Cookie only"],
    correct: 1,
    explanation: "Best practice: use the Authorization header with 'Bearer <token>'.",
  },
  {
    q: "Why should tokens have a short expiration?",
    options: [
      "To annoy users",
      "To save server memory",
      "To limit damage if stolen",
      "It's not important",
    ],
    correct: 2,
    explanation: "Short expiration limits the window of time an attacker can use a stolen token.",
  },
];

const Quiz = () => {
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [submitted, setSubmitted] = useState(false);

  const handleSelect = (qIdx: number, oIdx: number) => {
    if (submitted) return;
    setAnswers((prev) => ({ ...prev, [qIdx]: oIdx }));
  };

  const score = questions.filter((q, i) => answers[i] === q.correct).length;

  return (
    <SectionCard id="quiz" title="Test Your Knowledge" subtitle="Answer these questions to check what you learned" icon={HelpCircle}>
      <div className="space-y-6">
        {questions.map((q, qIdx) => {
          const selected = answers[qIdx];
          const isCorrect = selected === q.correct;

          return (
            <div key={qIdx} className="bg-muted rounded-lg p-4">
              <h4 className="font-bold text-sm text-foreground mb-3">
                {qIdx + 1}. {q.q}
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {q.options.map((opt, oIdx) => {
                  let style = "bg-card border border-border hover:border-primary/40";
                  if (submitted && oIdx === q.correct) {
                    style = "bg-accent border-2 border-primary";
                  } else if (submitted && selected === oIdx && !isCorrect) {
                    style = "bg-destructive/10 border-2 border-destructive";
                  } else if (!submitted && selected === oIdx) {
                    style = "bg-accent border-2 border-primary/60";
                  }

                  return (
                    <button
                      key={oIdx}
                      onClick={() => handleSelect(qIdx, oIdx)}
                      className={`text-left px-4 py-2.5 rounded-lg text-sm transition-all ${style}`}
                    >
                      <span className="font-mono text-xs text-muted-foreground mr-2">
                        {String.fromCharCode(65 + oIdx)}.
                      </span>
                      {opt}
                    </button>
                  );
                })}
              </div>
              {submitted && (
                <div className={`flex items-start gap-2 mt-3 text-sm ${isCorrect ? "text-primary" : "text-destructive"}`}>
                  {isCorrect ? <CheckCircle2 className="w-4 h-4 mt-0.5 shrink-0" /> : <XCircle className="w-4 h-4 mt-0.5 shrink-0" />}
                  <span>{q.explanation}</span>
                </div>
              )}
            </div>
          );
        })}
      </div>

      <div className="mt-6 flex flex-col sm:flex-row items-center gap-3">
        {!submitted ? (
          <button
            onClick={() => setSubmitted(true)}
            disabled={Object.keys(answers).length < questions.length}
            className="gradient-hero text-primary-foreground font-semibold px-6 py-2.5 rounded-lg disabled:opacity-40 transition-opacity"
          >
            Submit Answers
          </button>
        ) : (
          <>
            <div className="bg-accent px-4 py-2 rounded-lg font-bold text-primary">
              Score: {score} / {questions.length}
            </div>
            <button
              onClick={() => { setAnswers({}); setSubmitted(false); }}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Try Again
            </button>
          </>
        )}
      </div>
    </SectionCard>
  );
};

export default Quiz;
