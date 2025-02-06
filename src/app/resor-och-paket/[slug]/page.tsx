import { getAllResor } from "@/app/lib/get-all-resor";
import { getData } from "@/app/lib/get-data";
import { getResor } from "@/app/lib/get-resor";
import { Packages } from "@/components/packages";

const page = async ({ params }: { params: { slug: string } }) => {
  const pathname = params.slug;
  const paket = await getResor(pathname);
  const settings = await getData();
  const resor = await getAllResor();
  const lang = process.env.STORYBLOCK_LANG || "en";

  return (
    <div>
      <Packages
        paket={paket}
        lang={lang}
        resor={resor.data.data.stories}
        blok={resor.data.data.stories}
        settings={settings.data.data.story.content}
        pathname={pathname}
      />
    </div>
  );
};

export default page;
