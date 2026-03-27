"use client";

import AboutACM from "@/components/about/about-acm";
import AboutRVCE from "@/components/about/about-rvce";
import AboutStats from "@/components/about/about-stats";
import FacultySection from "@/components/about/faculty-section";

export default function AboutPage() {
  return (
    <div className="overflow-x-hidden">
      <AboutACM />
      <FacultySection />
      <AboutRVCE />
      <AboutStats />
    </div>
  );
}
