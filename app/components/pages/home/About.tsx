// components/AboutDecoratorsSection.tsx
import React from "react";
import { Link } from "~/components/global/Link";

export default function AboutSection() {
  return (
    <section className="w-full bg-white py-12 md:py-16">
      <div className="mx-auto max-w-5xl px-4 flex flex-col gap-6">
        <h2 className="text-3xl md:text-4xl font-extrabold text-black leading-tight">
          Експерти в декоративните и подови решения
        </h2>
        <div className="flex flex-col gap-4 text-base leading-relaxed text-gray-700">
          <p>
            <span className="font-semibold text-golden">Royal Decorators</span>{" "}
            е българска компания, специализирана в{" "}
            <span className="text-golden underline-offset-2 hover:underline cursor-pointer">
              епоксидни настилки
            </span>
            ,{" "}
            <span className="text-golden underline-offset-2 hover:underline cursor-pointer">
              декоративни мазилки
            </span>
            ,{" "}
            <span className="text-golden underline-offset-2 hover:underline cursor-pointer">
              хидроизолации
            </span>{" "}
            и{" "}
            <span className="text-golden underline-offset-2 hover:underline cursor-pointer">
              интериорно боядисване
            </span>
            . Нашият екип от професионалисти съчетава прецизност, стил и
            дългогодишен опит, за да превърне всяко пространство в съвършено
            завършен детайл.
          </p>
          <p>
            Използваме само{" "}
            <span className="text-golden underline-offset-2 hover:underline cursor-pointer">
              висококачествени материали
            </span>
            и{" "}
            <span className="text-golden underline-offset-2 hover:underline cursor-pointer">
              иновативни техники
            </span>
            , които осигуряват дълготрайност, естетика и лесна поддръжка —
            независимо дали става дума за дом, офис или индустриален обект.
          </p>
          <p className="italic text-gray-600">
            <span className="font-semibold text-golden">Royal Decorators</span>{" "}
            създава повърхности, които впечатляват – с безупречно изпълнение и
            елегантно присъствие във всеки проект.
          </p>
        </div>
        <Link
          href="/about"
          className="text-golden font-medium text-lg inline-flex items-center gap-2 hover:underline underline-offset-4"
        >
          Научете повече за нас
          <span className="text-xl">→</span>
        </Link>
      </div>
    </section>
  );
}
