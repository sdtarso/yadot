import { twMerge } from "tailwind-merge";
import { ClassNameWithChildrenInterface as ListProps } from "../atoms";

export function List({ children, className }: ListProps) {
  return (
    <ul className={twMerge("flex flex-col gap-2 p-2 bg-white", className)}>
      {children}
    </ul>
  );
}
