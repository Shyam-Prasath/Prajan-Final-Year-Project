import Image from "next/image";
import Link from "next/link";

const FooterContent = () => {
    return (
        <section className="dark:bg-darkmode pt-0">
        <div className="container">
            <div className="bg-primary relative md:mx-auto mx-0 overflow-hidden py-0 rounded-22 lg:-mb-48 dark:lg:-mb-48 md:mt-20 mt-10">

            <div className="absolute inset-0 hidden md:block">
                <Image
                src="/images/Footer.png"
                alt="hero"
                fill
                quality={100}
                priority
                className="object-cover bg-transparent"
                />
            </div>

            <div className="relative flex flex-wrap items-center justify-between md:p-20 p-5">
                <div className="md:w-2/5 w-full ml-auto lg:text-start text-center">
                <p className="sm:text-4xl text-[28px] leading-[2.25rem] font-bold text-white lg:max-w-364 max-w-full pb-9">
                    Become a Part of the Digital Evolution!
                </p>

                <Link
                href="/CnnModel"
                className="btn btn-1 hover-filled-slide-down rounded-lg overflow-hidden before:bg-indigo-600"
                >
                    <span className="sm:!px-20 px-10 !border-indigo-600 !text-white">
                        Naan thaan da Leo... Leo Das!
                    </span>
                </Link>

                </div>
            </div>

            </div>
        </div>
        </section>
    );
};

export default FooterContent;
