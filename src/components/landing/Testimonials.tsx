import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { PlayCircle } from 'lucide-react';
import testimonialsData from '@/lib/placeholder-images.json';

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-12 text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tight text-primary sm:text-4xl">What Our Clients Say</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Real stories from businesses we've helped transform.
          </p>
        </div>

        <Carousel
          opts={{
            align: 'start',
            loop: true,
          }}
          className="w-full max-w-4xl mx-auto"
        >
          <CarouselContent>
            {testimonialsData.testimonials.map((testimonial) => (
              <CarouselItem key={testimonial.id} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1 h-full">
                  <Card className="flex h-full flex-col justify-between">
                    {testimonial.type === 'video' ? (
                      <div className="relative h-48 w-full">
                        <Image
                          src={testimonial.thumbnailUrl}
                          alt={`Video testimonial from ${testimonial.name}`}
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          className="object-cover rounded-t-lg"
                          data-ai-hint={testimonial.thumbnailHint}
                        />
                        <div className="absolute inset-0 flex items-center justify-center bg-black/40">
                          <PlayCircle className="h-16 w-16 text-white/80" />
                        </div>
                      </div>
                    ) : null}
                    <CardContent className="flex flex-grow flex-col p-6">
                      <p className="flex-grow text-muted-foreground">"{testimonial.quote}"</p>
                      <div className="mt-6 flex items-center gap-4">
                        {testimonial.type === 'written' && (
                          <Avatar>
                            <AvatarImage src={testimonial.avatarUrl} alt={testimonial.name} data-ai-hint={testimonial.avatarHint} />
                            <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                          </Avatar>
                        )}
                         {testimonial.type === 'video' && (
                          <Avatar>
                            <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                          </Avatar>
                        )}
                        <div>
                          <p className="font-semibold text-primary">{testimonial.name}</p>
                          <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden sm:flex" />
          <CarouselNext className="hidden sm:flex" />
        </Carousel>
      </div>
    </section>
  );
}
