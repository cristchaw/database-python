"use client";

import { Chapter } from "@/types/course";

interface SidebarProps {
  chapters: Chapter[];
  activeChapterId: number;
  onSelectChapter: (id: number) => void;
}

export default function Sidebar({
  chapters,
  activeChapterId,
  onSelectChapter,
}: SidebarProps) {
  return (
    <>
      {/* Mobile */}
      <div className="border-b border-zinc-800 bg-zinc-950 p-4 lg:hidden">
        <label className="mb-2 block text-sm font-medium text-zinc-400">
          Chapter
        </label>

        <select
          value={activeChapterId}
          onChange={(e) => onSelectChapter(Number(e.target.value))}
          className="w-full rounded-xl border border-zinc-700 bg-zinc-900 px-4 py-3 text-white outline-none transition focus:border-cyan-500"
        >
          {chapters.map((chapter) => (
            <option key={chapter.id} value={chapter.id}>
              {chapter.icon} {chapter.title}
            </option>
          ))}
        </select>
      </div>

      {/* Desktop */}
      <aside className="hidden lg:flex lg:w-80 lg:flex-col bg-zinc-950 border-r border-zinc-800 min-h-screen">
        {/* Header */}
        <div className="border-b border-zinc-800 p-6">
          <h1 className="text-2xl font-bold text-white">DBVerse</h1>
          <p className="mt-2 text-sm text-zinc-400">
            Mastering Database System with Python
          </p>
        </div>

        {/* Nav */}
        <nav className="flex-1 space-y-2 p-4 overflow-y-auto">
          {chapters.map((chapter) => (
            <button
              key={chapter.id}
              onClick={() => onSelectChapter(chapter.id)}
              className={`flex w-full items-center gap-3 rounded-xl px-4 py-3 text-left transition-all ${
                activeChapterId === chapter.id
                  ? "bg-cyan-500 font-semibold text-black"
                  : "text-zinc-400 hover:bg-zinc-900 hover:text-white"
              }`}
            >
              <span className="text-lg">{chapter.icon}</span>
              <span>{chapter.title}</span>
            </button>
          ))}
        </nav>
      </aside>
    </>
  );
}