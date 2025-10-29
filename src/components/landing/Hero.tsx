import Link from 'next/link';
import { Button } from '@/components/ui/button';

const AnimatedShape = ({ className, animation }: { className: string; animation: string }) => (
    <div
      className={`absolute rounded-full bg-accent/10 dark:bg-accent/20 filter blur-3xl ${className}`}
      style={{ animation: `${animation} 15s infinite alternate` }}
    />
  );
  
  const Hero = () => {
    return (
      <section className="relative overflow-hidden bg-background py-20 md:py-32 lg:py-40">
        <div className="container relative z-10 mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="font-headline text-4xl font-extrabold tracking-tight text-primary sm:text-5xl md:text-6xl lg:text-7xl">
              The Form Of Your Vision
            </h1>
            <p className="mt-6 text-lg text-muted-foreground md:text-xl">
              We are a digital agency that crafts beautiful, high-performing websites and applications to help your business thrive online.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button asChild size="lg" className="w-full sm:w-auto bg-accent hover:bg-accent/90 text-accent-foreground">
                <Link href="/contact">Schedule a Free Consultation</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="w-full sm:w-auto">
                <Link href="/portfolio">View Our Work</Link>
              </Button>
            </div>
          </div>
        </div>
        <div className="absolute inset-0 z-0 opacity-50">
          <AnimatedShape
            className="h-64 w-64 top-1/4 left-1/4"
            animation="float"
          />
          <AnimatedShape
            className="h-72 w-72 bottom-1/4 right-1/4"
            animation="float"
          />
           <AnimatedShape
            className="h-48 w-48 top-10 right-20"
            animation="float"
          />
           <AnimatedShape
            className="h-56 w-56 bottom-10 left-20"
            animation="float"
          />
        </div>
      </section>
    );
  };
  
  export default Hero;
  