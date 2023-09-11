import { SubTitle } from "@/components/atoms";
import Image from "next/image";

export default function HupperGuide({}) {
  return (
    <section className="container mx-auto">
      <SubTitle>Combinações Elementares</SubTitle>
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
        buff para os huppermagos ou penalidades para os inimigos, veja abaixo.
      </p>
      <div className="text-center max-w-5xl mx-auto">
        <div className="grid grid-cols-5">
          <div className="p-2"></div>
          {/* Terra */}
          <div className="flex justify-center mb-2">
            <Image
              src={
                "https://static.wikia.nocookie.net/dofus/images/1/1e/Earth.png/revision/latest?cb=20101219143116"
              }
              width={24}
              height={24}
              alt="Terra"
            ></Image>
          </div>
          {/* Ar */}
          <div className="flex justify-center mb-2">
            <Image
              src={
                "https://static.wikia.nocookie.net/dofus/images/5/5f/Air.png/revision/latest?cb=20101219143050"
              }
              width={24}
              height={24}
              alt="Ar"
            ></Image>
          </div>
          {/* Fogo */}
          <div className="flex justify-center mb-2">
            <Image
              src={
                "https://static.wikia.nocookie.net/dofus/images/3/30/Fire.png/revision/latest?cb=20101219143204"
              }
              width={24}
              height={24}
              alt="Fogo"
            ></Image>
          </div>
          {/* Água */}
          <div className="flex justify-center mb-2">
            <Image
              src={
                "https://static.wikia.nocookie.net/dofus/images/9/9d/Water.png/revision/latest?cb=20101219143141"
              }
              width={24}
              height={24}
              alt="Água"
            ></Image>
          </div>
        </div>
        <div className="grid grid-cols-5">
          {/* Terra */}
          <div className="flex items-center justify-center">
            <Image
              src={
                "https://static.wikia.nocookie.net/dofus/images/1/1e/Earth.png/revision/latest?cb=20101219143116"
              }
              width={24}
              height={24}
              alt="Terra"
            ></Image>
          </div>
          <div className="p-2 border-b border-r">-</div>
          <div className="p-2 border-b border-r">Rouba 3 de Alcance</div>
          <div className="p-2 border-b border-r">Aumenta o dano sofrido pelo alvo em 15%</div>
          <div className="p-2 border-b">Remove 3 PM</div>
        </div>
        <div className="grid grid-cols-5">
          {/* Ar */}
          <div className="flex items-center justify-center">
            <Image
              src={
                "https://static.wikia.nocookie.net/dofus/images/5/5f/Air.png/revision/latest?cb=20101219143050"
              }
              width={24}
              height={24}
              alt="Ar"
            ></Image>
          </div>
          <div className="p-2 border-b border-r">Rouba 3 de Alcance</div>
          <div className="p-2 border-b border-r">-</div>
          <div className="p-2 border-b border-r">Remove 3 PA</div>
          <div className="p-2 border-b">Reduz o dano causado pelo alvo em 15%</div>
        </div>
        <div className="grid grid-cols-5">
          {/* Fogo */}
          <div className="flex items-center justify-center">
            <Image
              src={
                "https://static.wikia.nocookie.net/dofus/images/3/30/Fire.png/revision/latest?cb=20101219143204"
              }
              width={24}
              height={24}
              alt="Fogo"
            ></Image>
          </div>
          <div className="p-2 border-b border-r">Aumenta o dano sofrido pelo alvo em 15%</div>
          <div className="p-2 border-b border-r">Remove 3 PA</div>
          <div className="p-2 border-b border-r">-</div>
          <div className="p-2 border-b">Remove 60 de fuga</div>
        </div>
        <div className="grid grid-cols-5">
          {/* Água */}
          <div className="flex items-center justify-center">
            <Image
              src={
                "https://static.wikia.nocookie.net/dofus/images/9/9d/Water.png/revision/latest?cb=20101219143141"
              }
              width={24}
              height={24}
              alt="Água"
            ></Image>
          </div>
          <div className="p-2 border-r">Remove 3 PM</div>
          <div className="p-2 border-r">Reduz o dano causado pelo alvo em 15%</div>
          <div className="p-2 border-r">Remove 60 de fuga</div>
          <div className="p-2">-</div>
        </div>
      </div>
      <small>
        Os efeitos são os mesmos para todos os feitiços que fazem com que os
        alvos recebam um combo de estado elementar, e não importa a ordem em que
        os estados são aplicados.
      </small>
    </section>
  );
}
