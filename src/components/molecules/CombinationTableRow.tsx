import { CombinationTableCell, CombinationTableCellProps } from "@atoms";
import AgilityIcon from "@images/icons/agility.webp";
import ChanceIcon from "@images/icons/chance.webp";
import IntelligenceIcon from "@images/icons/intelligence.webp";
import StrengthIcon from "@images/icons/strength.webp";
import Image, { StaticImageData } from "next/image";

type ElementsType = "Agility" | "Chance" | "Intelligence" | "Strength";

export interface CombinationTableRowProps {
  element: ElementsType;
  items: (CombinationTableCellProps | null)[];
}

const getIcon = (
  element: ElementsType
): {
  src: StaticImageData;
  label: string;
} => {
  return {
    Agility: {
      src: AgilityIcon,
      label: "Agilidade",
    },
    Chance: {
      src: ChanceIcon,
      label: "Chance",
    },
    Intelligence: {
      src: IntelligenceIcon,
      label: "Inteligencia",
    },
    Strength: {
      src: StrengthIcon,
      label: "Força",
    },
  }[element];
};

export const CombinationTableRow = ({
  items,
  element,
}: CombinationTableRowProps) => {
  const { src, label } = getIcon(element);

  return (
    <div className="grid grid-cols-5">
      <div className="flex items-center justify-center">
        <Image src={src} width={64} alt={label}></Image>
      </div>
      {items.map((cell, key) => {
        if (!cell)
          return (
            <div className="flex items-center justify-center" key={key}>
              -
            </div>
          );
        return <CombinationTableCell key={key} {...cell} />;
      })}
    </div>
  );
};
