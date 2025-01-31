import useStore from "@/components/lib/store";

export const BookingForm = ({ settings }: any) => {
  const { openCalender } = useStore();
  const {
    title,
    subtitle,
    name,
    email,
    phone,
    button,
    gender,
    message,
    business,
    people_2,
    people_4,
    people_8,
    people_12,
    gender_men,
    gender_female,
    level_hobby,
    policy_text,
    level_amatuer,
    level_advanced,
    level_beginner,
    gender_optional,
    level_hobby_plus,
    select_player_level,
    select_customer_type,
    select_number_of_people,
    level_intermediate,
    private_person,
    departure,
    arrival,
  } = settings;
  return (
    <form>
      <h2>{title}</h2>

      <div>{subtitle}</div>

      <input type="text" name="" id="" placeholder={name} className="w-full" />

      {openCalender && (
        <div className="grid grid-cols-2 gap-4">
          <input type="datetime-local" name="" id="" placeholder={departure} />
          <input type="datetime-local" name="" id="" placeholder={arrival} />
        </div>
      )}

      <div className="grid grid-cols-2 gap-4">
        <input type="text" name="" id="" placeholder={email} />
        <input type="number" name="" id="" placeholder={phone} />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <select name="" id="" defaultValue={""}>
          <option value="" disabled>
            {select_customer_type}
          </option>
          <option value="privatperson">{private_person}</option>
          <option value="foretag">{business}</option>
        </select>
        <select name="" id="" defaultValue={""}>
          <option value="" disabled>
            {select_number_of_people}
          </option>
          <option value="2">{people_2}</option>
          <option value="4">{people_4}</option>
          <option value="8">{people_8}</option>
          <option value="12">{people_12}</option>
        </select>
      </div>

      <textarea
        name=""
        id=""
        placeholder={message}
        className="resize-none"
      ></textarea>

      <select name="" id="" defaultValue={""}>
        <option value="" disabled>
          {select_player_level}
        </option>
        <option value="nyborjare">{level_beginner}</option>
        <option value="amator">{level_amatuer}</option>
        <option value="motion">{level_hobby}</option>
        <option value="motion-plus">{level_hobby_plus}</option>
        <option value="medel">{level_intermediate}</option>
        <option value="anvancerad">{level_advanced}</option>
      </select>

      <select name="" id="" defaultValue={""}>
        <option value="" disabled>
          {gender}
        </option>
        <option value="man">{gender_men}</option>
        <option value="kvinna">{gender_female}</option>
        <option value="okand">{gender_optional}</option>
      </select>

      <div className="flex items-start gap-4">
        <input type="checkbox" name="" id="" className="mt-2" />
        <div>{policy_text}</div>
      </div>

      <button
        className="w-[128px] h-[50px] text-[14px] bg-[#28303d] text-white mt-4"
        type="submit"
      >
        {button}
      </button>
    </form>
  );
};
