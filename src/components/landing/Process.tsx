import { Search, Paintbrush, Terminal, Rocket } from 'lucide-react';

const processSteps = [
  {
    icon: <Search className="h-8 w-8 text-accent" />,
    title: '1. Discover',
    description: 'We start by understanding your business, goals, and target audience to lay the groundwork for a successful project.',
  },
  {
    icon: <Paintbrush className="h-8 w-8 text-accent" />,
    title: '2. Design',
    description: 'Our team creates wireframes and high-fidelity mockups, focusing on user experience and a stunning visual identity.',
  },
  {
    icon: <Terminal className="h-8 w-8 text-accent" />,
    title: '3. Develop',
    description: 'We bring the designs to life with clean, efficient code, building a fast, scalable, and secure website or application.',
  },
  {
    icon: <Rocket className="h-8 w-8 text-accent" />,
    title: '4. Launch',
    description: 'After rigorous testing, we deploy your project and hand over the keys, ensuring a smooth launch and post-launch support.',
  },
];

export default function Process() {
  return (
    <section id="process" className="bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-12 text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tight text-primary sm:text-4xl">Our Process</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            A simplified, transparent journey from idea to reality.
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-1/2 top-0 h-full w-0.5 -translate-x-1/2 bg-border hidden md:block" aria-hidden="true"></div>
          
          <div className="grid gap-12 md:gap-16">
            {processSteps.map((step, index) => (
              <div key={index} className="relative flex flex-col md:flex-row items-start gap-6">
                <div className="md:absolute md:left-1/2 md:-translate-x-1/2 md:-translate-y-4 bg-background p-2 rounded-full border">
                  {step.icon}
                </div>
                <div className={`flex-1 rounded-lg border bg-card p-6 shadow-sm md:w-5/12 ${index % 2 === 0 ? 'md:ml-auto md:pr-12' : 'md:mr-auto md:pl-12'}`}>
                  <h3 className="font-headline text-xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
