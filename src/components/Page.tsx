import { storyblokEditable, StoryblokComponent } from "@storyblok/react/rsc";

const Page = ({ blok, resor, lang }: any) => {
  return (
    <div {...storyblokEditable(blok)}>
      {blok &&
        Array.isArray(blok.body) &&
        blok.body.map((nestedBlok: any, index: number) => {
          return (
            <StoryblokComponent
              blok={nestedBlok}
              resor={resor}
              lang={lang}
              key={nestedBlok._uid}
            />
          );
        })}
    </div>
  );
};

export default Page;
