"use client";

import Link from "next/link";
import { useState } from "react";
import { MdMenu } from "react-icons/md";
import { VscGithubInverted } from "react-icons/vsc";
import { Button, ButtonVariants, Title } from "@atoms";
import { Drawer } from "./Drawer";

export interface HeaderProps {}

export function Header({}: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-neutral-100">
      <div className="flex p-4 items-center gap-4">
        <Button variant={ButtonVariants.FLAT} onClick={() => setIsOpen(true)}>
          <MdMenu size={32}></MdMenu>
        </Button>
        <Drawer isOpen={isOpen} onClose={() => setIsOpen(false)} />
        <Link href="/">
          <Title className="m-0">YADOT</Title>
        </Link>
        <Link href="https://github.com/sdtarso/yadot" target="_blank" className="ml-auto" title="Github Page">
          <VscGithubInverted size={32} />
        </Link>
      </div>
    </header>
  );
}
