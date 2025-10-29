import Header from '@/components/landing/Header';
import Portfolio from '@/components/landing/Portfolio';
import Footer from '@/components/landing/Footer';
import Chatbot from '@/components/landing/Chatbot';

export default function PortfolioPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <Portfolio />
      </main>      
      <Footer />
      <Chatbot />
    </div>
  );
}
