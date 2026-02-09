"use client";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

const Testimonials = () => {
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };
    return (
        <>
            <section className="bg-IcyBreeze dark:bg-darklight testimonial">
                <div className="container">
                    <Slider {...settings}>
                        <div>
                            <div className="grid md:grid-cols-12 grid-cols-1 items-center">
                                <div
                                data-aos="fade-right"
                                data-aos-delay="200"
                                data-aos-duration="1000"
                                className="
                                    col-span-4
                                    bg-LightSkyBlue
                                    sm:rounded-br-214 rounded-br-182
                                    sm:rounded-tl-214 rounded-tl-182
                                    relative
                                    overflow-hidden
                                    h-[420px] sm:h-[520px]   /* 🔥 REQUIRED HEIGHT */
                                    before:content-['']
                                    before:absolute
                                    before:bg-[url('/images/testimonials/quotes.png')]
                                    before:w-109
                                    before:h-109
                                    before:-right-10
                                    before:top-32
                                    lg:inline-block hidden
                                "
                                >
                                    <Image
                                        src="/images/Harish.jpg"
                                        alt="testimonials"
                                        fill
                                        quality={100}
                                        className="object-cover"
                                        priority
                                    />
                                </div>

                                <div data-aos="fade-left" data-aos-delay="300" data-aos-duration="1000" className="col-span-8 md:ml-28 ml-0">
                                    <p className="text-xl font-bold">Rajasekar savuara... appa Dayal kadhula edho sonnane... enna sonnanu yaarukkavathu theriyumaaa?!</p>
                                    <p className="text-lg font-normal text-SlateBlueText dark:text-opacity-80 py-10 max-w-632 text-justify">
                                        Dai muta pu***, 4 years fulla college la thookitu suthitu, oru single internship kooda illa, resume open panna HR ku allergy varum pola irukku. Git history patha thiruttu scene maari irukku, but indha breast cancer AI edho miracle aachi semi work aagiduchu.
Job kedaikala nu azhudhu alambu da loosu, ippo dhaan oru project panni unna prove pannita nu nenachuko! 😭
                                    </p>
                                    <div className="flex items-center gap-8">
                                        <div>
                                            <Image
                                                src="/images/Revanth.jpg"
                                                alt="testimonials-profile"
                                                width={0}
                                                height={0}
                                                quality={100}
                                                layout="responsive"
                                                sizes="100vh"
                                                className="!w-16 !h-16 rounded-full"
                                            />
                                        </div>
                                        <div>
                                            <p className="text-xl font-medium text-secondary dark:text-white pb-1">
                                                Revanth Mama
                                            </p>
                                            <div className="flex items-center">
                                                <svg
                                                    className="w-4 h-4 text-yellow-500 ms-1"
                                                    aria-hidden="true"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="currentColor"
                                                    viewBox="0 0 22 20"
                                                >
                                                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                                </svg>
                                                
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="grid md:grid-cols-12 grid-cols-1 items-center">
                                <div
                                data-aos="fade-right"
                                data-aos-delay="200"
                                data-aos-duration="1000"
                                className="
                                    col-span-4
                                    bg-LightSkyBlue
                                    sm:rounded-br-214 rounded-br-182
                                    sm:rounded-tl-214 rounded-tl-182
                                    relative
                                    overflow-hidden
                                    h-[420px] sm:h-[520px]   /* 🔥 REQUIRED HEIGHT */
                                    before:content-['']
                                    before:absolute
                                    before:bg-[url('/images/testimonials/quotes.png')]
                                    before:w-109
                                    before:h-109
                                    before:-right-10
                                    before:top-32
                                    lg:inline-block hidden
                                "
                                >
                                    <Image
                                        src="/images/Prajan.jpg"
                                        alt="testimonials"
                                        fill
                                        quality={100}
                                        className="object-cover"
                                        priority
                                    />
                                </div>

                                <div className="col-span-8 md:ml-28 ml-0">
                                    <p className="text-xl font-bold">Rajasekar savuara... appa Dayal kadhula edho sonnane... enna sonnanu yaarukkavathu theriyumaaa?!</p>
                                    
                                    <p className="text-lg font-normal text-SlateBlueText dark:text-opacity-80 py-10 max-w-632 text-justify">
                                        Dai losu ku***, deadline vara varaikum oru line code um type pannala—last 2 days la copy-paste breast cancer AI, bugs fulla, edho miracle aachi semi run aachu da.
Skills zero, LinkedIn empty—HR kitta “cancer detect pannuren” nu sollu da, resume straight delete!
Azhudhu alambu da kuppai, indha oru project un life highlight nu nenachuko!
                                    </p>
                                    <div className="flex items-center gap-8">
                                        <div>
                                            <Image
                                                src="/images/Bala.jpg"
                                                alt="testimonials-profile"
                                                width={0}
                                                height={0}
                                                quality={100}
                                                layout="responsive"
                                                sizes="100vh"
                                                className="!w-16 !h-16 rounded-full"
                                            />
                                        </div>
                                        <div>
                                            <p className="text-xl font-medium text-secondary dark:text-darktext pb-1">
                                                Bala Prakash
                                            </p>
                                            <div className="flex items-center">
                                                <svg
                                                    className="w-4 h-4 text-yellow-500 ms-1"
                                                    aria-hidden="true"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="currentColor"
                                                    viewBox="0 0 22 20"
                                                >
                                                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                                </svg>
                                                <svg
                                                    className="w-4 h-4 text-yellow-500 ms-1"
                                                    aria-hidden="true"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="currentColor"
                                                    viewBox="0 0 22 20"
                                                >
                                                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Slider>
                </div>
            </section>
        </>
    );
};

export default Testimonials;
