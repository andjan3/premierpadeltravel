"use client";

import { IoIosArrowDown } from "react-icons/io";
import { useState } from "react";

export const Tabel = ({ content }: any) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen((prevState) => !prevState);
  };
  console.log("conteeent", content);

  return (
    <div>
      <div className="mb-4 font-bold">{content.subtitle}</div>
      <div
        className={`${
          content?.tabel?.length > 0 ? "visible mb-10" : "invisible"
        }`}
      >
        <table>
          <tbody>
            {content?.tabel?.map((row: any, index: number) => (
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
          className="flex items-center cursor-pointer pt-4"
          onClick={handleOpen}
        >
          {isOpen ? "Läs mindre" : "Läs mer"}
          <IoIosArrowDown className={`ml-2 ${isOpen && "rotate-180"}`} />
        </div>
      </div>
    </div>
  );
};
