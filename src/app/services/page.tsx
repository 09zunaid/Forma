
import Header from '@/components/landing/Header';
import Services from '@/components/landing/Services';
import Footer from '@/components/landing/Footer';
import Chatbot from '@/components/landing/Chatbot';
import PageTransition from '@/components/PageTransition';

export default function ServicesPage() {
  return (
    <PageTransition>
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1">
          <Services />
        </main>
        <Footer />
        <Chatbot />
      </div>
    </PageTransition>
  );
}
