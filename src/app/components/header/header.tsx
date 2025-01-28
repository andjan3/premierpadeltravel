import HeaderSection from "./header-section";

async function fetchData() {
  const res = await fetch(
    `https://api.storyblok.com/v2/cdn/stories/config?version=draft&token=${process.env.STORYBLOK_TOKEN}`,
    { cache: "no-store" }
  );

  return res.json();
}

const Header = async ({ lang }: any) => {
  const story = await fetchData();
  return <HeaderSection lang={lang} props={story} />;
};

export default Header;
