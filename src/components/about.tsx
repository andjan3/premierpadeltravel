import { TravelReqForm } from "@/app/components/form/travel-request-form";
import { storyblokEditable } from "@storyblok/react";
import { render } from "storyblok-rich-text-react-renderer";

export const About = ({ blok, lang, settings }: any) => {
  const { Heading, content, styling_left, form, citat } = blok;

  return (
    <div
      className={`
      ${styling_left ? "wrapper-left" : "wrapper"}
      ${form && "bg-[#f8f8f8] lg:!p-10"}
    `}
      {...storyblokEditable(blok)}
    >
      <h2 className="ordinaryHeading">{Heading}</h2>
      <div className="lg:flex justify-between">
        <div className="paragraph">{render(content)}</div>
        <div className="citat">{render(citat)}</div>
      </div>

      {form && <TravelReqForm lang={lang} settings={settings} />}
    </div>
  );
};

export default About;
