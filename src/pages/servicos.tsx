
import SEO from '../components/layout/SEO';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';

export default function Servicos() {
  return (
    <>
      <SEO title="Serviços" />
      <Header />
      <main className="mx-auto max-w-7xl px-4 py-16">
        <h1 className="text-3xl md:text-4xl font-bold">Serviços</h1>
        <p className="text-zinc-600 mt-2">Conheça nossos pacotes para marcas e criadores.</p>
      </main>
      <Footer />
    </>
  );
}
