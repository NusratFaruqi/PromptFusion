"use client";
import Image from "next/image";
import {
  AppWindow,
  AreaChart,
  Camera,
  Clapperboard,
  ClipboardSignature,
  FileType2,
  FolderEdit,
  Headphones,
  MailPlus,
  MessageCircle,
  ScrollText,
  SquareCode,
  Star,
} from "lucide-react";
import { Montserrat } from "next/font/google";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FreeCounter } from "@/components/free-counter";

import { cn } from "@/lib/utils";

const poppins = Montserrat({ weight: "600", subsets: ["latin"] });

export const menus = [
  {
    label: "Dashboard",
    icon: AreaChart,
    href: "/dashboard",
    color: "text-DarkSlateBlue-500",
    images: [],
  },

  {
    label: " Settings",
    icon: AppWindow,
    color: "text-green-400",
    href: "/settings",
    images: [],
  },

  {
    label: " Reviews",
    icon: Star,
    color: "text-violet-400",
    href: "/reviews",
    images: [],
  },
];

export const routes = [
  {
    label: "Dashboard",
    icon: AreaChart,
    href: "/dashboard",
    color: "text-DarkSlateBlue-500",
    images: [],
  },
  {
    label: "Conversation",
    icon: MessageCircle,
    href: "/conversation",
    color: "text-pink-500",
    images: [
      <Image
        src="/conversation1.gif"
        alt="Empty"
        width={150}
        height={150}
        className=" rounded-full animate-fade-down animate-infinite animate-duration-[5000ms] animate-ease-in-out"
      />,
      <Image
        src="/conversation2.gif"
        alt="Empty"
        width={150}
        height={150}
        className="rounded-full animate-fade-up animate-infinite animate-duration-[5000ms] animate-ease-in-out"
      />,
    ],
  },
  {
    label: "Image Generation",
    icon: Camera,
    color: "text-orange-700",
    href: "/image",
    images: [
      <Image
        src="/image1.gif"
        alt="Empty"
        width={150}
        height={150}
        className="rounded-full animate-fade-up animate-infinite animate-duration-[5000ms] animate-ease-in-out"
      />,
      <Image
        src="/image2.gif"
        alt="Empty"
        width={150}
        height={150}
        className="rounded-full animate-fade-down animate-infinite animate-duration-[5000ms] animate-ease-in-out"
      />,
    ],
  },
  {
    label: "Video Generation",
    icon: Clapperboard,
    color: "text-lime-500",
    href: "/video",
    images: [
      <Image
        src="/video.gif"
        alt="Empty"
        width={150}
        height={150}
        className="rounded-full animate-fade-left animate-infinite animate-duration-[5000ms]"
      />,
      <Image
        src="/video2.gif"
        alt="Empty"
        width={150}
        height={150}
        className="rounded-full animate-fade-right animate-infinite animate-duration-[5000ms]"
      />,
    ],
  },
  {
    label: "Music Generation",
    icon: Headphones,
    color: "text-cyan-400",
    href: "/music",
    images: [
      <Image
        src="/music1.gif"
        alt="Empty"
        width={150}
        height={150}
        className="rounded-full animate-fade-left animate-infinite animate-duration-[5000ms]"
      />,
      <Image
        src="/music2.gif"
        alt="Empty"
        width={150}
        height={150}
        className="rounded-full animate-fade-right animate-infinite animate-duration-[5000ms]"
      />,
    ],
  },
  {
    label: "Code Generation",
    icon: SquareCode,
    color: "text-yellow-600",
    href: "/code",
    images: [
      <Image
        src="/code.gif"
        alt="Empty"
        width={150}
        height={150}
        className="rounded-full animate-fade-left animate-infinite animate-duration-[5000ms]"
      />,
      <Image
        src="/code2.gif"
        alt="Empty"
        width={150}
        height={150}
        className="rounded-full animate-fade-right animate-infinite animate-duration-[5000ms]"
      />,
    ],
  },

  {
    label: "Email Generation",
    icon: MailPlus,
    color: "text-rose-700",
    href: "/email",
    images: [
      <Image
        src="/email.gif"
        alt="Empty"
        width={150}
        height={150}
        className="rounded-full animate-fade-left animate-infinite animate-duration-[5000ms]"
      />,
      <Image
        src="/email2.gif"
        alt="Empty"
        width={150}
        height={150}
        className="rounded-full animate-fade-right animate-infinite animate-duration-[5000ms]"
      />,
    ],
  },
  {
    label: "Name Generator",
    icon: FolderEdit,
    color: "text-fuchsia-950",
    href: "/name",
    images: [
      <Image
        src="/name1.gif"
        alt="Empty"
        width={150}
        height={150}
        className="rounded-full animate-fade-left animate-infinite animate-duration-[5000ms]"
      />,
      <Image
        src="/name2.gif"
        alt="Empty"
        width={150}
        height={150}
        className="rounded-full animate-fade-right animate-infinite animate-duration-[5000ms]"
      />,
    ],
  },
  {
    label: "Job Application Generator",
    icon: ScrollText,
    color: "text-blue-950",
    href: "/application",
    images: [
      <Image
        src="/job1.gif"
        alt="Empty"
        width={150}
        height={150}
        className="rounded-full animate-fade-left animate-infinite animate-duration-[5000ms]"
      />,
      <Image
        src="/job2.gif"
        alt="Empty"
        width={150}
        height={150}
        className="rounded-full animate-fade-right animate-infinite animate-duration-[5000ms]"
      />,
    ],
  },
  {
    label: "Text Summarizer",
    icon: ClipboardSignature,
    color: "text-teal-600",
    href: "/summarizer",
    images: [
      <Image
        src="/summarizer1.gif"
        alt="Empty"
        width={150}
        height={150}
        className="rounded-full animate-fade-left animate-infinite animate-duration-[5000ms]"
      />,
      <Image
        src="/summarizer2.gif"
        alt="Empty"
        width={150}
        height={150}
        className="rounded-full animate-fade-right animate-infinite animate-duration-[5000ms]"
      />,
    ],
  },
  {
    label: " Text Paraphraser",
    icon: FileType2,
    color: "text-green-400",
    href: "/paraphraser",
    images: [
      <Image
        src="/parapharaser1.gif"
        alt="Empty"
        width={150}
        height={150}
        className="rounded-full animate-fade-down animate-infinite animate-duration-[5000ms]"
      />,
      <Image
        src="/parapharaser2.gif"
        alt="Empty"
        width={150}
        height={150}
        className="rounded-full animate-fade-up animate-infinite animate-duration-[5000ms]"
      />,
    ],
  },

  {
    label: " Settings",
    icon: AppWindow,
    color: "text-green-400",
    href: "/settings",
    images: [],
  },
];

export const Sidebar = ({
  apiLimitCount = 0,
  isPro = false,
}: {
  apiLimitCount: number;
  isPro: boolean;
}) => {
  const pathname = usePathname();

  return (
    <div className="flex flex-col h-full bg-gray-800 text-white">
      <div className="px-3 flex-1">
        <Link href="/dashboard" className="flex items-center pl-3 mb-10 py-10">
          <div className="relative h-6 w-8 mr-4">
            <Image fill alt="Logo" src="/logo.png" />
          </div>
          <h1
            className={cn(
              "text-2xl font-semibold text-white",
              poppins.className
            )}
          >
            PromptFusion
          </h1>
        </Link>
        <div className="space-y-1">
          {menus.map((route) => (
            <Link
              key={route.href}
              href={route.href}
              className={cn(
                "text-sm group flex p-3 w-full justify-start font-medium cursor-pointer hover:text-[#9370DB] hover:bg-white/10 rounded-lg transition",
                pathname === route.href
                  ? "text-[#9370DB] bg-white/10"
                  : "text-black-400"
              )}
            >
              <div className="flex items-center flex-1">
                <route.icon className={cn("h-5 w-5 mr-3", route.color)} />
                {route.label}
              </div>
            </Link>
          ))}
        </div>
      </div>
      <FreeCounter apiLimitCount={apiLimitCount} isPro={isPro} />
    </div>
  );
};
