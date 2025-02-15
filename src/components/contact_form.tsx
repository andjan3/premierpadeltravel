import { StandardForm } from "@/app/components/form/standard-form";

export const ContactForm = ({ lang, settings }: any) => {
  return (
    <div>
      <StandardForm lang={lang} settings={settings} />
    </div>
  );
};
