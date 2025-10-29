import Link from 'next/link';
import { PenTool, ShoppingCart, TrendingUp, Wrench } from 'lucide-react';
import { Button } from '../ui/button';


const services = [
  {
    icon: <PenTool className="h-8 w-8 text-accent" />,
    title: 'Website Design & Development',
    description: 'Creating beautiful, custom websites that convert visitors into customers and build brand credibility.',
    link: '#',
  },
  {
    icon: <ShoppingCart className="h-8 w-8 text-accent" />,
    title: 'E-commerce Solutions',
    description: 'Building powerful online stores to sell your products effectively with secure transactions and easy management.',
    link: '#',
  },
  {
    icon: <TrendingUp className="h-8 w-8 text-accent" />,
    title: 'SEO Setup',
    description: 'Helping your business get found on Google by ideal customers, driving more traffic and quality leads.',
    link: '#',
  },
  {
    icon: <Wrench className="h-8 w-8 text-accent" />,
    title: 'Ongoing Maintenance & Support',
    description: 'Providing peace of mind with reliable website support, security, and updates, acting as your partner for growth.',
    link: '#',
  },
];

export default function Services() {
  return (
    <main className="flex flex-col gap-16 md:gap-24 py-16 md:py-24 px-4 sm:px-10">
        <div className="container mx-auto">
            <div className="flex flex-col gap-6 text-center items-center">
                <h1 className="font-display text-4xl font-bold leading-tight tracking-tight text-primary dark:text-secondary sm:text-5xl md:text-6xl max-w-3xl">
                    What We Offer
                </h1>
                <p className="text-base font-normal leading-relaxed text-muted-foreground dark:text-secondary/70 sm:text-lg max-w-2xl">
                    We transform your vision into a digital reality, creating beautiful, functional websites that drive results for your business.
                </p>
            </div>
        </div>

        <div className="container mx-auto grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-2">
            {services.map((service, index) => (
                <div key={index} className="flex flex-1 flex-col gap-4 rounded-xl border border-accent-2/80 bg-accent-2 dark:bg-primary/50 dark:border-white/10 p-6 transition-all hover:shadow-lg hover:-translate-y-1">
                    <div className="text-accent">
                        {service.icon}
                    </div>
                    <div className="flex flex-col gap-2">
                        <h2 className="text-primary dark:text-secondary text-xl font-display font-bold leading-tight">{service.title}</h2>
                        <p className="text-muted-foreground dark:text-secondary/70 text-sm font-normal leading-normal">{service.description}</p>
                        <Link href={service.link} className="text-accent text-sm font-bold mt-2 hover:underline">Learn More →</Link>
                    </div>
                </div>
            ))}
        </div>

        <div className="container mx-auto bg-primary dark:bg-secondary/80 rounded-xl">
            <div className="flex flex-col items-center justify-center gap-6 px-4 py-16 text-center sm:gap-8 sm:px-10 sm:py-20">
                <div className="flex flex-col gap-4">
                    <h1 className="text-secondary dark:text-primary font-display text-3xl font-bold leading-tight tracking-tight sm:text-4xl max-w-2xl">
                        Ready to Shape Your Vision?
                    </h1>
                    <p className="text-secondary/80 dark:text-primary/80 text-base font-normal leading-normal max-w-2xl">
                        Let's build something amazing together. Get in touch with us to start your project.
                    </p>
                </div>
                <div className="flex flex-1 justify-center">
                    <Button asChild className="min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-accent text-white text-base font-bold leading-normal tracking-[0.015em] hover:bg-accent/90 transition-opacity">
                        <Link href="/contact">Start Your Project</Link>
                    </Button>
                </div>
            </div>
        </div>
    </main>
  );
}