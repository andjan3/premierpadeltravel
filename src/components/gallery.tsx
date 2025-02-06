"use client";
import Image from "next/image";

export const Gallery = ({ images }: any) => {
  return (
    <div className="flex justify-center mt-16 mr-auto">
      <div className="grid grid-cols-4 gap-4 max-w-[100%]">
        {images.map((el: any, index: number) => {
          return (
            <div key={index} className="!w-[20vw] h-[45vh] relative">
              <Image
                src={el.img.filename}
                layout="fill"
                className="object-cover"
                alt={el.img.alt}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};
