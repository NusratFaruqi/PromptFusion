import Image from "next/image";
import React from "react";

interface EmptyProps {
  images: React.ReactElement[] | JSX.Element[];
}

export const EmptyImage = ({ images }: EmptyProps) => {
  return (
    <div className="flex  py-5 self-end">
      {images.map((image, index) => {
        return (
          <div
            className={index == 0 ? "translate-y-20 translate-x-3" : ""}
            key={index}
          >
            {image}
          </div>
        );
      })}
    </div>
  );
};
