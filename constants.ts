import {
  AreaChart,
  MessageCircle,
  Camera,
  Clapperboard,
  Headphones,
  SquareCode,
  FileCog,
  MailPlus,
  FolderEdit,
  AppWindow,
  FileType2,
  ClipboardSignature,
} from "lucide-react";

export const MAX_FREE_COUNTS = 2;

export const tools = [
  {
    label: "Dashboard",
    icon: AreaChart,
    href: "/dashboard",
    color: "text-red-500",
    bgColor: "bg-red-200/10",
  },
  {
    label: "Conversation",
    icon: MessageCircle,
    href: "/conversation",
    color: "text-pink-500",
    bgColor: "bg-red-200/10",
  },
  {
    label: "Image Generation",
    icon: Camera,
    color: "text-orange-700",
    href: "/image",
    bgColor: "bg-red-200/10",
  },
  {
    label: "Video Generation",
    icon: Clapperboard,
    color: "text-lime-500",
    href: "/video",
    bgColor: "bg-red-200/10",
  },
  {
    label: "Music Generation",
    icon: Headphones,
    color: "text-cyan-400",
    href: "/music",
    bgColor: "bg-red-200/10",
  },
  {
    label: "Code Generation",
    icon: SquareCode,
    color: "text-yellow-600",
    href: "/code",
    bgColor: "bg-red-200/10",
  },

  {
    label: "Email Generation",
    icon: MailPlus,
    color: "text-rose-700",
    href: "/email",
    bgColor: "bg-red-200/10",
  },
  {
    label: "Name Generator",
    icon: FolderEdit,
    color: "text-fuchsia-950",
    href: "/name",
    bgColor: "bg-red-200/10",
  },
  {
    label: "Job Application Generator",
    icon: AppWindow,
    color: "text-amber-700",
    href: "/application",
    bgColor: "bg-red-200/10",
  },
  {
    label: "Text Summarizer",
    icon: ClipboardSignature,
    color: "text-teal-600",
    href: "/summarizer",
    bgColor: "bg-red-200/10",
  },
  {
    label: " Text Paraphraser",
    icon: FileType2,
    color: "text-green-400",
    href: "/paraphraser",
    bgColor: "bg-red-200/10",
  },
];
