import Image from "next/image";

const logos = [
    { alt: 'Notion Logo', src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBrccYybs_dBgxSIs9JtvJbttLgJbTuI0DuQuB48DuW0Wdw8Ie276k68-hKAbrKBWE0bAi91-kxYjdZNnSuFnrvSeH1meo1wXWQ1zj4fuEpfKRT4mlp0Ihj9Ej368Obl3sL4rCBP0n2I5ViA9Wi1kEojJwDg99J9aPoNoaMjkzlPJzptAipK70x7eVlm_lQv9YvdMs1g8ea5qrC8wyY-DxbL8iiZfYqbe_gNEZs8prslSD1uXvo9CcuFROVL1QOz7gXBPujIAHIueg', hint: 'Notion logo' },
    { alt: 'GitHub Logo', src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDozNCEqdHI80nc9mR6MBgfusgUcEnOl99mPmlQpk7uyk0fdpDUP1AoPVqfOkI7ZKEixL7PNE5j43l82PRboQfMScu5bsJPI6kHLop25BHaO0JrvsLhRZ8XP433nG9YomSgjN4Zhwa1Pg8d6B_ozf5OxoJaJetXp_OZgTp5GHn_aw8reXAhhBdP20Km6f_tGPlqEmUtXEJTWa0OmLdV-ioOzysfG-g8bGtHpxXX_SZ_ryuCQ_BrwCZnmpeYxnpgSX7x6UsoQdRr3NI', hint: 'GitHub logo' },
    { alt: 'Framer Logo', src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDRUmD5Az2kZATpuekvXBFReqdlxvRWMhfZrgbCsObmyviFf3ZNsr0FDARAuRagzy1tF0TohrrxW1pKqT2MYc9np23YxHePJ643tCSXnug3_1Cojr4Ss-DHxYYnAbOvsW6wBFC-amaYk2LijPN49hVJ9IGIsRGin596aiKo4T9jfQ1vpVZqYTgxgdPHlfQ4hAVPhlVOCP5TPzSKsDdXiU9oYJwSVTAlwfux3lALSFBTECSFssTlUo4im4qOSgZmwDLwYmc9spNYEEA', hint: 'Framer logo' },
    { alt: 'Figma Logo', src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA6KQE48giVt6zjrpNyKhRwA8_lnvX6BLUdIOtq8ldBCVlFqXNPqjHuWLPTaR1XLHsJ8DKObkFy4TER7onGHwaAGx_WJjMLfCZwYJDEevNLpeSryDUcf-s3ZrzFaDbTpRSNVYZKySxmVL1IUTOpsQNaFALokeWhCk17Nri1iRD2V5QDwGWu0ZmIljMDy-tl2QL5r6GEsMoge-weUCaRBZEXBZ0aDcw174A4b40klwR-fy5PfZFlrMYSbXDDQz8lL-rxJX7_vVr5dKQ', hint: 'Figma logo' },
    { alt: 'Sketch Logo', src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB5MMo0I9dg5VPV462AmyTxvPNn3heqV444kbnfvqt45UezQaBuK5wyH383JsqHxLO1OfL_rf7R1_U5zG4ItIKY7PIC5PzsIiUuVLUqwWEL6uGx3g1E3GlaWTwUACeYSg0Qeo_NXkOKy_vIUQ2RNeuqboKZAZCVdMpiMCY2JUbmISGCkLGEUVSuj2yF2TwMgeTXNh64bou_gwMYLS1ATYZ254jS2NNCKq5gr3TqHy35fWVFaHIpI-D5SmlcUnsibvlJyHeQhKbj7qo', hint: 'Sketch logo' },
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
                className="h-8 w-auto object-contain text-primary dark:text-background" 
                src={logo.src}
                width={120}
                height={32}
                data-ai-hint={logo.hint}
                alt={logo.alt}
                unoptimized
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default SocialProof;
