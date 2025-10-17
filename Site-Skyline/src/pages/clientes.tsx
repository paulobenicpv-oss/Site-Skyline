
import SEO from '../components/layout/SEO';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import logos from '../data/clientes.json';

export default function Clientes() {
  return (
    <>
      <SEO title="Clientes" />
      <Header />
      <main className="mx-auto max-w-7xl px-4 py-16">
        <h1 className="text-3xl md:text-4xl font-bold">Clientes</h1>
        <p className="text-zinc-600 mt-2">Parcerias que viram história.</p>
        <div className="grid grid-cols-2 md:grid-cols-6 gap-6 mt-8">
          {logos.map((c, i) => (
            <div key={i} className="rounded-xl border p-6 grid place-items-center text-2xl font-bold text-zinc-400">
              {c.name[0]}
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
