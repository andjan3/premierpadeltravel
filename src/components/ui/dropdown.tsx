"use client";

import { IoIosArrowDown } from "react-icons/io";
import { render } from "storyblok-rich-text-react-renderer";
import useStore from "../lib/store";

export const DropDown = ({ content }: any) => {
  const { isProgramDropdownOpen, setProgramDropdownOpen } = useStore();
  const { program_title, program_content } = content;

  const handleProgramDropdown = (state: boolean) => {
    setProgramDropdownOpen(!state);
  };
  return (
    <div className="w-full">
      <div
        className="flex cursor-pointer"
        onClick={() => handleProgramDropdown(isProgramDropdownOpen)}
      >
        <h2>{program_title}</h2>
        <IoIosArrowDown
          fontSize={30}
          className={`mt-2 ml-3 ${isProgramDropdownOpen && "rotate-180"}`}
        />
      </div>
      <div
        className={` ${
          isProgramDropdownOpen ? "dropdown-container" : "hidden"
        }`}
      >
        {render(program_content)}
      </div>
    </div>
  );
};
