"use client";

import { motion, useMotionValue, useMotionTemplate } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  Globe,
  Users,
  BookOpen,
  Award,
  Zap,
  Shield,
  Code2,
  GraduationCap,
  Sparkles,
  ChevronRight,
} from "lucide-react";
import React from "react";
import { cn } from "@/lib/utils";

/* ──────────────── Design Tokens ──────────────── */

const FontStyles = () => (
  <style
    dangerouslySetInnerHTML={{
      __html: `
    @import url('https://fonts.googleapis.com/css2?family=Manrope:wght@300;400;500;600;700&family=Space+Grotesk:wght@300;400;500;600&display=swap');
    .font-primary { font-family: 'Manrope', sans-serif; }
    .font-tech { font-family: 'Space Grotesk', monospace; }
  `,
    }}
  />
);

const GridBackground = () => (
  <div className="absolute inset-0 pointer-events-none opacity-[0.03] dark:opacity-[0.05]">
    <div className="absolute inset-0 bg-[linear-gradient(to_right,#808080_1px,transparent_1px)] bg-[size:40px_40px]" />
    <div className="absolute inset-0 bg-[linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:40px_40px]" />
  </div>
);

/* ──────────────── Spotlight Card ──────────────── */

const SpotlightCard = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({
    currentTarget,
    clientX,
    clientY,
  }: React.MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <div
      onMouseMove={handleMouseMove}
      className={cn(
        "group relative overflow-hidden rounded-2xl border border-neutral-200 dark:border-white/10 bg-white dark:bg-neutral-900 transition-all duration-500 hover:border-neutral-300 dark:hover:border-white/20",
        className
      )}
    >
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              500px circle at ${mouseX}px ${mouseY}px,
              rgba(59,130,246,0.08),
              transparent 80%
            )
          `,
        }}
      />
      <div className="relative z-10">{children}</div>
    </div>
  );
};

/* ──────────────── Data ──────────────── */

const studentChapterBenefits = [
  {
    icon: Users,
    title: "Vibrant Community",
    description:
      "Join 200+ like-minded students passionate about technology and innovation.",
  },
  {
    icon: Zap,
    title: "Hands-on Workshops",
    description:
      "Participate in workshops on competitive programming, AI/ML, web dev, and cybersecurity.",
  },
  {
    icon: Award,
    title: "Flagship Events",
    description:
      "Compete in Tech Tank, CTF challenges, and inter-college hackathons.",
  },
  {
    icon: Code2,
    title: "Project Experience",
    description:
      "Build real-world projects with guided mentorship from senior members and alumni.",
  },
  {
    icon: Shield,
    title: "Networking",
    description:
      "Connect with industry professionals, alumni, and peers across multiple colleges.",
  },
  {
    icon: Sparkles,
    title: "Leadership Roles",
    description:
      "Grow into leadership positions and contribute to organizing impactful events.",
  },
];

const globalBenefits = [
  "Access to the ACM Digital Library — the world's largest computing repository",
  "Free or discounted registration at ACM conferences worldwide",
  "Subscription to ACM's flagship publications like Communications of the ACM",
  "Online courses and webinars through the ACM Learning Center",
  "Career & Job Center access for computing professionals",
  "Special Interest Group (SIG) membership opportunities",
  "Distinguished Speaker Program access",
  "Student Research Competition eligibility",
];

const pathways = [
  {
    title: "Written Test",
    target: "1st & 2nd Year Students",
    description:
      "Register on our platform and take the technical written test to showcase your aptitude and problem-solving skills.",
    steps: ["Register on Site", "Take Written Test", "Interview Round", "Join ACM RVCE"],
    cta: "Register for Test",
    link: "/404",
  },
  {
    title: "Resume Application",
    target: "Project Experienced",
    description:
      "Got a strong project portfolio? Skip the written test by submitting a detailed resume highlighting your best technical work.",
    steps: ["Submit Resume", "Profile Evaluation", "Interview Round", "Join ACM RVCE"],
    cta: "Submit Resume",
    link: "/404",
  },
  {
    title: "Global Membership",
    target: "ACM Global Members",
    description:
      "Already have an official ACM Global Student Membership ($19/yr)? Enjoy a direct track to the interview shortlisting phase.",
    steps: ["Purchase Membership", "Verification", "Interview Round", "Join ACM RVCE"],
    cta: "Get Global Membership",
    link: "https://www.acm.org/membership/join",
  },
];

const faqs = [
  {
    q: "Who can join ACM RVCE?",
    a: "Any student currently enrolled at RV College of Engineering can join the ACM RVCE Student Chapter regardless of their department or year.",
  },
  {
    q: "Is an ACM Global membership mandatory?",
    a: "While not strictly mandatory to attend open events, an ACM Global Student Membership ($19/year) is required for official chapter membership and unlocks access to the ACM Digital Library and other global benefits.",
  },
  {
    q: "How much does it cost?",
    a: "ACM Global Student Membership is $19/year (~₹1,580). The RVCE chapter membership has no additional fees beyond the global membership.",
  },
  {
    q: "What if I'm not from the CSE department?",
    a: "ACM welcomes students from all engineering branches. Our events cover a wide range of topics including AI/ML, cybersecurity, product design, and more.",
  },
];

/* ──────────────── Main Component ──────────────── */

export default function MembershipPage() {
  const [openFaq, setOpenFaq] = React.useState<number | null>(null);

  return (
    <div className="font-primary text-neutral-900 dark:text-white">
      <FontStyles />

      {/* ═══════════ HERO ═══════════ */}
      <section className="relative w-full bg-white dark:bg-[#050505] pt-28 md:pt-36 pb-20 md:pb-28 overflow-hidden">
        <GridBackground />

        {/* Ambient glow */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-blue-500/10 dark:bg-blue-500/5 rounded-full blur-[140px] pointer-events-none" />

        <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-neutral-200 dark:border-white/10 bg-white/50 dark:bg-white/5 backdrop-blur-md mb-6">
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-[10px] font-tech uppercase tracking-widest text-neutral-500 dark:text-neutral-400">
                Membership Open
              </span>
            </div>

            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-[0.9] mb-8">
              Become a{" "}
              <span className="text-blue-600">Member</span>
            </h1>

            <p className="text-lg md:text-xl text-neutral-600 dark:text-neutral-400 max-w-2xl leading-relaxed mb-10">
              Join the largest computing society in the world and be part of a
              thriving student community at RVCE. Unlock global resources,
              exclusive events, and endless opportunities to grow.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://www.acm.org/membership/join"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex h-14 items-center justify-center gap-2 rounded-full bg-blue-600 px-8 text-white font-semibold hover:bg-blue-700 transition-all hover:scale-105 shadow-lg shadow-blue-600/20"
              >
                Join ACM Global
                <ArrowUpRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
              <a
                href="#process"
                className="inline-flex h-14 items-center justify-center gap-2 rounded-full border border-neutral-200 dark:border-white/10 px-8 font-medium hover:bg-neutral-100 dark:hover:bg-white/5 transition-colors"
              >
                See the Process
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════ STUDENT CHAPTER BENEFITS ═══════════ */}
      <section className="relative w-full bg-neutral-50 dark:bg-[#0A0A0A] py-20 md:py-28 overflow-hidden border-t border-neutral-200 dark:border-white/10">
        <GridBackground />

        <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-neutral-200 dark:border-white/10 bg-white/50 dark:bg-white/5 backdrop-blur-md mb-6">
              <GraduationCap className="w-3 h-3 text-blue-600" />
              <span className="text-[10px] font-tech uppercase tracking-widest text-neutral-500 dark:text-neutral-400">
                Student Chapter
              </span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tighter mb-4">
              ACM RVCE <span className="text-blue-600">Chapter</span> Benefits
            </h2>
            <p className="text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto text-base md:text-lg">
              As a member of the ACM RVCE Student Chapter, you gain access to a
              vibrant ecosystem of learning, building, and growing together.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {studentChapterBenefits.map((benefit, idx) => {
              const Icon = benefit.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                >
                  <SpotlightCard className="p-8 h-full">
                    <div className="mb-5 inline-flex p-3 rounded-xl bg-blue-600/10 dark:bg-blue-500/10 group-hover:scale-110 transition-transform duration-500">
                      <Icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                    </div>
                    <h3 className="text-lg font-bold mb-2">{benefit.title}</h3>
                    <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                      {benefit.description}
                    </p>
                  </SpotlightCard>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══════════ GLOBAL MEMBERSHIP ═══════════ */}
      <section className="relative w-full bg-white dark:bg-[#050505] py-20 md:py-28 overflow-hidden border-t border-neutral-200 dark:border-white/10">
        <GridBackground />

        {/* Ambient glow */}
        <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[500px] h-[400px] bg-indigo-500/10 dark:bg-indigo-500/5 rounded-full blur-[120px] pointer-events-none" />

        <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left: Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-neutral-200 dark:border-white/10 bg-white/50 dark:bg-white/5 backdrop-blur-md mb-6">
                <Globe className="w-3 h-3 text-indigo-600" />
                <span className="text-[10px] font-tech uppercase tracking-widest text-neutral-500 dark:text-neutral-400">
                  Global Membership
                </span>
              </div>

              <h2 className="text-3xl md:text-5xl font-bold tracking-tighter mb-6 leading-tight">
                ACM <span className="text-indigo-600">Global</span> Student
                Membership
              </h2>

              <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-lg leading-relaxed mb-8">
                For just <strong className="text-neutral-900 dark:text-white">$19/year</strong> (~₹1,580), unlock the full power
                of the world's largest computing society. Access cutting-edge
                research, global conferences, and a worldwide professional
                network.
              </p>

              <a
                href="https://www.acm.org/membership/join"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex h-12 items-center gap-2 rounded-full bg-indigo-600 px-6 text-white font-semibold hover:bg-indigo-700 transition-all hover:scale-105 shadow-lg shadow-indigo-600/20"
              >
                Join on ACM.org
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </motion.div>

            {/* Right: Benefits List */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <SpotlightCard className="p-8 md:p-10">
                <h3 className="text-lg font-bold mb-6 flex items-center gap-2">
                  <BookOpen className="w-5 h-5 text-indigo-600" />
                  What You Get
                </h3>
                <ul className="space-y-4">
                  {globalBenefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className="mt-1 shrink-0 w-5 h-5 rounded-full bg-indigo-600/10 dark:bg-indigo-500/10 flex items-center justify-center">
                        <Check className="w-3 h-3 text-indigo-600 dark:text-indigo-400" />
                      </div>
                      <span className="text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed">
                        {benefit}
                      </span>
                    </li>
                  ))}
                </ul>
              </SpotlightCard>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════ PATHWAYS TO JOIN ═══════════ */}
      <section
        id="process"
        className="relative w-full bg-neutral-50 dark:bg-[#0A0A0A] py-20 md:py-28 overflow-hidden border-t border-neutral-200 dark:border-white/10"
      >
        <GridBackground />

        <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold tracking-tighter mb-4">
              Pathways to <span className="text-blue-600">Join</span>
            </h2>
            <p className="text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
              Choose the path that best fits your profile. Whether you're a beginner wanting to take our aptitude test, an experienced developer with a resume, or an ACM Global member, there's a place for you.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pathways.map((pathway, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                className="h-full"
              >
                <SpotlightCard className="p-8 h-full flex flex-col justify-between">
                  <div>
                    <span className="inline-block px-3 py-1 rounded-full bg-blue-600/10 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400 text-[10px] font-bold uppercase tracking-widest mb-4">
                      {pathway.target}
                    </span>
                    <h3 className="text-2xl font-bold mb-3">{pathway.title}</h3>
                    <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                      {pathway.description}
                    </p>
                  </div>
                  
                  <div className="mt-8 pt-6 border-t border-neutral-200 dark:border-white/10">
                    <ul className="space-y-4 mb-8">
                      {pathway.steps.map((step, stepIdx) => (
                        <li key={stepIdx} className="flex items-center gap-3">
                          <div className="shrink-0 flex items-center justify-center w-5 h-5 rounded-full bg-blue-100 dark:bg-white/10 text-blue-800 dark:text-neutral-300 text-[10px] font-bold">
                            {stepIdx + 1}
                          </div>
                          <span className="text-sm font-medium text-neutral-800 dark:text-neutral-200">
                            {step}
                          </span>
                        </li>
                      ))}
                    </ul>
                    
                    {pathway.cta && pathway.link && (
                      <a
                        href={pathway.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex w-full h-12 items-center justify-center gap-2 rounded-xl bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-all shadow-md mt-auto"
                      >
                        {pathway.cta}
                        <ArrowUpRight className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </SpotlightCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ FAQ ═══════════ */}
      <section className="relative w-full bg-white dark:bg-[#050505] py-20 md:py-28 overflow-hidden border-t border-neutral-200 dark:border-white/10">
        <GridBackground />

        <div className="relative z-10 max-w-3xl mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-4">
              Frequently Asked Questions
            </h2>
          </motion.div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <button
                  onClick={() =>
                    setOpenFaq(openFaq === idx ? null : idx)
                  }
                  className="w-full text-left p-5 rounded-2xl border border-neutral-200 dark:border-white/10 bg-neutral-50 dark:bg-[#0A0A0A] hover:border-neutral-300 dark:hover:border-white/20 transition-colors"
                >
                  <div className="flex items-center justify-between gap-4">
                    <h3 className="font-semibold text-neutral-900 dark:text-white">
                      {faq.q}
                    </h3>
                    <ChevronRight
                      className={cn(
                        "w-5 h-5 shrink-0 text-neutral-400 transition-transform duration-300",
                        openFaq === idx && "rotate-90"
                      )}
                    />
                  </div>
                  <motion.div
                    initial={false}
                    animate={{
                      height: openFaq === idx ? "auto" : 0,
                      opacity: openFaq === idx ? 1 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <p className="mt-3 text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                      {faq.a}
                    </p>
                  </motion.div>
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ FINAL CTA ═══════════ */}
      <section className="relative w-full bg-neutral-50 dark:bg-[#0A0A0A] py-20 md:py-28 overflow-hidden border-t border-neutral-200 dark:border-white/10">
        <GridBackground />

        {/* Ambient glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-blue-500/10 dark:bg-blue-500/5 rounded-full blur-[120px] pointer-events-none" />

        <div className="relative z-10 max-w-3xl mx-auto px-6 lg:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-6">
              Ready to{" "}
              <span className="text-blue-600">Join?</span>
            </h2>
            <p className="text-neutral-600 dark:text-neutral-400 text-lg mb-10 max-w-xl mx-auto">
              Take the first step towards becoming part of a global community of
              innovators, builders, and leaders.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://www.acm.org/membership/join"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex h-14 items-center justify-center gap-2 rounded-full bg-blue-600 px-8 text-white font-semibold hover:bg-blue-700 transition-all hover:scale-105 shadow-lg shadow-blue-600/20"
              >
                Get ACM Membership
                <ArrowUpRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
              <a
                href="/contact"
                className="inline-flex h-14 items-center justify-center gap-2 rounded-full border border-neutral-200 dark:border-white/10 px-8 font-medium hover:bg-neutral-100 dark:hover:bg-white/5 transition-colors"
              >
                Contact Us
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
