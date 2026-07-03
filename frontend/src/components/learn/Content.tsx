"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

import { Chapter } from "@/types/course";
import BlockRenderer from "./BlockRenderer";

interface ContentProps {
  chapter: Chapter;
}

export default function Content({
  chapter,
}: ContentProps) {
  const contentRef = useRef<HTMLElement>(null);

  useEffect(() => {
    contentRef.current?.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [chapter.id]);

  return (
    <motion.section
      ref={contentRef}
      key={chapter.id}
      className="flex-1 overflow-y-auto px-5 py-8 sm:px-8 lg:p-10"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35 }}
    >
      <span className="text-sm font-medium text-cyan-400">
        Chapter {chapter.id}
      </span>

      <h1 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
        {chapter.title}
      </h1>

      <div className="mt-8 space-y-10">
        {chapter.blocks.map((block) => (
          <BlockRenderer
            key={block.id}
            block={block}
          />
        ))}
      </div>
    </motion.section>
  );
}