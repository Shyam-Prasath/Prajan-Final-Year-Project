import Image from "next/image";
import Link from "next/link";
import React from "react";
import { conferences, intermissions } from "../../../app/api/data";

const Schedules = () => {
  return (
    <>
      <div className="flex items-center flex-wrap w-full border border-solid border-border dark:border-dark_border md:px-14 px-6 md:mt-14 mt-6 rounded-22">
        {conferences.map((conference, index) => (
          <React.Fragment key={index}>
            <div
              data-aos="fade-up"
              data-aos-delay={`${index * 200}`}
              data-aos-duration="1000"
              className="flex items-center flex-wrap gap-6 justify-between w-full md:py-12 py-5 border-b border-solid border-border dark:border-dark_border last:border-b-0"
            >
              <div className="lg:min-w-96 min-w-max">
                <h6 className="text-[26px] leading-[2.1rem] font-bold text-secondary dark:text-white max-w-286">
                  {conference.title}
                </h6>
              </div>

              <div className="flex items-center flex-wrap gap-30 lg:min-w-96 min-w-max">
                <div className="flex items-center">
                  {conference.profiles.map((profile, profileIndex) => (
                    <Image
                      key={profileIndex}
                      src={profile}
                      alt="profile"
                      width={0}
                      height={0}
                      quality={100}
                      layout="responsive"
                      sizes="100vh"
                      className={`!w-16 !h-16 rounded-full ${
                        profileIndex !== conference.profiles.length - 1
                          ? "-mr-3"
                          : ""
                      }`}
                    />
                  ))}
                </div>
                <div>
                  <p className="text-lg font-normal text-SlateBlueText dark:text-opacity-80">
                    Speech by
                  </p>
                  <p className="text-lg font-medium text-secondary dark:text-white">
                    {conference.speakers}
                  </p>
                </div>
              </div>

              <div className="lg:min-w-40 min-w-max">
                <Link
                  href={conference.buttonLink}
                  className="btn_outline btn-2 hover-outline-slide-down"
                >
                  <span>{conference.buttonText}</span>
                </Link>
              </div>
            </div>

            {index === 1 && (
              <div className="flex items-center flex-wrap justify-between w-full md:py-12 py-5 border-b border-solid border-border dark:border-dark_border">
                <h6 className="text-[26px] font-bold text-secondary dark:text-white">
                  {intermissions[0].title}
                </h6>
                <p className="text-lg text-SlateBlueText">
                  {intermissions[0].time}
                </p>
              </div>
            )}

            {index === 3 && (
              <div className="flex items-center flex-wrap justify-between w-full md:py-12 py-5 border-b border-solid border-border dark:border-dark_border">
                <h6 className="text-[26px] font-bold text-secondary dark:text-white">
                  {intermissions[1].title}
                </h6>
                <p className="text-lg text-SlateBlueText">
                  {intermissions[1].time}
                </p>
              </div>
            )}
          </React.Fragment>
        ))}
      </div>

      <div className="mt-20 md:px-14 px-6">
        <h3 className="text-[32px] font-bold text-secondary dark:text-white mb-6">
          About the Project
        </h3>

        <p className="text-lg text-SlateBlueText dark:text-opacity-80 leading-relaxed max-w-4xl">
          This project focuses on the automated detection of breast cancer using
          deep learning techniques. The system analyzes medical imaging data to
          classify cases as either normal or cancerous, aiming to support early
          diagnosis and reduce dependency on manual interpretation.
        </p>

        <p className="text-lg text-SlateBlueText dark:text-opacity-80 leading-relaxed mt-4 max-w-4xl">
          A convolutional neural network (CNN) model was trained using labeled
          medical images. The objective was to build a reliable baseline model
          capable of distinguishing cancerous patterns while maintaining
          acceptable sensitivity for real-world healthcare usage.
        </p>
      </div>

      <div className="mt-16 md:px-14 px-6">
        <h3 className="text-[32px] font-bold text-secondary dark:text-white mb-6">
          Model Results & Evaluation
        </h3>

        <div className="bg-IcyBreeze dark:bg-darklight rounded-22 p-8 max-w-4xl">
          <p className="text-lg text-SlateBlueText mb-4">
            The trained model was evaluated using a validation dataset of 259
            samples. Standard classification metrics were used to assess
            performance.
          </p>

          <ul className="text-lg text-SlateBlueText list-disc pl-6 space-y-2">
            <li>
              <strong>Validation Accuracy:</strong> 58.30%
            </li>
            <li>
              <strong>Loss:</strong> 0.8412
            </li>
            <li>
              <strong>Cancer Detection Recall:</strong> 64%
            </li>
            <li>
              <strong>Cancer Detection Precision:</strong> 67%
            </li>
          </ul>

          <div className="mt-6">
            <p className="font-medium text-secondary dark:text-white">
              Confusion Matrix
            </p>
            <pre className="bg-darkmode text-white p-4 rounded-lg mt-2">
              {`[[ 49  51 ][ 57 102 ]]`}
            </pre>
          </div>

          <p className="text-lg text-SlateBlueText mt-6">
            The results indicate stronger performance in identifying cancer
            cases compared to normal cases, which is crucial in medical
            screening scenarios where minimizing false negatives is important.
          </p>
        </div>
      </div>
    </>
  );
};

export default Schedules;
