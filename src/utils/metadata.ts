import type { Metadata as MD } from "next";

export const metadata = ({ title, description }: MD): MD => {
  return {
    title: `${title} | YADOT`,
    description,
    openGraph: {
      images: ["/thumb.png"],
    },
  };
};
