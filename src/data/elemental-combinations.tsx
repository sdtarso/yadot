import RangeIcon from "@images/icons/range.webp";
import MpIcon from "@images/icons/mp.webp";
import ApIcon from "@images/icons/ap.webp";
import DodgeIcon from "@images/icons/dodge.webp";
import { CombinationTableRowProps } from "@/components/molecules";

const StrAgi = {
  icon: RangeIcon,
  caption: "Alcance",
  children: (
    <small>
      <span className="text-semibold text-green-600">Rouba</span> 3 de alcance.
    </small>
  ),
};
const StrInt = {
  icon: RangeIcon,
  caption: "Damage",
  children: (
    <small>
      Aumenta o dano sofrido pelo alvo em{" "}
      <span className="font-semibold">15%</span>.
    </small>
  ),
};
const StrCha = {
  icon: MpIcon,
  caption: "PM",
  children: (
    <small>
      <span className="text-semibold text-red-600">Remove</span> 3 PM.
    </small>
  ),
};
const AgiInt = {
  icon: ApIcon,
  caption: "PA",
  children: (
    <small>
      <span className="text-semibold text-red-600">Remove</span> 2 PA.
    </small>
  ),
};
const AgiCha = {
  icon: MpIcon,
  caption: "PM",
  children: (
    <small>
      Reuz o dano causado pelo alvo em{" "}
      <span className="font-semibold">15%</span>.
    </small>
  ),
};
const IntCha = {
  icon: DodgeIcon,
  caption: "Fuga",
  children: (
    <small>
      <span className="text-semibold text-red-600">Remove</span> 60 de fuga.
    </small>
  ),
};

export { StrAgi, StrInt, StrCha, AgiInt, AgiCha, IntCha };

export const strengthCombinations: CombinationTableRowProps = {
  element: "Strength",
  items: [null, StrAgi, StrInt, StrCha],
};
export const agilityCombinations: CombinationTableRowProps = {
  element: "Agility",
  items: [StrAgi, null, AgiInt, AgiCha],
};
export const intelCombinations: CombinationTableRowProps = {
  element: "Intelligence",
  items: [StrInt, AgiInt, null, IntCha],
};
export const chanceCombinations: CombinationTableRowProps = {
  element: "Chance",
  items: [StrCha, AgiCha, IntCha, null],
};

export const elementalCombinationRows: CombinationTableRowProps[] = [
  strengthCombinations,
  agilityCombinations,
  intelCombinations,
  chanceCombinations,
];
