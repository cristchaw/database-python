"use client";

import { useState } from "react";

import Sidebar from "./Sidebar";
import Content from "./Content";
import Progress from "./Progress";
import Footer from "@/components/layout/Footer";

import { Chapter } from "@/types/course";

interface LearnClientProps {
  chapters: Chapter[];
}

export default function LearnClient({
  chapters,
}: LearnClientProps) {
  const [activeChapterId, setActiveChapterId] = useState(
    chapters[0]?.id ?? 0
  );

  const activeChapter =
    chapters.find((chapter) => chapter.id === activeChapterId) ??
    chapters[0];

  return (
    <main className="flex min-h-screen flex-col lg:flex-row bg-zinc-950 text-white">
      <Sidebar
        chapters={chapters}
        activeChapterId={activeChapterId}
        onSelectChapter={setActiveChapterId}
      />

      <div className="flex flex-1 flex-col min-w-0">
        <header className="flex h-16 shrink-0 items-center justify-end border-b border-zinc-800 px-4 lg:px-8">
          <Progress
            current={activeChapterId}
            total={chapters.length}
          />
        </header>

        <div className="flex-1 min-w-0">
          {activeChapter && (
            <Content chapter={activeChapter} />
          )}
        </div>
      </div>
    </main>
  );
}