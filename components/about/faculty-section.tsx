"use client";

import Image from "next/image";
import { Mail, Calendar, BookOpen } from "lucide-react";
import { motion } from "framer-motion";

const faculties = [
  {
    name: "Dr. Ramakanth Kumar P",
    image: "/faculties/ramakanth.jpg",
    department: "Department of CSE",
    areaOfInterest: "Digital Image Processing, Pattern Recognition, Natural Language processing",
    joinDate: "07-10-1994",
    email: "ramakanthkp@rvce.edu",
    link: "https://rvce.edu.in/department-cse-dr_ramakanth_k"
  },
  {
    name: "Dr. Pavithra H",
    image: "/faculties/pavithra.jpg",
    department: "Department of CSE",
    areaOfInterest: "Software Defined Networks Cloud Computing, Software Engineering",
    joinDate: "30-Aug-2012",
    email: "pavithrah@rvce.edu.in",
    link: "https://rvce.edu.in/department-cse-dr_pavithra_h"
  }
];

export default function FacultySection() {
  return (
    <section className="relative w-full py-16 md:py-24 px-6 lg:px-12 bg-white dark:bg-[#050505]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="mb-3 block text-sm font-medium uppercase tracking-wider text-[#005596] dark:text-[#005596]">
            Guiding Lights
          </span>
          <h2 className="text-4xl font-bold tracking-tight text-neutral-900 md:text-5xl dark:text-white">
            Our Faculty Advisors
          </h2>
          <div className="mx-auto mt-6 h-1 w-20 rounded-full bg-[#005596]" />
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {faculties.map((faculty, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2, duration: 0.5 }}
              className="flex flex-col sm:flex-row overflow-hidden rounded-3xl bg-neutral-50 dark:bg-[#0A0A0A] border border-neutral-200 dark:border-white/10 hover:shadow-xl dark:shadow-[0_4px_30px_rgba(0,0,0,0.5)] transition-all group"
            >
              <div className="relative w-full h-80 sm:h-auto sm:w-[160px] lg:w-[180px] shrink-0 overflow-hidden bg-neutral-200 dark:bg-neutral-800">
                <Image
                  src={faculty.image}
                  alt={faculty.name}
                  fill
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <div className="flex flex-col flex-1 justify-center p-5 sm:p-6 lg:p-8">
                <h3 className="text-xl lg:text-2xl font-bold text-neutral-900 dark:text-white mb-1 text-center sm:text-left transition-colors group-hover:text-[#005596] tracking-tight">
                  {faculty.name}
                </h3>
                <p className="text-sm text-[#005596] font-medium mb-4 text-center sm:text-left">
                  {faculty.department}
                </p>

                <div className="space-y-3 mt-auto">
                  <div className="flex items-start gap-3">
                    <BookOpen className="w-5 h-5 text-neutral-500 dark:text-neutral-400 shrink-0 mt-0.5" />
                    <p className="text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed">
                      <span className="font-semibold text-neutral-900 dark:text-white">Area of interest: </span>
                      {faculty.areaOfInterest}
                    </p>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <Calendar className="w-5 h-5 text-neutral-500 dark:text-neutral-400 shrink-0" />
                    <p className="text-sm text-neutral-600 dark:text-neutral-300">
                      Joined RVCE: {faculty.joinDate}
                    </p>
                  </div>

                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-neutral-500 dark:text-neutral-400 shrink-0" />
                    <a 
                      href={`mailto:${faculty.email}`} 
                      className="text-sm text-neutral-600 dark:text-neutral-300 hover:text-[#005596] dark:hover:text-[#005596] transition-colors"
                    >
                      {faculty.email}
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
