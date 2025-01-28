export const StandardForm = () => {
  return (
    <div className="w-[55%] p-20">
      <h2 className="text-center">Flexibla resor</h2>
      <form className="mt-10 w-[100%]">
        <div className="grid grid-cols-2 gap-4">
          <input type="text" name="" id="" placeholder="Namn" />
          <input type="text" name="" id="" placeholder="Epost" />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <input type="number" name="" id="" placeholder="Telefon" />
          <select name="" id="" defaultValue={""}>
            <option value="" disabled>
              Privat
            </option>
            <option value="">Företag</option>
          </select>
        </div>

        <textarea
          name=""
          id=""
          placeholder="Meddelande"
          className="resize-none h-32"
        ></textarea>

        <div className="flex items-start gap-4">
          <input type="checkbox" name="" id="" className="mt-2" />
          <div>
            Genom att klicka på skicka godkänner jag Premier Padel <br />
            Travels policy för behandling av personuppgifter.
          </div>
        </div>
        <button
          className="w-[128px] h-[50px] text-[14px] bg-[#28303d] text-white mt-4"
          type="submit"
        >
          Skicka
        </button>
      </form>
    </div>
  );
};
