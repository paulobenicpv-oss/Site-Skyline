import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Contato() {
  return (
    <>
      <Header />
      <main className="container section max-w-3xl">
        <h1 className="text-3xl font-semibold">Solicitar orçamento</h1>
        <p className="text-white/70 mt-2">Retornamos em até 24h úteis.</p>
        <form className="mt-8 grid gap-4">
          <input className="card p-4" placeholder="Seu nome" required />
          <input className="card p-4" placeholder="E-mail" type="email" required />
          <input className="card p-4" placeholder="Telefone/WhatsApp" />
          <textarea className="card p-4 h-40" placeholder="Fale sobre o projeto" />
          <button className="btn btn-primary w-fit">Enviar</button>
        </form>
      </main>
      <Footer />
    </>
  );
}
