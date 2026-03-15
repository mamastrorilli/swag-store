"use client";

import Link from "next/link";
import { useState } from "react";
import { MenuIcon } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";

export default function MobileMenu() {
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <button className="md:hidden text-white" aria-label="Open menu">
          <MenuIcon size={22} />
        </button>
      </SheetTrigger>
      <SheetContent
        side="right"
        className="bg-black border-white/10 text-white"
      >
        <nav className="mt-8 flex flex-col gap-4">
          <Link
            href="/products"
            className="p-4 text-lg text-white/80 hover:text-white transition-colors"
            onClick={() => setOpen(false)}
          >
            All Products
          </Link>
        </nav>
      </SheetContent>
    </Sheet>
  );
}
