import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Code, ShoppingCart, PenTool, TrendingUp, Wrench, ShieldCheck } from 'lucide-react';

const services = [
  {
    icon: <Code className="h-8 w-8 text-accent" />,
    title: 'Website Design & Development',
    description: 'Crafting beautiful, responsive, and high-performing websites that align with your brand and business goals.',
  },
  {
    icon: <ShoppingCart className="h-8 w-8 text-accent" />,
    title: 'E-commerce Solutions',
    description: 'Building robust online stores that provide seamless shopping experiences and drive sales.',
  },
  {
    icon: <PenTool className="h-8 w-8 text-accent" />,
    title: 'UI/UX Design',
    description: 'Designing intuitive and engaging user interfaces that enhance user satisfaction and conversion rates.',
  },
  {
    icon: <TrendingUp className="h-8 w-8 text-accent" />,
    title: 'SEO Setup',
    description: 'Implementing foundational search engine optimization to improve your visibility on Google and attract organic traffic.',
  },
  {
    icon: <Wrench className="h-8 w-8 text-accent" />,
    title: 'Maintenance & Support',
    description: 'Providing ongoing support and maintenance to ensure your website remains secure, updated, and efficient.',
  },
  {
    icon: <ShieldCheck className="h-8 w-8 text-accent" />,
    title: 'Brand Identity',
    description: 'Developing a strong brand identity with a memorable logo, color palette, and style guide to set you apart.',
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-secondary/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-12 text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tight text-primary sm:text-4xl">Our Services</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            From concept to launch, we provide the digital services your business needs to succeed.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <Card key={index} className="flex flex-col transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <CardHeader className="flex flex-row items-center gap-4 pb-4">
                {service.icon}
                <CardTitle className="font-headline text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
