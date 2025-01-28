"use client";

import { NewsLetterForm } from "@/app/components/form/news-letter-form";
import Image from "next/image";

export const LogoBlock = ({ blok }: any) => {
  const { title, logo_block } = blok;
  return (
    <div className="mt-20">
      <NewsLetterForm />
      <h2 className="text-center mt-20">{title}</h2>
      <div className="flex justify-center items-center gap-4">
        {logo_block.map((el: any) => {
          return (
            <div key={el.img.filename} className="relative w-[250px] h-[140px]">
              <Image
                src={el.img.filename}
                layout="fill"
                objectFit="contain"
                alt={el.img.alt}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};
