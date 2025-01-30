"use client";

import { StandardForm } from "@/app/components/form/standard-form";
import useStore from "./lib/store";
import { render } from "storyblok-rich-text-react-renderer";

export const FilterBlock = ({ blok }: any) => {
  const { filter, setFilter } = useStore();

  const { links } = blok;

  return (
    <div className="mb-16">
      <div className="mt-8 ">
        <h2 className="text-center text-[36px] font-bold">Resor och paket</h2>
      </div>

      <ul className="filter-block flex justify-center gap-4 mt-8">
        {links.map((el: any, i: number) => {
          return (
            <>
              <li key={i}>
                <button
                  className={
                    filter === `${el.link_title}`
                      ? "font-bold underline decoration-black underline-offset-4"
                      : ""
                  }
                  onClick={() => setFilter(`${el.link_title}`)}
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
          {filter === "Alla resor" ? (
            <div className="w-[40%] text-center mt-8 text-[14px] leading-[22px]">
              {render(blok.content)}
            </div>
          ) : filter === "Padel resor" ? (
            <div className="w-[40%] text-center mt-8 text-[14px] leading-[22px]">
              {render(blok.content)}
            </div>
          ) : filter === "Flexibla resor" || filter === "Flexible travel" ? (
            <div className="flex flex-col items-center">
              <div className="w-[40%] text-center mt-8 text-[14px] leading-[22px]">
                {render(blok.third_content)}
              </div>
              <div className="w-full h-[90vh] flex justify-center bg-[#f8f8f8] p-8 mt-20">
                <StandardForm />
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
