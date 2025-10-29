import { Mail, Phone, Calendar, MessageCircle } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import LeadForm from './LeadForm';

const contactDetails = {
  email: 'mohammadzunaid83@gmail.com',
  phone: '7569370322',
  whatsapp: 'https://wa.me/7569370322',
};

export default function Contact() {
  return (
    <section id="contact" className="bg-secondary/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="space-y-8">
            <div>
              <h2 className="font-headline text-3xl font-bold tracking-tight text-primary sm:text-4xl">Let's Build Your Vision</h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Tell us your goals, and we'll provide a clear, no-obligation plan to bring your project to life. Let's build something great together.
              </p>
            </div>
            <div className="space-y-4">
              <a href={`tel:${contactDetails.phone}`} className="flex items-center gap-4 group">
                <div className="rounded-full bg-background p-3 border">
                  <Phone className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Phone</h3>
                  <p className="text-muted-foreground group-hover:text-accent transition-colors">{contactDetails.phone}</p>
                </div>
              </a>
              <a href={`mailto:${contactDetails.email}`} className="flex items-center gap-4 group">
                 <div className="rounded-full bg-background p-3 border">
                  <Mail className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Email</h3>
                  <p className="text-muted-foreground group-hover:text-accent transition-colors">{contactDetails.email}</p>
                </div>
              </a>
            </div>
             <div className="border-t pt-8">
                <h3 className="font-headline text-2xl font-bold text-primary mb-4">Ready to Start?</h3>
                <p className="text-muted-foreground mb-6">Schedule a free, no-obligation 30-minute consultation call with us to discuss your project in detail.</p>
                <Button asChild size="lg" className="w-full sm:w-auto bg-accent hover:bg-accent/90 text-accent-foreground">
                    <Link href={contactDetails.whatsapp} target="_blank" rel="noopener noreferrer">
                        <MessageCircle className="mr-2 h-5 w-5" />
                        Chat on WhatsApp
                    </Link>
                </Button>
            </div>
          </div>
          <div className="rounded-lg border bg-background p-6 shadow-lg sm:p-8">
            <LeadForm />
          </div>
        </div>
      </div>
    </section>
  );
}
