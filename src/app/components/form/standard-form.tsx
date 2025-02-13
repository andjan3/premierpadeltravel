export const StandardForm = ({ settings }: any) => {
  return (
    <div className="lg:w-[55%] p-4 lg:p-20">
      {settings && (
        <>
          <h2 className="text-center">{settings.title_flexible_trips}</h2>

          <form className="mt-10 w-[100%]">
            <div className="grid grid-cols-2 gap-4">
              <input type="text" name="" id="" placeholder={settings.name} />
              <input type="text" name="" id="" placeholder={settings.email} />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <input type="number" name="" id="" placeholder={settings.phone} />
              <select name="" id="" defaultValue={""}>
                <option value="" disabled>
                  {settings.select_customer_type}
                </option>
                <option value="">{settings.private_person}</option>
                <option value="">{settings.business}</option>
              </select>
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
        </>
      )}
    </div>
  );
};
