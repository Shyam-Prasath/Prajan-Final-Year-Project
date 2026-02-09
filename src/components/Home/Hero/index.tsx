import Image from "next/image";
import Link from "next/link";

const Hero = () => {
    return (
        <section className="dark:bg-darkmode">
            <div className="container">
                <div className="grid lg:grid-cols-12 grid-cols-1 items-center gap-30">

                <div className="col-span-6">
                    <br />

                    <h1
                    className="py-4 text-4xl md:text-5xl font-bold"
                    data-aos="fade-up"
                    data-aos-delay="300"
                    data-aos-duration="1000"
                    >
                    AI-Based Breast Cancer
                    </h1>

                    <p
                    data-aos="fade-up"
                    data-aos-delay="400"
                    data-aos-duration="1000"
                    className="text-xl text-SlateBlueText dark:text-opacity-80 font-normal md:pb-14 pb-6"
                    >
                    An intelligent deep learning framework that uses
                    <strong> CNN models </strong>
                    on RF microwave imaging data to assist in the early
                    detection of breast cancer.
                    </p>

                    <div className="flex items-center md:justify-normal lg:justify-center justify-start flex-wrap gap-4">

                    <Link
                        href="/CnnModel"
                        data-aos="fade-up"
                        data-aos-delay="500"
                        data-aos-duration="1000"
                        className="btn btn-1 hover-filled-slide-down rounded-lg overflow-hidden"
                    >
                        <span className="!flex !items-center gap-14">
                            
                            <svg
                            className="w-6 h-6 text-white group-hover:text-cyan-300 transition-colors duration-300"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            viewBox="0 0 24 24"
                            >
                            <circle cx="6" cy="6" r="2" />
                            <circle cx="18" cy="6" r="2" />
                            <circle cx="6" cy="18" r="2" />
                            <circle cx="18" cy="18" r="2" />
                            <circle cx="12" cy="12" r="2" />

                            <line x1="8" y1="6" x2="10" y2="10" />
                            <line x1="16" y1="6" x2="14" y2="10" />
                            <line x1="8" y1="18" x2="10" y2="14" />
                            <line x1="16" y1="18" x2="14" y2="14" />
                            </svg>
                            View CNN Model
                        </span>
                    </Link>

                    <Link
                        href="/BreastCancer"
                        data-aos="fade-up"
                        data-aos-delay="600"
                        data-aos-duration="1000"
                        className="btn_outline btn-2 hover-outline-slide-down group"
                    >
                        <span className="!flex !items-center gap-14">
                            <svg
                            className="w-6 h-6 text-primary group-hover:text-white transition-colors"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            viewBox="0 0 24 24"
                            >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M12 6v12m6-6H6"
                            />
                            </svg>
                        About Breast Cancer
                        </span>
                    </Link>

                    </div>
                </div>

                <div
                    data-aos="fade-left"
                    data-aos-delay="200"
                    data-aos-duration="1000"
                    className="col-span-6 lg:flex hidden items-start gap-6"
                >

                    <div className="bg-ElectricAqua relative rounded-tl-166 rounded-br-166 w-full overflow-hidden">

                    <div className="relative w-full h-[22rem]">
                        <Image
                        src="/images/Harish.jpg"
                        alt="Harish Kumar"
                        fill
                        quality={100}
                        className="object-cover transition-transform duration-500 hover:scale-105"
                        />
                    </div>

                    </div>

                    <div className="bg-yellow-300 rounded-22 shadow-hero-box py-4 px-5 absolute top-16 -left-20">
                        <p className="text-lg font-bold text-yellow-900">
                        Harish Kumar
                        </p>
                        <p className="text-base font-medium text-yellow-900 text-center">
                        RF Data Specialist
                        </p>
                    </div>

                    <div className="bg-primary relative rounded-tr-166 rounded-bl-166 w-full mt-32 overflow-hidden">

                    <div className="relative w-full h-[22rem]">
                        <Image
                        src="/images/Prajan.jpg"
                        alt="Prajan Gowtham"
                        fill
                        quality={100}
                        className="object-cover transition-transform duration-500 hover:scale-105"
                        />
                    </div>
                    </div>

                    <div className="bg-Aquamarine rounded-22 shadow-hero-box py-4 px-5 
                        absolute -bottom-14 -right-9
                        xl:inline-block hidden">
                        <p className="text-lg font-bold text-green-800">
                            Prajan Gowtham
                        </p>
                        <p className="text-base font-medium text-green-800 text-center">
                            CNN Model Developer
                        </p>
                    </div>


                </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
