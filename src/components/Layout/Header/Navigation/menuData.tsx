import { HeaderItem } from "@/types/menu";

export const headerData: HeaderItem[] = [
  { label: "Home", href: "/" },
  { label: "About Project", href: "/Project" },
  { label: "Breast Cancer", href: "/BreastCancer" },
  {
    label: "CNN Model",
    href: "/CnnModel",
    submenu: [
      { label: "Ml Model", href: "/CnnModel" },
      { label: "Why This ?", href: "/CnnModel/project1" },
    ],
  },
  { label: "Contact", href: "/Contact" },
  { label: "Analytics", href: "/Analytics" },
];