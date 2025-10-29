import Header from '@/components/landing/Header';
import Contact from '@/components/landing/Contact';
import Footer from '@/components/landing/Footer';
import Chatbot from '@/components/landing/Chatbot';

export default function ContactPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <Contact />
      </main>
      <Footer />
      <Chatbot />
    </div>
  );
}
