import Header from '@/components/landing/Header';
import Process from '@/components/landing/Process';
import Footer from '@/components/landing/Footer';
import Chatbot from '@/components/landing/Chatbot';

export default function ProcessPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <Process />
      </main>
      <Footer />
      <Chatbot />
    </div>
  );
}
