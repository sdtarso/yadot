import { Title } from "@/components/atoms";
import Image from "next/image";
import Link from "next/link";

export default function HupperGuide({}) {
  return (
    <section className="px-4 mx-auto max-w-5xl grid grid-cols-2 gap-2 items-stretch">
      {[
        {
          url: "combinacoes-elementares",
          label: "Combinações Elementares",
        },
        {
          url: "buffs-movimentacoes",
          label: "Buffs, Entraves e movimentação",
        },
      ].map(({ url, label }, key) => (
        <Link
          key={key}
          className="border rounded flex items-center justify-center p-2"
          href={`hupper-guide/${url}`}
        >
          {label}
        </Link>
      ))}
    </section>
  );
}
