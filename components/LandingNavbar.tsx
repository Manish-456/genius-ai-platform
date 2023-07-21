"use client";

import { cn } from "@/lib/utils";
import { useAuth } from "@clerk/nextjs";
import { Montserrat } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import {motion} from 'framer-motion';
import { navVariants } from "@/lib/motion";

const montserrat = Montserrat({
    weight : '600',
    subsets : ["latin"]
});

export default function LandingNavbar() {
    const {isSignedIn} = useAuth();
  return (
    <motion.nav 
    variants={navVariants}
    initial={"hidden"}
    whileInView={"show"}
    className="p-4 bg-transparent flex items-center justify-between"> 
      <Link href={'/'} className="flex items-center">
        <div className="relative h-8 w-8 mr-4">
            <Image fill src={'/logo.png'} alt="logo" />
        </div>
        <h1 className={cn("text-2xl font-bold text-white", montserrat.className)}>
            Genius
        </h1>
      </Link>
      <div className="flex items-center gap-x-2">
        <Link href={isSignedIn ? '/dashboard' : '/sign-up'}>
            <Button variant={"outline"} className="rounded-full">Get Started</Button>
        </Link>
      </div>
    </motion.nav>
  )
}
