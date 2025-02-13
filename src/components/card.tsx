"use client";

import Image from "next/image";
import { render } from "storyblok-rich-text-react-renderer";
import { IoIosArrowDown } from "react-icons/io";
import { useState } from "react";

export const Card = ({ content }: any) => {
  const [openStates, setOpenStates] = useState<{ [key: string]: boolean }>({});

  const handleOpen = (index: number) => {
    setOpenStates((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };

  return (
    <div>
      <div className="w-[50%]">{render(content.content)}</div>
      <div
        className={`${
          content.card?.length > 0
            ? "grid grid-cols-1 lg:grid-cols-2 gap-10 mb-16"
            : "invisible"
        }`}
      >
        {content?.card?.map((el: any, index: number) => {
          const hasBulletList =
            el.content?.content?.[0]?.type === "bullet_list";

          return (
            <div
              key={el.title}
              className={`flex flex-row gap-4 bg-white rounded shadow-lg ${
                openStates[index] ? "h-[65vh]" : "h-[48vh]"
              }`}
            >
              <div className="w-[50%]">
                <Image
                  src={el.img.filename}
                  alt={el.img.alt}
                  className="w-full h-full object-cover rounded"
                  width={400}
                  height={300}
                />
              </div>
              <div
                className={`flex flex-col gap-2 p-4 w-[50%] ${
                  !hasBulletList && "items-center justify-center"
                }`}
              >
                <h3
                  className={`${
                    hasBulletList ? "text-xl font-semibold" : "text-[30px]"
                  }`}
                >
                  {el.title}
                </h3>

                <h4 className="text-lg font-light">{el.price}</h4>
                <div className="card-content text-sm text-gray-700">
                  {render(el.content)}

                  {el.second_content?.content[0].content?.length > 0 && (
                    <>
                      <div
                        className="text-[14px] cursor-pointer"
                        onClick={() => handleOpen(index)}
                      >
                        {el.second_content && (
                          <div
                            className={`${
                              openStates[index] ? "-mt-4" : "hidden"
                            }`}
                          >
                            {render(el.second_content)}
                          </div>
                        )}
                        <div className="flex items-end mt-6">
                          {openStates[index] ? "Läs mindre" : "Läs mer"}
                          <IoIosArrowDown
                            fontSize={20}
                            className={`pt-1 ml-2 ${
                              openStates[index] && "rotate-180"
                            }`}
                          />
                        </div>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
