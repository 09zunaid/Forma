import Header from '@/components/landing/Header';
import Footer from '@/components/landing/Footer';
import Chatbot from '@/components/landing/Chatbot';

export default function TermsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <section className="container mx-auto px-4 py-16 md:py-24">
          <h1 className="text-4xl font-bold mb-8 text-center">Terms and Conditions</h1>
          <div className="prose mx-auto max-w-4xl text-muted-foreground">
            <p>
              Welcome to Forma! These terms and conditions outline the rules and regulations for the use of
              our website and services.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">1. Introduction</h2>
            <p>
              By accessing this website, we assume you accept these terms and conditions. Do not continue to
              use Forma if you do not agree to all of the terms and conditions stated on this page.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">2. Intellectual Property Rights</h2>
            <p>
              Other than the content you own, under these Terms, Forma and/or its licensors own all the
              intellectual property rights and materials contained in this Website. You are granted a limited
              license only for purposes of viewing the material contained on this Website.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">3. Restrictions</h2>
            <p>You are specifically restricted from all of the following:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Publishing any Website material in any other media.</li>
              <li>Selling, sublicensing and/or otherwise commercializing any Website material.</li>
              <li>Publicly performing and/or showing any Website material.</li>
              <li>Using this Website in any way that is or may be damaging to this Website.</li>
              <li>Using this Website in any way that impacts user access to this Website.</li>
            </ul>

            <h2 className="text-2xl font-bold mt-8 mb-4">4. Your Content</h2>
            <p>
              In these Website Standard Terms and Conditions, “Your Content” shall mean any audio, video text,
              images or other material you choose to display on this Website. By displaying Your Content, you
              grant Forma a non-exclusive, worldwide irrevocable, sub-licensable license to use, reproduce,
              adapt, publish, translate and distribute it in any and all media.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">5. No warranties</h2>
            <p>
              This Website is provided “as is,” with all faults, and Forma expresses no representations or
              warranties, of any kind related to this Website or the materials contained on this Website.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">6. Limitation of liability</h2>
            <p>
              In no event shall Forma, nor any of its officers, directors and employees, be held liable for
              anything arising out of or in any way connected with your use of this Website whether such
              liability is under contract.
            </p>

             <h2 className="text-2xl font-bold mt-8 mb-4">7. Governing Law & Jurisdiction</h2>
            <p>
                These Terms will be governed by and interpreted in accordance with the laws of the State, and you submit to the non-exclusive jurisdiction of the state and federal courts located in for the resolution of any disputes.
            </p>
          </div>
        </section>
      </main>
      <Footer />
      <Chatbot />
    </div>
  );
}
