import { useState } from "react";
import { HelpCircle, CheckCircle2, XCircle, Trophy } from "lucide-react";
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
    explanation: "JWT = JSON Web Token — an open standard (RFC 7519) for secure data transfer.",
  },
  {
    q: "Which part of a JWT contains the user data?",
    options: ["Header", "Payload", "Signature", "Secret Key"],
    correct: 1,
    explanation: "The Payload contains claims — user data, roles, expiration time, etc.",
  },
  {
    q: "What HTTP status code means 'Unauthorized'?",
    options: ["200", "403", "401", "500"],
    correct: 2,
    explanation: "401 = Unauthorized. The request lacks valid authentication credentials.",
  },
  {
    q: "Where should you send a JWT in API requests?",
    options: ["URL query string", "Authorization header", "Request body", "URL path"],
    correct: 1,
    explanation: "Best practice: Authorization header → 'Bearer <token>'",
  },
  {
    q: "Why should tokens have short expiration?",
    options: ["To annoy users", "To save memory", "To limit stolen token damage", "It's not important"],
    correct: 2,
    explanation: "Short TTL = smaller window for attackers to use a stolen token.",
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
  const perfect = score === questions.length;

  return (
    <SectionCard id="quiz" title="Test Your Knowledge" subtitle="5 questions to check what you learned" icon={HelpCircle} index={9}>
      <div className="space-y-5">
        {questions.map((q, qIdx) => {
          const selected = answers[qIdx];
          const isCorrect = selected === q.correct;

          return (
            <div key={qIdx} className="bg-secondary rounded-xl p-5 border border-border">
              <h4 className="font-bold text-foreground mb-3 font-display">
                <span className="text-primary mr-2">{qIdx + 1}.</span>
                {q.q}
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {q.options.map((opt, oIdx) => {
                  let style = "bg-card border-border hover:border-primary/40 hover:bg-primary/5";
                  if (submitted && oIdx === q.correct) {
                    style = "bg-success/10 border-success/50 text-success";
                  } else if (submitted && selected === oIdx && !isCorrect) {
                    style = "bg-destructive/10 border-destructive/50 text-destructive";
                  } else if (!submitted && selected === oIdx) {
                    style = "bg-primary/10 border-primary/50 text-primary glow-purple-sm";
                  }

                  return (
                    <button
                      key={oIdx}
                      onClick={() => handleSelect(qIdx, oIdx)}
                      className={`text-left px-4 py-3 rounded-xl text-sm border transition-all duration-200 hover:scale-[1.01] ${style}`}
                    >
                      <span className="font-mono text-xs text-muted-foreground mr-2 font-bold">
                        {String.fromCharCode(65 + oIdx)}
                      </span>
                      {opt}
                    </button>
                  );
                })}
              </div>
              {submitted && (
                <div className={`flex items-start gap-2 mt-3 text-sm animate-fade-in ${isCorrect ? "text-success" : "text-destructive"}`}>
                  {isCorrect ? <CheckCircle2 className="w-4 h-4 mt-0.5 shrink-0" /> : <XCircle className="w-4 h-4 mt-0.5 shrink-0" />}
                  <span>{q.explanation}</span>
                </div>
              )}
            </div>
          );
        })}
      </div>

      <div className="mt-6 flex flex-col sm:flex-row items-center gap-4">
        {!submitted ? (
          <button
            onClick={() => setSubmitted(true)}
            disabled={Object.keys(answers).length < questions.length}
            className="gradient-hero text-primary-foreground font-bold px-8 py-3 rounded-xl disabled:opacity-30 transition-all duration-200 hover:scale-105 glow-purple-sm disabled:glow-none"
          >
            Submit Answers
          </button>
        ) : (
          <>
            <div className={`flex items-center gap-2 px-5 py-3 rounded-xl font-bold text-lg ${perfect ? "gradient-hero text-primary-foreground glow-purple animate-pulse-glow" : "bg-secondary text-foreground border border-border"}`}>
              {perfect && <Trophy className="w-5 h-5" />}
              {score} / {questions.length}
              {perfect && " 🎉 Perfect!"}
            </div>
            <button
              onClick={() => { setAnswers({}); setSubmitted(false); }}
              className="text-sm text-muted-foreground hover:text-primary transition-colors underline underline-offset-4"
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
