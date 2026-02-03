import { useState } from "react";
import { X } from "lucide-react";

export const VideoSection = (): JSX.Element => {
  const [currentVideo, setCurrentVideo] = useState<string | null>(null);

  const videos = [
    {
      id: "9ZEXyrrC4kc",
      title: "Welcome To Sri Lanka",
      thumb: "https://img.youtube.com/vi/9ZEXyrrC4kc/hqdefault.jpg",
      text: `Sri Lanka is a small island with so much to offer. From beautiful beaches and green mountains to ancient temples and local traditions, it’s a place full of variety and charm. You can enjoy peaceful views, explore wildlife, or relax in nature. Whether you love adventure, culture, or just a quiet escape, Sri Lanka is a place that has something for everyone. Every moment here feels special and the memories you make will stay with you for a long time.`,
    },
    {
      id: "OxFOuZCokLk",
      title: "Unique History Of Sri Lanka",
      thumb: "https://img.youtube.com/vi/OxFOuZCokLk/hqdefault.jpg",
      text: `Sri Lanka is a small island with a rich history and warm people. Its culture is full of tradition and kindness, seen in ancient cities and everyday life. You’ll enjoy green mountains, golden beaches, and peaceful temples. Every day here brings new experiences and memories that stay with you. Sri Lanka is a place that welcomes you and leaves a lasting impression.`,
    },
  ];

  return (
    <section className="w-full bg-gray-50 px-6 md:px-12 lg:px-24 py-16 space-y-24">

      {/* SECTION 1 */}
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* Text */}
        <div>
          <h2 className="text-4xl md:text-3xl  mb-4">
            {videos[0].title}
          </h2>
          <p className="[font-family:'Manrope',Helvetica] font-normal text-[#767676] text-sm md:text-base tracking-[0] leading-relaxed transition-transform duration-300 hover:-translate-x-1">
            {videos[0].text}
          </p>
        </div>

        {/* Video Preview */}
        <div
          className="relative rounded-xl overflow-hidden shadow-lg cursor-pointer group"
          onClick={() => setCurrentVideo(videos[0].id)}
        >
          <img
            src={videos[0].thumb}
            alt="Video preview"
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />

          <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition" />

          <div className="absolute inset-0 flex items-center justify-center">
            <span className="w-14 h-14 rounded-full bg-red-600 flex items-center justify-center shadow-lg">
              <span className="ml-1 border-l-[12px] border-y-[8px] border-y-transparent border-l-white" />
            </span>
          </div>
        </div>
      </div>

      {/* SECTION 2 */}
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* Video Preview */}
        <div
          className="relative rounded-xl overflow-hidden shadow-lg cursor-pointer group order-2 lg:order-1"
          onClick={() => setCurrentVideo(videos[1].id)}
        >
          <img
            src={videos[1].thumb}
            alt="Video preview"
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />

          <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition" />

          <div className="absolute inset-0 flex items-center justify-center">
            <span className="w-14 h-14 rounded-full bg-red-600 flex items-center justify-center shadow-lg">
              <span className="ml-1 border-l-[12px] border-y-[8px] border-y-transparent border-l-white" />
            </span>
          </div>
        </div>

        {/* Text */}
        <div className="order-1 lg:order-2">
          <h2 className="text-4xl  md:text-3xl  mb-4">
            {videos[1].title}
          </h2>
          <p className="[font-family:'Manrope',Helvetica] font-normal text-[#767676] text-sm md:text-base tracking-[0] leading-relaxed  transition-transform duration-300 hover:-translate-x-1">
            {videos[1].text}
          </p>
        </div>
      </div>

      {/* VIDEO MODAL */}
      {currentVideo && (
        <div className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center px-4">
          <div className="relative w-full max-w-4xl bg-black rounded-xl overflow-hidden">
            <button
              onClick={() => setCurrentVideo(null)}
              className="absolute top-3 right-3 z-10 bg-black/70 text-white rounded-full w-8 h-8 flex items-center justify-center"
            >
              <X size={16} />
            </button>

            <div className="relative pt-[56.25%]">
              <iframe
                className="absolute inset-0 w-full h-full"
                src={`https://www.youtube.com/embed/${currentVideo}?autoplay=1`}
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
