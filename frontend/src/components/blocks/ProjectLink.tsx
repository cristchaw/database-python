"use client";

import Link from "next/link";

interface Props {
  title: string;
  description: string;
  buttonText: string;
  href: string;
}

export default function ProjectLink({
  title,
  description,
  buttonText,
  href,
}: Props) {
  return (
    <section className="rounded-3xl border border-cyan-500/20 bg-gradient-to-br from-cyan-500/10 via-zinc-900 to-zinc-950 p-10">
      <h2 className="text-3xl font-bold">
        {title}
      </h2>

      <p className="mt-4 max-w-2xl text-zinc-400 leading-8">
        {description}
      </p>

      <Link
        href={href}
        className="mt-8 inline-flex rounded-xl bg-cyan-400 px-6 py-3 font-semibold text-black transition hover:scale-105"
      >
        {buttonText}
      </Link>
    </section>
  );
}