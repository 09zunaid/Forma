import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import blogData from '@/lib/blog-data.json';
import { ArrowUpRight } from 'lucide-react';

const posts = blogData.posts;

export default function Blog() {
  return (
    <section className="bg-background">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="mb-12 text-center">
          <h1 className="font-headline text-4xl font-bold tracking-tight text-primary sm:text-5xl">
            From the Forma Blog
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Insights, tips, and resources on web design, development, and growing your online presence.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <Card key={post.slug} className="overflow-hidden group">
              <Link href={`/blog/${post.slug}`}>
                <div className="relative h-56 w-full">
                  <Image
                    src={post.imageUrl}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    data-ai-hint={post.imageHint}
                  />
                   <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                </div>
                <CardHeader>
                    <div className='flex justify-between items-center'>
                        <CardTitle className="font-headline text-xl font-bold line-clamp-2 group-hover:text-accent transition-colors">
                            {post.title}
                        </CardTitle>
                        <ArrowUpRight className="h-5 w-5 text-muted-foreground group-hover:text-accent transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground line-clamp-3">{post.excerpt}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <Badge key={tag} variant="secondary">{tag}</Badge>
                    ))}
                  </div>
                   <p className="text-sm text-muted-foreground mt-4">{post.date}</p>
                </CardContent>
              </Link>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
