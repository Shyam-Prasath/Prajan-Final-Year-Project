"use client";

import { contributors } from "@/app/api/data";
import Image from "next/image";
import { usePathname } from "next/navigation";

const Contributors = ({ showTitle = true }) => {
  const pathname = usePathname();

  return (
    <section className={`dark:bg-darkmode ${pathname === "/" ? "" : ""}`}>
      {showTitle && (
        <h2 className="text-center pb-12">என் தளபதி… என் Developers</h2>
      )}

      <div className="grid lg:grid-cols-5 sm:grid-cols-2 grid-cols-1 items-stretch gap-8 mx-7">
        {contributors.map((Contributor, index) => (
          <div
            key={Contributor.id}
            data-aos="fade-up"
            data-aos-delay={`${index * 300}`}
            data-aos-duration="1000"
            className={`col-span-1 group overflow-hidden ${
              index % 2 === 1 ? "lg:mt-28 mt-0" : ""
            }`}
          >
            <div
              className="
                relative overflow-hidden rounded-2xl
                aspect-[3/4]
                bg-gradient-to-br from-white/40 to-white/10
                dark:from-white/10 dark:to-white/5
                backdrop-blur-md
                ring-1 ring-black/5 dark:ring-white/10
                shadow-lg hover:shadow-2xl
                transition-all duration-500
              "
            >
              <Image
                src={Contributor.src}
                alt={Contributor.alt}
                fill
                quality={100}
                className="
                  object-cover
                  transition-transform duration-700 ease-out
                  group-hover:scale-110
                "
              />
              <div
                className="
                  absolute inset-0
                  bg-gradient-to-t from-black/40 via-transparent to-transparent
                  opacity-0 group-hover:opacity-100
                  transition-opacity duration-500
                "
              />
              {/*<div
                className="
                  absolute top-3 right-3
                  w-2 h-2 rounded-full
                  bg-emerald-400
                  shadow-[0_0_8px_rgba(52,211,153,0.9)]
                  opacity-80
                "
              /> */}
            </div>
            <div className="pt-6 text-center">
              <h6 className="text-[28px] leading-[2.25rem] font-bold text-secondary dark:text-white">
                {Contributor.name}
              </h6>
              <span className="text-lg font-normal text-SlateBlueText dark:text-opacity-80">
                {Contributor.designation}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Contributors;
