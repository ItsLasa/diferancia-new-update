import { ChevronDownIcon, Phone, Mail, MessageCircle, SendHorizontal } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "../../../../components/ui/navigation-menu";

const navigationItems = [
  { label: "HOME", href: "#home" },
  { label: "ABOUT US", href: "#about" },
  { label: "DESTINATIONS", href: "#destinations", hasDropdown: true },
  { label: "PACKAGES", href: "#packages" },
  { label: "CONTACT US", href: "#contact" },
];

export const HeaderSection = (): JSX.Element => {
  return (
    <header className="w-full relative z-50">
      <div className="fixed top-0 left-0 right-0 px-8 py-6">
        <div className="max-w-7xl mx-auto">
          <nav className="flex h-20 items-center px-8 py-0 w-full bg-white rounded-full shadow-lg border border-solid border-white/10">
            <div className="flex items-center gap-3 pr-12 flex-shrink-0">
              <div className="w-12 h-12 bg-[#ff9a00] rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-white font-bold text-lg">D</span>
              </div>
              <div className="flex flex-col leading-tight">
                <span className="font-bold text-[#0e0e0e] text-sm">Diferancia</span>
                <span className="font-bold text-[#0e0e0e] text-sm">Tours</span>
              </div>
            </div>

            <div className="flex items-center justify-center flex-1">
              <NavigationMenu>
                <NavigationMenuList className="flex items-center gap-10">
                  {navigationItems.map((item, index) => (
                    <NavigationMenuItem key={index}>
                      <NavigationMenuLink
                        href={item.href}
                        className="flex items-center gap-1.5 px-0 py-6 font-semibold text-[#0e0e0e] text-sm tracking-wider leading-tight whitespace-nowrap hover:text-[#3cb371] transition-colors"
                      >
                        {item.label}
                        {item.hasDropdown && (
                          <ChevronDownIcon className="w-4 h-4" />
                        )}
                      </NavigationMenuLink>
                    </NavigationMenuItem>
                  ))}
                </NavigationMenuList>
              </NavigationMenu>
            </div>
          </nav>
        </div>
      </div>

      <div className="relative w-full h-screen bg-cover bg-center" style={{backgroundImage: 'url(https://images.pexels.com/photos/2398220/pexels-photo-2398220.jpeg?auto=compress&cs=tinysrgb&w=1600)'}}>
        <div className="absolute inset-0 bg-black/30" />

        <div className="absolute left-0 top-1/2 transform -translate-y-1/2 flex flex-col gap-4 pl-8">
          <a href="tel:+94772250223" className="flex items-center justify-center w-12 h-12 rounded-full bg-white/20 hover:bg-white/30 transition-colors cursor-pointer">
            <Phone className="w-5 h-5 text-white" />
          </a>
          <a href="mailto:support@diferanciatours.com" className="flex items-center justify-center w-12 h-12 rounded-full bg-white/20 hover:bg-white/30 transition-colors cursor-pointer">
            <Mail className="w-5 h-5 text-white" />
          </a>
          <a href="#" className="flex items-center justify-center w-12 h-12 rounded-full bg-white/20 hover:bg-white/30 transition-colors cursor-pointer">
            <MessageCircle className="w-5 h-5 text-white" />
          </a>
          <a href="#" className="flex items-center justify-center w-12 h-12 rounded-full bg-white/20 hover:bg-white/30 transition-colors cursor-pointer">
            <SendHorizontal className="w-5 h-5 text-white" />
          </a>
        </div>

        <div className="relative h-full flex flex-col items-start justify-center pl-20">
          <h1 className="text-7xl font-bold text-white mb-6 leading-tight max-w-3xl">
            DIFERANCIA<br />TOURS
          </h1>
          <p className="text-3xl font-semibold text-[#3cb371] mb-12">
            Journey beyond the Happy
          </p>
          <div className="flex items-center gap-6">
            <a href="#about" className="px-8 py-3 bg-[#3cb371] hover:bg-[#2a9b5a] text-white font-semibold rounded-full transition-colors flex items-center gap-2">
              About Us <span>→</span>
            </a>
            <a href="#contact" className="px-8 py-3 bg-[#3cb371] hover:bg-[#2a9b5a] text-white font-semibold rounded-full transition-colors flex items-center gap-2">
              Contact Us <span>→</span>
            </a>
          </div>
        </div>

        <div className="absolute right-0 top-1/2 transform -translate-y-1/2 flex flex-col gap-4 pr-8">
          <button className="flex items-center justify-center w-14 h-14 rounded-full bg-white text-[#0e0e0e] hover:bg-[#3cb371] hover:text-white transition-all font-bold text-xl">
            ←
          </button>
          <button className="flex items-center justify-center w-14 h-14 rounded-full bg-white text-[#0e0e0e] hover:bg-[#3cb371] hover:text-white transition-all font-bold text-xl">
            →
          </button>
        </div>
      </div>
    </header>
  );
};
