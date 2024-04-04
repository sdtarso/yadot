import { PropsWithChildren } from "react";

export const InputLabel = ({
  className = "",
  children,
  ...props
}: PropsWithChildren<{ className?: string }>) => {
  return (
    <label
      {...props}
      className={`block font-medium text-sm text-gray-700 ` + className}
    >
      {children}
    </label>
  );
};
