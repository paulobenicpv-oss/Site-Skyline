import list from "@/data/testimonials.json";

export default function Testimonials() {
  return (
    <section id="clientes" className="section">
      <div className="container">
        <h2 className="text-2xl md:text-4xl font-semibold">Marcas que confiam</h2>
        <div className="grid md:grid-cols-2 gap-6 mt-10">
          {list.map((t, i) => (
            <div key={i} className="card p-6">
              <p className="text-white/80">&ldquo;{t.quote}&rdquo;</p>
              <p className="text-white/50 text-sm mt-4">— {t.name}, {t.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
