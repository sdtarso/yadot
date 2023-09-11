"use client";

import Link from "next/link";
import { useState } from "react";
import { MdMenu } from "react-icons/md";
import { Button, ButtonVariants, Title } from "@atoms";
import { Drawer } from "./Drawer";

export interface HeaderProps {}

export function Header({}: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-neutral-100">
      <div className="container flex p-4 items-center gap-4">
        <Button variant={ButtonVariants.FLAT} onClick={() => setIsOpen(true)}>
          <MdMenu size={32}></MdMenu>
        </Button>
        <Drawer isOpen={isOpen} onClose={() => setIsOpen(false)} />
        <Link href="/">
          <Title>YADOT</Title>
        </Link>
      </div>
    </header>
  );
}
