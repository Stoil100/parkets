// VideoSection.tsx
export default function VideoSection() {
  return (
    <section className="relative w-screen min-h-screen overflow-hidden bg-white">
      <div className="mx-auto w-full max-w-6xl px-6 md:px-10 lg:px-14 xl:px-20 py-12 md:py-16 lg:py-24">
        {/* Top copy */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold leading-tight tracking-tight text-neutral-900 max-w-md">
            Превръщаме пространствата
            <br />в съвършенство
          </h2>

          <p className="text-sm sm:text-base leading-relaxed text-neutral-700 max-w-md">
            Royal Decorators съчетава стил, прецизност и модерни технологии, за
            да придаде елегантност и характер на всеки дом, офис или търговски
            обект.
          </p>
        </div>

        {/* Large rounded media/card area */}
        <div className="mt-10 md:mt-12 lg:mt-14">
          <div className="rounded-3xl border border-neutral-300/70 shadow-[0_0_0_1px_rgba(0,0,0,0.02)_inset] bg-white/40 backdrop-blur-0">
            {/* Maintain generous height while staying responsive */}
            <div className="flex items-center justify-center text-center text-neutral-500 text-sm sm:text-base px-6 h-[46vh] md:h-[52vh] lg:h-[58vh]">
              Тук ще има видео, ще видя по-нататък как точно, ще го сглобим
            </div>
          </div>
        </div>
      </div>

      {/* Optional subtle page edge */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-neutral-200/60" />
    </section>
  );
}
