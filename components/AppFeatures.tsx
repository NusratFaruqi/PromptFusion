import { LucideIcon } from "lucide-react";
import React from "react";
import { cn } from "@/lib/utils";

type Props = {
  left: boolean;
  icon: LucideIcon;
  iconColor?: string;
  text: string;
  points: string[];
};

const AppFeatures = (props: Props) => {
  return (
    <div className="max-w-screen-xl mx-auto py-40 ">
      <div className="flex justify-between items-center flex-col md:flex-row mx-10">
        {props.left === true && (
          <props.icon
            className="basis-1/2"
            size={200}
            color={props.iconColor ?? "black"}
          />
        )}
        <div className="basis-1/2 px-4">
          <h2 className="mb-4 text-lg font-semibold text-gray-900 dark:text-white">
            {props.text}
          </h2>
          <ul className="max-w-md space-y-1 text-gray-500 list-inside dark:text-gray-400">
            {props.points.map((point, idx) => (
              <li key={idx} className="flex items-center">
                <svg
                  className="w-3.5 h-3.5 mr-4 text-[#54a0ff] flex-shrink-0"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                </svg>
                {point}
              </li>
            ))}
          </ul>
        </div>

        {props.left === false && (
          <props.icon
            className="basis-1/2"
            size={200}
            color={props.iconColor ?? "black"}
          />
        )}
      </div>
    </div>
  );
};

export default AppFeatures;
