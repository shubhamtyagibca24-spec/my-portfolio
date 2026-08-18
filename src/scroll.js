import { useEffect } from "react";

/**
 * Fades + slides elements in as they scroll into view.
 * Works by toggling an "in-view" class that the CSS transitions on —
 * see the "SCROLL REVEAL" section in App.css.
 */
export default function useScrollReveal() {
  useEffect(() => {
    // groups get their own stagger timing so lists (skills, projects...)
    // reveal one after another instead of all at once
    const groups = [
      { selector: ".section-title", stagger: 0 },
      { selector: ".about-container", stagger: 0 },
      { selector: ".skill-card", stagger: 50 },
      { selector: ".project-card", stagger: 110 },
      { selector: ".education-card", stagger: 110 },
      { selector: ".contact-icon", stagger: 70 },
    ];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -60px 0px" }
    );

    groups.forEach(({ selector, stagger }) => {
      document.querySelectorAll(selector).forEach((el, i) => {
        el.style.transitionDelay = `${i * stagger}ms`;
        observer.observe(el);
      });
    });

    return () => observer.disconnect();
  }, []);
}