"use client";
import React, {useState, useEffect} from "react";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Sidebar from "./sidebar";

interface MobileSidebarProps {
  apiLimitCount : number,
  isPro : boolean
}
export default function MobileSidebar({
  apiLimitCount = 0,
  isPro = false
} : MobileSidebarProps) {
    const [isMounted, setIsMounted] = useState(false)

    useEffect(() => {
      setIsMounted(true);
    }, [])

    if(!isMounted) return null;
    
  return (
    <Sheet>
      <SheetTrigger>
        <Button variant={"ghost"} className="md:hidden">
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent className="p-0" side={"left"}>
        <Sidebar isPro={isPro} apiLimit={apiLimitCount} />
      </SheetContent>
    </Sheet>
  );
}
