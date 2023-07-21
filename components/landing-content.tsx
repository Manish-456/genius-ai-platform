"use client";

import { fadeIn } from "@/lib/motion";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { motion } from 'framer-motion';

export const LandingContent = () => {
  const testimonials = [
    {
      name: "Manish",
      avatar: "M",
      title: "Software Engineer",
      description: "This is the best application I've used!",
    },
    {
      name: "Saagar",
      avatar: "S",
      title: "CEO",
      description: "This app has made my life so much easier.",
    },
    {
      name: "Pujan",
      avatar: "P",
      title: "Manager",
      description: "This app definitely worth the premium subscription.",
    },
    {
      name: "Bikash",
      avatar: "B",
      title: "CFO",
      description: "I use this app on daily basis for code generation.",
    },
    {
      name: "Roshan",
      avatar: "R", 
      title: "Designer",
      description:
        "I learn so many designing concepts from this app. Love it.",
    },
  ];
  return (
    <motion.div variants={fadeIn("up", "tween", 0.2, 1)} initial={"hidden"} whileInView={"show"} className="px-10 pb-20">
      <h2 className="text-center text-4xl text-white font-extrabold mb-10">
        Testimonials
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {testimonials.map((item) => (
          <Card
            key={item.description}
            className="bg-[#192339] text-white border-none"
          >
            <CardHeader>
              <CardTitle className="flex  gap-x-2">
                <div className="h-6 w-6 mt-1 p-4 bg-purple-600 flex items-center justify-center rounded-full">
                  <h3 className="text-white text-sm">{item.avatar}</h3>
                </div>
                <div>
                  <p className="text-lg">{item.name}</p>
                  <p className="text-zinc-400 text-sm">{item.title}</p>
                </div>
              </CardTitle>
              <CardContent className="pt-4 px-0">
                {item.description}
              </CardContent>
            </CardHeader>
          </Card>
        ))}
      </div>
    </motion.div>
  );
};
