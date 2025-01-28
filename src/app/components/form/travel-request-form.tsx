export const TravelReqForm = () => {
  return (
    <form className="mt-10 w-[50%]">
      <div className="grid grid-cols-2 gap-4">
        <input type="text" name="" id="" placeholder="Företagsnamn" />
        <input type="number" name="" id="" placeholder="Kontaktperson" />
      </div>
      <div className="grid grid-cols-2 gap-4">
        <input type="text" name="" id="" placeholder="Epost" />
        <input type="number" name="" id="" placeholder="Telefon" />
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
  );
};
