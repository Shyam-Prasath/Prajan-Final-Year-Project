"use client";
import Link from "next/link";
import { useState } from "react";

export const DocNavigation = () => {

  const [navItem, setNavItem] = useState("overview");

  function getNavItem(item: string) {
    setNavItem(item);
  }

const DocsNav = [
    {
        id: 1,
        navItem: "Analytics Overview",
        hash: "overview",
    },
    {
        id: 2,
        navItem: "Dataset Insights",
        hash: "dataset",
    },
    {
        id: 3,
        navItem: "Model Performance",
        hash: "performance",
    },
    {
        id: 4,
        navItem: "Confusion Matrix",
        hash: "confusion",
    },
    {
        id: 5,
        navItem: "Accuracy & Loss",
        hash: "metrics",
    },
    {
        id: 6,
        navItem: "Prediction Analysis",
        hash: "predictions",
    },
    {
        id: 7,
        navItem: "Limitations",
        hash: "limitations",
    },
    {
        id: 8,
        navItem: "Future Improvements",
        hash: "future",
    },
];

return (
        <div className="flex flex-col gap-0.5 mt-4 items-start fixed pe-4">
        {DocsNav.map((item) => {
            return (
            <Link
                key={item.id}
                href={`#${item.hash}`}
                onClick={() => getNavItem(item.hash)}
                className={`py-2.5 hover:bg-primary/20 hover:text-primary dark:hover:text-primary 
                xl:min-w-60 lg:min-w-52 min-w-full px-4 rounded-md text-base font-medium
                ${
                    item.hash === navItem
                    ? "bg-primary text-white hover:!bg-primary hover:!text-white dark:!text-opacity-100"
                    : "text-MidnightNavyText dark:text-SlateBlueText dark:text-opacity-80"
                }`}
            >
                {item.navItem}
            </Link>
            );
        })}
        </div>
    );
};
