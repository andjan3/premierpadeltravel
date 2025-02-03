/* "use client";

import Image from "next/image";
import { render } from "storyblok-rich-text-react-renderer";
import useStore from "./lib/store";
import Link from "next/link";

export const FilterPackage = ({ blok, resor }: any) => {
  const { filter, filterId } = useStore();

  console.log("blook", blok);

  const filteredResor = () => {
    if (filter._uid === "cef9cdaf-8c07-4ef0-8bbd-7a16e45bd996") {
      const result = resor.filter((el: any) =>
        el.content.category.includes("alla-resor")
      );
      return result;
    }
    if (filter._uid === "b95d98bd-8ce3-4068-8b54-99484c13e215") {
      if (blok._uid === "efd7c811-d965-42cf-b108-318cbbfa0f3d") {
        const result = resor.filter((el: any) =>
          el.content.category.includes("padel-resor")
        );
        return result;
      }
    }

    if (filter._uid === "747f8472-24b1-45cb-8c4b-25dfc5ea9a73") {
      const result = resor.filter((el: any) =>
        el.content.category.includes("tournament-resor")
      );
      return result;
    } else {
      const result = resor.filter((el: any) =>
        el.content.category.includes("flexibla-resor")
      );
      return result;
    }
  };

  const filteredResult = filteredResor();

  return (
    <div>
      <div className={`w-[90%] m-auto ${blok.smaller_cards && "mb-24"}`}>
        <h2
          className={`${
            blok.smaller_cards && "!-mt-28 lg:!-mt-20 text-center lg:mb-16 "
          } `}
        >
          {blok.title}
        </h2>
        <div
          className={`w-[100%] grid grid-cols-1 gap-6 mt-4 ${
            blok.smaller_cards ? "lg:grid-cols-4" : "lg:grid-cols-3"
          } `}
        >
          {filteredResult.map(
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
 */

"use client";
import Image from "next/image";
import { render } from "storyblok-rich-text-react-renderer";

import Link from "next/link";
import { useState } from "react";
export const Filter = ({ blok, resor }: any) => {
  const [filter, setFilter] = useState("alla");
  const [filterContent, setFilterContent] = useState("alla");
  const handleFilter = (data: string) => {
    setFilter(data);
    setFilterContent(data);
  };

  const filteredTitles = blok.filter_links.filter((el: any) => {
    if (filter === "alla") {
      return el;
    } else {
      return el.link_title.includes(filter);
    }
  });

  const filteredContent = blok.filter_links.filter((el: any) => {
    if (filter === "") {
      return el;
    } else {
      return el.link_title.includes(filterContent);
    }
  });
  console.log(filterContent);
  return (
    <div className="mt-20">
      <h2 className="text-center text-[36px] font-bold mb-10 ">{blok.title}</h2>
      <div className="flex justify-center gap-4">
        <button
          className={
            filter === "alla"
              ? "font-bold underline decoration-black underline-offset-4"
              : ""
          }
          onClick={() => handleFilter("alla")}
        >
          Alla resor
        </button>
        <div>|</div>
        {blok.filter_links.map(
          (el: any) =>
            el.title && (
              <>
                <button
                  key={el.link_title}
                  onClick={() => handleFilter(el.link_title)}
                  className={
                    filter === `${el.link_title}`
                      ? "font-bold underline decoration-black underline-offset-4"
                      : ""
                  }
                >
                  {el.title}
                </button>
                <div>|</div>
              </>
            )
        )}
      </div>
      <div className="w-[100%] flex justify-center text-center mt-8 text-[14px] leading-[22px]">
        {filteredContent.map((el: any) => {
          return <div className="w-[40%]">{el.content}</div>;
        })}
      </div>
      <div>
        {filteredTitles.map((el: any) => {
          return (
            <div key={el.section_title}>
              <div className="w-[90%] mx-auto">
                <h2>{el.section_title}</h2>
              </div>
              <div
                className={`w-[90%] mx-auto grid grid-cols-1 gap-6 mt-4 ${
                  blok.smaller_cards ? "lg:grid-cols-4" : "lg:grid-cols-3"
                } `}
              >
                {resor
                  .filter(
                    (item: any) =>
                      filter === "alla" ||
                      item.content.category.includes(filter)
                  )
                  .filter((item: any) =>
                    item.content.category.includes(el.link_title)
                  )
                  .map((item: any, index: number) => (
                    <Link
                      href={`/${item.full_slug.replace(/^(da|en)\//, "")}`}
                      key={item.uuid}
                    >
                      <div>
                        <div className="bg-white rounded-lg shadow-lg">
                          <div
                            className={`relative  ${
                              blok.smaller_cards
                                ? "lg:w-[21.1vw] h-[34vh]"
                                : "lg:w-[28.6vw] h-[44vh]"
                            } overflow-hidden`}
                          >
                            {item.content.future_image.filename !== "" && (
                              <Image
                                src={item.content.future_image.filename}
                                alt=""
                                fill
                                className="object-cover transition-transform duration-500 ease-in-out transform hover:scale-110"
                              />
                            )}
                          </div>

                          <div className="p-4 min-h-[360px] mt-2 flex flex-col gap-2">
                            <div className="text-[#004e70] text-[11px] font-bold !text-center">
                              {item.content.position}
                            </div>
                            <h2 className="text-xl text-black !text-[18px] font-bold text-center">
                              {item.content.heading}
                            </h2>
                            <div className="text-[#004e70] text-center text-[12px]">
                              {item.content.date}
                            </div>
                            <div className="package-content mt-2">
                              {render(item.content.future_content)}
                            </div>
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
