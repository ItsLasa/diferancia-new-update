import { ChevronRightIcon } from "lucide-react";
import { Button } from "../../../../components/ui/button";

const socialLinks = [
  { src: "/link-3.svg", alt: "Social Link 1" },
  { src: "/link-5.svg", alt: "Social Link 3" },
  { src: "/link-2.svg", alt: "Social Link 4" },
];

const backgroundImages = [
  { src: "/group---4---4.png", alt: "Background Group 1" },
  { src: "/group---1---4.png", alt: "Background Group 2" },
];

const navigationButtons = [{ label: "About Us" }, { label: "Contact Us" }];

export const NavigationMenuSection = (): JSX.Element => {
  return (
    <section className="relative w-full bg-[#161920] pt-32 md:pt-40 lg:pt-56 pb-24 md:pb-32 lg:pb-44 px-4 sm:px-6 md:px-12 lg:px-20 xl:px-32">
      <div className="absolute inset-0 flex flex-col items-start justify-center">
        <div className="relative flex-1 self-stretch w-full">
          {backgroundImages.map((image, index) => (
            <img
              key={`bg-${index}`}
              className="absolute h-full top-0 left-0 w-full object-cover"
              alt={image.alt}
              src={image.src}
            />
          ))}

          <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(90deg,rgba(22,25,32,1)_9%,rgba(22,25,32,0.06)_100%)]" />
        </div>

        <div className="absolute top-1/2 -translate-y-1/2 right-4 md:right-8 lg:right-14 flex flex-col items-start gap-5 hidden sm:flex">
          <Button
            variant="ghost"
            size="icon"
            className="w-12 h-12 md:w-14 md:h-14 bg-[#f7f7f7] hover:bg-[#e0e0e0] rounded-[28px]"
          >
            <span className="text-[#161920] text-xl md:text-2xl">&#xf053;</span>
          </Button>

          <Button
            variant="ghost"
            size="icon"
            className="w-12 h-12 md:w-14 md:h-14 bg-[#f7f7f7] hover:bg-[#e0e0e0] rounded-[28px]"
          >
            <span className="text-[#161920] text-xl md:text-2xl">&#xf054;</span>
          </Button>
        </div>
      </div>

      <img
        className="absolute w-full left-0 bottom-[-50px] md:bottom-[-80px] lg:bottom-[-100px] h-[150px] md:h-[250px] lg:h-[300px] object-cover pointer-events-none"
        alt="Cloud image"
        src="/cloud-image.png"
      />

      <div className="relative flex flex-wrap items-start w-full max-w-7xl mx-auto">
        <div className="flex flex-col w-full">
          <div className="flex flex-col items-start gap-4 md:gap-6 w-full">
            <h1 className="w-full [font-family:'Manrope',Helvetica] font-extrabold text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-tight tracking-[0]">
              DIFERANCIA TOURS
            </h1>

            <p className="w-full [font-family:'Montez',Helvetica] font-normal text-[#3cb371] text-xl sm:text-2xl md:text-3xl leading-tight tracking-[0]">
              Journey beyond the Happy
            </p>

            <div className="flex flex-col sm:flex-row items-start gap-4 pt-8 md:pt-12 lg:pt-14 w-full">
              {navigationButtons.map((button, index) => (
                <Button
                  key={`nav-${index}`}
                  className="w-full sm:w-auto h-12 md:h-14 lg:h-[60px] px-6 md:px-8 py-3 md:py-4 bg-[#3cb371] hover:bg-[#35a062] rounded-[80px] [font-family:'Manrope',Helvetica] font-bold text-white text-sm md:text-base"
                >
                  {button.label}
                  <ChevronRightIcon className="ml-1.5 w-5 h-5 md:w-[22.4px] md:h-[22.4px]" />
                </Button>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="absolute top-1/2 -translate-y-1/2 left-4 md:left-8 lg:left-12 flex-col items-start gap-2 hidden lg:flex">
        {socialLinks.map((link, index) => (
          <Button
            key={`social-${index}`}
            variant="ghost"
            size="icon"
            className={`w-9 h-9 ${
              index === 1
                ? "bg-[#ffffff1a] hover:bg-[#ffffff2a] rounded-[18px]"
                : "p-0 hover:bg-transparent"
            }`}
          >
            {index === 1 ? (
              <span className="text-white text-base">&#xf004;</span>
            ) : (
              <img className="w-9 h-9" alt={link.alt} src={link.src} />
            )}
          </Button>
        ))}

        <div className="absolute bottom-[184px] left-[50%] w-px h-40 bg-[linear-gradient(90deg,rgba(60,179,113,0)_0%,rgba(60,179,113,1)_100%)]" />

        <div className="absolute top-[184px] left-[50%] w-px h-40 bg-[linear-gradient(90deg,rgba(60,179,113,0)_0%,rgba(60,179,113,1)_100%)]" />
      </div>
    </section>
  );
};
