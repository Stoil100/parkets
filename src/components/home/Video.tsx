interface VideoSectionProps {
    t: (key: string) => string;
}
export default function VideoSection({ t }: VideoSectionProps) {
    return (
        <section className="relative w-screen md:min-h-screen overflow-hidden">
            <div className="mx-auto w-full max-w-6xl px-6 md:px-10 lg:px-14 xl:px-20 py-4 md:py-16 lg:py-24">
                {/* Top copy */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-10">
                    <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold leading-tight tracking-tight text-neutral-900 max-w-md">
                        {t('title.beginning')} <br /> {t('title.end')}
                    </h1>

                    <p className="text-sm sm:text-base leading-relaxed text-neutral-700 max-w-md">
                        {t('description')}
                    </p>
                </div>

                {/* Large rounded media/card area */}
                <div className="mt-6 md:mt-12 lg:mt-14">
                    <div className="rounded-3xl border border-neutral-300/70 shadow-[0_0_0_1px_rgba(0,0,0,0.02)_inset] bg-white/40 backdrop-blur-0">
                        {/* Maintain generous height while staying responsive */}
                        <div className="flex items-center justify-center text-center text-neutral-500 text-sm sm:text-base md:px-6 h-[46vh] md:h-[52vh] lg:h-[58vh]">
                            <video
                                src="/videos/test.mp4"
                                autoPlay
                                muted
                                loop
                                playsInline
                                className="w-full h-full object-cover rounded-xl"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
