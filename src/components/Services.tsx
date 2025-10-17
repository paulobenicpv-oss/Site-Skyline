import { Film, Clapperboard, Sparkles, Megaphone } from "lucide-react";

const items = [
  { icon: Film, title: "Institucional & Branding", desc: "Manifestos e histórias que consolidam sua autoridade." },
  { icon: Clapperboard, title: "Campanhas & Social", desc: "Pecas ágeis para performance e awareness." },
  { icon: Sparkles, title: "Pós-produção premium", desc: "Color, motion, sound design e finalização cinematográfica." },
  { icon: Megaphone, title: "Estratégia & Roteiro", desc: "Do briefing ao roteiro que converte e emociona." },
];

export default function Services() {
  return (
    <section id="servicos" className="section">
      <div className="container">
        <h2 className="text-2xl md:text-4xl font-semibold">Soluções que filmam resultados</h2>
        <p className="text-white/70 mt-3 max-w-2xl">
          Entregas ponta a ponta para marcas que exigem alto padrão.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
          {items.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="card p-6 hover:shadow-glow transition">
              <Icon className="w-6 h-6 text-skyline-gold" />
              <h3 className="mt-4 font-semibold">{title}</h3>
              <p className="text-white/70 mt-2 text-sm">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
