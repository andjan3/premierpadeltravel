import useStore from "@/components/lib/store";

export const BookingForm = () => {
  const { openCalender } = useStore();
  return (
    <form>
      <h2>Bokningsförfrågan</h2>
      <div>Kontaktinformation Huvudresenär</div>
      <input type="text" name="" id="" placeholder="Namn" className="w-full" />
      {openCalender && (
        <div className="grid grid-cols-2 gap-4">
          <input type="datetime-local" name="" id="" placeholder="Utresa" />
          <input type="datetime-local" name="" id="" placeholder="Hemresa" />
        </div>
      )}
      <div className="grid grid-cols-2 gap-4">
        <input type="text" name="" id="" placeholder="Epost" />
        <input type="number" name="" id="" placeholder="Telefon" />
      </div>
      <div className="grid grid-cols-2 gap-4">
        <select name="" id="" defaultValue={""}>
          <option value="" disabled>
            Välj typ av kund
          </option>
          <option value="privatperson">Privatperson</option>
          <option value="foretag">Företag</option>
        </select>
        <select name="" id="" defaultValue={""}>
          <option value="" disabled>
            Välj antal personer
          </option>
          <option value="2">2 personer</option>
          <option value="4">4 personer</option>
          <option value="8">8 personer</option>
          <option value="12">12 personer</option>
        </select>
      </div>
      <textarea
        name=""
        id=""
        placeholder="Meddelande"
        className="resize-none"
      ></textarea>
      <select name="" id="" defaultValue={""}>
        <option value="" disabled>
          Välj spelarnivå
        </option>
        <option value="nyborjare">Nybörjare(Har spelat 1-4 matcher)</option>
        <option value="amator">Amatör(Har spelat 5-10 matcher)</option>
        <option value="motion">Motion(Spelar 1-2/Månad)</option>
        <option value="motion-plus">Motion+(Spelar 1/vecka)</option>
        <option value="medel">
          Medel(Spelar seriespel på en låg/medelnivå)
        </option>
        <option value="anvancerad">
          Avancerad(Spelar seriespel på en hög nivå)
        </option>
      </select>
      <select name="" id="" defaultValue={""}>
        <option value="" disabled>
          Kön
        </option>
        <option value="man">Man</option>
        <option value="kvinna">Kvinna</option>
        <option value="okand">Vill ej uppge</option>
      </select>

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
