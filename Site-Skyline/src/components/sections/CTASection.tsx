
import Button from '../ui/Button';

export default function CTASection() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16">
      <div className="rounded-3xl border p-8 md:p-12 grid md:grid-cols-2 gap-6 items-center bg-white">
        <div>
          <h3 className="text-2xl font-bold">Vamos tirar sua ideia do papel?</h3>
          <p className="text-zinc-600 mt-2">
            Atendemos Brasil e exterior. Resposta em até 24h.
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Button href="https://wa.me/5500000000000">WhatsApp</Button>
          <Button href="/contato" variant="outline">Enviar brief</Button>
        </div>
      </div>
    </section>
  );
}
