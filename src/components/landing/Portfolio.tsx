'use client';

import * as React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowUpRight } from 'lucide-react';
import portfolioData from '@/lib/placeholder-images.json';
import { cn } from '@/lib/utils';

type Project = {
  id: string;
  title: string;
  category: string;
  imageUrl: string;
  imageHint: string;
  link: string;
  result: string;
  span?: string;
};

const projects: Project[] = portfolioData.portfolio;
const categories = ['All', 'Portfolio', 'Web App', 'E-commerce'];

export default function Portfolio() {
  const [filter, setFilter] = React.useState('All');

  const filteredProjects = React.useMemo(() => {
    if (filter === 'All') return projects;
    return projects.filter(p => p.category === filter);
  }, [filter]);

  return (
    <section id="portfolio" className="bg-background">
      <div className="container mx-auto px-4 md:px-6 py-16 md:py-24">
        <div className="mb-12 text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tight text-primary sm:text-4xl">Our Work</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            We create beautiful, functional, and impactful digital experiences that drive results for our clients.
          </p>
        </div>

        <div className="mb-12 flex flex-wrap items-center justify-center gap-3 rounded-full bg-secondary p-2 dark:bg-primary/30">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={cn(
                'h-10 shrink-0 cursor-pointer items-center justify-center rounded-full px-5 text-sm font-medium transition-colors',
                filter === category
                  ? 'bg-accent text-accent-foreground shadow-md font-bold'
                  : 'text-muted-foreground hover:bg-white dark:text-muted-foreground dark:hover:bg-primary'
              )}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project) => (
            <Link
              key={project.id}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                'group relative col-span-1 overflow-hidden rounded-xl shadow-lg transition-shadow duration-300 hover:shadow-2xl',
                project.span
              )}
            >
              <Image
                src={project.imageUrl}
                alt={project.title}
                width={600}
                height={400}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                data-ai-hint={project.imageHint}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"></div>
              <div className="absolute bottom-0 left-0 w-full p-6 text-white">
                <h3 className="font-display text-xl font-bold">{project.title}</h3>
                <p className="mt-1 text-accent">{project.result}</p>
                <div className="absolute bottom-6 right-6 flex items-center justify-center h-10 w-10 rounded-full bg-white/20 text-white opacity-0 transform-gpu scale-75 transition-all duration-300 group-hover:opacity-100 group-hover:scale-100">
                    <ArrowUpRight className="h-5 w-5" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <div className="bg-secondary/50 dark:bg-primary/30">
        <div className="container mx-auto px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
            <div className="text-center">
                <h2 className="font-display text-3xl font-bold tracking-tighter text-primary dark:text-secondary sm:text-4xl">Ready to Shape Your Vision?</h2>
                <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground dark:text-secondary/80">Let's build something amazing together. Tell us about your project and let's craft the form of your vision.</p>
                <div className="mt-8 flex justify-center">
                    <Button asChild size="lg" className="rounded-full h-12 px-8 bg-accent text-white shadow-lg transition-transform hover:scale-105">
                        <Link href="/contact">Start Your Project</Link>
                    </Button>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
}

// Add this to your globals.css or a style tag
// .group:hover .group-hover-card {
//   transform: translateY(0);
//   opacity: 1;
// }
