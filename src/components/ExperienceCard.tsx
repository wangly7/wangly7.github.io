type ExperienceCardProps = {
    experience: {
        id: string;
        company: string;
        role: string;
        period: string;
        description: string [];
        tech: string [];
    };
};

export default function ExperienceCard({ experience }: ExperienceCardProps) {
  return (
    <article className="group grid gap-4 rounded-xl p-4 transition hover:bg-slate-100 md:grid-cols-[140px_1fr]">
      <p className="text-sm font-medium text-slate-500">
        {experience.period}
      </p>

      <div>
        <h3 className="text-lg font-semibold text-slate-900">
          {experience.role}
        </h3>

        <p className="mt-1 text-slate-600">{experience.company}</p>


      <ul className="mt-4 list-disc space-y-2 pl-5 text-[15px] leading-7 text-slate-600">
        {experience.description.map((item) => (
          <li key={item} className="pl-1">
            {item}
          </li>
        ))}
      </ul>
        

      <div className="mt-5 flex flex-wrap gap-2">
        {experience.tech.map((tech) => (
          <span
            key={tech}
            className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700 transition-colors group-hover:bg-white"
          >
            {tech}
          </span>
        ))}
      </div>
        
      </div>
    </article>
  );
}