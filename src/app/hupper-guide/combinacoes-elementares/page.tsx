import { Title, TitlesVariants } from "@/components/atoms";
import { elementalCombinationRows } from "@/data/elemental-combinations";
import { CombinationTableHeader, CombinationTableRow } from "@molecules";

export default function HupperGuide({}) {
  return (
    <section className="mx-auto max-w-5xl">
      <Title variant={TitlesVariants.H3}>Combinações Elementares</Title>
      <p>
        Ao utilizar algum feitiço de ataque de classe, os Huppemagos aplicam um
        estado elementar, não desencantável, nos inimigos. Ar, Água, Fogo e
        Terra. Dependendo de como os quatro estados elementais causados pelos
        feitiços do Huppermago são combinados, diferentes efeitos são
        desencadeados.
      </p>
      <p>
        Ao aplicar dois estados diferentes em um inimigo, independentemente da
        ordem, uma combinação elementar é gerada, essas combinações podem gerar
        buff para os huppermagos ou penalidades para os inimigos, duram 1 turno,
        e podem ser desencantados, veja abaixo.
      </p>
      <div className="text-center max-w-5xl mx-auto">
        <CombinationTableHeader />
        {elementalCombinationRows.map((row, key) => (
          <CombinationTableRow key={key} {...row} />
        ))}
      </div>
      <small>
        Os efeitos são os mesmos para todos os feitiços que fazem com que os
        alvos recebam um combo de estado elementar, e não importa a ordem em que
        os estados são aplicados.
      </small>
    </section>
  );
}
