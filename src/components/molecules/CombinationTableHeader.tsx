import AgilityIcon from "@images/icons/agility.webp";
import ChanceIcon from "@images/icons/chance.webp";
import IntelligenceIcon from "@images/icons/intelligence.webp";
import Image from "next/image";

export const CombinationTableHeader = () => {
  return (
    <div className="grid grid-cols-4">
      <div className="p-2"></div>
      <div className="flex justify-center mb-2">
        <Image src={ChanceIcon} width={64} alt="Chance"></Image>
      </div>
      <div className="flex justify-center mb-2">
        <Image src={IntelligenceIcon} width={64} alt="Inteligência"></Image>
      </div>
      <div className="flex justify-center mb-2">
        <Image src={AgilityIcon} width={64} alt="Agilidade"></Image>
      </div>
    </div>
  );
};
