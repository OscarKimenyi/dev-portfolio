"use client";

import { motion } from "framer-motion";
import { Code2, Lightbulb, Users, Zap, Target, Heart } from "lucide-react";
import { personalInfo, stats } from "@/data/portfolio";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/animations/fade-in";
import { AnimatedCounter } from "@/components/animations/animated-counter";

const highlights = [
  {
    icon: Code2,
    title: "Clean Code",
    description: "Writing maintainable, scalable code following industry best practices",
  },
  {
    icon: Lightbulb,
    title: "Problem Solver",
    description: "Transforming complex challenges into elegant solutions",
  },
  {
    icon: Users,
    title: "Team Player",
    description: "Collaborating effectively across cross-functional teams",
  },
  {
    icon: Zap,
    title: "Fast Learner",
    description: "Quickly adapting to new technologies and frameworks",
  },
  {
    icon: Target,
    title: "Results Driven",
    description: "Focused on delivering measurable business impact",
  },
  {
    icon: Heart,
    title: "Passionate",
    description: "Genuinely love what I do and it shows in the work",
  },
];

export function About() {
  return (
    <section id="about" className="py-24 lg:py-32 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-primary/5 to-transparent pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <FadeIn direction="up">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                About Me
              </div>
            </FadeIn>

            <FadeIn direction="up" delay={0.1}>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                Building{" "}
                <span className="gradient-text">Digital Experiences</span> That
                Matter
              </h2>
            </FadeIn>

            <FadeIn direction="up" delay={0.2}>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                {personalInfo.description}
              </p>
            </FadeIn>

            <FadeIn direction="up" delay={0.3}>
              <p className="text-muted-foreground leading-relaxed mb-8">
                I specialize in building scalable SaaS platforms, AI-powered
                applications, and business systems that solve real problems. With
                a strong foundation in both frontend and backend technologies, I
                bridge the gap between design and engineering to deliver
                production-ready solutions.
              </p>
            </FadeIn>

            <FadeIn direction="up" delay={0.4}>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 * index }}
                    whileHover={{ scale: 1.05 }}
                    className="p-4 rounded-xl bg-muted/50 border border-border hover:border-primary/30 transition-colors"
                  >
                    <div className="text-2xl sm:text-3xl font-bold text-primary">
                      <AnimatedCounter
                        target={stat.value}
                        suffix={stat.suffix}
                      />
                    </div>
                    <div className="text-sm text-muted-foreground mt-1">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </div>
            </FadeIn>
          </div>

          <div>
            <StaggerContainer className="grid grid-cols-2 gap-4">
              {highlights.map((highlight, index) => (
                <StaggerItem key={highlight.title}>
                  <motion.div
                    whileHover={{ y: -5, scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className={`p-6 rounded-2xl bg-muted/50 border border-border hover:border-primary/30 transition-all group ${
                      index === 0 || index === 3 ? "lg:translate-y-8" : ""
                    }`}
                  >
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                      <highlight.icon className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="font-semibold mb-2">{highlight.title}</h3>
                    <p className="text-sm text-muted-foreground">
                      {highlight.description}
                    </p>
                  </motion.div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </div>
      </div>
    </section>
  );
}
