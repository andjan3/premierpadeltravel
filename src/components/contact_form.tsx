import { StandardForm } from "@/app/components/form/standard-form";
import useStore from "./lib/store";

export const ContactForm = ({ lang }: any) => {
  const { filter } = useStore();
  return (
    <div
      className={`${
        filter === "Alla resor" ||
        filter === "All trips" ||
        filter === "Alle resor"
          ? "flex justify-center"
          : "hidden"
      }`}
    >
      <StandardForm lang={lang} />
    </div>
  );
};
