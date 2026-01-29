import { ChevronUpIcon } from "lucide-react";
import { Button } from "../../components/ui/button";
import { AboutUsSection } from "./sections/AboutUsSection";
import { DestinationsOverviewSection } from "./sections/DestinationsOverviewSection";
import { FoodExperienceSection } from "./sections/FoodExperienceSection/FoodExperienceSection";
import { FooterSection } from "./sections/FooterSection";
import { NavigationMenuSection } from "./sections/NavigationMenuSection";

const partnerLogos = [
  {
    width: "w-28",
    backgroundImage: "bg-[url(/logo-1.png)]",
  },
  {
    width: "w-[210.81px]",
    backgroundImage: "bg-[url(/logo-2.png)]",
  },
  {
    width: "w-[143.13px]",
    backgroundImage: "bg-[url(/logo-3.png)]",
  },
  {
    width: "w-[123.58px]",
    backgroundImage: "bg-[url(/logo-4.png)]",
  },
  {
    width: "w-[204.2px]",
    backgroundImage: "bg-[url(/logo-5.png)]",
  },
  {
    width: "w-[88.23px]",
    backgroundImage: "bg-[url(/logo-6.png)]",
  },
];

export const ElementLight = (): JSX.Element => {
  return (
    <div className="bg-white overflow-x-hidden w-full relative">
      <NavigationMenuSection />
      <AboutUsSection />
      <DestinationsOverviewSection />
      <FoodExperienceSection />

      <section className="w-full relative py-8 md:py-12">
        <div className="flex flex-wrap w-full items-center justify-center gap-6 md:gap-8 lg:gap-[30px] px-4 sm:px-6 md:px-12">
          {partnerLogos.map((logo, index) => (
            <div
              key={`partner-logo-${index}`}
              className={`${logo.backgroundImage} relative w-20 sm:w-24 md:w-28 lg:${logo.width} h-[25px] md:h-[30px] lg:h-[35px] bg-contain bg-no-repeat bg-center flex-shrink-0`}
            />
          ))}
        </div>
      </section>

      <FooterSection />

      <Button
        className="flex w-10 h-10 md:w-12 md:h-12 items-center justify-center fixed right-4 md:right-8 bottom-4 md:bottom-8 bg-[#3cb371] hover:bg-[#2ea05e] rounded-3xl p-0 shadow-lg z-50"
        aria-label="Scroll to top"
      >
        <ChevronUpIcon className="w-5 h-5 md:w-6 md:h-6 text-white" />
      </Button>
    </div>
  );
};
