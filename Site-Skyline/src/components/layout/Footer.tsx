
export default function Footer() {
  return (
    <footer className="border-t bg-white">
      <div className="mx-auto max-w-7xl px-4 py-10 grid md:grid-cols-3 gap-8">
        <div>
          <img src="/logo.svg" alt="Skyline Studio" className="h-8" />
          <p className="text-sm text-zinc-600 mt-2">
            © {new Date().getFullYear()} Skyline Studio — Todos os direitos reservados.
          </p>
        </div>
        <div>
          <p className="font-semibold mb-2">Links</p>
          <ul className="text-sm text-zinc-600 space-y-1">
            <li><a href="/servicos" className="hover:text-zinc-900">Serviços</a></li>
            <li><a href="/portfolio" className="hover:text-zinc-900">Portfólio</a></li>
            <li><a href="/clientes" className="hover:text-zinc-900">Clientes</a></li>
            <li><a href="/manifesto" className="hover:text-zinc-900">Manifesto</a></li>
          </ul>
        </div>
        <div>
          <p className="font-semibold mb-2">Contato</p>
          <ul className="text-sm text-zinc-600 space-y-1">
            <li>WhatsApp: +55 (00) 00000-0000</li>
            <li>Email: contato@skylinestudio.com.br</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
