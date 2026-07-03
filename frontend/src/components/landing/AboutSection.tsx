"use client";

import { useState } from "react";

const tabs = [
  { id: "vision", label: "Vision" },
  { id: "system", label: "System Design" },
  { id: "profile", label: "Engineer Profile" },
];

export function AboutSection() {
  const [active, setActive] = useState("vision");

  return (
    <section
      id="about"
      className="relative px-6 py-28"
    >
      {/* subtle background glow */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.08),transparent_60%)]" />

      <div className="relative mx-auto max-w-5xl">
        {/* HEADER */}
        <div className="mb-12">
          <h2 className="text-4xl font-bold tracking-tight">
            About DBVerse
          </h2>

          <p className="mt-4 max-w-2xl text-zinc-400 leading-relaxed">
            A production-inspired learning environment that simulates how real
            backend systems are designed from database architecture, API design,
            to frontend integration.
          </p>
        </div>

        {/* TAB SWITCHER */}
        <div className="mb-8 flex gap-2 border-b border-zinc-800">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActive(tab.id)}
              className={`relative px-4 py-3 text-sm transition ${
                active === tab.id
                  ? "text-white"
                  : "text-zinc-500 hover:text-zinc-300"
              }`}
            >
              {tab.label}

              {active === tab.id && (
                <span className="absolute left-0 -bottom-[1px] h-[2px] w-full bg-cyan-400" />
              )}
            </button>
          ))}
        </div>

        {/* CONTENT */}
        <div className="grid gap-6 md:grid-cols-2">
          {/* VISION */}
          {active === "vision" && (
            <>
              <div className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6">
                <h3 className="text-lg font-semibold text-white">
                  Why DBVerse Exists
                </h3>

                <p className="mt-3 text-sm leading-6 text-zinc-400">
                  Most students learn databases in isolation SQL queries without
                  understanding how data actually flows in real applications.
                </p>

                <p className="mt-3 text-sm leading-6 text-zinc-400">
                  DBVerse bridges that gap by simulating a real system: data lives
                  in SQLite, is managed by FastAPI, and consumed by a modern React UI.
                </p>
              </div>

              <div className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6">
                <h3 className="text-lg font-semibold text-white">
                  Learning Philosophy
                </h3>

                <p className="mt-3 text-sm text-zinc-400 leading-6">
                  Learn by building systems, not memorizing syntax. Every concept
                  is tied to a working architecture.
                </p>

                <ul className="mt-4 space-y-2 text-sm text-zinc-500">
                  <li>• Database → API → UI flow</li>
                  <li>• Real CRUD lifecycle</li>
                  <li>• Production-like structure</li>
                </ul>
              </div>
            </>
          )}

          {/* SYSTEM DESIGN */}
          {active === "system" && (
            <>
              <div className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6 md:col-span-2">
                <h3 className="text-lg font-semibold text-white">
                  Architecture Overview
                </h3>

                <p className="mt-3 text-sm text-zinc-400">
                  DBVerse is designed as a full-stack system that mirrors real-world backend engineering patterns.
                </p>

                <div className="mt-6 grid gap-4 md:grid-cols-3">
                  {[
                    {
                      title: "Database Layer",
                      desc: "SQLite with SQLAlchemy ORM for structured data modeling",
                    },
                    {
                      title: "API Layer",
                      desc: "FastAPI services with clean separation (routes, services, schemas)",
                    },
                    {
                      title: "Frontend Layer",
                      desc: "Next.js reactive UI consuming RESTful APIs",
                    },
                  ].map((item) => (
                    <div
                      key={item.title}
                      className="rounded-xl border border-zinc-800 bg-zinc-950 p-4 hover:border-cyan-500/30 transition"
                    >
                      <h4 className="font-medium text-white">
                        {item.title}
                      </h4>
                      <p className="mt-2 text-sm text-zinc-500">
                        {item.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </>
          )}

          {/* PROFILE */}
          {active === "profile" && (
            <>
              <div className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6 md:col-span-2">
                <h3 className="text-lg font-semibold text-white">
                  Engineer Profile
                </h3>

                <p className="mt-3 text-sm text-zinc-400 leading-6">
                  Built by <span className="text-white font-medium">Abelfrost</span>,
                  a Computer Science student at <span className="text-white">President University</span>.
                </p>

                <p className="mt-3 text-sm text-zinc-400 leading-6">
                  Focused on backend systems, database engineering, and scalable
                  application architecture. Strong interest in how real systems are
                  designed beyond tutorials — from schema design to API orchestration.
                </p>

                <div className="mt-6 grid gap-4 md:grid-cols-3">
                  <div className="rounded-xl border border-zinc-800 bg-zinc-950 p-4">
                    <p className="text-xs text-zinc-500">
                      Focus Area
                    </p>
                    <p className="mt-1 text-sm text-white">
                      Backend Engineering
                    </p>
                  </div>

                  <div className="rounded-xl border border-zinc-800 bg-zinc-950 p-4">
                    <p className="text-xs text-zinc-500">
                      Stack
                    </p>
                    <p className="mt-1 text-sm text-white">
                      Python · FastAPI · SQL
                    </p>
                  </div>

                  <div className="rounded-xl border border-zinc-800 bg-zinc-950 p-4">
                    <p className="text-xs text-zinc-500">
                      Identity
                    </p>
                    <p className="mt-1 text-sm text-white">
                      Abelfrost
                    </p>
                  </div>
                </div>

                <div className="mt-6">
                  <a
                    href="https://instagram.com/crishabelw"
                    target="_blank"
                    className="text-cyan-400 text-sm hover:text-cyan-300 transition"
                  >
                    Connect on Instagram →
                  </a>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
}