import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import About from "@/components/About";
import Projects from "@/components/Projects";
import { profile } from "@/data/profile";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <div className="mx-auto max-w-6xl px-8 py-20 lg:flex lg:gap-24">
        <aside className="lg:sticky lg:top-20 lg:h-fit lg:w-2/5">
          <Hero profile={profile} />
        </aside>

        <div className="mt-16 lg:mt-0 lg:w-3/5">
          <About />
          <Experience />
          <Projects />
        </div>
      </div>
    </main>
  );
}