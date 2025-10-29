
import Header from '@/components/landing/Header';
import Footer from '@/components/landing/Footer';
import Chatbot from '@/components/landing/Chatbot';
import PageTransition from '@/components/PageTransition';

export default function PrivacyPage() {
  return (
    <PageTransition>
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1">
          <section className="container mx-auto px-4 py-16 md:py-24">
            <h1 className="text-4xl font-bold mb-8 text-center">Privacy Policy</h1>
            <div className="prose mx-auto max-w-4xl text-muted-foreground">
              <p>
                Your privacy is important to us. It is Forma's policy to respect your privacy regarding any
                information we may collect from you across our website.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4">1. Information We Collect</h2>
              <p>
                We only ask for personal information when we truly need it to provide a service to you. We
                collect it by fair and lawful means, with your knowledge and consent. We also let you know why
                we’re collecting it and how it will be used.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4">2. How We Use Your Information</h2>
              <p>
                We use the information we collect in various ways, including to:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Provide, operate, and maintain our website</li>
                <li>Improve, personalize, and expand our website</li>
                <li>Understand and analyze how you use our website</li>
                <li>Develop new products, services, features, and functionality</li>
                <li>Communicate with you, either directly or through one of our partners</li>
              </ul>

              <h2 className="text-2xl font-bold mt-8 mb-4">3. Log Files</h2>
              <p>
                Forma follows a standard procedure of using log files. These files log visitors when they
                visit websites. All hosting companies do this and a part of hosting services' analytics. The
                information collected by log files include internet protocol (IP) addresses, browser type,
                Internet Service Provider (ISP), date and time stamp, referring/exit pages, and possibly the
                number of clicks.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4">4. Cookies and Web Beacons</h2>
              <p>
                Like any other website, Forma uses 'cookies'. These cookies are used to store information
                including visitors' preferences, and the pages on the website that the visitor accessed or
                visited. The information is used to optimize the users' experience by customizing our web page
                content based on visitors' browser type and/or other information.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4">5. Your Rights</h2>
              <p>
                  You are free to refuse our request for your personal information, with the understanding that we may be unable to provide you with some of your desired services.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4">Contact Us</h2>
              <p>
                If you have any questions or suggestions about our Privacy Policy, do not hesitate to contact us.
              </p>
            </div>
          </section>
        </main>
        <Footer />
        <Chatbot />
      </div>
    </PageTransition>
  );
}
