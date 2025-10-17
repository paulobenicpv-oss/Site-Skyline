import { useRouter } from "next/router";
import data from "@/data/portfolio.json";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Portfolio() {
  const { query } = useRouter();
  const item = data.find(p => p.id === query.id) || data[0];

  return (
    <>
      <Header />
      <main className="container section">
        <h1 className="text-3xl font-semibold">{item.title}</h1>
        <p className="text-white/60 mt-2">{item.category}</p>
        <div className="mt-8 aspect-video">
          <iframe
            src={item.video}
            className="w-full h-full rounded-2xl border border-white/10"
            allow="autoplay; fullscreen; picture-in-picture"
          />
        </div>
        <p className="mt-6 text-white/80">{item.summary}</p>
      </main>
      <Footer />
    </>
  );
}
