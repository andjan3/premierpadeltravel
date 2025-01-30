import FooterSection from "./footer-section";

async function fetchData() {
  const res = await fetch(
    `https://api.storyblok.com/v2/cdn/stories/config?version=draft&token=${process.env.STORYBLOK_TOKEN}`,
    { cache: "no-store" }
  );

  return res.json();
}

const Footer = async ({ lang }: any) => {
  const story = await fetchData();
  return <FooterSection props={story} lang={lang} />;
};

export default Footer;
