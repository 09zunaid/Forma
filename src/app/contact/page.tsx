
import Header from '@/components/landing/Header';
import Contact from '@/components/landing/Contact';
import Footer from '@/components/landing/Footer';
import Chatbot from '@/components/landing/Chatbot';
import PageTransition from '@/components/PageTransition';

export default function ContactPage() {
  return (
    <PageTransition>
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1">
          <Contact />
        </main>
        <Footer />
        <Chatbot />
      </div>
    </PageTransition>
  );
}
