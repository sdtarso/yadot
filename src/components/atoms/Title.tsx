import { ReactNode } from "react";

export enum TitlesVariants {
  H1 = "h1",
  H2 = "h2",
  H3 = "h3",
  H4 = "h4",
  H5 = "h5",
}

interface TitleProps {
  children: ReactNode;
  className?: string;
  variant?: TitlesVariants;
}

export function Title({
  children,
  className = "",
  variant = TitlesVariants.H2,
}: TitleProps) {
  const Tag = `${variant}`;
  // @ts-ignore
  return <Tag className={className}>{children}</Tag>;
}
