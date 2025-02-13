"use client";

import { render } from "storyblok-rich-text-react-renderer";

export const DropDown = ({ el }: any) => {
  return <div className="lg:w-[40%]">{render(el.content)}</div>;
};
