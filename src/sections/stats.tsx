"use client";

import { motion } from "framer-motion";
import { Github, GitCommit, GitPullRequest, Star } from "lucide-react";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/animations/fade-in";
import { AnimatedCounter } from "@/components/animations/animated-counter";

const githubStats = [
  {
    label: "Repositories",
    value: 20,
    suffix: "+",
    icon: Github,
    color: "from-gray-600 to-gray-800",
  },
  {
    label: "Commits",
    value: 1500,
    suffix: "+",
    icon: GitCommit,
    color: "from-green-500 to-emerald-600",
  },
  {
    label: "Pull Requests",
    value: 100,
    suffix: "+",
    icon: GitPullRequest,
    color: "from-blue-500 to-cyan-600",
  },
  {
    label: "Stars Earned",
    value: 50,
    suffix: "+",
    icon: Star,
    color: "from-yellow-500 to-amber-600",
  },
];

const contributionGrid = [
  [1, 3, 2, 4, 1, 3, 2],
  [2, 4, 3, 1, 4, 2, 3],
  [3, 1, 4, 2, 3, 4, 1],
  [4, 2, 1, 3, 2, 1, 4],
  [1, 3, 2, 4, 1, 3, 2],
  [2, 4, 3, 1, 4, 2, 3],
  [3, 1, 4, 2, 3, 4, 1],
  [4, 2, 1, 3, 2, 1, 4],
  [1, 3, 2, 4, 1, 3, 2],
  [2, 4, 3, 1, 4, 2, 3],
  [3, 1, 4, 2, 3, 4, 1],
  [4, 2, 1, 3, 2, 1, 4],
  [1, 3, 2, 4, 1, 3, 2],
  [2, 4, 3, 1, 4, 2, 3],
  [3, 1, 4, 2, 3, 4, 1],
  [4, 2, 1, 3, 2, 1, 4],
  [1, 3, 2, 4, 1, 3, 2],
  [2, 4, 3, 1, 4, 2, 3],
  [3, 1, 4, 2, 3, 4, 1],
  [4, 2, 1, 3, 2, 1, 4],
  [1, 3, 2, 4, 1, 3, 2],
  [2, 4, 3, 1, 4, 2, 3],
  [3, 1, 4, 2, 3, 4, 1],
  [4, 2, 1, 3, 2, 1, 4],
  [1, 3, 2, 4, 1, 3, 2],
  [2, 4, 3, 1, 4, 2, 3],
  [3, 1, 4, 2, 3, 4, 1],
  [4, 2, 1, 3, 2, 1, 4],
  [1, 3, 2, 4, 1, 3, 2],
  [2, 4, 3, 1, 4, 2, 3],
  [3, 1, 4, 2, 3, 4, 1],
  [4, 2, 1, 3, 2, 1, 4],
  [1, 3, 2, 4, 1, 3, 2],
  [2, 4, 3, 1, 4, 2, 3],
  [3, 1, 4, 2, 3, 4, 1],
  [4, 2, 1, 3, 2, 1, 4],
  [1, 3, 2, 4, 1, 3, 2],
  [2, 4, 3, 1, 4, 2, 3],
  [3, 1, 4, 2, 3, 4, 1],
  [4, 2, 1, 3, 2, 1, 4],
  [1, 3, 2, 4, 1, 3, 2],
  [2, 4, 3, 1, 4, 2, 3],
  [3, 1, 4, 2, 3, 4, 1],
  [4, 2, 1, 3, 2, 1, 4],
  [1, 3, 2, 4, 1, 3, 2],
  [2, 4, 3, 1, 4, 2, 3],
];

function getIntensityClass(level: number) {
  const classes = [
    "bg-muted",
    "bg-primary/20",
    "bg-primary/40",
    "bg-primary/60",
    "bg-primary",
  ];
  return classes[level] || classes[0];
}

export function Stats() {
  return (
    <section className="py-24 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <FadeIn direction="up">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              <Github className="w-4 h-4" />
              GitHub Activity
            </div>
          </FadeIn>

          <FadeIn direction="up" delay={0.1}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              Coding <span className="gradient-text">Activity</span>
            </h2>
          </FadeIn>

          <FadeIn direction="up" delay={0.2}>
            <p className="text-lg text-muted-foreground">
              Consistent contribution to open source and personal projects.
            </p>
          </FadeIn>
        </div>

        <StaggerContainer className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-16">
          {githubStats.map((stat) => (
            <StaggerItem key={stat.label}>
              <motion.div
                whileHover={{ y: -5, scale: 1.02 }}
                className="p-6 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all text-center group"
              >
                <div
                  className={`w-12 h-12 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}
                >
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
                <div className="text-3xl sm:text-4xl font-bold mb-1">
                  <AnimatedCounter
                    target={stat.value}
                    suffix={stat.suffix}
                  />
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <FadeIn direction="up" delay={0.3}>
          <div className="p-6 rounded-2xl bg-card border border-border overflow-x-auto">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold">Contribution Activity</h3>
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <span>Less</span>
                <div className="flex gap-1">
                  {[0, 1, 2, 3, 4].map((level) => (
                    <div
                      key={level}
                      className={`w-3 h-3 rounded-sm ${getIntensityClass(level)}`}
                    />
                  ))}
                </div>
                <span>More</span>
              </div>
            </div>

            <div className="flex gap-1">
              {contributionGrid.map((week, weekIndex) => (
                <div key={weekIndex} className="flex flex-col gap-1">
                  {week.map((day, dayIndex) => (
                    <motion.div
                      key={dayIndex}
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{
                        delay: (weekIndex * 7 + dayIndex) * 0.002,
                        duration: 0.2,
                      }}
                      whileHover={{ scale: 1.3 }}
                      className={`w-3 h-3 rounded-sm ${getIntensityClass(day)} cursor-pointer transition-colors hover:ring-2 hover:ring-primary/50`}
                      title={`${day} contributions`}
                    />
                  ))}
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
