"use client";

import { render } from "storyblok-rich-text-react-renderer";

export const DropDown = ({ el }: any) =>
  el.component === "program" ? (
    <div className="lg:w-[40%]">{render(el.content)}</div>
  ) : null;
