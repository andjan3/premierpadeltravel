type Language = "sv" | "en" | "da";
export const NewsLetterForm = ({ lang }: any) => {
  const placeholders: Record<Language, string> = {
    sv: "Ange din e-postadress",
    en: "Enter your email address",
    da: "Indtast din e-mailadresse",
  };
  const language: Language = lang;
  const placeholderText = placeholders[language] || placeholders.en;

  return (
    <div className="w-full flex justify-center mt-20">
      <form className="bg-[#004E70] w-[60%] h-[30%] p-10 flex flex-col gap-4 rounded ">
        <div className="uppercase text-white text-center">
          {lang === "sv" &&
            "Missa aldrig en nyhet - prenumerera på vårt nyhetsbrev!"}
          {lang === "en" &&
            "Never miss a news item - subscribe to our newsletter!"}
          {lang === "da" &&
            "Gå aldrig glip af en nyhed - tilmeld dig vores nyhedsbrev!"}
        </div>

        <div className="relative">
          <input
            type="email"
            name="email"
            id="email"
            placeholder={placeholderText}
            className="w-full p-4 rounded"
          />
          <button
            type="submit"
            className="absolute right-1 mt-[4px] top-0 w-[120px] h-[85%] bg-[#28303d] text-white rounded hover:bg-[#f26627]"
          >
            {lang === "sv" && "Prenemurera"}
            {lang === "en" && "Subscribe"}
            {lang === "da" && "Abonnere"}
          </button>
        </div>
      </form>
    </div>
  );
};
