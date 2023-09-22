import { twMerge } from "tailwind-merge";
import { ClassNameWithChildrenInterface as ListItemProps } from "../atoms";

export const ListItem = ({ className, children }: ListItemProps) => {
  return (
    <li
      className={twMerge(
        "flex items-center w-full p-2 outline-none",
        "text-start",
        "bg-white hover:bg-slate-50",
        "transition-all",
        className
      )}
    >
      {children}
    </li>
  );
};
