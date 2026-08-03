import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import SidebarNav from "@/components/SidebarNav";
import Image from "next/image";

type HeroProps = {
  profile: {
    name: string,
    title: string,
    description: string
  }
}


export default function Hero({ profile }: HeroProps) {
  return (
    <header>
      <h1 className="text-5xl font-bold tracking-tight text-slate-900">
        {profile.name}
      </h1>

      <h2 className="mt-3 text-xl font-medium text-slate-700">
        {profile.title}
      </h2>

      <p className="mt-4 max-w-sm leading-relaxed text-slate-600">
        {profile.description}
      </p>

    <div className="mt-6">
      <Image
        src="/profile.png"
        alt="Liangyuan Wang"
        width={140}
        height={140}
        className="rounded-full object-cover shadow-lg"
      />
    </div>

      <SidebarNav />

    <div className="mt-16 flex gap-5 text-2xl text-slate-500">
      <a
        href="https://github.com/wangly7"
        target="_blank"
        rel="noreferrer"
        className="transition hover:text-slate-900"
      >
        <FaGithub />
      </a>

      <a
        href="https://www.linkedin.com/in/wangly07/"
        target="_blank"
        rel="noreferrer"
        className="transition hover:text-slate-900"
      >
        <FaLinkedin />
      </a>

      <a
        href="https://www.instagram.com/wleungy/"
        target="_blank"
        rel="noreferrer"
        className="transition hover:text-slate-900"
      >
        <FaInstagram />
      </a>

      <a
        href="mailto:wangleungy77@gmail.com"
        className="transition hover:text-slate-900"
      >
        <MdEmail />
      </a>
    </div>
    </header>
  );
}

