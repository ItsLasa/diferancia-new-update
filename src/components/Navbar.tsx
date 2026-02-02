import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ChevronDown, Menu, X } from "lucide-react";
import { Button } from "./ui/button";
import logo from "../assets/logo.png";

export const Navbar = (): JSX.Element => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { label: "HOME", href: "/" },
    { label: "ABOUT US", href: "/about" },
    {
      label: "DESTINATIONS",
      href: "/#",
      hasDropdown: true,
      submenu: [
        { label: "Inbound", href: "/inbound" },
        { label: "Outbound", href: "/outbound" },
       
      ],
    },
    { label: "PACKAGES", href: "/packages" },
    { label: "CONTACT US", href: "/contact" },
  ];

  const isActive = (href: string) => {
    return location.pathname === href;
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-40 ">
      <div className="w-full px-4 sm:px-6 md:px-8 lg:px-12 py-4">
        <div className="max-w-7xl mx-auto bg-white rounded-full px-6 md:px-8 py-5 flex items-center justify-between">
          <Link
            to="/"
            className="flex items-center gap-2 flex-shrink-0"
          >
            <div className="w-22 h-14  overflow-hidden bg-white flex items-center justify-center">
              <img
                src={logo}
                alt="Diferancia Tours"
                className="w-full h-full object-cover"
              />
            </div>
            
          </Link>

          <div className="hidden lg:flex items-center gap-8">
            {navItems.map((item, index) => (
              <div key={index} className="relative group">
                <Link
                  to={item.href}
                  className={`flex items-center gap-1 font-semibold text-base transition-colors ${
                    isActive(item.href)
                      ? "text-[#3cb371]"
                      : "text-[#161920] hover:text-[#3cb371]"
                  }`}
                >
                  {item.label}
                  {item.hasDropdown && (
                    <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
                  )}
                </Link>

                {item.hasDropdown && item.submenu && (
                  <div className="absolute left-0 mt-0 w-48 bg-white rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 py-2">
                    {item.submenu.map((subitem, subindex) => (
                      <Link
                        key={subindex}
                        to={subitem.href}
                        className="block px-4 py-2 text-sm text-[#161920] hover:bg-[#f0f0f0] hover:text-[#3cb371] transition-colors"
                      >
                        {subitem.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className="w-6 h-6 text-[#161920]" />
            ) : (
              <Menu className="w-6 h-6 text-[#161920]" />
            )}
          </button>
        </div>

        {isOpen && (
          <div className="lg:hidden mt-4 bg-white rounded-2xl shadow-lg overflow-hidden">
            {navItems.map((item, index) => (
              <div key={index} className="border-b last:border-b-0">
                <button
                  onClick={() =>
                    item.hasDropdown && setIsDropdownOpen(!isDropdownOpen)
                  }
                  className={`w-full text-left px-6 py-4 font-semibold text-sm flex items-center justify-between transition-colors ${
                    isActive(item.href)
                      ? "text-[#3cb371] bg-[#f9f9f9]"
                      : "text-[#161920] hover:bg-[#f9f9f9]"
                  }`}
                >
                  <Link
                    to={item.href}
                    onClick={(e) => {
                      if (item.hasDropdown) {
                        e.preventDefault();
                      }
                      setIsOpen(false);
                    }}
                  >
                    {item.label}
                  </Link>
                  {item.hasDropdown && (
                    <ChevronDown
                      className={`w-4 h-4 transition-transform ${
                        isDropdownOpen ? "rotate-180" : ""
                      }`}
                    />
                  )}
                </button>

                {item.hasDropdown &&
                  item.submenu &&
                  isDropdownOpen && (
                    <div className="bg-[#f9f9f9] border-t">
                      {item.submenu.map((subitem, subindex) => (
                        <Link
                          key={subindex}
                          to={subitem.href}
                          onClick={() => setIsOpen(false)}
                          className="block px-8 py-3 text-sm text-[#161920] hover:bg-[#f0f0f0] hover:text-[#3cb371] transition-colors border-b last:border-b-0"
                        >
                          {subitem.label}
                        </Link>
                      ))}
                    </div>
                  )}
              </div>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};
