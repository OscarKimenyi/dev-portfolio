"use client";

import { motion } from "framer-motion";
import {
  Globe,
  Smartphone,
  Cloud,
  Plug,
  Brain,
  Building2,
  ArrowUpRight,
  Check,
} from "lucide-react";
import { services } from "@/data/portfolio";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/animations/fade-in";
import { useState } from "react";

const iconMap: Record<string, React.ElementType> = {
  Globe,
  Smartphone,
  Cloud,
  Plug,
  Brain,
  Building2,
};

export function Services() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <section id="services" className="py-24 lg:py-32 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-purple-500/5 to-transparent pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <FadeIn direction="up">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              What I Offer
            </div>
          </FadeIn>

          <FadeIn direction="up" delay={0.1}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              Services & <span className="gradient-text">Solutions</span>
            </h2>
          </FadeIn>

          <FadeIn direction="up" delay={0.2}>
            <p className="text-lg text-muted-foreground">
              End-to-end development services for businesses looking to build
              scalable, modern software solutions.
            </p>
          </FadeIn>
        </div>

        <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = iconMap[service.icon] || Globe;
            const isHovered = hoveredId === service.id;

            return (
              <StaggerItem key={service.id}>
                <motion.div
                  onMouseEnter={() => setHoveredId(service.id)}
                  onMouseLeave={() => setHoveredId(null)}
                  whileHover={{ y: -8 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className={`relative p-6 sm:p-8 rounded-2xl border transition-all duration-300 ${
                    isHovered
                      ? "border-primary/30 bg-primary/5 shadow-xl shadow-primary/10"
                      : "border-border bg-card hover:border-primary/20"
                  }`}
                >
                  <motion.div
                    animate={{
                      scale: isHovered ? 1.1 : 1,
                      rotate: isHovered ? 5 : 0,
                    }}
                    className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 ${
                      isHovered ? "bg-primary" : "bg-primary/10"
                    } transition-colors duration-300`}
                  >
                    <Icon
                      className={`w-7 h-7 ${
                        isHovered ? "text-primary-foreground" : "text-primary"
                      } transition-colors duration-300`}
                    />
                  </motion.div>

                  <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                    {service.description}
                  </p>

                  <ul className="space-y-2">
                    {service.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center gap-2 text-sm text-muted-foreground"
                      >
                        <Check className="w-4 h-4 text-primary shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    animate={{
                      opacity: isHovered ? 1 : 0,
                      x: isHovered ? 0 : -10,
                    }}
                    className="absolute top-6 right-6"
                  >
                    <ArrowUpRight className="w-5 h-5 text-primary" />
                  </motion.div>
                </motion.div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>

        <FadeIn direction="up" delay={0.4} className="text-center mt-16">
          <motion.a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-xl font-semibold text-lg shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-shadow"
          >
            Start a Project
            <ArrowUpRight className="w-5 h-5" />
          </motion.a>
        </FadeIn>
      </div>
    </section>
  );
}
