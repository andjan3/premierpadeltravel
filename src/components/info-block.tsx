import { BsPlusLg } from "react-icons/bs";
import { Card } from "./card";
import { PackageImageBlock } from "./ui/packages-img-block";
import { DropDown } from "./ui/dropdown";
import { Tabel } from "./tabel";
import useStore from "./lib/store";
import { InfoBlockElement } from "./utils/interface";

interface InfoBlock {
  paket: InfoBlockElement[];
}

export const InfoBlock = ({ paket }: InfoBlock) => {
  const { open, setOpen } = useStore();

  const handleClick = (id: any) => {
    setOpen(open === id ? null : id);

    if (open === id) {
      setOpen("");
    }
  };

  return (
    <div>
      <div className="flex flex-col gap-6 mt-10 lg:mt-0">
        {paket.map((el: InfoBlockElement, index: number) => {
          return (
            <div className="flex flex-col  gap-6" key={index}>
              <div
                className="flex items-center text-[26px] gap-6 cursor-pointer max-w-[350px] justify-between bg-[#f8f8f8] p-6"
                onClick={() => handleClick(el._uid)}
              >
                <h2 className="smaller-heading">{el.title}</h2>
                <BsPlusLg fontSize={20} className="text-[#004e70]" />
              </div>

              <div
                className={`${
                  open == el._uid
                    ? "lg:flex flex-col lg:gap-8 lg:mt-4 lg:mb-4"
                    : "hidden"
                }`}
              >
                <PackageImageBlock el={el} />

                <Card content={el} />

                <DropDown el={el} />

                <Tabel tabel={el} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
