
import Card from '../ui/Card';
import Button from '../ui/Button';

export default function ServicesSection() {
  const items = [
    {title: 'Brand Films', desc: 'Institucionais, reels, lançamentos e campanhas.'},
    {title: 'Conteúdo de Performance', desc: 'UGC, anúncios, depoimentos, peças otimizadas para ROI.'},
    {title: 'Eventos & Coberturas', desc: 'Feiras, palestras, esportes e documentais.'},
  ];
  return (
    <section className="mx-auto max-w-7xl px-4 py-20">
      <div className="mb-10">
        <h2 className="text-3xl md:text-4xl font-bold">Serviços</h2>
        <p className="text-zinc-600 mt-2">Entrega ponta a ponta com estratégia de distribuição.</p>
      </div>
      <div className="grid md:grid-cols-3 gap-6">
        {items.map((s) => (
          <Card key={s.title}>
            <div className="flex items-center justify-between">
              <h3 className="font-semibold">{s.title}</h3>
            </div>
            <p className="text-sm text-zinc-600 mt-3">{s.desc}</p>
            <Button href="/contato" variant="outline">Pedir proposta</Button>
          </Card>
        ))}
      </div>
    </section>
  );
}
