import Image, { StaticImageData } from "next/image";
import { PropsWithChildren, ReactNode } from "react";
import { twMerge } from "tailwind-merge";

export interface CombinationTableCellProps {
  icon: StaticImageData;
  caption: string;
  children: ReactNode;
  classNames?: string;
}

export const CombinationTableCell = ({
  icon,
  caption,
  children,
  classNames,
}: PropsWithChildren<CombinationTableCellProps>) => {
  return (
    <div
      className={twMerge(
        "flex",
        "flex-col",
        "items-center",
        "justify-center",
        "p-2",
        "border",
        classNames
      )}
    >
      <Image className="m-0" src={icon} width={48} alt={caption}></Image>
      {children}
    </div>
  );
};
