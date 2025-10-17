
import { ReactNode } from 'react';

export default function Button({ children, href, onClick, variant='solid' }: { children: ReactNode; href?: string; onClick?: () => void; variant?: 'solid'|'outline'; }) {
  const base = variant === 'solid' ? 'bg-black text-white hover:bg-zinc-800' : 'border hover:bg-zinc-50';
  const content = <span className={`inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm ${base}`}>{children}</span>;
  return href ? <a href={href}>{content}</a> : <button onClick={onClick}>{content}</button>;
}
