import Link from "next/link";

export default function ContactCTA() {
  return (
    <section className="section">
      <div className="container text-center">
        <h2 className="text-2xl md:text-4xl font-semibold">Pronto para filmar resultados?</h2>
        <p className="text-white/70 mt-3 max-w-2xl mx-auto">
          Conte sua ideia e receba um plano com roteiro, orçamento e prazo.
        </p>
        <div className="mt-8 flex gap-4 justify-center">
          <Link href="/contato" className="btn btn-primary">Solicitar orçamento</Link>
          <a href="https://wa.me/5512997732046" target="_blank" className="btn">Falar no WhatsApp</a>
        </div>
      </div>
    </section>
  );
}
