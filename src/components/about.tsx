import { TravelReqForm } from "@/app/components/form/travel-request-form";
import { storyblokEditable } from "@storyblok/react";
import { render } from "storyblok-rich-text-react-renderer";

export const About = ({ blok }: any) => {
  const { Heading, content, styling_left, form } = blok;

  return (
    <div
      className={`
      ${styling_left ? "wrapper-left" : "wrapper"}
      ${form && "bg-[#f8f8f8] !p-10"}
    `}
      {...storyblokEditable(blok)}
    >
      <h2 className="ordinaryHeading">{Heading}</h2>
      <div className="paragraph">{render(content)}</div>

      {form && <TravelReqForm />}
    </div>
  );
};

export default About;
