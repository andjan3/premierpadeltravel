import {
  Language,
  translations,
} from "@/components/lib/interface.lang-standard-form";

export const TravelReqForm = ({ lang }: { lang: Language }) => {
  const texts = translations[lang];
  return (
    <form className="mt-10 w-[50%]">
      <div className="grid grid-cols-2 gap-4">
        <input type="text" name="" id="" placeholder={texts.businessName} />
        <input type="number" name="" id="" placeholder={texts.contactPerson} />
      </div>
      <div className="grid grid-cols-2 gap-4">
        <input type="text" name="" id="" placeholder={texts.email} />
        <input type="number" name="" id="" placeholder={texts.phone} />
      </div>

      <textarea
        name=""
        id=""
        placeholder={texts.message}
        className="resize-none h-32"
      ></textarea>

      <div className="flex items-start gap-4">
        <input type="checkbox" name="" id="" className="mt-2" />
        <div>{texts.privacyPolicy}</div>
      </div>
      <button
        className="w-[128px] h-[50px] text-[14px] bg-[#28303d] text-white mt-4"
        type="submit"
      >
        {texts.submit}
      </button>
    </form>
  );
};
