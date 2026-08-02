import { experiences } from "@/data/experience";
import ExperienceCard from "@/components/ExperienceCard"

export default function Experience() {
  return (
    <section id="experience" className="mb-24">
      <h2 className="mb-8 text-2xl font-bold text-slate-900">
        Experience
      </h2>

      <div className="space-y-4">
        {experiences.map((experience) => (
          <ExperienceCard key={experience.id} experience={experience} />
        ))}
      </div>
    </section>
  );
}