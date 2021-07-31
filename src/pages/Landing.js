import React from "react";
import { Navbar } from "../components/Navbar/Navbar";
import Hero from "../components/sections/Hero";
import LandingLayout from "../components/layouts/LandingLayout";
import  beach  from "../static/images/beach.jpg";

export default function Landing() {
  return (
    <LandingLayout>
        
      <Hero
        title="Participate. Investigate."
        subtitle="Join thousands of kiwi students and work with researchers to deliver real-world environmental science projects."
        image={beach}
        ctaText="Create your account now"
        ctaLink="/signup"
      />
    </LandingLayout>
  );
}

