import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Award, Goal, Users } from 'lucide-react';
import placeholderImages from '@/lib/placeholder-images.json';

const founder = {
  name: 'Mohammad Zunaid',
  title: 'Founder & Lead Developer',
  imageUrl: placeholderImages.about.founder.imageUrl,
  imageHint: placeholderImages.about.founder.imageHint,
};

const team = {
  imageUrl: placeholderImages.about.team.imageUrl,
  imageHint: placeholderImages.about.team.imageHint,
}

const stats = [
  { value: '5+', label: 'Years of Experience' },
  { value: '50+', label: 'Projects Completed' },
  { value: '99%', label: 'Client Satisfaction' },
  { value: '100%', label: 'Passion for Code' },
];

const values = [
    {
      icon: <Goal className="h-8 w-8 text-accent" />,
      title: 'Our Mission',
      description: 'To empower businesses by creating beautiful, functional, and impactful digital experiences. We believe that a great website is a powerful tool for growth and connection.',
    },
    {
      icon: <Award className="h-8 w-8 text-accent" />,
      title: 'Our Commitment',
      description: 'We are committed to quality, transparency, and partnership. We work closely with our clients at every step, ensuring the final product not only meets but exceeds expectations.',
    },
    {
      icon: <Users className="h-8 w-8 text-accent" />,
      title: 'Our Team',
      description: 'We are a small, dedicated team of designers and developers who are passionate about what we do. We combine our diverse skills to deliver comprehensive and innovative solutions.',
    },
  ];

export default function About() {
  return (
    <>
      <section className="bg-background">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            <div className="space-y-6 text-center lg:text-left">
              <h1 className="font-headline text-4xl font-bold tracking-tight text-primary sm:text-5xl">
                The Story Behind Forma
              </h1>
              <p className="text-lg text-muted-foreground">
                Forma was born from a simple idea: that powerful, elegant web design should be accessible to everyone. Founded by Mohammad Zunaid, a developer with a passion for clean code and user-centric design, our agency is built on a foundation of creativity, collaboration, and a relentless pursuit of excellence. We're not just building websites; we're crafting digital experiences that give form to your vision.
              </p>
              <Button asChild size="lg" className="w-full sm:w-auto bg-accent hover:bg-accent/90 text-accent-foreground">
                <Link href="/contact">Let's Work Together</Link>
              </Button>
            </div>
            <div className="relative h-80 w-full lg:h-[400px]">
              <Image
                src={team.imageUrl}
                alt="The Forma team collaborating"
                fill
                className="object-cover rounded-xl shadow-lg"
                data-ai-hint={team.imageHint}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-secondary/50">
        <div className="container mx-auto px-4 py-16 md:py-24">
            <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
                {stats.map((stat) => (
                    <div key={stat.label} className="text-center">
                        <p className="text-4xl font-bold text-accent sm:text-5xl">{stat.value}</p>
                        <p className="mt-2 text-sm font-medium text-muted-foreground">{stat.label}</p>
                    </div>
                ))}
            </div>
        </div>
      </section>

      <section id="values" className="bg-background">
        <div className="container mx-auto px-4 py-16 md:py-24">
            <div className="mb-12 text-center">
                <h2 className="font-headline text-3xl font-bold tracking-tight text-primary sm:text-4xl">Our Core Values</h2>
                <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
                    The principles that guide everything we do.
                </p>
            </div>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                {values.map((value) => (
                    <div key={value.title} className="text-center p-8 border rounded-lg bg-card shadow-sm">
                        <div className="inline-block rounded-full bg-accent/10 p-4 mb-4">
                            {value.icon}
                        </div>
                        <h3 className="font-headline text-xl font-semibold mb-2">{value.title}</h3>
                        <p className="text-muted-foreground">{value.description}</p>
                    </div>
                ))}
            </div>
        </div>
      </section>

      <section className="bg-secondary/50">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16 items-center">
             <div className="relative h-96 w-full max-w-sm mx-auto lg:max-w-none">
              <Image
                src={founder.imageUrl}
                alt={`Portrait of ${founder.name}`}
                fill
                className="object-cover rounded-full shadow-xl"
                data-ai-hint={founder.imageHint}
              />
            </div>
            <div className="space-y-4 text-center lg:text-left">
              <h2 className="font-headline text-3xl font-bold tracking-tight text-primary sm:text-4xl">Meet the Founder</h2>
              <p className="text-lg font-semibold text-accent">{founder.name}</p>
              <p className="text-md font-medium text-muted-foreground">{founder.title}</p>
              <p className="text-muted-foreground">
                "I started Forma with the belief that technology and design can come together to create something truly special. My passion lies in solving complex problems with simple, elegant solutions. I'm deeply involved in every project to ensure we deliver the highest quality work and build lasting relationships with our clients."
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
