"use client";

import { motion } from "framer-motion";
import {
  Github,
  Linkedin,
  Twitter,
  Dribbble,
  ArrowDown,
  Sparkles,
  Code2,
  Rocket,
} from "lucide-react";
import { personalInfo } from "@/data/portfolio";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/animations/fade-in";

// Pre-defined positions for floating elements (SSR-safe, no Math.random())
const floatingElements = [
  { x: 120, y: 180, icon: Code2, delay: 0, duration: 4 },
  { x: 850, y: 320, icon: Sparkles, delay: 0.5, duration: 6 },
  { x: 400, y: 450, icon: Rocket, delay: 1.0, duration: 5 },
  { x: 720, y: 120, icon: Code2, delay: 1.5, duration: 7 },
  { x: 200, y: 520, icon: Sparkles, delay: 2.0, duration: 4 },
  { x: 950, y: 480, icon: Rocket, delay: 2.5, duration: 6 },
];

function AnimatedBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <motion.div
        animate={{
          x: [0, 100, 0],
          y: [0, -50, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-[100px]"
      />
      <motion.div
        animate={{
          x: [0, -80, 0],
          y: [0, 60, 0],
          scale: [1, 1.3, 1],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-[120px]"
      />
      <motion.div
        animate={{
          x: [0, 60, 0],
          y: [0, 40, 0],
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
        className="absolute top-1/2 left-1/2 w-64 h-64 bg-blue-500/10 rounded-full blur-[100px]"
      />

      <div
        className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]"
        style={{
          backgroundImage: `linear-gradient(to right, currentColor 1px, transparent 1px),
                           linear-gradient(to bottom, currentColor 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      {floatingElements.map((el, i) => (
        <motion.div
          key={i}
          className="absolute hidden lg:block"
          style={{ left: el.x, top: el.y }}
          animate={{
            y: [0, -30, 0],
            rotate: [0, 10, -10, 0],
          }}
          transition={{
            duration: el.duration,
            repeat: Infinity,
            delay: el.delay,
            ease: "easeInOut",
          }}
        >
          <el.icon className="w-6 h-6 text-primary/20" />
        </motion.div>
      ))}
    </div>
  );
}

const socialLinks = [
  { icon: Github, href: personalInfo.social.github, label: "GitHub" },
  { icon: Linkedin, href: personalInfo.social.linkedin, label: "LinkedIn" },
  { icon: Twitter, href: personalInfo.social.twitter, label: "Twitter" },
];

export function Hero() {
  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      <AnimatedBackground />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <StaggerContainer className="space-y-8">
            <StaggerItem>
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium"
              >
                <Sparkles className="w-4 h-4" />
                Available for freelance & full-time
              </motion.div>
            </StaggerItem>
            <StaggerItem>
              <div className="relative mx-auto w-32 h-32 sm:w-40 sm:h-40 mb-4">
                {/* Glow effect behind avatar */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary to-purple-500 animate-pulse blur-lg opacity-50" />

                <img
                  src={personalInfo.avatar}
                  alt={personalInfo.name}
                  className="relative w-full h-full rounded-full object-cover border-4 border-background shadow-xl"
                  onError={(e) => {
                    // Shows initials fallback if image fails
                    const target = e.currentTarget;
                    target.style.display = 'none';
                    const parent = target.parentElement;
                    if (parent) {
                      const fallback = document.createElement('div');
                      fallback.className = 'relative w-full h-full rounded-full bg-gradient-to-br from-primary to-purple-500 flex items-center justify-center text-4xl font-bold text-white border-4 border-background shadow-xl';
                      fallback.innerHTML = personalInfo.name.split(' ').map(n => n[0]).join('');
                      parent.appendChild(fallback);
                    }
                  }}
                />
              </div>
            </StaggerItem>

            <StaggerItem>
              <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight">
                <span className="block">{personalInfo.name.split(" ")[0]}</span>
                <span className="block gradient-text mt-2">
                  {personalInfo.name.split(" ")[1]}
                </span>
              </h1>
            </StaggerItem>

            <StaggerItem>
              <p className="text-xl sm:text-2xl md:text-3xl text-muted-foreground font-medium">
                {personalInfo.title}
              </p>
            </StaggerItem>

            <StaggerItem>
              <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                {personalInfo.tagline}
              </p>
            </StaggerItem>

            <StaggerItem>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                <motion.a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                  }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-primary text-primary-foreground rounded-xl font-semibold text-lg shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-shadow"
                >
                  Let&apos;s Work Together
                </motion.a>
                <motion.a
                  href="#projects"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
                  }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-muted text-foreground rounded-xl font-semibold text-lg border border-border hover:bg-muted/80 transition-colors"
                >
                  View My Work
                </motion.a>
              </div>
            </StaggerItem>

            <StaggerItem>
              <div className="flex items-center justify-center gap-4 pt-6">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-10 h-10 rounded-lg bg-muted hover:bg-primary/10 flex items-center justify-center text-muted-foreground hover:text-primary transition-colors"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </div>

      <motion.button
        onClick={scrollToAbout}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors cursor-pointer"
      >
        <span className="text-sm font-medium">Scroll to explore</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ArrowDown className="w-5 h-5" />
        </motion.div>
      </motion.button>
    </section>
  );
}
