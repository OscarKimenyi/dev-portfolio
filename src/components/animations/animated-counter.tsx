"use client";

import { useEffect, useRef, useState } from "react";

interface AnimatedCounterProps {
  target: number;
  suffix?: string;
  duration?: number;
  className?: string;
}

export function AnimatedCounter({
  target,
  suffix = "",
  duration = 2,
  className = "",
}: AnimatedCounterProps) {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
            const startTime = Date.now();
            const endTime = startTime + duration * 1000;

            const updateCount = () => {
              const now = Date.now();
              const progress = Math.min((now - startTime) / (duration * 1000), 1);
              const easeOut = 1 - Math.pow(1 - progress, 3);
              const current = Math.round(easeOut * target);
              setCount(current);

              if (now < endTime) {
                requestAnimationFrame(updateCount);
              } else {
                setCount(target);
              }
            };

            requestAnimationFrame(updateCount);
          }
        });
      },
      { threshold: 0.1, rootMargin: "-50px" }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [hasAnimated, target, duration]);

  return (
    <span ref={ref} className={className}>
      {count}
      {suffix}
    </span>
  );
}