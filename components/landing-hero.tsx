"use client";

import TypewriterComponent from "typewriter-effect";
import Link from "next/link";
import { useAuth } from "@clerk/nextjs";

import { Button } from "@/components/ui/button";

export const LandingHero = () => {
  const { isSignedIn } = useAuth();

  return (
    <div className="text-white body-bg font-semibold py-60 text-center space-y-5">
      <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl space-y-5 font-extrabold">
        <h1>Your Ideas, AI&#39;s Creations. </h1>
        <div className="text-transparent bg-clip-text bg-gradient-to-r from-red-300 to-blue-600">
          <TypewriterComponent
            options={{
              strings: [
                "Instantly Generate ",
                "Images",
                "Code",
                "Mail Writing.",
                "Music and  More...",
              ],
              autoStart: true,
              loop: true,
            }}
          />
        </div>
      </div>
      <div className="text-sm md:text-xl font-light ">
        Simple AI, Infinite Possibilities.
      </div>
      <div>
        <Link href={isSignedIn ? "/dashboard" : "/sign-up"}>
          <Button
            variant="secondary"
            className="md:text-lg p-4 md:p-6 rounded-full font-semibold"
          >
            Get Started
          </Button>
        </Link>
      </div>
    </div>
  );
};
