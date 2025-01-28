"use client";

import Image from "next/image";
import { Gallery } from "@/components/gallery";
import { render } from "storyblok-rich-text-react-renderer";
import { CiCalendarDate } from "react-icons/ci";
import { CiLocationOn } from "react-icons/ci";
import { IoTicketOutline } from "react-icons/io5";
import { BookingForm } from "@/app/components/form/booking-form";
import { Card } from "@/components/card";
import { NewsLetterForm } from "@/app/components/form/news-letter-form";
import { IoIosArrowDown } from "react-icons/io";
import useStore from "@/components/lib/store";
import { DropDown } from "./ui/dropdown";
import { Tabel } from "./tabel";
import { FilterPackage } from "./filter-package";

export const Packages = ({ paket, blok, resor }: any) => {
  const { openDropdown, setOpenDropdown, openCalender, setOpenCalender } =
    useStore();

  const handleDropdown = (state: boolean) => {
    setOpenDropdown(!state);
  };

  const handleOpenCalender = (state: boolean) => {
    setOpenCalender(!state);
  };
  const { content } = paket.data.data.story;

  return (
    <div>
      <div className="relative h-[50vh] lg:h-[50vh] lg:w-[100vw]">
        <div className="bg-black opacity-30 w-full absolute top-0 h-full z-10" />
        <Image
          alt={content.hero.name}
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          src={content.hero.filename}
        />
        <p className="absolute z-20 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white text-[45px] md:text-6xl font-bold uppercase w-full">
          {content.hero_title}
        </p>
      </div>

      <div className="package-container flex flex-col w-[85%] items-center      m-auto gap-10">
        <div className="grid grid-cols-2 gap-32 w-[100%]  p-4 mt-14 mb-6">
          <div className="flex flex-col gap-4">
            <h2>{content.heading}</h2>
            <div className="flex gap-4">
              <span>
                <CiCalendarDate fontSize={30} />
              </span>
              <div className="flex flex-col">
                <h2 className="smaller-heading ">Datum</h2>
                <div className="text-[18px]">{content.date}</div>
                {content.choose_dates !== "" && (
                  <button
                    className="text-[#00e154] text-[14px] pt-2 font-medium scroll text-start"
                    onClick={() => setOpenCalender(!openCalender)}
                  >
                    {content.choose_dates}
                  </button>
                )}
              </div>
            </div>
            <div className="flex gap-4">
              <span>
                <CiLocationOn fontSize={30} />
              </span>
              <div className="flex flex-col">
                <h2 className="smaller-heading ">Plats</h2>
                <div className="text-[18px]">{content.position}</div>
              </div>
            </div>
            <div className="flex gap-4">
              <span>
                <IoTicketOutline fontSize={30} />
              </span>
              <div className="flex flex-col">
                <h2 className="smaller-heading ">Pris</h2>
                <div className="text-[18px]">{content.price}</div>
              </div>
            </div>
            <div className="package-info w-[670px] mt-10">
              {render(content.package_info)}
            </div>
          </div>
          <BookingForm />
        </div>
        {content.gallery.length > 0 && <Gallery images={content.gallery} />}
        <div className="w-[100%] mt-16">
          <h2 className="text-start">{content.second_heading}</h2>{" "}
        </div>
        <div
          className={`
          ${
            content.video_content
              ? "flex flex-col gap-6"
              : "flex flex-row flex-wrap"
          }
          ${content.second_video.filename != "" ? "gap-4" : "gap-10"}
        `}
        >
          <div
            className={` relative ${
              content.video_content &&
              "h-full w-full flex justify-center bg-[#f8f8f8] gap-8 py-10 px-8"
            } ${
              content.image_styling &&
              " flex gap-8 bg-[#f8f8f8] items-center py-10 px-8 mb-10"
            } ${
              !content.image_styling
                ? "mb-16 w-[41.3vw] h-[55vh]"
                : "grid grid-cols-2  w-auto"
            }`}
          >
            {content.video_content ? (
              <video controls className="w-[50%] h-full object-cover">
                <source src={content.video.filename} type="video/mp4" />
              </video>
            ) : (
              <Image
                src={content.video.filename}
                width={content.image_styling ? 700 : undefined}
                height={content.image_styling ? 700 : undefined}
                layout={content.image_styling ? "intrinsic" : "fill"}
                className="object-cover"
                alt={content.video.alt}
              />
            )}
            <div>
              {render(content.content)}
              {content.content_dropdown?.content[0].content?.length > 0 && (
                <div
                  className="flex items-center text-[14px] mt-4 cursor-pointer"
                  onClick={() => handleDropdown(openDropdown)}
                >
                  Läs mer{" "}
                  <IoIosArrowDown
                    fontSize={20}
                    className={`pt-1 ml-2 ${openDropdown && "rotate-180"}`}
                  />
                </div>
              )}
            </div>
            {content.content_dropdown && openDropdown && (
              <div>{render(content.content_dropdown)}</div>
            )}
          </div>

          <div
            className={` relative ${
              content.video_content &&
              "h-full w-full flex justify-center bg-[#f8f8f8] gap-8 py-10 px-8"
            } ${
              !content.image_styling ? "mb-16 w-[41.3vw] h-[55vh]" : "w-auto"
            }`}
          >
            {content.video_content ? (
              <video controls className="w-[50%] h-full object-cover">
                <source src={content.second_video.filename} type="video/mp4" />
              </video>
            ) : (
              <>
                {content.second_video.filename != "" ? (
                  <Image
                    src={content.second_video.filename}
                    width={content.image_styling ? 700 : undefined}
                    height={content.image_styling ? 700 : undefined}
                    layout={content.image_styling ? "intrinsic" : "fill"}
                    className="object-cover"
                    alt={content.second_video.alt}
                  />
                ) : null}
              </>
            )}
            <div className="flex flex-col items-center gap-4 mb-4 w-[100%]">
              <div>
                <h2>{content.additional_heading}</h2>
              </div>
              <div
                className={` ${
                  content.second_video.filename != "" ? "w-[100%]" : "w-[80%]"
                }`}
              >
                <div className={`${!content.video_content && "hidden"}`}>
                  {render(content.additional_content)}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className={`${
            content.video_content ? "hidden" : "-mt-16 mb-16 w-[100%]"
          }`}
        >
          {render(content.additional_content)}
        </div>
        {content.tabel_heading !== "" && (
          <div>
            <h2 className="pb-4">{content.tabel_heading}</h2>
            <Tabel content={content.tabel} />
          </div>
        )}
        {content.program_dropdown && <DropDown content={content} />}
        <div className="flex flex-col gap-4">
          <h2>{content.card_title}</h2>
          {content.card && <Card content={content.card} />}
        </div>

        <div className="flex flex-col gap-4">
          <div>
            <h2 className="text-center">{content.contact_title}</h2>
          </div>
          <div>
            <div className="contact">{render(content.contact_content)}</div>
          </div>
        </div>
        <NewsLetterForm />
      </div>
    </div>
  );
};
