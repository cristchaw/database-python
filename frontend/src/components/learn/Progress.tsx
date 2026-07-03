interface ProgressProps {
  current: number;
  total: number;
}

export default function Progress({
  current,
  total,
}: ProgressProps) {
  const percentage =
    total > 0 ? Math.round((current / total) * 100) : 0;

  return (
    <div className="flex items-center justify-between gap-4 sm:gap-6">
      {/* Text */}
      <div className="min-w-0">
        <p className="text-[10px] sm:text-xs font-medium uppercase tracking-wider text-zinc-500">
          Learning Progress
        </p>

        <p className="text-xs sm:text-sm font-medium text-white leading-tight">
          Chapter {current} of {total}
        </p>
      </div>

      {/* Progress */}
      <div className="w-28 sm:w-52 flex-shrink-0">
        <div className="mb-1 flex justify-end text-[10px] sm:text-xs text-zinc-500">
          <span>{percentage}%</span>
        </div>

        <div className="h-1.5 sm:h-2 overflow-hidden rounded-full bg-zinc-800">
          <div
            className="h-full rounded-full bg-cyan-400 transition-all duration-500"
            style={{ width: `${percentage}%` }}
          />
        </div>
      </div>
    </div>
  );
}