"use client";

import Image from "next/image";
import { render } from "storyblok-rich-text-react-renderer";
import useStore from "./lib/store";
import Link from "next/link";

export const FilterPackage = ({ blok, resor }: any) => {
  const { filter } = useStore();

  const filteredResor = (() => {
    switch (filter) {
      case "Padel resor":
      case "Padel travel":
        return resor.filter(
          (el: any) =>
            el.content.category.includes("padel-resor") &&
            (blok.title === "Resmål" ||
              blok.title === "Destination" ||
              blok.title === "Bestemmelsessted")
        );
      case "Tournament resor":
      case "Tournament travel":
      case "Turneringsresort":
        return resor.filter(
          (el: any) =>
            el.content.category.includes("tournament-resor") &&
            (blok.title === "Premier padel resor" ||
              blok.title === "Premier padel trips" ||
              "Premier padel ture")
        );
      case "Flexibla resor":
      case "Flexible travel":
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
            blok.smaller_cards && "!-mt-28 lg:!-mt-20 text-center lg:mb-16 "
          } ${filter === "Tournament resor" ? "mt-0" : "mt-16"}`}
        >
          {(filter === "Tournament resor" &&
            blok.title !== "Premier padel resor") ||
          (filter === "Padel resor" && blok.title !== "Resmål") ||
          filter === "Flexibla resor" ||
          filter === "Turneringsresort"
            ? null
            : blok.title}
        </h2>
        <div
          className={`w-[100%] grid grid-cols-1 gap-6 mt-4 ${
            blok.smaller_cards ? "lg:grid-cols-4" : "lg:grid-cols-3"
          } ${filter === "Padel resor" && "-mb-[2rem]"}`}
        >
          {filteredResor.map(
            (el: any) =>
              blok.package.includes(el.uuid) && (
                <Link
                  href={`/${el.full_slug.replace(/^(da|en)\//, "")}`}
                  key={el.uuid}
                >
                  <div>
                    <div className="bg-white rounded-lg shadow-lg">
                      <div
                        className={`relative ${
                          blok.smaller_cards
                            ? "lg:w-[21.1vw] h-[34vh]"
                            : "lg:w-[28.6vw] h-[44vh]"
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
