import { Shield } from "lucide-react";

const Footer = () => (
  <footer className="bg-card border-t border-border mt-8 py-8 px-4">
    <div className="max-w-3xl mx-auto text-center">
      <div className="flex items-center justify-center gap-2 mb-3">
        <Shield className="w-5 h-5 text-primary" />
        <span className="font-bold text-foreground">API Security</span>
      </div>
      <div className="text-sm text-muted-foreground space-y-1">
        <p className="font-medium text-foreground">Student Presenter</p>
        <p>Course: Introduction to Information Security</p>
        <p>University Presentation · 2026</p>
      </div>
      <div className="mt-4 pt-4 border-t border-border text-xs text-muted-foreground">
        Built with ❤️ for educational purposes
      </div>
    </div>
  </footer>
);

export default Footer;
