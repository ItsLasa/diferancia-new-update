import { Separator } from "../../../../components/ui/separator";
import { MapPin, Phone, Mail, MessageCircleMore, MessageCircle } from "lucide-react";
import footerlogo from "../../../../assets/footer-logo.png";

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

const quickLinksColumn1 = [
  { label: "Home", href: "/" },
  { label: "Sri Lanka", href: "/inbound" },
  { label: "Custom Tours", href: "/outbound" },
  { label: "Packages", href: "/packages" },
];
const quickLinksColumn2 = [
  { label: "Destinations", href: "/inbound" },
  { label: "Special Offers", href: "/packages" },
  { label: "About Us", href: "/about" },
  { label: "Contact Us", href: "/contact" },
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

        <Separator className="my-6 bg-[#ffffff1a]" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 lg:gap-16 py-8 md:py-12">
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <img
                src={footerlogo}
                alt="Diferancia Tours"
                className="w-46 h-28 "
              />
            </div>
            <p className="font-normal text-[#b8b8b8] text-sm md:text-base tracking-[0] leading-relaxed">
              We aim to offer top-quality service and become Sri Lanka's leading, most trusted travel company.
            </p>
            <div className="flex items-center gap-3">
              <a href="tel:+94772250223" className="flex items-center justify-center w-10 h-10 rounded-full bg-[#2a2d35] hover:bg-[#3cb371] transition-colors cursor-pointer">
                <Phone className="w-4 h-4 text-white" />
              </a>
              <a href="mailto:support@diferanciatours.com" className="flex items-center justify-center w-10 h-10 rounded-full bg-[#2a2d35] hover:bg-[#3cb371] transition-colors cursor-pointer">
                <Mail className="w-4 h-4 text-white" />
              </a>
              <a href="https://wa.me/94772250223" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-10 h-10 rounded-full bg-[#2a2d35] hover:bg-[#3cb371] transition-colors cursor-pointer">
                <MessageCircleMore className="w-4 h-4 text-white" />
              </a>

               <a href="https://m.me/profile.php?id=100063546514111" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-10 h-10 rounded-full bg-[#2a2d35] hover:bg-[#3cb371] transition-colors cursor-pointer">
                <MessageCircle className="w-4 h-4 text-white" />
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
                    href={link.href}
                    className="font-normal text-[#b8b8b8] text-sm md:text-base tracking-[0] leading-relaxed hover:text-[#3cb371] transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
              <div className="flex flex-col gap-3">
                {quickLinksColumn2.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    className="font-normal text-[#b8b8b8] text-sm md:text-base tracking-[0] leading-relaxed hover:text-[#3cb371] transition-colors"
                  >
                    {link.label}
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

        <div className="flex items-center justify-center -mb-6 text-center">
          <span className="font-normal text-[#b8b8b8] text-xs md:text-base tracking-[0] leading-relaxed">
© 2026 Diferancia Tours. All Rights Reserved. Designed & Developed by <a href="https://www.everefficient.lk/" target="_blank" rel="noopener noreferrer" className=" hover:text-blue-400">EVER EFFICIENT Business Management (Pvt) Ltd.  </a>          </span>
        </div>
      </div>
    </footer>
  );
};
