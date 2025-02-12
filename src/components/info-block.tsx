import Image from "next/image";
import { useState } from "react";
import { BsPlusLg } from "react-icons/bs";
import { render } from "storyblok-rich-text-react-renderer";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import { Card } from "./card";

export const InfoBlock = ({ paket }: any) => {
  console.log("test", paket);

  console.log("myyys", paket);

  const [open, setOpen] = useState("");
  const [readMore, setReadMore] = useState(false);

  const handleClick = (id: any) => {
    setOpen(open === id ? null : id);

    if (open === id) {
      setOpen("");
    }
  };

  const handleDropdown = () => {
    setReadMore(!readMore);
  };

  console.log(open);
  return (
    <>
      <div className="flex flex-col gap-6 ">
        {paket.map((el: any) => {
          return (
            <div className="flex flex-col  gap-6">
              <div
                className="flex items-center text-[26px] gap-6 cursor-pointer"
                onClick={() => handleClick(el._uid)}
              >
                <h2>{el.title}</h2>
                <BsPlusLg fontSize={25} />
              </div>

              <div
                className={`${
                  open == el._uid
                    ? "flex flex-row-reverse justify-center items-center gap-6"
                    : "hidden"
                }`}
              >
                <div className="text-[14px]">
                  <div>{render(el.content)}</div>
                  {readMore && <div>{render(el.second_content)}</div>}
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

                {el.video ? (
                  <video controls className="w-[50%] h-full object-cover">
                    <source src={el?.image?.filename} type="video/mp4" />
                  </video>
                ) : (
                  <Image
                    src={el?.image?.filename}
                    width={650}
                    height={200}
                    alt={el?.image?.alt}
                  />
                )}
              </div>

              <div
                className={`${
                  open == el._uid
                    ? "flex justify-center items-center gap-6"
                    : "hidden"
                }`}
              >
                {el.video ? (
                  <video controls className="w-[50%] h-full object-cover">
                    <source src={el?.second_image?.filename} type="video/mp4" />
                  </video>
                ) : (
                  <div className="relative w-[100%] h-[100%]">
                    <Image
                      src={el?.second_image?.filename}
                      layout="fill"
                      className="object-cover"
                      alt={el?.second_image?.alt}
                    />
                  </div>
                )}
                <div>
                  <h3 className="font-semibold text-[14px]">{el.subtitle}</h3>
                  <div>{render(el.third_content)}</div>
                </div>
              </div>
              {/*   {el.card && <Card content={el.card} />}  */}
            </div>
          );
        })}
      </div>
    </>
  );
};
