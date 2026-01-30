import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../../../../components/ui/card";

const experiencesData = [
  {
    id: 1,
    image: "https://www.diferanciatours.com/assets/img/bg-img/experience-img1.jpg",
    title: "Stay In The Tea & Beach Sri Lanka",
    description:
      "Sri Lanka offers a wonderful chance to enjoy its rich culture while relaxing in beautiful places. You can visit ancient temples, explore historic ruins, and learn about the country's long history. All this is possible while staying in lovely hotels surrounded by peaceful gardens, giving you a calm and private place to rest. Whether you choose the cool, green hills of the tea country or the warm, sandy beaches, you'll find comfort and beauty in every moment.",
  },
  {
    id: 2,
    image: "https://www.diferanciatours.com/assets/img/bg-img/experience-img2.jpg",
    title: "Sri Lankan National Parks",
    description:
      "Sri Lanka is home to some of the most beautiful and wild places in the world. This island has over 26 National Parks, in parks like Yala, Wilpattu, Udawalawe, and Minneriya, you can enjoy real adventures in nature. Watch a leopard resting on a tree branch, a group of elephants walking through the forest, or deer running across open fields. These national parks protect nature and give you the chance to see animals in their natural home. It's a peaceful and exciting experience you won't forget.",
  },
  {
    id: 3,
    image: "https://www.diferanciatours.com/assets/img/bg-img/experience-img3.jpg",
    title: "Sri Lankan Hospitality",
    description:
      "Sri Lanka is known worldwide for its warm and friendly people who treat visitors like family. From the moment you arrive, you'll be greeted with kindness and respect. Many hotels and resorts offer traditional Ayurvedic treatments using local herbs and oils to help you relax and heal naturally. Whether you're enjoying a cup of Ceylon tea in the hills, watching a peaceful sunset by the beach, or experiencing a soothing spa in a quiet garden, Sri Lankan hospitality makes every moment special and full of care. Here, you will feel truly welcomed and cared for.",
  },
  {
    id: 4,
    image: "https://www.diferanciatours.com/assets/img/bg-img/experience-img4.jpg",
    title: "Wildlife of Sri Lanka",
    description:
      "Sri Lanka's wildlife is full of life and wonder. You can find elephants, leopards, sloth bears, crocodiles, monkeys, and many types of birds especially inside national parks like Yala, Udawalawe, and Minneriya. The island has many different landscapes, such as rainforests, dry plains, and wetlands. This makes Sri Lanka one of the best places in the world for nature lovers, bird watchers, and wildlife photographers.",
  },
];

export const DestinationsOverviewSection = (): JSX.Element => {
  return (
    <section className="relative w-full py-12 md:py-16 lg:py-20 px-4 sm:px-6 md:px-12 lg:px-20 xl:px-32">
      

     

      <div className="flex flex-col max-w-7xl mx-auto items-start gap-8 md:gap-12 w-full">
        <div className="flex flex-wrap items-start justify-center w-full">
          <div className="flex flex-col w-full items-center px-3 py-0">
            <div className="flex flex-col items-center pt-0 pb-1 px-0 w-full">
              <h2 className="font-normal text-white text-2xl md:text-3xl lg:text-[42px] text-center tracking-[0] leading-tight">
                Experiences In Sri Lanka
              </h2>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 w-full">
          {experiencesData.map((experience) => (
            <Card
              key={experience.id}
              className="flex flex-col bg-[#f7f7f7] rounded-[18px] shadow-[0px_4px_6px_#0000001a] overflow-hidden border-0 h-full"
            >
              <div
                className="h-[180px] md:h-[204px] w-full bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${experience.image})` }}
              />

              <CardHeader className="pt-5 md:pt-7 px-4 md:px-6 pb-0">
                <CardTitle className="[font-family:'Manrope',Helvetica] font-bold text-[#161920] text-lg md:text-xl text-center tracking-[0] leading-tight">
                  {experience.title}
                </CardTitle>
              </CardHeader>

              <CardContent className="pt-4 md:pt-6 pb-6 md:pb-8 px-4 md:px-6 flex-1">
                <p className="[font-family:'Manrope',Helvetica] font-normal  text-[#767676] text-sm md:text-base text-center tracking-[0] leading-relaxed">
                  {experience.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
