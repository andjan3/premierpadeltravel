"use client";

import { IoIosArrowDown } from "react-icons/io";
import { useState } from "react";

export const Tabel = ({ content, lang }: any) => {
  const text =
    lang === "sv" ? "Läs mer" : lang === "en" ? "Read more" : "Læs mere";

  const text2 =
    lang === "sv" ? "Läs mindre" : lang === "en" ? "Read less" : "Læs mindre";

  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <div className={`${content.length > 0 ? "visible" : "invisible"}`}>
      <table>
        <tbody>
          {content?.map((row: any, index: number) => (
            <tr
              key={index}
              style={{ display: index < 5 || isOpen ? "table-row" : "none" }}
            >
              <td>{row.country}</td>
              <td>{row.dates}</td>
              <td>{row.month}</td>
              <td>{row.serie}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div
        className="flex justify-end items-center cursor-pointer pt-4"
        onClick={handleOpen}
      >
        {isOpen ? text : text2}
        <IoIosArrowDown className={`ml-2 ${isOpen && "rotate-180"}`} />
      </div>
    </div>
  );
};
