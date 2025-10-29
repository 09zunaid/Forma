import Header from '@/components/landing/Header';
import Testimonials from '@/components/landing/Testimonials';
import Footer from '@/components/landing/Footer';
import Chatbot from '@/components/landing/Chatbot';

export default function TestimonialsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <Testimonials />
      </main>
      <Footer />
      <Chatbot />
    </div>
  );
}
