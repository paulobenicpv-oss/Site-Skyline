import Head from "next/head";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import PortfolioGrid from "@/components/PortfolioGrid";
import Testimonials from "@/components/Testimonials";
import ContactCTA from "@/components/ContactCTA";
import { defaultSEO } from "@/lib/seo";

export default function Home() {
  return (
    <>
      <Head>
        <title>{defaultSEO.title}</title>
        <meta name="description" content={defaultSEO.description} />
        <meta property="og:image" content={defaultSEO.ogImage} />
      </Head>
      <Header />
      <main>
        <Hero />
        <Services />
        <PortfolioGrid />
        <Testimonials />
        <ContactCTA />
      </main>
      <Footer />
    </>
  );
}
