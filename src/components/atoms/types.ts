import { PropsWithChildren, ReactNode } from "react";

export type ElementsType = "Agility" | "Chance" | "Intelligence" | "Strength";
export interface ClassNameWithChildrenInterface extends PropsWithChildren {
  className?: string;
}
