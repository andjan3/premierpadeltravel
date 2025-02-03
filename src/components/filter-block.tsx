"use client";

import { StandardForm } from "@/app/components/form/standard-form";
import useStore from "./lib/store";
import { render } from "storyblok-rich-text-react-renderer";

export const FilterBlock = ({ blok, lang, settings }: any) => {
  const { filter, setFilter } = useStore();
  const { filterId, setFilterId } = useStore();

  const { links } = blok;

  return (
    <div className="mb-16">
      <div className="mt-8 ">
        <h2 className="text-center text-[36px] font-bold">
          {lang === "sv" && "Resor och paket"}
          {lang === "en" && "Travel and packages"}
          {lang === "da" && "Rejser og pakker"}
        </h2>
      </div>

      <ul className="filter-block flex justify-center gap-4 mt-8">
        {links.map((el: any, i: number) => {
          return (
            <>
              <li key={i}>
                <button
                  className={
                    filter.title === `${el.link_title}`
                      ? "font-bold underline decoration-black underline-offset-4"
                      : ""
                  }
                  onClick={() => {
                    setFilter({
                      title: `${el.link_title}`,
                      _uid: `${el._uid}`,
                    });
                    setFilterId(`${el._uid}`);
                  }}
                >
                  {el.link_title}
                </button>
              </li>
              <div>|</div>
            </>
          );
        })}
      </ul>

      <div className="w-full">
        <div className="flex justify-center">
          {filter.title === "Alla resor" ? (
            <div className="w-[40%] text-center mt-8 text-[14px] leading-[22px]">
              {render(blok.content)}
            </div>
          ) : filter.title === "Padel resor" ? (
            <div className="w-[40%] text-center mt-8 text-[14px] leading-[22px]">
              {render(blok.content)}
            </div>
          ) : filter.title === "Flexibla resor" ||
            filter.title === "Flexible travel" ? (
            <div className="flex flex-col items-center">
              <div className="w-[40%] text-center mt-8 text-[14px] leading-[22px]">
                {render(blok.third_content)}
              </div>
              <div className="w-full h-[90vh] flex justify-center bg-[#f8f8f8] p-8 mt-20">
                <StandardForm lang={lang} settings={settings} />
              </div>
            </div>
          ) : (
            <div className="w-[40%] text-center mt-8 text-[14px] leading-[22px]">
              {render(blok.second_content)}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
