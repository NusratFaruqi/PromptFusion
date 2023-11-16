"use client";
import Image from "next/image";
import { EmptyImage } from "@/components/ui/emptyImage";
import { usePathname } from "next/navigation";
import { routes } from "@/components/sidebar";

interface EmptyProps {
  label: string;
}

type RouteProps = {
  label: string;
  icon: any;
  href: string;
  color: string;
  images: React.ReactElement[] | JSX.Element[];
};

export const Empty = ({ label }: EmptyProps) => {
  const pathname = usePathname();

  return (
    <div className="h-full p-20 flex flex-col  items-center justify-between">
      <p className="text-white text-sm text-center">{label}</p>

      {routes.map((route: RouteProps) => {
        if (pathname === route.href) {
          return <EmptyImage images={route.images} />;
        }
      })}
    </div>
  );
};
