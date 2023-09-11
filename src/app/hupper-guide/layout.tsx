import { ReactNode } from "react";
import Image from "next/image";
import { Title } from "@atoms";
import Symbol from "@images/hupper-review/symbol.png";
import { metadata as mdUtils } from "@/utils";
import Link from "next/link";

export const metadata = mdUtils({
  title: "Huppermago Review",
  description: "Resumo das interações dos elementos",
});

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <section className="container px-4 mx-auto">
      <Title>
        <Link href="/hupper-guide" className="flex items-center justify-center">
          Huppermago Review
          <Image
            className="m-0"
            src={Symbol}
            alt="Huppermago"
            width={64}
          ></Image>
        </Link>
      </Title>
      {children}
    </section>
  );
}
