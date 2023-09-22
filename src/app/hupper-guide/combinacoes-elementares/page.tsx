import { Title, TitlesVariants } from "@atoms";
import { ElementalCombinationChart } from "@organisms";

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
        ordem, uma combinação elementar é gerada, Ao total são 6 combinações
        elementares possível, descritas abaixo, cada combinação elementar dá um
        bonus de <b>50 de potência</b> para o huppermago, que não pode ser
        desencantados.
      </p>
      <p>
        Além disso, essas combinações podem gerar buffs para os huppermagos e
        debuffs para os inimigos, duram 1 turno, e podem ser desencantados, veja
        abaixo.
      </p>
      <ElementalCombinationChart />
    </section>
  );
}
