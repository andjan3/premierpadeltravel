"use client";

import Image from "next/image";
import { Gallery } from "@/components/gallery";
import { render } from "storyblok-rich-text-react-renderer";
import { CiCalendarDate } from "react-icons/ci";
import { CiLocationOn } from "react-icons/ci";
import { IoTicketOutline } from "react-icons/io5";
import { BookingForm } from "@/app/components/form/booking-form";
import { NewsLetterForm } from "@/app/components/form/news-letter-form";
import useStore from "@/components/lib/store";
import { TripsCard } from "./ui/trips-card";
import { Card } from "./card";
import { InfoBlock } from "./info-block";

export const Packages = ({ paket, resor, lang, settings }: any) => {
  const text =
    lang === "sv" ? "Läs mer" : lang === "en" ? "Read more" : "Læs mere";

  const text2 =
    lang === "sv" ? "Läs mindre" : lang === "en" ? "Read less" : "Læs mindre";

  const { openCalender, setOpenCalender } = useStore();

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

      <div className="package-container flex flex-col w-[85%] m-auto">
        <div className="lg:grid grid-cols-2 gap-32 w-[100%] mt-6 lg:p-4 lg:mt-14 mb-6">
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
            <div className="package-info lg:w-[670px] mt-4 mb-8 lg:mb-0 lg:mt-10">
              {render(content.package_info)}
            </div>
          </div>
          <BookingForm lang={lang} settings={settings} />
        </div>

        <InfoBlock paket={content.info_block} />

        {content.gallery.length > 0 && <Gallery images={content.gallery} />}

        <div className="flex flex-col gap-4 mt-16">
          {content.card && <Card content={content.card} lang={lang} />}
        </div>
        <div>
          <h2 className="text-center lg:text-start pb-4">
            {settings.travel_title}
          </h2>
          <div className="lg:grid grid-cols-4 gap-4">
            {resor
              .filter((item: any) =>
                item.content.category.includes("populara-resor")
              )
              .map((item: any) => (
                <TripsCard item={item} boolean={true} />
              ))}
          </div>
        </div>
        <div className="flex flex-col gap-4 mt-16">
          <div>
            <h2 className="text-center">{content.contact_title}</h2>
          </div>
          <div>
            <div className="contact">{render(content.contact_content)}</div>
          </div>
        </div>
        <NewsLetterForm lang={lang} />
      </div>
    </div>
  );
};
