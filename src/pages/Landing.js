import React from "react";
import { Navbar } from "../components/Navbar/Navbar";
import Hero from "../components/sections/Hero";
import LandingLayout from "../components/layouts/LandingLayout";
import  beach  from "../static/images/beach.jpg";

export default function Landing() {
  return (
    // <LandingLayout>
        
      <Hero
        title="Participate. Investigate."
        subtitle="Join thousands of students in New Zealand who are helping researchers understand our impact on the environment."
        image={beach}
        ctaText="Create your account now"
        ctaLink="/login"
        boxShadow="xl"
      />
      
    // </LandingLayout>
  );
}

