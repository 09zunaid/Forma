
import Header from '@/components/landing/Header';
import Blog from '@/components/landing/Blog';
import Footer from '@/components/landing/Footer';
import Chatbot from '@/components/landing/Chatbot';
import PageTransition from '@/components/PageTransition';

export default function BlogPage() {
  return (
    <PageTransition>
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1">
          <Blog />
        </main>
        <Footer />
        <Chatbot />
      </div>
    </PageTransition>
  );
}
