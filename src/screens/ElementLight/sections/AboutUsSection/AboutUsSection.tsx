import { useState } from "react";
import { ChevronRightIcon, X } from "lucide-react";
import { Button } from "../../../../components/ui/button";

export const AboutUsSection = (): JSX.Element => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const videoId = "dQw4w9WgXcQ"; // replace with your actual YouTube video ID

  return (
    <section className="flex flex-col w-full items-start py-12 md:py-16 lg:py-20 px-4 sm:px-6 md:px-12 lg:px-20 xl:px-32 relative">
      <div className="absolute w-[8.85%] top-[calc(50.00%_-_140px)] left-[81.15%] h-[280px] bg-[#f7921f] rounded-[280px] blur-[100px] opacity-50 hidden lg:block" />

      <div className="flex flex-col  lg:flex-row items-center justify-center gap-8 lg:gap-12 relative self-stretch w-full max-w-7xl mx-auto">
        <div className="relative w-full lg:w-1/2 flex justify-center">
          <div className="relative w-[90%] max-w-md">
            {/* big left image */}
            <div className="rounded-[32px] ml-4 overflow-hidden shadow-xl">
              <img
                src="https://www.diferanciatours.com/assets/img/bg-img/7.jpg"
                alt="Traveler taking photos by the lake"
                className="w-full h-full object-cover"
              />
            </div>

            {/* middle card with play button */}
            <div className="absolute -right-10 top-14 w-[80%] rounded-[32px] overflow-hidden shadow-2xl bg-white">
              <div className="relative">
                <img
                  src="https://www.diferanciatours.com/assets/img/bg-img/8.jpg"
                  alt="Traveler pointing at mountains"
                  className="w-full h-full object-cover"
                />
                <button
                  type="button"
                  onClick={() => setIsVideoOpen(true)}
                  className="absolute inset-0 flex items-center justify-center"
                  aria-label="Play introduction video"
                >
                  <span className="flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-full bg-[#2ecc71] shadow-lg">
                    <span className="ml-0.5 border-l-[10px] border-l-white border-y-[6px] border-y-transparent" />
                  </span>
                </button>
              </div>
            </div>

            {/* small bottom image */}
            

            {/* subtle dotted decoration */}
            <div className="absolute -left-2 bottom-6 grid grid-rows-4 gap-1 opacity-30 text-[#d1d5db] text-[6px] leading-none">
              {Array.from({ length: 4 }).map((_, row) => (
                <div key={row} className="flex gap-1">
                  {Array.from({ length: 4 }).map((_, col) => (
                    <span key={col}>▪</span>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col w-full mt-8 lg:w-1/2 items-start">
          <div className="relative w-full">
            <div className="flex flex-col items-start mb-6">
              <h2 className=" font-normal text-[#3cb371] text-2xl md:text-3xl lg:text-[32px] tracking-[0] leading-tight">
                Welcome To Diferancia Tours!
              </h2>
            </div>

            <div className="flex items-start mb-8">
              <div className="flex flex-col items-start">
                <p className="[font-family:'Manrope',Helvetica] font-normal text-[#767676] text-sm md:text-base tracking-[0] leading-relaxed">
                  At Diferencia Tours, we open the door to unforgettable
                  adventures across Sri Lanka. From ancient heritage sites and misty mountains to
                  golden beaches and lush rainforests, we create meaningful travel experiences
                  just for you. Our dedicated team is here to guide you with care, passion, and
                  local expertise. Whether you&#39;re a solo traveler, a couple, or a group, we
                  offer personalized tours that match your dreams. Start your journey with us and
                  discover the true heart of Sri Lanka.
                </p>
              </div>
            </div>

            <Button className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 py-6 px-6 md:px-8 bg-[#3cb371] hover:bg-[#35a063] rounded-[80px] [font-family:'Manrope',Helvetica] font-bold text-white text-sm md:text-base">
              More About Us
              <ChevronRightIcon className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>

      {isVideoOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4">
          <div className="relative w-full max-w-3xl bg-black rounded-2xl overflow-hidden shadow-2xl">
            <button
              type="button"
              onClick={() => setIsVideoOpen(false)}
              className="absolute top-3 right-3 z-10 inline-flex items-center justify-center w-8 h-8 rounded-full bg-black/70 text-white hover:bg-black transition-colors"
              aria-label="Close video"
            >
              <X className="w-4 h-4" />
            </button>
            <div className="relative w-full pt-[56.25%]">
              <iframe
                className="absolute inset-0 w-full h-full"
                src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
                title="Diferancia Tours introduction video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
