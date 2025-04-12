import Hero from "../components/Hero";
import About from "../components/About";
import Solutions from "../components/Solutions";
import Benefits from "../components/Benefits";
import CTA from "../components/CTA";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <main className="bg-white text-gray-900">
      <Hero />
      <About />
      <Solutions />
      <Benefits />
      <CTA />
      <Footer />
    </main>
  );
}