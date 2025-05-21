
import Layout from "../components/Layout";
import Hero from "../components/Hero";
import Features from "../components/Features";
import About from "../components/About";
import Rules from "../components/Rules";
import Apply from "../components/Apply";
import CTA from "../components/CTA";

const Index = () => {
  return (
    <Layout>
      <div className="bg-[#f52e38] relative">
        {/* Slightly darken the background to make grain more visible */}
        <div className="absolute inset-0 bg-black bg-opacity-10"></div>
        <Hero />
      </div>
      <div className="bg-[#cef2e7]">
        <Features />
      </div>
      <About />
      <Rules />
      <Apply />
      <CTA />
    </Layout>
  );
};

export default Index;
