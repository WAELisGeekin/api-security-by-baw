import { GraduationCap } from "lucide-react";

const Conclusion = () => (
  <section id="conclusion" className="scroll-mt-20 mb-8">
    <div className="gradient-hero rounded-xl p-8 md:p-12 text-center text-primary-foreground">
      <GraduationCap className="w-12 h-12 mx-auto mb-4 opacity-90" />
      <blockquote className="text-2xl md:text-3xl font-extrabold mb-4 leading-tight">
        "Security is not a feature —<br />it is a responsibility."
      </blockquote>
      <p className="opacity-80 max-w-xl mx-auto leading-relaxed">
        Every API you build should be designed with security in mind from day one.
        JWT authentication is a powerful tool, but only when implemented correctly
        with proper expiration, secure storage, and HTTPS.
      </p>
    </div>
  </section>
);

export default Conclusion;
