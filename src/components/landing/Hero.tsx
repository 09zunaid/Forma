import Link from 'next/link';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

const Hero = () => {
    return (
      <section className="w-full px-4 sm:px-8 md:px-16 lg:px-24 xl:px-40 py-16 md:py-24 lg:py-32">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="flex flex-col gap-8 text-center lg:text-left">
            <div className="flex flex-col gap-4">
              <h1 className="text-4xl font-bold leading-tight tracking-tighter text-primary dark:text-background sm:text-5xl md:text-6xl">
                Is Your Website Losing You Business?
              </h1>
              <p className="max-w-xl mx-auto lg:mx-0 text-base text-muted-foreground sm:text-lg">
                Forma is your partner in building a website that delivers results and reflects your vision. We bring structure and form to your ideas.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <Button asChild size="lg" className="flex w-full sm:w-auto min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-accent text-white text-base font-bold shadow-lg shadow-accent/30 transition-transform duration-300 hover:scale-105">
                <Link href="/contact">Start Your Project</Link>
              </Button>
              <Button asChild variant="ghost" size="lg" className="flex w-full sm:w-auto min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 text-primary dark:text-background text-base font-bold hover:text-accent dark:hover:text-accent transition-colors">
                <Link href="/portfolio">See Our Work</Link>
              </Button>
            </div>
          </div>
          <div className="relative mx-auto w-full max-w-md lg:max-w-none">
            <div className="relative aspect-square animate-float">
              <div className="absolute inset-0 bg-primary/5 dark:bg-background/5 rounded-full blur-3xl"></div>
              <div className="absolute inset-8 bg-accent/10 dark:bg-accent/10 rounded-full blur-3xl animate-[spin_20s_linear_infinite] [animation-direction:reverse]"></div>
              <div className="absolute inset-16 bg-primary/10 dark:bg-background/10 rounded-full blur-3xl animate-[spin_15s_linear_infinite]"></div>
              <Image 
                className="relative w-full h-full object-cover rounded-xl shadow-2xl shadow-primary/10 dark:shadow-black/20" 
                alt="Abstract representation of vision and form with geometric shapes and fluid lines." 
                src="https://images.unsplash.com/photo-1718043648125-a8155d3151b8?q=80&w=2070&auto=format&fit=crop"
                width={600}
                height={600}
                data-ai-hint="abstract swirls"
              />
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default Hero;
