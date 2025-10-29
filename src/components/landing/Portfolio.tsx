'use client';

import * as React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowUpRight } from 'lucide-react';
import portfolioData from '@/lib/placeholder-images.json';

type Project = {
  id: string;
  title: string;
  category: string;
  imageUrl: string;
  imageHint: string;
  link: string;
};

const projects: Project[] = portfolioData.portfolio;
const categories = ['All', 'Web App', 'E-commerce', 'Portfolio'];

export default function Portfolio() {
  const [filter, setFilter] = React.useState('All');

  const filteredProjects = React.useMemo(() => {
    if (filter === 'All') return projects;
    if (filter === 'Portfolio') return projects.filter(p => p.category === 'Portfolio');
    return projects.filter(p => p.category === filter);
  }, [filter]);

  return (
    <section id="portfolio" className="bg-secondary/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-12 text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tight text-primary sm:text-4xl">Our Work</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            We take pride in the solutions we've delivered. Explore some of our favorite projects.
          </p>
        </div>

        <div className="mb-8 flex flex-wrap justify-center gap-2">
          {categories.map((category) => (
            <Button
              key={category}
              variant={filter === category ? 'default' : 'outline'}
              onClick={() => setFilter(category)}
              className={filter === category ? 'bg-primary text-primary-foreground' : 'text-primary'}
            >
              {category}
            </Button>
          ))}
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project) => (
            <Card key={project.id} className="group overflow-hidden">
              <CardContent className="p-0">
                <div className="relative h-60 w-full overflow-hidden">
                  <Image
                    src={project.imageUrl}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    data-ai-hint={project.imageHint}
                  />
                  <div className="absolute inset-0 bg-black/20"></div>
                </div>
                <div className="p-6">
                  <div className="flex items-start justify-between">
                    <div>
                      <Badge variant="secondary" className="mb-2">{project.category}</Badge>
                      <h3 className="font-headline text-xl font-semibold">{project.title}</h3>
                    </div>
                    <Link
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-1 flex-shrink-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                      aria-label={`View ${project.title}`}
                    >
                      <Button variant="ghost" size="icon">
                        <ArrowUpRight className="h-5 w-5" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
