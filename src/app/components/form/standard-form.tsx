import {
  Language,
  translations,
} from "@/components/lib/interface.lang-standard-form";

export const StandardForm = ({ lang }: { lang: Language }) => {
  const texts = translations[lang];

  return (
    <div className="w-[55%] p-20">
      <h2 className="text-center">{texts.title}</h2>
      <form className="mt-10 w-[100%]">
        <div className="grid grid-cols-2 gap-4">
          <input type="text" name="" id="" placeholder={texts.name} />
          <input type="text" name="" id="" placeholder={texts.email} />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <input type="number" name="" id="" placeholder={texts.phone} />
          <select name="" id="" defaultValue={""}>
            <option value="" disabled>
              {texts.choice}
            </option>
            <option value="">{texts.private}</option>
            <option value="">{texts.business}</option>
          </select>
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
    </div>
  );
};
