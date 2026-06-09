"use client";

import { motion, AnimatePresence } from "framer-motion";
import {
  Layout,
  Server,
  Smartphone,
  Database,
  Cloud,
  Brain,
} from "lucide-react";
import { skills } from "@/data/portfolio";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/animations/fade-in";
import { useState } from "react";

const skillCategories = [
  {
    id: "frontend",
    label: "Frontend",
    icon: Layout,
    color: "from-blue-500 to-cyan-500",
    bgColor: "bg-blue-500/10",
    textColor: "text-blue-500",
    data: skills.frontend,
  },
  {
    id: "backend",
    label: "Backend",
    icon: Server,
    color: "from-green-500 to-emerald-500",
    bgColor: "bg-green-500/10",
    textColor: "text-green-500",
    data: skills.backend,
  },
  {
    id: "mobile",
    label: "Mobile",
    icon: Smartphone,
    color: "from-purple-500 to-pink-500",
    bgColor: "bg-purple-500/10",
    textColor: "text-purple-500",
    data: skills.mobile,
  },
  {
    id: "databases",
    label: "Databases",
    icon: Database,
    color: "from-orange-500 to-amber-500",
    bgColor: "bg-orange-500/10",
    textColor: "text-orange-500",
    data: skills.databases,
  },
  {
    id: "devops",
    label: "DevOps",
    icon: Cloud,
    color: "from-sky-500 to-blue-500",
    bgColor: "bg-sky-500/10",
    textColor: "text-sky-500",
    data: skills.devops,
  },
  {
    id: "ai",
    label: "AI & ML",
    icon: Brain,
    color: "from-rose-500 to-red-500",
    bgColor: "bg-rose-500/10",
    textColor: "text-rose-500",
    data: skills.ai,
  },
];

function SkillBar({ name, level, index }: { name: string; level: number; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="group"
    >
      <div className="flex items-center justify-between mb-2">
        <span className="text-sm font-medium group-hover:text-primary transition-colors">
          {name}
        </span>
        <span className="text-sm text-muted-foreground">{level}%</span>
      </div>
      <div className="h-2 rounded-full bg-muted overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: index * 0.1, ease: "easeOut" }}
          className="h-full rounded-full bg-gradient-to-r from-primary to-purple-500"
        />
      </div>
    </motion.div>
  );
}

export function Skills() {
  const [activeCategory, setActiveCategory] = useState("frontend");

  const activeData = skillCategories.find((cat) => cat.id === activeCategory);

  return (
    <section id="skills" className="py-24 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <FadeIn direction="up">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              Technical Expertise
            </div>
          </FadeIn>

          <FadeIn direction="up" delay={0.1}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              Skills & <span className="gradient-text">Technologies</span>
            </h2>
          </FadeIn>

          <FadeIn direction="up" delay={0.2}>
            <p className="text-lg text-muted-foreground">
              A comprehensive toolkit built over years of building production
              systems. I stay current with modern technologies while mastering
              the fundamentals.
            </p>
          </FadeIn>
        </div>

        <FadeIn direction="up" delay={0.3}>
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {skillCategories.map((category) => (
              <motion.button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`flex items-center gap-2 px-5 py-3 rounded-xl font-medium transition-all ${activeCategory === category.id
                    ? "bg-primary text-primary-foreground shadow-lg shadow-primary/25"
                    : "bg-muted text-muted-foreground hover:text-foreground hover:bg-muted/80"
                  }`}
              >
                <category.icon className="w-4 h-4" />
                {category.label}
              </motion.button>
            ))}
          </div>
        </FadeIn>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="max-w-3xl mx-auto"
          >
            <div className="grid gap-4">
              {activeData?.data.map((skill, index) => (
                <SkillBar
                  key={`${skill.name}-${index}`} name={skill.name}
                  level={skill.level}
                  index={index}
                />
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className={`mt-8 p-6 rounded-2xl ${activeData?.bgColor} border border-border`}
            >
              <div className="flex items-center gap-3 mb-3">
                <div className={`w-10 h-10 rounded-xl ${activeData?.bgColor} flex items-center justify-center`}>
                  {activeData && <activeData.icon className={`w-5 h-5 ${activeData.textColor}`} />}
                </div>
                <div>
                  <h3 className="font-semibold">{activeData?.label} Expertise</h3>
                  <p className="text-sm text-muted-foreground">
                    {activeData?.data.length} technologies mastered
                  </p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground">
                Proficient in building production-grade applications using modern
                {activeData?.label.toLowerCase()} technologies with best practices
                and performance optimization.
              </p>
            </motion.div>
          </motion.div>
        </AnimatePresence>

        <FadeIn direction="up" delay={0.4} className="mt-20">
          <h3 className="text-2xl font-bold text-center mb-8">
            Complete <span className="gradient-text">Tech Stack</span>
          </h3>
          <StaggerContainer className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {[
              ...skills.frontend,
              ...skills.backend,
              ...skills.mobile,
              ...skills.databases,
              ...skills.devops,
              ...skills.ai,
            ].map((skill, index) => (
              <StaggerItem key={`${skill.name}-${index}`}>
                <motion.div
                  whileHover={{ scale: 1.05, y: -2 }}
                  className="p-4 rounded-xl bg-muted/50 border border-border hover:border-primary/30 hover:bg-primary/5 transition-all text-center group"
                >
                  <div className="text-2xl font-bold text-muted-foreground group-hover:text-primary transition-colors mb-1">
                    {skill.level}%
                  </div>
                  <div className="text-sm font-medium">{skill.name}</div>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </FadeIn>
      </div>
    </section>
  );
}
