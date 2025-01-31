export const TravelReqForm = ({ settings }: any) => {
  return (
    <form className="mt-10 w-[50%]">
      <div className="grid grid-cols-2 gap-4">
        <input type="text" name="" id="" placeholder={settings.company_name} />
        <input
          type="number"
          name=""
          id=""
          placeholder={settings.contact_person}
        />
      </div>
      <div className="grid grid-cols-2 gap-4">
        <input type="text" name="" id="" placeholder={settings.email} />
        <input type="number" name="" id="" placeholder={settings.phone} />
      </div>

      <textarea
        name=""
        id=""
        placeholder={settings.message}
        className="resize-none h-32"
      ></textarea>

      <div className="flex items-start gap-4">
        <input type="checkbox" name="" id="" className="mt-2" />
        <div>{settings.policy_text}</div>
      </div>
      <button
        className="w-[128px] h-[50px] text-[14px] bg-[#28303d] text-white mt-4"
        type="submit"
      >
        {settings.button}
      </button>
    </form>
  );
};
