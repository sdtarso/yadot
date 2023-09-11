import { ReactNode } from "react";

export function Title({ children }: { children: ReactNode }) {
  return (
    <h1 className="text-3xl font-semibold text-neutral-900">{children}</h1>
  );
}

export function SubTitle({ children }: { children: ReactNode }) {
  return (
    <h2 className="text-2xl font-semibold text-neutral-800">{children}</h2>
  );
}
