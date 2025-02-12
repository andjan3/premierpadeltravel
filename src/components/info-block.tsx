import { useState } from "react";
import { BsPlusLg } from "react-icons/bs";
import { Card } from "./card";
import { PackageImageBlock } from "./ui/packages-img-block";
import { DropDown } from "./ui/dropdown";

export const InfoBlock = ({ paket }: any) => {
  const [open, setOpen] = useState("");

  const handleClick = (id: any) => {
    setOpen(open === id ? null : id);

    if (open === id) {
      setOpen("");
    }
  };

  return (
    <>
      <div className="flex flex-col gap-6 ">
        {paket.map((el: any) => {
          return (
            <div className="flex flex-col  gap-6">
              <div
                className="flex items-center text-[26px] gap-6 cursor-pointer"
                onClick={() => handleClick(el._uid)}
              >
                <h2>{el.title}</h2>
                <BsPlusLg fontSize={25} />
              </div>

              <div
                className={`${
                  open == el._uid ? "grid grid-cols-1 gap-6" : "hidden"
                }`}
              >
                {el.image && <PackageImageBlock el={el} />}

                {el.card && <Card content={el} />}

                {el.component == "program" && <DropDown el={el} />}
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};
