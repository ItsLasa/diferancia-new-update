import { FooterSection } from "../screens/ElementLight/sections/FooterSection";
import { Button } from "../components/ui/button";
import { Navbar } from "../components/Navbar";
import { PageHeader } from "../components/PageHeader";



export const PackagesPage = (): JSX.Element => {
  return (
    <div className="bg-white w-full">
    <Navbar />
      <PageHeader
              title="Packages"
              breadcrumbs={[
                { label: "Home", href: "/" },
                { label: "Packages" },
              ]}
              backgroundImage="https://www.diferanciatours.com/assets/img/bg-img/127.jpg"
            />
              
            
      <section className="w-full px-4 sm:px-6 md:px-12 lg:px-20 py-12 md:py-20">
        <div className="max-w-7xl mx-auto">

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Honeymoon packages",
                subtitle: "Celebrate Love in Paradise!",
                img: "https://www.diferanciatours.com/assets/img/bg-img/swiper-img5.jpg",
              },
              {
                title: "Experience Sri Lanka",
                subtitle: "Book now and create memories that last a lifetime!",
                img: "https://www.diferanciatours.com/assets/img/bg-img/swiper-img11.jpg",
              },
              {
                title: "Escape to Thailand",
                subtitle: "Escape to Thailand with Diferancia Tours!",
                img: "https://www.diferanciatours.com/assets/img/bg-img/thailand1.jpg",
              },
              {
                title: "Enchanting Malaysia",
                subtitle: "Enchanting Malaysia Awaits!",
                img: "https://www.diferanciatours.com/assets/img/bg-img/out2.jpg",
              },
            ].map((pkg, idx) => (
              <article
                key={idx}
                className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden flex flex-col"
              >
                <div className="h-40 md:h-44 lg:h-48 w-full overflow-hidden">
                  <img
                    src={pkg.img}
                    alt={pkg.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="p-4 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-lg font-semibold text-[#161920] mb-1">
                      {pkg.title}
                    </h3>
                    <p className="text-sm text-[#777777] mb-4">{pkg.subtitle}</p>
                  </div>

                  <div>
                    <a className="text-sm text-[#777777] hover:text-[#3cb371] transition-colors">
                      Click to read more...
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="max-w-7xl mx-auto">

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Escape to Bali",
                subtitle: "Celebrate Love in Paradise!",
                img: "https://www.diferanciatours.com/assets/img/bg-img/indonesia1.jpg",
              },
              {
                title: "Experience Sri Lanka",
                subtitle: "Book now and create memories that last a lifetime!",
                img: "https://www.diferanciatours.com/assets/img/bg-img/swiper-img11.jpg",
              },
              {
                title: "Escape to Thailand",
                subtitle: "Escape to Thailand with Diferancia Tours!",
                img: "https://www.diferanciatours.com/assets/img/bg-img/thailand1.jpg",
              },
              {
                title: "Enchanting Malaysia",
                subtitle: "Enchanting Malaysia Awaits!",
                img: "https://www.diferanciatours.com/assets/img/bg-img/out2.jpg",
              },
            ].map((pkg, idx) => (
              <article
                key={idx}
                className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden flex flex-col"
              >
                <div className="h-40 md:h-44 lg:h-48 w-full overflow-hidden">
                  <img
                    src={pkg.img}
                    alt={pkg.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="p-4 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-lg font-semibold text-[#161920] mb-1">
                      {pkg.title}
                    </h3>
                    <p className="text-sm text-[#777777] mb-4">{pkg.subtitle}</p>
                  </div>

                  <div>
                    <a className="text-sm text-[#777777] hover:text-[#3cb371] transition-colors">
                      Click to read more...
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>


        <div className="max-w-7xl mx-auto">

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Honeymoon packages",
                subtitle: "Celebrate Love in Paradise!",
                img: "https://www.diferanciatours.com/assets/img/bg-img/swiper-img5.jpg",
              },
              {
                title: "Experience Sri Lanka",
                subtitle: "Book now and create memories that last a lifetime!",
                img: "https://www.diferanciatours.com/assets/img/bg-img/swiper-img11.jpg",
              },
              {
                title: "Escape to Thailand",
                subtitle: "Escape to Thailand with Diferancia Tours!",
                img: "https://www.diferanciatours.com/assets/img/bg-img/thailand1.jpg",
              },
              {
                title: "Enchanting Malaysia",
                subtitle: "Enchanting Malaysia Awaits!",
                img: "https://www.diferanciatours.com/assets/img/bg-img/out2.jpg",
              },
            ].map((pkg, idx) => (
              <article
                key={idx}
                className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden flex flex-col"
              >
                <div className="h-40 md:h-44 lg:h-48 w-full overflow-hidden">
                  <img
                    src={pkg.img}
                    alt={pkg.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="p-4 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-lg font-semibold text-[#161920] mb-1">
                      {pkg.title}
                    </h3>
                    <p className="text-sm text-[#777777] mb-4">{pkg.subtitle}</p>
                  </div>

                  <div>
                    <a className="text-sm text-[#777777] hover:text-[#3cb371] transition-colors">
                      Click to read more...
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="max-w-7xl mx-auto">

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Honeymoon packages",
                subtitle: "Celebrate Love in Paradise!",
                img: "https://www.diferanciatours.com/assets/img/bg-img/swiper-img5.jpg",
              },
              {
                title: "Experience Sri Lanka",
                subtitle: "Book now and create memories that last a lifetime!",
                img: "https://www.diferanciatours.com/assets/img/bg-img/swiper-img11.jpg",
              },
              {
                title: "Escape to Thailand",
                subtitle: "Escape to Thailand with Diferancia Tours!",
                img: "https://www.diferanciatours.com/assets/img/bg-img/thailand1.jpg",
              },
              {
                title: "Enchanting Malaysia",
                subtitle: "Enchanting Malaysia Awaits!",
                img: "https://www.diferanciatours.com/assets/img/bg-img/out2.jpg",
              },
            ].map((pkg, idx) => (
              <article
                key={idx}
                className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden flex flex-col"
              >
                <div className="h-40 md:h-44 lg:h-48 w-full overflow-hidden">
                  <img
                    src={pkg.img}
                    alt={pkg.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="p-4 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-lg font-semibold text-[#161920] mb-1">
                      {pkg.title}
                    </h3>
                    <p className="text-sm text-[#777777] mb-4">{pkg.subtitle}</p>
                  </div>

                  <div>
                    <a className="text-sm text-[#777777] hover:text-[#3cb371] transition-colors">
                      Click to read more...
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <FooterSection />
    </div>
  );
};
