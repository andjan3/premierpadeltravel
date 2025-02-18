import Image from "next/image";
import { render } from "storyblok-rich-text-react-renderer";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import { useState } from "react";

interface PackageImageBlockProps {
  el: {
    subtitle: string;
    image: {
      filename: string;
      alt: string;
    };

    video: boolean;
    image_right: boolean;
    second_image: {
      filename: string;
      alt: string;
    };

    third_image: {
      filename: string;
      alt: string;
    };

    content: React.ReactNode[];
    dropdown_content: React.ReactNode[];
    second_content: React.ReactNode[];
    third_content: React.ReactNode[];

    read_less_btn: string;
    read_more_btn: string;
  };
}
export const PackageImageBlock = ({ el }: PackageImageBlockProps) => {
  const [readMore, setReadMore] = useState(false);

  console.log(el);

  const handleDropdown = () => {
    setReadMore(!readMore);
  };

  return (
    <>
      <div
        className={`${"image" in el && el.image ? "flex  gap-6" : "hidden"}`}
      >
        <div
          className={` lg:flex  justify-center gap-6 grid grid-cols-1 mb-6 lg:mb-0 ${
            readMore ? "items-start" : "items-center"
          }`}
        >
          {el.video ? (
            <video
              controls
              className="w-[100%] lg:w-[50%] h-full lg:max-h-[364px] object-cover"
            >
              <source src={el?.image?.filename} type="video/mp4" />
            </video>
          ) : (
            <div className="relative lg:w-[42.2vw] h-[300px] lg:h-[400px]">
              <Image
                src={el?.image?.filename}
                fill
                className="object-cover"
                alt={el?.image?.alt}
              />
            </div>
          )}

          <div className="text-[14px] lg:mt-0 w-[100%] lg:max-w-[48%]">
            <div className="package-container">{render(el.content)}</div>
            {readMore && (
              <div className="lg:mt-4">{render(el.dropdown_content)}</div>
            )}
            <div className={`${!el.video ? "hidden" : "text-[14px]"}`}>
              {readMore ? (
                <div
                  className="flex items-center gap-2 mt-2"
                  onClick={() => handleDropdown()}
                >
                  <button>{el.read_less_btn}</button>
                  <IoIosArrowUp />
                </div>
              ) : (
                <div
                  className="flex items-center gap-2 mt-2"
                  onClick={() => handleDropdown()}
                >
                  <button>{el.read_more_btn}</button>
                  <IoIosArrowDown fontSize={15} />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {el?.second_image?.filename ? (
        <div
          className={`lg:flex  flex-row items-center gap-6 grid grid-cols-1 ${
            el.image_right &&
            "lg:flex-row-reverse justify-center lg:-mt-[2rem] lg:-mb-[2rem] lg:ml-[0.6rem]"
          }`}
        >
          {el.video ? (
            <video
              controls
              className="w-[100%] lg:w-[50%] h-full lg:max-h-[364px] object-cover"
            >
              <source src={el?.second_image?.filename} type="video/mp4" />
            </video>
          ) : (
            <div className="relative lg:w-[42.2vw] h-[400px]">
              <div>
                <Image
                  src={el?.second_image?.filename}
                  fill
                  className="object-cover"
                  alt={el?.second_image?.alt}
                />
              </div>
            </div>
          )}
          <div className="w-[100%] lg:max-w-[48%]">
            <h3 className="font-semibold text-[14px]">{el.subtitle}</h3>
            <div>{render(el.second_content)}</div>
          </div>
        </div>
      ) : null}
      {el?.third_image?.filename ? (
        <div className="lg:flex justify-center items-center gap-6 mt-6 lg:mt-0">
          <div className="relative lg:w-[42.2vw] h-[400px]">
            <div>
              <Image
                src={el?.third_image?.filename}
                fill
                className="object-cover"
                alt={el?.third_image?.alt}
              />
            </div>
          </div>

          <div className="lg:max-w-[48%] mt-6 lg:mt-0">
            <div>{render(el.third_content)}</div>
          </div>
        </div>
      ) : null}
    </>
  );
};
