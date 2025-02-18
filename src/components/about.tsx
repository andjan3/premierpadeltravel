import { TravelReqForm } from "@/app/components/form/travel-request-form";
import { storyblokEditable } from "@storyblok/react";
import { render } from "storyblok-rich-text-react-renderer";
import { Settings } from "./utils/interface";

interface AboutProps {
  blok: {
    Heading: string;
    content: React.ReactNode[];
    styling_left: boolean;
    form: boolean;
    no_spacing: boolean;
    citat: React.ReactNode[];
  };

  settings: Settings;
}
export const About = ({ blok, settings }: AboutProps) => {
  const { Heading, content, styling_left, form, citat, no_spacing } = blok;

  return (
    <div
      className={`
      ${styling_left ? "wrapper-left" : "wrapper"}
      ${form && "bg-[#f8f8f8] lg:!p-10"}
      ${no_spacing && "no-spacing"}
    `}
      {...storyblokEditable(blok)}
    >
      <h2 className="ordinaryHeading">{Heading}</h2>
      <div className="lg:flex justify-between">
        <div className="paragraph">{render(content)}</div>
        <div className="citat">{render(citat)}</div>
      </div>

      {form && <TravelReqForm settings={settings} />}
    </div>
  );
};

export default About;
