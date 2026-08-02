"use client";

import { useEffect, useState } from "react";

const navItems = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
];

export default function SidebarNav() {
  const [activeSection, setActiveSection] = useState("about");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-40% 0px -50% 0px",
      }
    );

    navItems.forEach((item) => {
      const section = document.getElementById(item.id);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <nav className="mt-16 space-y-4">
      {navItems.map((item) => {
        const isActive = activeSection === item.id;

        return (
          <a
            key={item.id}
            href={`#${item.id}`}
            className={`group flex items-center gap-4 text-sm font-bold uppercase tracking-widest transition ${
              isActive ? "text-slate-900" : "text-slate-500 hover:text-slate-900"
            }`}
          >
            <span
              className={`h-px transition-all ${
                isActive
                  ? "w-16 bg-slate-900"
                  : "w-8 bg-slate-400 group-hover:w-16 group-hover:bg-slate-900"
              }`}
            />
            <span>{item.label}</span>
          </a>
        );
      })}
    </nav>
  );
}