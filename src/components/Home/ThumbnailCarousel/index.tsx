"use client";

import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

const mainImages = [
    "Cancer1.png",
    "Cancer2.png",
    "Cancer3.png",
    "Cancer4.png",
];

const thumbImages = [
    "Cancer5.png",
    "Cancer6.png",
    "Cancer7.png",
    "Cancer8.png",
];

const ThumbnailCarousel: React.FC = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const mainSliderRef = useRef<Slider | null>(null);
    const navSliderRef = useRef<Slider | null>(null);

const settingsFor = {
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: navSliderRef.current as Slider,
};

const settingsNav = {
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: mainSliderRef.current as Slider,
    dots: true,
    centerMode: true,
    focusOnSelect: true,
    beforeChange: (_: number, next: number) => setActiveIndex(next),
    responsive: [
    {
        breakpoint: 1024,
        settings: { slidesToShow: 3 },
    },
    {
        breakpoint: 768,
        settings: { slidesToShow: 2 },
    },
    {
        breakpoint: 480,
        settings: { slidesToShow: 1 },
    },
    ],
};

useEffect(() => {
    if (mainSliderRef.current) {
        mainSliderRef.current.slickGoTo(activeIndex);
    }
}, [activeIndex]);

return (
        <div>
            <Slider {...settingsFor} ref={mainSliderRef} className="pb-4">
                {mainImages.map((img, index) => (
                <div key={index}>
                    <div className="relative w-full aspect-[4/3] overflow-hidden rounded-lg">
                    <Image
                        src={`/images/${img}`}
                        alt="RF Microwave Heatmap"
                        fill
                        quality={100}
                        priority={index === 0}
                        className="object-cover transition-transform duration-500 hover:scale-105"
                    />
                    </div>
                </div>
                ))}
            </Slider>

            <Slider {...settingsNav} ref={navSliderRef} className="thumb">
                {thumbImages.map((img, index) => (
                <div key={index}>
                    <div className="relative w-full aspect-[1/1] overflow-hidden rounded-lg">
                    <Image
                        src={`/images/${img}`}
                        alt="RF Thumbnail"
                        fill
                        quality={100}
                        className="object-cover"
                    />
                    </div>
                </div>
                ))}
            </Slider>
        </div>
    );
};

export default ThumbnailCarousel;
