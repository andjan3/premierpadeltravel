import { useState } from "react";
import { BsPlusLg } from "react-icons/bs";
import { Card } from "./card";
import { PackageImageBlock } from "./ui/packages-img-block";
import { DropDown } from "./ui/dropdown";
import { Tabel } from "./tabel";

export const InfoBlock = ({ paket }: any) => {
  const [open, setOpen] = useState("");

  const handleClick = (id: any) => {
    setOpen(open === id ? null : id);

    if (open === id) {
      setOpen("");
    }
  };

  return (
    <div>
      <div className="flex flex-col gap-6">
        {paket.map((el: any) => {
          return (
            <div className="flex flex-col  gap-6">
              <div
                className="flex items-center text-[26px] gap-6 cursor-pointer max-w-[350px] justify-between bg-[#f8f8f8] p-6"
                onClick={() => handleClick(el._uid)}
              >
                <h2 className="smaller-heading">{el.title}</h2>
                <BsPlusLg fontSize={20} className="text-[#004e70]" />
              </div>

              <div
                className={`${
                  open == el._uid ? "grid grid-cols-1 gap-6" : "hidden"
                }`}
              >
                {el.image && <PackageImageBlock el={el} />}

                {el.card && <Card content={el} />}

                {el.component == "program" && <DropDown el={el} />}

                <Tabel content={el} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
