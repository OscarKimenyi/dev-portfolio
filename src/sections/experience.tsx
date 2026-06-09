"use client";

import { motion } from "framer-motion";
import { Briefcase, Calendar, ChevronRight } from "lucide-react";
import { experience } from "@/data/portfolio";
import { FadeIn } from "@/components/animations/fade-in";
import { useState } from "react";

export function Experience() {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  return (
    <section id="experience" className="py-24 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-primary/5 pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <FadeIn direction="up">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              Career Journey
            </div>
          </FadeIn>

          <FadeIn direction="up" delay={0.1}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              Experience & <span className="gradient-text">Growth</span>
            </h2>
          </FadeIn>

          <FadeIn direction="up" delay={0.2}>
            <p className="text-lg text-muted-foreground">
              A timeline of my professional journey, from junior developer to
              senior engineer building enterprise systems.
            </p>
          </FadeIn>
        </div>

        <div className="max-w-4xl mx-auto">
          {experience.map((item, index) => (
            <FadeIn key={item.id} direction="left" delay={index * 0.15}>
              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative mb-8 last:mb-0"
              >
                {index !== experience.length - 1 && (
                  <div className="absolute left-6 top-14 bottom-0 w-px bg-border" />
                )}

                <div className="flex gap-6">
                  <div className="relative shrink-0">
                    <motion.div
                      whileHover={{ scale: 1.2 }}
                      className="w-12 h-12 rounded-full bg-primary/10 border-2 border-primary flex items-center justify-center"
                    >
                      <Briefcase className="w-5 h-5 text-primary" />
                    </motion.div>
                  </div>

                  <motion.div
                    whileHover={{ y: -2 }}
                    className="flex-1 p-6 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all cursor-pointer"
                    onClick={() =>
                      setExpandedId(expandedId === item.id ? null : item.id)
                    }
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                      <div>
                        <h3 className="text-lg font-bold">{item.role}</h3>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <span className="font-medium text-foreground">
                            {item.company}
                          </span>
                          <span>•</span>
                          <span>{item.type}</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-3 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3.5 h-3.5" />
                          {item.period}
                        </span>
                      </div>
                    </div>

                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                      {item.description}
                    </p>

                    <motion.div
                      initial={false}
                      animate={{
                        height: expandedId === item.id ? "auto" : 0,
                        opacity: expandedId === item.id ? 1 : 0,
                      }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="pt-4 border-t border-border space-y-2">
                        <h4 className="text-sm font-semibold mb-2">
                          Key Achievements
                        </h4>
                        {item.achievements.map((achievement) => (
                          <div
                            key={achievement}
                            className="flex items-start gap-2 text-sm text-muted-foreground"
                          >
                            <ChevronRight className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                            {achievement}
                          </div>
                        ))}
                      </div>
                    </motion.div>

                    <div className="flex flex-wrap gap-1.5 mt-4 pt-4 border-t border-border">
                      {item.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-0.5 rounded-md bg-muted text-xs font-medium text-muted-foreground"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="mt-3 text-xs text-muted-foreground text-center">
                      {expandedId === item.id
                        ? "Click to collapse"
                        : "Click to see achievements"}
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
