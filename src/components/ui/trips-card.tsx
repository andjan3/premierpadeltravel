import Image from "next/image";
import Link from "next/link";
import { render } from "storyblok-rich-text-react-renderer";

export const TripsCard = ({ item, boolean }: any) => {
  console.log("iteeeeem helluu", item);
  return (
    <>
      <Link
        href={`/${item.full_slug.replace(/^(da|en)\//, "")}`}
        key={item.uuid}
      >
        <div>
          <div className="bg-white rounded-lg shadow-lg">
            <div
              className={`relative  ${
                boolean ? " h-[34vh]" : "lg:w-[28.6vw] h-[44vh]"
              } overflow-hidden`}
            >
              {item.content.show_overlay_text && !boolean && (
                <div className="relative top-[10%] right-[7%] z-10 bg-[linear-gradient(220deg,_#f15c22_14%,_#f15c22_30%,_#e95326_50%,_#d33b30_82%,_#c33_91%)] w-[10vw] h-[4vh] -rotate-[45deg] text-white flex items-center justify-center uppercase text-[10px]">
                  {item.content.overlay_text}
                </div>
              )}
              {item.content.future_image.filename !== "" && (
                <Image
                  src={item.content.future_image.filename}
                  alt=""
                  fill
                  className="object-cover transition-transform duration-500 ease-in-out transform hover:scale-110"
                />
              )}
            </div>

            <div className="p-4 min-h-[340px] mt-2 flex flex-col gap-2">
              <div className="text-[#004e70] text-[11px] font-bold !text-center">
                {item.content.position}
              </div>
              <h2 className="text-xl text-black !text-[18px] font-bold text-center">
                {item.content.heading}
              </h2>
              <div className="text-[#004e70] text-center text-[12px]">
                {item.content.date}
              </div>
              <div className="package-content mt-2">
                {render(item.content.future_content)}
              </div>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};
