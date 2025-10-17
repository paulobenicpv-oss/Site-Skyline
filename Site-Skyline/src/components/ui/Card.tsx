
import { ReactNode } from 'react';

export default function Card({ children }: { children: ReactNode }) {
  return <div className="rounded-2xl border p-6 bg-white hover:shadow-md transition">{children}</div>;
}
