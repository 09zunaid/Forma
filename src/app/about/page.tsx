import Header from '@/components/landing/Header';
import About from '@/components/landing/About';
import Footer from '@/components/landing/Footer';
import Chatbot from '@/components/landing/Chatbot';

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <About />
      </main>
      <Footer />
      <Chatbot />
    </div>
  );
}
