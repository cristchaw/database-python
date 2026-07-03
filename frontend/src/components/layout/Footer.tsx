export default function Footer() {
  return (
    <footer className="shrink-0 border-t border-zinc-800 bg-zinc-950">
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-4 px-8 py-5 text-sm text-zinc-500 md:flex-row md:items-center">
        
        {/* Left */}
        <div className="space-y-1">
          <p className="font-semibold text-white">
            DBVerse
          </p>

          <p>
            Mastering Database System with Python
          </p>
        </div>

        {/* Right */}
        <div className="text-left md:text-right space-y-1">
          <p>
            Designed and engineered for database learning systems.
          </p>

          <p>
            © {new Date().getFullYear()} DBVerse. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}