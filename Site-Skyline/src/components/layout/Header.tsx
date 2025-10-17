
import Link from 'next/link';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b bg-white/90 backdrop-blur">
      <div className="mx-auto max-w-7xl px-4 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <img src="/logo.svg" alt="Skyline Studio" className="h-8" />
          <span className="font-semibold">Skyline Studio</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <Link href="/servicos">Serviços</Link>
          <Link href="/portfolio">Portfólio</Link>
          <Link href="/clientes">Clientes</Link>
          <Link href="/manifesto">Manifesto</Link>
          <Link href="/contato" className="rounded-xl bg-black text-white px-4 py-2">Pedir orçamento</Link>
        </nav>
      </div>
    </header>
  );
}
