
import Header from '@/components/landing/Header';
import Hero from '@/components/landing/Hero';
import Footer from '@/components/landing/Footer';
import Chatbot from '@/components/landing/Chatbot';
import SocialProof from '@/components/landing/SocialProof';
import PageTransition from '@/components/PageTransition';

export default function Home() {
  return (
    <PageTransition>
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1">
          <Hero />
          <SocialProof />
        </main>
        <Footer />
        <Chatbot />
      </div>
    </PageTransition>
  );
}
