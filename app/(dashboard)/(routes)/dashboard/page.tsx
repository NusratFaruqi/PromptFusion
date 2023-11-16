"use client";

import { ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";

import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

import { tools } from "@/constants";

export default function HomePage() {
  const router = useRouter();

  return (
    <div>
      <div className="mb-8 space-y-4">
        <h2 className="text-2xl md:text-4xl font-bold text-center text-white">
          Generate What You Need
        </h2>
        <p className="text-white font-light text-sm md:text-lg text-center ">
          AI Magic: Create, Innovate, Communicate.
        </p>
      </div>
      <div className="px-4 md:px-20 lg:px-32 space-y-4">
        <div className="grid grid-cols-4 gap-4">
          {tools.map((tool) => (
            <Card
              onClick={() => router.push(tool.href)}
              key={tool.href}
              className="p-4 border-black/5 flex items-center justify-center flex-col hover:shadow-md transition cursor-pointer gap-5 bg-gradient-to-r from-indigo-400 via-sky-900 to-blue-400  shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)] "
            >
              <div className={cn("p-2 w-fit rounded-md", tool.bgColor)}>
                <tool.icon className={cn("w-12 h-12", tool.color)} />
              </div>
              <div className="font-semibold text-white">{tool.label}</div>

              <ArrowRight className={cn("w-5 h-5", tool.color)} />
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
