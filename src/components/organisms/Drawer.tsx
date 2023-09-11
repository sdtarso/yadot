import { PropsWithChildren } from "react";
import { DrawerBody, DrawerFooter, DrawerHeader } from "@molecules";
import { twMerge } from "tailwind-merge";

interface DrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export const Drawer = ({
  isOpen = false,
  onClose,
}: PropsWithChildren<DrawerProps>) => {

  const drawerClassNames = twMerge(
    "flex",
    "flex-col",
    "bg-white",
    "w-full",
    "max-w-sm",
    "h-full",
    "overflow-auto",
    "fixed",
    "transition-all",
    "z-50",
    "left-0",
    "inset-y-0",
    "-translate-x-full",
    isOpen && "translate-x-0"
  );
  const backdropClassNames = twMerge(
    "transition-all",
    "bg-neutral-900/50",
    "w-full h-full",
    "fixed inset-0",
    "invisible opacity-0 z-0 pointer-events-none",
    isOpen && "visible opacity-100 z-40 pointer-events-auto"
  );

  return (
    <div className="drawer-wrapper">
      <div className={drawerClassNames} role="dialog">
        <DrawerHeader onClose={onClose} />
        <DrawerBody onClose={onClose} />
        <DrawerFooter />
      </div>
      <div className={backdropClassNames} onClick={onClose} />
    </div>
  );
};
