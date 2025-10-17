import data from "@/data/portfolio.json";
import Image from "next/image";
import Link from "next/link";

export default function PortfolioGrid() {
  return (
    <section id="portfolio" className="section">
      <div className="container">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl md:text-4xl font-semibold">Portfólio</h2>
            <p className="text-white/70 mt-3">Seleção de filmes recentes.</p>
          </div>
          <Link href="/portfolio" className="btn">Ver tudo</Link>
        </div>
        <div className="grid md:grid-cols-3 gap-6 mt-10">
          {data.map(item => (
            <Link key={item.id} href={`/portfolio?id=${item.id}`} className="group card overflow-hidden">
              <div className="relative aspect-video">
                <Image src={item.thumb} alt={item.title} fill className="object-cover group-hover:scale-105 transition" />
              </div>
              <div className="p-5">
                <p className="text-sm text-skyline-gold">{item.category}</p>
                <h3 className="font-semibold mt-1">{item.title}</h3>
                <p className="text-white/60 text-sm mt-2">{item.summary}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
