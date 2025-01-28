"use client";

import Image from "next/image";
import { render } from "storyblok-rich-text-react-renderer";

export const Card = ({ content }: any) => {
  return (
    <div
      className={`${
        content.length > 0
          ? "grid grid-cols-1 lg:grid-cols-2 gap-10 mb-16"
          : "invisible"
      }`}
    >
      {content.map((el: any) => {
        const hasBulletList = el.content?.content?.[0]?.type === "bullet_list";

        return (
          <div className="flex flex-row gap-4 bg-white rounded shadow-lg h-[44vh]">
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
              className={` flex flex-col gap-2 p-4 w-[50%] ${
                !hasBulletList && "items-center justify-center"
              }`}
            >
              <h3
                className={`${
                  hasBulletList ? "text-xl font-semibold" : "text-[38px]"
                }`}
              >
                {el.title}
              </h3>

              <h4 className="text-lg font-light">{el.price}</h4>
              <div className="card-content text-sm text-gray-700">
                {render(el.content)}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
