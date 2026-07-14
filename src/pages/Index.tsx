
import Layout from "../components/Layout";
import Hero from "../components/Hero";
import Features from "../components/Features";
import About from "../components/About";
import Rules from "../components/Rules";
import Apply from "../components/Apply";
import Actors from "../components/Actors";
import Crew from "../components/Crew";
import CTA from "../components/CTA";

const Index = () => {
  return (
    <Layout>
      <Hero />
      <div className="bg-[#cef2e7]">
        <Features />
      </div>
      <About />
      <Rules />
      <Apply />
      <Actors />
      <Crew />
      <CTA />
    </Layout>
  );
};

export default Index;
