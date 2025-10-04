import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import ProductHighlight from "@/components/ProductHighlight";
import WhyChooseUs from "@/components/WhyChooseUs";
import CTA from "@/components/CTA";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <About />
      <Services />
      <ProductHighlight />
      <WhyChooseUs />
      <CTA />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
