import Link from "next/link";
import { Title, Button, ButtonVariants } from "@atoms";
import { MdClose } from "react-icons/md";

export function DrawerHeader({ onClose }: { onClose: () => void }) {
  return (
    <div className="p-4 border-b flex items-center justify-between">
      <Link href="/">
        <Title className="m-0">YADOT</Title>
      </Link>
      <Button variant={ButtonVariants.FLAT} onClick={onClose}>
        <MdClose size={32}></MdClose>
      </Button>
    </div>
  );
}
