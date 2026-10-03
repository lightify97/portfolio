import { marquee } from "@/data/profile";
import { Fragment } from "react";

export default function Marquee() {
  // Two identical copies so the loop is seamless at -50%.
  const items = [...marquee, ...marquee];
  return (
    <div aria-hidden className="marquee overflow-hidden border-y border-line py-5 sm:py-7">
      <div className="marquee-track flex w-max items-center">
        {items.map((item, i) => (
          <Fragment key={i}>
            <span
              className={`whitespace-nowrap px-6 text-4xl font-bold tracking-[-0.03em] sm:px-8 sm:text-6xl ${i % 2 ? "outline-text" : ""}`}
            >
              {item}
            </span>
            <span className="text-2xl text-accent sm:text-4xl">✳</span>
          </Fragment>
        ))}
      </div>
    </div>
  );
}
