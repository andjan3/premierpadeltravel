import useStore from "@/components/lib/store";
import {
  Language,
  translations,
} from "@/components/lib/interface.lang-booking-form";

export const BookingForm = ({ lang }: { lang: Language }) => {
  const { openCalender } = useStore();

  const texts = translations[lang];

  return (
    <form>
      <h2>{texts.bookingRequest}</h2>
      <div>{texts.contactInfo}</div>
      <input
        type="text"
        name=""
        id=""
        placeholder={texts.name}
        className="w-full"
      />

      {openCalender && (
        <div className="grid grid-cols-2 gap-4">
          <input
            type="datetime-local"
            name=""
            id=""
            placeholder={texts.departure}
          />
          <input
            type="datetime-local"
            name=""
            id=""
            placeholder={texts.return}
          />
        </div>
      )}

      <div className="grid grid-cols-2 gap-4">
        <input type="text" name="" id="" placeholder={texts.email} />
        <input type="number" name="" id="" placeholder={texts.phone} />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <select name="" id="" defaultValue={""}>
          <option value="" disabled>
            {texts.customerType}
          </option>
          <option value="privatperson">{texts.private}</option>
          <option value="foretag">{texts.business}</option>
        </select>
        <select name="" id="" defaultValue={""}>
          <option value="" disabled>
            {texts.peopleCount}
          </option>
          <option value="2">{texts.people2}</option>
          <option value="4">{texts.people4}</option>
          <option value="8">{texts.people8}</option>
          <option value="12">{texts.people12}</option>
        </select>
      </div>

      <textarea
        name=""
        id=""
        placeholder={texts.message}
        className="resize-none"
      ></textarea>

      <select name="" id="" defaultValue={""}>
        <option value="" disabled>
          {texts.playerLevel}
        </option>
        <option value="nyborjare">{texts.beginner}</option>
        <option value="amator">{texts.amateur}</option>
        <option value="motion">{texts.hobby}</option>
        <option value="motion-plus">{texts.hobbyPlus}</option>
        <option value="medel">{texts.intermediate}</option>
        <option value="anvancerad">{texts.advanced}</option>
      </select>

      <select name="" id="" defaultValue={""}>
        <option value="" disabled>
          {texts.gender}
        </option>
        <option value="man">{texts.male}</option>
        <option value="kvinna">{texts.female}</option>
        <option value="okand">{texts.unknown}</option>
      </select>

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
