"use client";

import { useLocalStorage } from "@/hooks";
import { getAllSubsets } from "@/utils";
import { InputLabel, TextInput } from "@atoms";
import { useEffect, useState } from "react";

interface INpc {
  name: string;
  weight: number;
}

const data: Array<INpc> = [
  {
    name: "Juju",
    weight: 63,
  },
  {
    name: "Piki",
    weight: 62,
  },
  {
    name: "G.O. Cébero",
    weight: 27,
  },
  {
    name: "G.O. Logia",
    weight: 38,
  },
  {
    name: "Nevark, o Caçador",
    weight: 146,
  },
  {
    name: "Dina Tapio",
    weight: 659,
  },
  {
    name: "Seb Hultura",
    weight: 7,
  },
];

const getAddedUpWeight = (subSets: Array<Array<INpc>>) => {
  const initialValue: Record<number, string> = {};
  const weightAddedUp = subSets.reduce((state, item) => {
    const totalWeight = item
      .map((char) => char.weight)
      .reduce((acc, cv) => (acc += cv), 0);
    state[totalWeight] = item.map(({ name }) => name).join(" / ");
    return state;
  }, initialValue);

  return weightAddedUp;
};

export default function NevarkCalculator() {
  const [weight, setWeight] = useLocalStorage<number>("targetValue", 215);
  const [npcWeights, setNpcWeights] = useLocalStorage<Array<number>>(
    "npcWeights",
    data.map((i) => i.weight)
  );
  const [match, setMatch] = useState<String | undefined>();

  useEffect(() => {
    const subSets = getAllSubsets<INpc>(
      data.map(({ name }, i) => ({
        name,
        weight: npcWeights[i],
      }))
    );
    const allWeights = getAddedUpWeight(subSets);
    console.log(allWeights[weight]);

    setMatch(allWeights[weight]);
  }, [weight, npcWeights]);
  return (
    <section className="px-4 pt-12 max-w-md mx-auto">
      <div className="mb-6">
        <div className="mb-6">
          <div className="flex gap-4 justify-between items-center">
            <InputLabel>Peso Desejado</InputLabel>
            <TextInput
              className="w-20"
              type="number"
              value={weight}
              onChange={(e) => setWeight(Number(e.target.value))}
            />
          </div>
        </div>
        <div className="flex flex-col gap-2">
          {data.map(({ name }, key) => (
            <div
              key={key}
              className="flex gap-4 justify-between items-center border border-neutral-300 rounded px-2"
            >
              <InputLabel>{name}</InputLabel>
              <TextInput
                type="number"
                value={npcWeights[key] as number}
                onChange={(e) =>
                  setNpcWeights(
                    npcWeights.map((w, i) =>
                      i === key ? Number(e.target.value) : w
                    )
                  )
                }
                className="w-16 border-0 !pr-0"
              />
            </div>
          ))}
        </div>
      </div>
      <div className="text-center">
        {match ? (
          <b>{match}</b>
        ) : (
          <p className="text-red-500">
            <b className="text-lg">Ops!</b> <br />
            Não é possível chegar no peso deseja com esses valores.
          </p>
        )}
      </div>
    </section>
  );
}
