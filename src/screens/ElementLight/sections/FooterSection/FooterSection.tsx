import { Separator } from "../../../../components/ui/separator";
import { MapPin, Phone, Mail } from "lucide-react";

const contactInfo = [
  {
    Icon: MapPin,
    title: "Location",
    content: "No. 15/1/C, New Digana Road, Kundasale, Kandy, Sri Lanka",
  },
  {
    Icon: Phone,
    title: "Phone",
    content: "+94 77 225 0223",
  },
  {
    Icon: Mail,
    title: "Mail Us",
    content: "support@diferanciatours.com",
  },
];

const quickLinksColumn1 = ["Home", "Sri Lanka", "Custom Tours", "Packages"];
const quickLinksColumn2 = [
  "Destinations",
  "Special Offers",
  "About Us",
  "Contact Us",
];

const galleryImages = [
  "https://www.diferanciatours.com/assets/img/bg-img/36.jpg",
  "https://www.diferanciatours.com/assets/img/bg-img/37.jpg",
  "https://www.diferanciatours.com/assets/img/bg-img/38.jpg",
  "https://www.diferanciatours.com/assets/img/bg-img/39.jpg",
  "https://www.diferanciatours.com/assets/img/bg-img/40.jpg",
  "https://www.diferanciatours.com/assets/img/bg-img/41.jpg",

];

export const FooterSection = (): JSX.Element => {
  return (
    <footer className="relative w-full bg-[#1a1d24]">
      <div className="absolute w-full h-full top-0 left-0 bg-gradient-to-br from-[#1a1d24] via-[#1a1d24] to-[#15171d]" />

      <div className="relative container mx-auto px-4 sm:px-6 md:px-12 lg:px-20 xl:px-32 py-8 md:py-12">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 lg:gap-12 mb-12">
          {contactInfo.map((info, index) => {
            const Icon = info.Icon;
            return (
              <div key={index} className="flex items-center gap-4 w-full lg:w-auto">
                <div className="flex items-center justify-center w-16 h-16 md:w-16 md:h-16 rounded-full bg-[#2a2d35] flex-shrink-0">
                  <Icon className="w-6 h-6 md:w-8 md:h-8 text-white" />
                </div>
                <div className="flex flex-col gap-1">
                  <h3 className="font-bold text-white text-base md:text-lg tracking-[0] leading-tight">
                    {info.title}
                  </h3>
                  <p className="font-normal text-[#b8b8b8] text-sm md:text-sm tracking-[0] leading-relaxed">
                    {info.content}
                  </p>
                </div>
                {index < contactInfo.length - 1 && (
                  <Separator
                    orientation="vertical"
                    className="h-20 bg-[#ffffff1a] hidden lg:block ml-8"
                  />
                )}
              </div>
            );
          })}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 lg:gap-16 py-8 md:py-12">
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <img
                src="https://www.diferanciatours.com/assets/img/core-img/logo_black.png"
                alt="Diferancia Tours"
                className="w-46 h-28 "
              />
            </div>
            <p className="font-normal text-[#b8b8b8] text-sm md:text-base tracking-[0] leading-relaxed">
              We aim to offer top-quality service and become Sri Lanka's leading, most trusted travel company.
            </p>
            <div className="flex items-center gap-3">
              <a href="#" className="flex items-center justify-center w-10 h-10 rounded-full bg-[#2a2d35] hover:bg-[#3cb371] transition-colors cursor-pointer">
                <Phone className="w-4 h-4 text-white" />
              </a>
              <a href="#" className="flex items-center justify-center w-10 h-10 rounded-full bg-[#2a2d35] hover:bg-[#3cb371] transition-colors cursor-pointer">
                <Mail className="w-4 h-4 text-white" />
              </a>
              <a href="#" className="flex items-center justify-center w-10 h-10 rounded-full bg-[#2a2d35] hover:bg-[#3cb371] transition-colors cursor-pointer">
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
              </a>

            </div>
          </div>

          <div className="flex flex-col">
            <div className="relative pb-8">
              <h3 className="font-bold text-white text-lg md:text-xl tracking-[0] leading-tight">
                Quick Links
              </h3>
              <div className="absolute left-0 bottom-[20px] w-[60px] h-0.5 bg-[#3cb371] rounded-sm" />
              <div className="absolute left-[65px] bottom-[20px] w-2.5 h-0.5 bg-[#3cb371] rounded-sm" />
            </div>
            <div className="grid grid-cols-2 gap-x-8 gap-y-3">
              <div className="flex flex-col gap-3">
                {quickLinksColumn1.map((link, index) => (
                  <a
                    key={index}
                    href="#"
                    className="font-normal text-[#b8b8b8] text-sm md:text-base tracking-[0] leading-relaxed hover:text-[#3cb371] transition-colors"
                  >
                    {link}
                  </a>
                ))}
              </div>
              <div className="flex flex-col gap-3">
                {quickLinksColumn2.map((link, index) => (
                  <a
                    key={index}
                    href="#"
                    className="font-normal text-[#b8b8b8] text-sm md:text-base tracking-[0] leading-relaxed hover:text-[#3cb371] transition-colors"
                  >
                    {link}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="flex flex-col">
            <div className="relative pb-8">
              <h3 className="font-bold text-white text-lg md:text-xl tracking-[0] leading-tight">
                Gallery Post
              </h3>
              <div className="absolute left-0 bottom-[20px] w-[60px] h-0.5 bg-[#3cb371] rounded-sm" />
              <div className="absolute left-[65px] bottom-[20px] w-2.5 h-0.5 bg-[#3cb371] rounded-sm" />
            </div>
            <div className="grid grid-cols-3 gap-2">
              {galleryImages.map((image, index) => (
                <div
                  key={index}
                  className="aspect-square rounded-lg overflow-hidden cursor-pointer hover:opacity-80 transition-opacity"
                >
                  <img
                    src={image}
                    alt={`Gallery ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        <Separator className="my-6 bg-[#ffffff1a]" />

        <div className="flex items-center justify-center py-4 text-center">
          <span className="font-normal text-[#b8b8b8] text-xs md:text-sm tracking-[0] leading-relaxed">
            2026 © | All Rights Reserved | Diferancia Tours | Designed &amp; Developed by EVER EFFICIENT Business Management (Pvt) Ltd
          </span>
        </div>
      </div>
    </footer>
  );
};
