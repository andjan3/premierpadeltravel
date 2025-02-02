/* type Language = "sv" | "en" | "da";
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
}; */

import React, { useState } from "react";
type Language = "sv" | "en" | "da";

export const NewsLetterForm = ({ lang }: any) => {
  const placeholders: Record<Language, string> = {
    sv: "Ange din e-postadress",
    en: "Enter your email address",
    da: "Indtast din e-mailadresse",
  };
  const language: Language = lang;
  const placeholderText = placeholders[language] || placeholders.en;
  const [email, setEmail] = useState("");

  const handleSubscribe = async (event: any) => {
    event.preventDefault();
    const res = await fetch("/api/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    });
    const payload = await res.json();
    if (payload.success) {
      alert(payload.message);
    } else {
      alert("Failed to subscribe to newsletter");
    }
  };

  return (
    <div className="w-full flex justify-center mt-20">
      <form
        className="bg-[#004E70] py-10 lg:w-[60%] lg:h-[30%] p-4 lg:p-10 flex flex-col gap-4 rounded "
        onSubmit={handleSubscribe}
      >
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
            required
            onChange={(evt) => setEmail(evt.target.value)}
            name="email"
            id="email"
            placeholder={placeholderText}
            className="w-full p-4 rounded"
          />
          <button
            role="submit"
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
