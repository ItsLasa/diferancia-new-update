import { Card, CardContent } from "../../../../components/ui/card";

const foodItems = [
  {
    image: "https://www.diferanciatours.com/assets/img/bg-img/food-img1.jpg",
    title: "Fine Dining",
    description: `Enjoy mouth-watering meals made with both local and international recipes. Our well-trained staff will give you friendly service and help you choose the perfect dish or drink. Whether you're having a romantic dinner or a family meal, we make sure your dining time is comfortable, elegant, and memorable.`,
  },
  {
    image: "https://www.diferanciatours.com/assets/img/bg-img/food-img2.jpg",
    title: "Sea Foods",
    description: `Sri Lanka is surrounded by the ocean, which means we have some of the freshest and tastiest seafood. You can enjoy many kinds of fish, prawns, crab, squid, oysters, and more. Cooked with local spices or grilled to perfection, seafood lovers will find pure joy in every bite.`,
  },
  {
    image: "https://www.diferanciatours.com/assets/img/bg-img/food-img3.jpg",
    title: "BBQ Nights",
    description: `Spend a perfect evening under the stars at our villa's BBQ night. The smell of grilled meats, the sound of laughter, and the beauty of an open-sky setting create a fun and unforgettable experience. It's the best way to enjoy great food and great company in a cozy outdoor space.`,
  },
  {
    image: "https://www.diferanciatours.com/assets/img/bg-img/food-img4.jpg",
    title: "Traditional Foods",
    description: `Sri Lankan traditional food is full of flavor and love. Try popular dishes like rice and curry, kottu roti, hoppers, string hoppers, and coconut sambol. These meals are made with spices like cinnamon, cardamom, and chili giving every dish a unique taste. Each recipe tells the story of our island's culture and history.`,
  },
];

export const FoodExperienceSection = (): JSX.Element => {
  return (
    <section className="relative w-full py-12 md:py-16 lg:py-20 px-4 sm:px-6 md:px-12 lg:px-20 xl:px-32 [background:url(..//section.png)_50%_50%_/_cover]">
      <div className="absolute w-full h-full top-0 left-0 bg-[#ffffffbf]" />

      <div className="relative flex flex-col max-w-7xl mx-auto items-start gap-8 md:gap-12 w-full">
        <header className="flex flex-wrap items-start justify-center w-full">
          <div className="flex flex-col w-full items-center pt-0 md:pt-6 lg:pt-12 pb-0 px-3">
            <div className="flex flex-col items-center pt-0 pb-1 px-0 w-full">
              <h2 className="[font-family:'Montez',Helvetica] font-normal text-black text-2xl md:text-3xl lg:text-[32px] text-center tracking-[0] leading-tight">
                Food &amp; Dining In Sri Lanka
              </h2>
            </div>
          </div>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 w-full">
          {foodItems.map((item, index) => (
            <Card
              key={index}
              className="flex flex-col bg-[#f7f7f7] rounded-[18px] shadow-[0px_4px_6px_#0000001a] overflow-hidden border-0 h-full"
            >
              <div
                className="w-full h-[220px] md:h-[260px] lg:h-[290px] bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${item.image})` }}
              />
              <CardContent className="flex flex-col items-start gap-4 md:gap-6 pt-4 md:pt-5 pb-4 md:pb-6 px-4 md:px-5 flex-1">
                <h3 className="w-full text-center [font-family:'Manrope',Helvetica] font-bold text-[#161920] text-lg md:text-xl tracking-[0] leading-tight">
                  {item.title}
                </h3>
                <p className="w-full text-center [font-family:'Manrope',Helvetica] font-normal text-[#767676] text-sm md:text-base tracking-[0] leading-relaxed">
                  {item.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
