"use client";
import { storyblokEditable } from "@storyblok/react";
import { render } from "storyblok-rich-text-react-renderer";

export const TravelTerms = ({ blok }: any) => {
  const { heading, subheading, information, mainContent } = blok;
  console.log("maaain", mainContent.content);

  return (
    <div className="travelTermsWrapper" {...storyblokEditable(blok)}>
      <div className="headerDiv">
        <h2 className="bigHeading">{heading}</h2>
      </div>

      <div className="travelTermsContent">
        <h3 className="ordinaryHeading">{subheading}</h3>
        <p className="largerParagraph">{information}</p>
      </div>

      <div className="travelTermsContent">
        {mainContent.content.map((element: any, index: number) => {
          if (element.type === "heading") {
            return (
              <h2 key={index} className="mediumHeading">
                {element.content?.[0]?.text}
              </h2>
            );
          } else if (
            element.type === "bullet_list" ||
            element.type === "list_item"
          ) {
            return (
              <ul key={index} className="bulletList">
                {element.content?.map((item: any, itemIndex: number) => (
                  <li key={itemIndex}>
                    {item.content?.[0]?.content?.[0]?.text}
                  </li>
                ))}
              </ul>
            );
          } else if (element.content?.[0]?.marks?.[0]?.type === "italic") {
            return (
              <p key={index} className="largerParagraph italic">
                {element.content?.[0]?.text}
              </p>
            );
          } else {
            return (
              <p key={index} className="largerParagraph">
                {element.content?.[0]?.text}
              </p>
            );
          }
        })}
      </div>
    </div>
  );
};

export default TravelTerms;
