export default function Footer() {
  return (
    <footer className="border-t border-white/10">
      <div className="container py-8 text-sm text-white/60 flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
        <p>© {new Date().getFullYear()} Skyline Studio. Todos os direitos reservados.</p>
        <p className="text-white/40">Feito com Next.js + Tailwind.</p>
      </div>
    </footer>
  );
}
