import { useState } from "react";
import ScrollProgress from "@/components/ScrollProgress";
import Navbar from "@/components/Navbar";
import TableOfContents from "@/components/TableOfContents";
import HeroSection from "@/components/sections/HeroSection";
import WhatIsApi from "@/components/sections/WhatIsApi";
import PublicVsSecure from "@/components/sections/PublicVsSecure";
import AuthVsAuthz from "@/components/sections/AuthVsAuthz";
import WhatIsJwt from "@/components/sections/WhatIsJwt";
import HowJwtWorks from "@/components/sections/HowJwtWorks";
import InteractiveDemo from "@/components/sections/InteractiveDemo";
import SecurityRisks from "@/components/sections/SecurityRisks";
import BestPractices from "@/components/sections/BestPractices";
import Conclusion from "@/components/sections/Conclusion";
import Quiz from "@/components/sections/Quiz";
import Footer from "@/components/Footer";

const Index = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="min-h-screen bg-background">
      <ScrollProgress />
      <Navbar onToggleSidebar={() => setSidebarOpen(!sidebarOpen)} sidebarOpen={sidebarOpen} />
      <TableOfContents open={sidebarOpen} />

      <main
        className={`pt-20 pb-8 px-4 transition-all duration-300 ${
          sidebarOpen ? "lg:ml-64" : ""
        }`}
      >
        <div className="max-w-3xl mx-auto">
          <HeroSection />
          <WhatIsApi />
          <PublicVsSecure />
          <AuthVsAuthz />
          <WhatIsJwt />
          <HowJwtWorks />
          <InteractiveDemo />
          <SecurityRisks />
          <BestPractices />
          <Conclusion />
          <Quiz />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
