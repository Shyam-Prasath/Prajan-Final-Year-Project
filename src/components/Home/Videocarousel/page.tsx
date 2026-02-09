"use client";
import Image from "next/image";
import { useState } from "react";

const Videocarousel = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <section className="bg-IcyBreeze dark:bg-darklight">
        <div className="container">
          <div className="grid md:grid-cols-12 grid-cols-1 items-center max-w-[125rem] mx-auto">

            <div
              className="col-span-5 py-0 px-7"
              data-aos="fade-right"
              data-aos-delay="200"
              data-aos-duration="1000"
            >
              <h2>Breast Cancer AI – Statistical Insights</h2>

              <p className="text-lg font-normal text-SlateBlueText dark:text-opacity-80 max-w-404 pt-7 pb-11">
                This section summarizes key statistics derived from RF microwave
                breast imaging data and CNN-based classification experiments,
                highlighting dataset scale, diagnostic coverage, and model impact.
              </p>

              <div className="flex items-center flex-wrap gap-30">
                <div>
                  <h2 className="text-primary">13k+</h2>
                  <p className="text-lg font-medium">Total Samples</p>
                </div>
                <div>
                  <h2 className="text-primary">5k+</h2>
                  <p className="text-lg font-medium">Cancer Cases</p>
                </div>
                <div>
                  <h2 className="text-primary">8k+</h2>
                  <p className="text-lg font-medium">Normal Cases</p>
                </div>
              </div>
            </div>

            <div
              className="col-span-7 px-7"
              data-aos="fade-left"
              data-aos-delay="200"
              data-aos-duration="1000"
            >
              <div className="mt-14 relative">
                <Image
                  src="/images/Meme1.png"
                  alt="CNN Model Demo"
                  width={0}
                  height={0}
                  layout="responsive"
                  quality={100}
                  sizes="100vh"
                  className="rounded-22"
                />

                <button
                  onClick={openModal}
                  className="
                    bg-white group
                    sm:w-14 w-12 sm:h-14 h-12
                    absolute top-1/2 left-1/2
                    -translate-x-1/2 -translate-y-1/2
                    rounded-full shadow-xl
                    flex items-center justify-center
                    hover:scale-110 transition
                  "
                >
                  ▶
                </button>
              </div>
            </div>
          </div>
        </div>

        {isModalOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
            <div className="bg-white dark:bg-darkmode rounded-lg sm:m-0 m-4 max-w-3xl w-full">

              <div className="flex items-center justify-between border-b p-5">
                <h3 className="text-secondary dark:text-white">
                  CNN Model Demonstration
                </h3>
                <button
                  onClick={closeModal}
                  className="text-2xl font-bold dark:text-white"
                >
                  ✕
                </button>
              </div>

              <iframe
                height="400"
                className="w-full"
                src="/images/Meme1video.mp4"
                title="CNN Breast Cancer Detection"
                allow="autoplay; encrypted-media"
                allowFullScreen
              />
            </div>
          </div>
        )}
      </section>
    </>
  );
};

export default Videocarousel;
