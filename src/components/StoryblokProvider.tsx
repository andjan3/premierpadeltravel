"use client";
import type { PropsWithChildren } from "react";
import { storyblokInit } from "@storyblok/react/rsc";
import Page from "./Page";
import HeroSection from "./hero-section";
import About from "./about";
import { ImageSection } from "./image-section";
import TravelTerms from "./travel-terms";
import { LogoBlock } from "./logo-block";
import { FilterPackage } from "./filter-package";
import { Tabel } from "./tabel";
import { FilterBlock } from "./filter-block";

storyblokInit({
  components: {
    page: Page,
    Hero: HeroSection,
    section: About,
    image_section: ImageSection,
    travelTerms: TravelTerms,
    partners: LogoBlock,
    filter_package: FilterPackage,
    tabel: Tabel,
    filter_block: FilterBlock,
    filter_packages: FilterPackage,
  },
  enableFallbackComponent: true,
});

export const StoryblokProvider = ({ children }: PropsWithChildren) => {
  return <>{children}</>;
};
