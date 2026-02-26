interface MovingTextSectionProps {
    t: (key: string) => string;
}
export default function MovingTextSection({ t }: MovingTextSectionProps) {
    const text = `Royal Decorators | ${t('MovingText')} • Royal Decorators | ${t('MovingText')} • `;

    return (
        <div className="overflow-hidden py-10">
            <div className="marquee-track">
                <span className="marquee-item">{text}</span>
                <div className="w-8" />
                <span className="marquee-item" aria-hidden="true">
                    {text}
                </span>
            </div>
        </div>
    );
}
