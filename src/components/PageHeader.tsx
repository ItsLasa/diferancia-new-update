import { ChevronRight } from "lucide-react";

interface PageHeaderProps {
  title: string;
  breadcrumbs: Array<{
    label: string;
    href?: string;
  }>;
  backgroundImage?: string;
}

export const PageHeader = ({
  title,
  breadcrumbs,
  backgroundImage,
}: PageHeaderProps): JSX.Element => {
  return (
    <div
      className="relative w-full h-[300px] md:h-[400px] lg:h-[500px] bg-cover  bg-center flex items-center justify-center"
      style={{
        backgroundImage: backgroundImage
          ? `url(${backgroundImage})`
          : "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative z-10 text-center px-4">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
          {title}
        </h1>

        {/* Breadcrumb */}
        <div className="flex items-center justify-center gap-2 flex-wrap">
          {breadcrumbs.map((crumb, index) => (
            <div key={index} className="flex items-center gap-2">
              {crumb.href ? (
                <a
                  href={crumb.href}
                  className="text-white hover:text-[#3cb371] transition-colors font-medium"
                >
                  {crumb.label}
                </a>
              ) : (
                <span className="text-white font-medium">{crumb.label}</span>
              )}
              {index < breadcrumbs.length - 1 && (
                <ChevronRight className="w-5 h-5 text-white" />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
