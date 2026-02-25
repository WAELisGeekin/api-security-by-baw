import { Shield, Heart } from "lucide-react";

const Footer = () => (
  <footer className="border-t border-border mt-8 py-10 px-4 bg-secondary/30">
    <div className="max-w-3xl mx-auto text-center">
      <div className="flex items-center justify-center gap-2 mb-4">
        <div className="w-8 h-8 rounded-lg gradient-hero flex items-center justify-center glow-purple-sm">
          <Shield className="w-4 h-4 text-primary-foreground" />
        </div>
        <span className="font-bold text-foreground font-display text-lg">
          API <span className="text-gradient">Security</span>
        </span>
      </div>
      <div className="text-sm text-muted-foreground space-y-1.5">
        <p className="font-bold text-foreground text-base">Belhadj Aimen Wail</p>
        <p>Course: Introduction to Information Security</p>
        <p>University Presentation · 2026</p>
      </div>
      <div className="mt-6 pt-4 border-t border-border text-xs text-muted-foreground flex items-center justify-center gap-1">
        Built with <Heart className="w-3 h-3 text-primary inline" /> for educational purposes
      </div>
    </div>
  </footer>
);

export default Footer;
