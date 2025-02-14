import { getStoryblokApi, StoryblokStory } from "@storyblok/react/rsc";
import { redirect } from "next/navigation";
import { getAllResor } from "../lib/get-all-resor";
import { getData } from "../lib/get-data";
import { Metadata } from "next";

async function fetchData(slug: string) {
  let sbParams = {
    version: "draft" as const,
    language: process.env.STORYBLOCK_LANG,
  };

  const client = getStoryblokApi();

  const data = await client.get(`cdn/stories/${slug}`, sbParams);

  return { data };
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

export const generateMetadata = async ({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> => {
  const pathname = params.slug;
  const slugName = !pathname || pathname === "" ? "home" : pathname;
  const data = await fetchData(slugName);

  return {
    title: data?.data.data.story?.content?.seo.title || "Premier padel travel",
    description:
      data?.data.data.story?.content?.seo.description || "Default description",
  };
};

export default Page;
