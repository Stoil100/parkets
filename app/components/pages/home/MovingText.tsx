import React from "react";

const text =
  "Royal Decorators · Прецизност · Стил · Съвършенство · Епоксидни настилки · Декоративни мазилки · Хидроизолация · Интериорни решения ·";

export default function MovingTextSection() {
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
