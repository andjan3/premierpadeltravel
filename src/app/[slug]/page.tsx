import { getStoryblokApi, StoryblokStory } from "@storyblok/react/rsc";
import { redirect } from "next/navigation";
import { getAllResor } from "../lib/get-all-resor";
import { getData } from "../lib/get-data";

async function fetchData(slug: string) {
  let sbParams = {
    version: "draft" as const,
    language: process.env.STORYBLOCK_LANG,
  };

  const client = getStoryblokApi();
  try {
    const data = await client.get(`cdn/stories/${slug}`, sbParams);

    if (!data) {
      throw new Error("Not Found");
    }

    return { data };
  } catch (error: any) {
    if (error.response && error.response.status === 500) {
      redirect("/500");
    } else {
      throw error;
    }
  }
}

const Page = async ({ params }: { params: { slug: string } }) => {
  const pathname = params.slug;
  const slugName = pathname === undefined ? `home` : pathname;
  const story = await fetchData(slugName);
  const resor = await getAllResor();
  const settings = await getData();

  const lang = process.env.STORYBLOCK_LANG || "en";
  return (
    <StoryblokStory
      story={story.data.data.story}
      resor={resor.data.data.stories}
      lang={lang}
      settings={settings.data.data.story.content}
    />
  );
};

export default Page;
