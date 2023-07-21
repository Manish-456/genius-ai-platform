"use client";

import React from "react";
import { useAuth } from "@clerk/nextjs";
import TypewriterComponent from "typewriter-effect";
import Link from "next/link";
import { Button } from "./ui/button";
import { motion } from 'framer-motion';
import { fadeIn, staggerContainer } from "@/lib/motion";

export default function LandingHero() {
  const { isSignedIn } = useAuth();
  return (
    <motion.div 
     variants={staggerContainer()}
     initial={"hidden"}
     whileInView={"show"}
     viewport={{once : false, amount : 0.25}}

    className="text-white font-bold py-36 text-center space-y-5">
      <motion.div
       variants={fadeIn("left", "tween", 0.2, 1)}      
      className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl space-y-5 font-extrabold">
        <h1>The Best AI Tool for </h1>
        <motion.div   className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
          <TypewriterComponent
            options={{
              strings: [
                "Chatbot",
                "Photo Generation",
                "Music Generation",
                "Code Generation",
                "Video Generation",
              ],
              autoStart: true,
              loop: true,
            }}
          />
        </motion.div>
      </motion.div>
      <motion.div
      variants={fadeIn("left", "tween", 0.2, 1)}
      className="text-sm md:text-xl font-light text-zinc-400">
        Create content using AI 10x faster
      </motion.div>
      <motion.div variants={fadeIn("left", "tween", 0.2, 1)}>
        <Link  href={isSignedIn ? "/dashboard" : "/sign-up"}>
            <Button  variant={"premium"} className="md:text-lg p-4 md:p-6 rounded-full font-semibold">
                Start Generating For Free
            </Button>
        </Link>
      </motion.div>
      <motion.div variants={fadeIn("left", "tween", 0.2, 1)} className="text-zinc-400 text-xs md:text-sm font-normal">
        No credit card required.
      </motion.div>
    </motion.div>
  );
}
