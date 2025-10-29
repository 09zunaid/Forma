import Image from "next/image";

const logos = [
    { alt: 'Notion Logo', src: 'https://img.icons8.com/color/48/notion.png', hint: 'Notion logo' },
    { alt: 'GitHub Logo', src: 'https://img.icons8.com/ios-filled/50/github.png', hint: 'GitHub logo' },
    { alt: 'Framer Logo', src: 'https://img.icons8.com/color/48/framer.png', hint: 'Framer logo' },
    { alt: 'Figma Logo', src: 'https://img.icons8.com/color/48/figma--v1.png', hint: 'Figma logo' },
    { alt: 'Sketch Logo', src: 'https://img.icons8.com/color/48/sketch-logo.png', hint: 'Sketch logo' },
];

const SocialProof = () => {
  return (
    <section className="w-full px-4 sm:px-8 md:px-16 lg:px-24 xl:px-40 pb-16 md:pb-24 lg:pb-32">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-8">
        <p className="text-sm font-medium text-muted-foreground">
          Trusted by forward-thinking brands
        </p>
        <div className="flex w-full flex-wrap items-center justify-center gap-x-12 gap-y-8 sm:justify-between">
          {logos.map((logo, index) => (
            <Image 
                key={index}
                className="h-8 w-auto object-contain text-primary dark:text-background dark:invert" 
                data-alt={logo.alt} 
                src={logo.src}
                width={32}
                height={32}
                data-ai-hint={logo.hint}
                alt={logo.alt}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
