import React from "react";
import Hero from "@/components/landing/hero/hero";
import EventsAndFAQs from "@/components/landing/events-faq/events-faqs";
import Expectations from "@/components/expectations/Expectations";
import { client } from "@/sanity/lib/client";
import { topEventsQuery } from "@/sanity/lib/queries";
import { faqs } from "@/lib/config/eventsFAQS";
import DomainsBento from "@/components/landing/domains/domains-bento";
import ProjectVelocity from "@/components/landing/projects/project-velocity";
import ExpandableWorkflow from "@/components/landing/process/expandable-workflow";

import { UpcomingEvents } from "@/components/events/upcoming-events";
import { FAQSection } from "@/components/events/FAQSection";
import GithubHeatmap from "@/components/landing/github-activity/github-heatmap";

const Page = async () => {
  // const sanityEvents = await client.fetch(topEventsQuery);
  const events = [
    {
      _id: "acm-ctf",
      title: "ACM CTF",
      date: "2026-03-25T00:00:00Z",
      imageUrl: "/events/ctf.jpeg",
      category: "Competition",
      description: "Get ready for the ultimate Capture The Flag competition. Challenge your cybersecurity skills and win exciting prizes in this intense hackathon-style event!",
      registrationLink: ""
    },
    {
      _id: "tech-tank-2",
      title: "Tech Tank 2.0",
      date: "",
      imageUrl: "/events/tt.jpg", // new flagship image
      category: "Flagship Ideathon",
      description: "Our flagship event is back! Tech Tank 2.0 is the most awaited ideathon where innovation meets execution. Get ready to pitch your ideas to industry leaders. Dates and details to be revealed soon.",
      registrationLink: ""
    }
  ];

  return (
    <React.Fragment>
      <Hero />
      <UpcomingEvents events={events} />
      <DomainsBento />  
      {/* <GithubHeatmap /> */}
      <ProjectVelocity />
      <ExpandableWorkflow />
      {/* <EventsAndFAQs events={events} faqs={faqs} /> */}
      {/* <Expectations /> */}
      <FAQSection 
        faqs={faqs} 
      />
    </React.Fragment>
  );
};

export default Page;
