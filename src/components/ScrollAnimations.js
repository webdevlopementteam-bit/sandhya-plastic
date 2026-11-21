"use client";

import { useEffect } from "react";

// Plays each [data-anim] element's entrance animation once, when it first scrolls into view.
export default function ScrollAnimations() {
  useEffect(() => {
    const elements = document.querySelectorAll("[data-anim]");
    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        const el = entry.target;
        el.classList.remove("anim");
        el.classList.add("animated", el.dataset.anim);
        observer.unobserve(el);
      }
    });
    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return null;
}
