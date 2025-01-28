"use client";

import Image from "next/image";
import { render } from "storyblok-rich-text-react-renderer";
import useStore from "./lib/store";
import Link from "next/link";
import { StandardForm } from "@/app/components/form/standard-form";

export const FilterPackage = ({ blok, resor }: any) => {
  console.log(blok);
  const { filter } = useStore();

  const filteredResor = (() => {
    switch (filter) {
      case "Padel resor":
        return resor.filter(
          (el: any) =>
            el.content.category.includes("padel-resor") &&
            blok.title === "Resmål"
        );
      case "Tournament resor":
        return resor.filter(
          (el: any) =>
            el.content.category.includes("tournament-resor") &&
            blok.title === "Premier padel resor"
        );
      case "Flexibla resor":
        return resor.filter((el: any) =>
          el.content.category.includes("flexibla-resor")
        );
      case "Alla resor":
      default:
        return resor;
    }
  })();

  return (
    <div>
      <div className={`w-[90%] m-auto ${blok.smaller_cards && "mb-24"}`}>
        <h2
          className={`${
            blok.smaller_cards ? "-mt-20 text-center mb-16" : "mt-16"
          }`}
        >
          {(filter === "Tournament resor" &&
            blok.title !== "Premier padel resor") ||
          (filter === "Padel resor" && blok.title !== "Resmål") ||
          filter === "Flexibla resor"
            ? null
            : blok.title}
        </h2>
        <div
          className={`w-[100%] grid grid-cols-1  gap-6 mt-4 ${
            blok.smaller_cards ? "lg:grid-cols-4" : "lg:grid-cols-3"
          }`}
        >
          {filteredResor.map(
            (el: any, index: number) =>
              blok.package.includes(el.uuid) && (
                <Link href={`${el.full_slug}`}>
                  <div key={index}>
                    <div className="bg-white rounded-lg shadow-lg">
                      <div
                        className={`relative ${
                          blok.smaller_cards
                            ? "w-[21.1vw] h-[34vh]"
                            : "w-[28.6vw] h-[44vh]"
                        } overflow-hidden`}
                      >
                        {el.content.future_image.filename !== "" && (
                          <Image
                            src={el.content.future_image.filename}
                            alt=""
                            fill
                            className="object-cover transition-transform duration-500 ease-in-out transform hover:scale-110"
                          />
                        )}
                      </div>

                      <div className="p-4 min-h-[360px] mt-2 flex flex-col gap-2">
                        <div className="text-[#004e70] text-[11px] font-bold !text-center">
                          {el.content.position}
                        </div>
                        <h2 className="text-xl text-black !text-[18px] font-bold text-center">
                          {el.content.heading}
                        </h2>
                        <div className="text-[#004e70] text-center text-[12px]">
                          {el.content.date}
                        </div>
                        <div className="package-content mt-2">
                          {render(el.content.future_content)}
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              )
          )}
        </div>
      </div>
    </div>
  );
};
