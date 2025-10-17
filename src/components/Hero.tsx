import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-[80vh] flex items-center">
      <Image
        src="/hero.jpg"
        alt="Skyline Hero"
        fill
        className="object-cover opacity-60"
        priority
      />
      <div className="container relative z-10">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl font-semibold max-w-3xl leading-tight"
        >
          Vídeos <span className="text-skyline-gold">cinematográficos</span> que
          posicionam sua marca no topo.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="mt-6 max-w-2xl text-white/80"
        >
          Estratégia, roteiro, captação e pós-produção com estética premium e foco
          em resultados reais.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-10 flex gap-4"
        >
          <Link href="#portfolio" className="btn btn-primary">Ver portfólio</Link>
          <Link href="/contato" className="btn">Falar com especialista</Link>
        </motion.div>
      </div>
    </section>
  );
}
