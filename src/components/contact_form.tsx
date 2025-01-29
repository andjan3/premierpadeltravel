import { StandardForm } from "@/app/components/form/standard-form";
import useStore from "./lib/store";

export const ContactForm = () => {
  const { filter } = useStore();
  return (
    <div
      className={`${
        filter === "Alla resor" ? "flex justify-center" : "hidden"
      }`}
    >
      <StandardForm />
    </div>
  );
};
