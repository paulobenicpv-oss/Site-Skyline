
import Button from '../ui/Button';

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 py-20 md:py-28 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
            Vídeo que vende, inspira e movimenta
          </h1>
          <p className="mt-4 text-lg text-zinc-600">
            Skyline Studio — do roteiro à entrega final, criamos filmes com estratégia, estética e performance.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button href="/portfolio">Ver portfólio</Button>
            <Button href="/contato" variant="outline">Fale com a gente</Button>
          </div>
        </div>
        <div>
          <div className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl border">
            <img src="/imagens/hero.jpg" alt="Skyline Studio" className="h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}
