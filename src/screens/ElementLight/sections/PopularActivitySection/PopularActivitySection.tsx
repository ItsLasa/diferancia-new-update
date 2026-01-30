import { Card, CardContent } from "../../../../components/ui/card";

const activities = [
  {
    image:
      "https://www.diferanciatours.com/assets/img/bg-img/popular-img1.jpg",
    title: "SURFING",
    description:
      "Sri Lanka is a popular surfing destination, with warm waters and perfect waves. Whether you're a beginner or experienced, beaches like Arugam Bay, Weligama, and Hikkaduwa offer great spots to ride the waves and enjoy the ocean.",
    titleColor: "text-[#161920]",
  },
  {
    image:
      "https://www.diferanciatours.com/assets/img/bg-img/popular-img2.jpg",
    title: "BEACH PARTIES",
    description:
      "Enjoy fun beach parties with music, dancing, games, food, and good vibes by the sea. Whether it's a casual hangout or a themed event, beach parties in Sri Lanka are full of life and unforgettable moments.",
    titleColor: "text-[#161920]",
  },
  {
    image:
      "https://www.diferanciatours.com/assets/img/bg-img/popular-img3.jpg",
    title: "BOAT RIDES",
    description:
      "Explore Sri Lanka's waters with exciting boat rides. Go whale watching in Mirissa, enjoy a calm river cruise, or take a mangrove safari to see birds, monkeys, and more. Each ride offers a new view of the island's natural beauty.",
    titleColor: "text-[#161920]",
  },
  {
    image:
      "https://www.diferanciatours.com/assets/img/bg-img/popular-img4.jpg",
    title: "HIKING & NATURE TRAILS",
    description:
      "Sri Lanka has many beautiful places for hiking, with green mountains, tea fields, and waterfalls. Popular trails like Ella Rock, Little Adam's Peak, Hanthana and Sigiriya offer amazing views and peaceful nature. It's a perfect way to enjoy fresh air and explore the island's natural beauty.",
    titleColor: "text-[#161920]",
  },
];

export const PopularActivitySection = (): JSX.Element => {
  return (
    <section className="relative w-full py-12 md:py-16 lg:py-20 px-4 sm:px-6 md:px-12 lg:px-20 xl:px-32 overflow-hidden">
      {/* Background with blurred green water and palm trees */}
      {/* <div
        className="absolute inset-0 bg-contain  bg-no-repeat"
        style={{
          backgroundImage:
            "url(https://www.diferanciatours.com/assets/img/bg-img/body-bg-img2.jpg)",
        }}
      >
        <div className="absolute inset-0 backdrop-blur-sm" />
        <div className="absolute inset-0 bg-[#161920]/70" />
      </div> */}

      <div className="relative flex flex-col max-w-7xl mx-auto items-start gap-8 md:gap-12 w-full">
        {/* Section Title */}
        <header className="flex flex-wrap items-start justify-center w-full">
          <div className="flex flex-col w-full items-center pt-0 md:pt-6 lg:pt-12 pb-0 px-3">
            <div className="flex flex-col items-center pt-0 pb-1 px-0 w-full">
            <h2 className="font-normal text-white text-2xl md:text-3xl lg:text-[42px] text-center tracking-[0] leading-tight">
                Popular Activities
              </h2>
            </div>
          </div>
        </header>

        {/* Activity Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
          {activities.map((activity, index) => (
            <Card
              key={index}
              className="flex flex-col bg-white rounded-[18px] shadow-[0px_4px_6px_#0000001a] overflow-hidden border-0 h-full hover:shadow-xl transition-shadow"
            >
              <div className="w-full h-[220px] md:h-[260px] lg:h-[290px] overflow-hidden">
                <img
                  src={activity.image}
                  alt={activity.title}
                  className="w-full h-full object-cover rounded-t-[18px]"
                />
              </div>
              <CardContent className="flex flex-col items-start gap-4 md:gap-6 pt-4 md:pt-5 pb-4 md:pb-6 px-4 md:px-5 flex-1">
                <h3
                  className={`w-full text-center [font-family:'Manrope',Helvetica] font-bold ${activity.titleColor} text-lg md:text-xl tracking-[0] leading-tight`}
                >
                  {activity.title}
                </h3>
                <p className="w-full text-center [font-family:'Manrope',Helvetica] font-normal text-[#767676] text-sm md:text-base tracking-[0] leading-relaxed">
                  {activity.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
