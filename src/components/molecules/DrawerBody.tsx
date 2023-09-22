import Link from "next/link";

export function DrawerBody({ onClose }: { onClose: () => void }) {
  const items = [
    {
      link: "/hupper-guide",
      label: "Hupper Guide",
    },
    {
      link: "/hupper-guide/combinacoes-elementares",
      label: "Combinações Elementares",
    },
    {
      link: "#",
      label: "WIP",
    },
  ];

  return (
    <div className="flex-grow">
      <nav>
        <ul className="flex flex-col gap-1 p-2">
          {items.map(({ link, label }, key) => (
            <li
              key={key}
              className="block w-full p-3 text-neutral-800 font-medium"
            >
              <Link href={link} onClick={onClose}>
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
