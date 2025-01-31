export const NewsLetterForm = ({ lang }: any) => {
  console.log(lang);
  return (
    <div className="w-full flex justify-center mt-20">
      <form className="bg-[#004E70] w-[60%] h-[30%] p-10 flex flex-col gap-4 rounded ">
        <div className="uppercase text-white text-center">
          {lang === "sv" &&
            " Missa aldrig en nyhet - prenumerera på vårt nyhetsbrev!"}
        </div>

        <div className="relative">
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Ange din e-postadress"
            className="w-full p-4 rounded"
          />
          <button
            type="submit"
            className="absolute right-1 mt-[4px] top-0 w-[120px] h-[85%] bg-[#28303d] text-white rounded hover:bg-[#f26627]"
          >
            Prenumerera
          </button>
        </div>
      </form>
    </div>
  );
};
