import Header from '@/components/landing/Header';
import Footer from '@/components/landing/Footer';
import Chatbot from '@/components/landing/Chatbot';
import blogData from '@/lib/blog-data.json';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import PageTransition from '@/components/PageTransition';

type Props = {
    params: {
        slug: string;
    };
};

export default function BlogPostPage({ params }: Props) {
  const post = blogData.posts.find(p => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <PageTransition>
        <div className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1">
            <article>
            <header className="relative h-[400px] md:h-[500px]">
                <Image 
                src={post.imageUrl}
                alt={post.title}
                fill
                className="object-cover"
                data-ai-hint={post.imageHint}
                priority
                />
                <div className="absolute inset-0 bg-black/50" />
                <div className="relative h-full flex flex-col items-center justify-center text-center text-white p-4">
                <h1 className="font-headline text-4xl md:text-6xl font-bold max-w-4xl">{post.title}</h1>
                <p className="mt-4 text-lg text-slate-300">By {post.author} on {post.date}</p>
                </div>
            </header>
            
            <div className="container mx-auto px-4 py-12 md:py-16">
                <div 
                className="prose dark:prose-invert max-w-4xl mx-auto text-lg text-muted-foreground"
                dangerouslySetInnerHTML={{ __html: post.content }} 
                />
            </div>
            </article>
        </main>
        <Footer />
        <Chatbot />
        </div>
    </PageTransition>
  );
}

// Generate static paths for each blog post
export async function generateStaticParams() {
  return blogData.posts.map((post) => ({
    slug: post.slug,
  }));
}
