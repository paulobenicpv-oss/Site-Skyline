import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-black/40 border-b border-white/10">
      <div className="container flex items-center justify-between h-16">
        <Link href="/" className="flex items-center gap-3">
          <Image src="/logo.png" width={36} height={36} alt="Skyline logo" className="rounded" />
          <span className="font-semibold tracking-wide">Skyline Studio</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <Link href="/#portfolio" className="hover:text-skyline-gold">Portfólio</Link>
          <Link href="/#servicos" className="hover:text-skyline-gold">Serviços</Link>
          <Link href="/#clientes" className="hover:text-skyline-gold">Clientes</Link>
          <Link href="/contato" className="btn btn-primary">Solicitar orçamento</Link>
        </nav>
      </div>
    </header>
  );
}
