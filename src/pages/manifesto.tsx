
import SEO from '../components/layout/SEO';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';

export default function Manifesto() {
  return (
    <>
      <SEO title="Manifesto" />
      <Header />
      <main className="mx-auto max-w-3xl px-4 py-16">
        <h1 className="text-3xl md:text-4xl font-bold">Manifesto</h1>
        <p className="mt-4 text-zinc-700 leading-7">
          Movimento é o que nos guia. Criamos histórias com energia positiva, autenticidade e propósito.
          Cada filme é uma escolha corajosa pelo novo.
        </p>
      </main>
      <Footer />
    </>
  );
}
