"use client";

import Image from "next/image";
import { useState } from "react";

export const Gallery = ({ images }: any) => {
  const [visibleImages, setVisibleImages] = useState(4);
  const [loading, setLoading] = useState(false);

  const handleLoadMore = async () => {
    setLoading(true);

    setTimeout(() => {
      setVisibleImages((prev) => prev + 4);
      setLoading(false);
    }, 1000);
  };

  return (
    <div>
      <div className="flex justify-center mt-24 mr-auto">
        <div className="grid grid-cols-4 gap-2 max-w-[100%]">
          {images.slice(0, visibleImages).map((el: any, index: number) => {
            return (
              <div key={index} className="!w-[20vw] h-[50vh] relative">
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

      {visibleImages < images.length && (
        <div className="flex justify-center mt-6">
          <button
            className="button-rounded"
            onClick={handleLoadMore}
            disabled={loading}
          >
            {loading ? "Laddar..." : "Ladda fler"}{" "}
          </button>
        </div>
      )}
    </div>
  );
};
