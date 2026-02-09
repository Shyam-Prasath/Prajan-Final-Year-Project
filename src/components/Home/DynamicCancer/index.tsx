"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const cancerSlides = [
    {
        img: "/images/normal.png",
        title: "Normal Breast Tissue",
        desc: "Healthy breast tissue with normal cellular structure and no abnormal growth patterns.",
        leftBg: "bg-pink-200 dark:bg-lavender-700",
        rightBg: "bg-pink-100 dark:bg-lavender-500",
    },
    {
        img: "/images/benign.png",
        title: "Benign Tumor Cells",
        desc: "Non-cancerous tumor cells showing localized and controlled cell growth.",
        leftBg: "bg-sandal-200 dark:bg-blue-900",
        rightBg: "bg-sandal-100 dark:bg-blue-800",
    },
    {
        img: "/images/malignant.png",
        title: "Malignant Tumor Cells",
        desc: "Cancerous cells exhibiting irregular nuclei and uncontrolled proliferation.",
        leftBg: "bg-rose-200 dark:bg-indigo-900",
        rightBg: "bg-rose-100 dark:bg-indigo-800",
    },
    {
        img: "/images/ductal.png",
        title: "Invasive Ductal Carcinoma",
        desc: "Most common breast cancer type, originating in milk ducts and spreading to tissue.",
        leftBg: "bg-pink-100 dark:bg-lavender-900",
        rightBg: "bg-pink-50 dark:bg-lavender-800",
    },
    {
        img: "/images/lobular.png",
        title: "Lobular Carcinoma",
        desc: "Cancer originating in milk-producing lobules, often harder to detect.",
        leftBg: "bg-purple-200 dark:bg-indigo-900",
        rightBg: "bg-purple-100 dark:bg-indigo-800",
    },
];


const DynamicCancer = () => {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
        setIndex((prev) => (prev + 1) % cancerSlides.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    const prevSlide = () => {
        setIndex((prev) => (prev === 0 ? cancerSlides.length - 1 : prev - 1));
    };

    const nextSlide = () => {
        setIndex((prev) => (prev + 1) % cancerSlides.length);
    };

    const current = cancerSlides[index];

    return (
        <section className="dark:bg-darkmode pt-0">
        <div className="container relative">

            <button
            onClick={prevSlide}
            className="absolute left-2 top-2/3 -translate-y-1/2 z-20
                        bg-black/70 text-white
                        rounded-full p-3 shadow-lg
                        hover:scale-110 transition"
            >
            ❮
            </button>

            <button
            onClick={nextSlide}
            className="absolute right-2 top-2/3 -translate-y-1/2 z-20
                        bg-white/90 text-black
                        rounded-full p-3 shadow-lg
                        hover:scale-110 transition"
            >
            ❯
            </button>

            <div className="text-center md:pb-20 pb-8">
            <h2 className="pb-8">Breast Cancer Cell Analysis</h2>
            <p className="text-SlateBlueText dark:text-opacity-80 text-lg font-normal max-w-920 m-auto">
                Visual exploration of breast tissue types used in CNN-based RF microwave
                imaging and deep learning classification.
            </p>
            </div>

            <div className="flex flex-wrap items-stretch">

            <div
                className={`flex items-center justify-center lg:px-16 px-8 py-8
                            md:w-2/4 w-full transition-colors duration-700
                            ${current.leftBg} rounded-l-22`}
            >
                <div className="relative w-full aspect-[4/3] overflow-hidden rounded-22 shadow-xl">
                <Image
                    src={current.img}
                    alt={current.title}
                    fill
                    quality={100}
                    className="object-cover object-center transition-opacity duration-700"
                />
                </div>
            </div>

            <div
                className={`lg:py-14 py-6 lg:px-16 px-8
                            md:w-2/4 w-full transition-colors duration-700
                            ${current.rightBg} rounded-r-22`}
            >
                <div className="bg-white dark:bg-darklight rounded-22 lg:px-11 px-4 pt-8 pb-10 shadow-xl">
                <h6 className="text-[26px] leading-[2.1rem] font-bold pb-5">
                    {current.title}
                </h6>

                <p className="text-lg text-SlateBlueText dark:text-opacity-80 pb-6">
                    {current.desc}
                </p>

                <Link
                    href="/CnnModel"
                    className="btn btn-1 hover-filled-slide-down w-full text-center rounded-lg overflow-hidden"
                >
                    <span>View CNN Classification</span>
                </Link>
                </div>
            </div>

            </div>
        </div>
        </section>
    );
};

export default DynamicCancer;
