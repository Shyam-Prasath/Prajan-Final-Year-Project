"use client";

import Image from "next/image";

export const ColorConfiguration = () => {
return (
        <div
        id="confusion-matrix"
        className="md:scroll-m-[180px] scroll-m-28 pb-16"
        >
        {/* TITLE */}
        <h3 className="text-2xl font-semibold mt-8 dark:text-white text-MidnightNavyText">
            Confusion Matrix
        </h3>

        {/* INTRO */}
        <p className="mt-4 text-base font-medium text-SlateBlueText dark:text-opacity-80">
            The confusion matrix provides a detailed evaluation of the CNN model’s
            performance by comparing predicted results against actual medical
            diagnoses. This is a critical metric for validating reliability in
            healthcare-based AI systems.
        </p>

        {/* IMAGE CARD */}
        <div className="mt-8 p-6 rounded-2xl border border-border dark:border-dark_border bg-white dark:bg-darklight shadow">
            <Image
            src="/images/confusion-matrix.png"
            alt="Confusion Matrix for Breast Cancer CNN Model"
            width={900}
            height={600}
            className="rounded-xl mx-auto"
            />

            <p className="text-center mt-4 text-sm text-SlateBlueText dark:text-opacity-70">
            Confusion Matrix showing CNN classification results for Cancer and
            Non-Cancer images
            </p>
        </div>

        {/* EXPLANATION GRID */}
        <div className="mt-10 grid md:grid-cols-2 gap-6">
            {/* LEFT */}
            <div className="p-6 rounded-xl border border-border dark:border-dark_border bg-white dark:bg-darklight">
            <h4 className="text-lg font-semibold text-MidnightNavyText dark:text-white mb-4">
                Matrix Components
            </h4>

            <ul className="space-y-3 text-base text-SlateBlueText dark:text-opacity-80">
                <li>
                <strong className="dark:text-white text-MidnightNavyText">
                    True Positive (TP):
                </strong>{" "}
                Cancer cases correctly identified by the model.
                </li>
                <li>
                <strong className="dark:text-white text-MidnightNavyText">
                    True Negative (TN):
                </strong>{" "}
                Healthy cases correctly classified as non-cancerous.
                </li>
                <li>
                <strong className="dark:text-white text-MidnightNavyText">
                    False Positive (FP):
                </strong>{" "}
                Healthy tissue incorrectly predicted as cancer.
                </li>
                <li>
                <strong className="dark:text-white text-MidnightNavyText">
                    False Negative (FN):
                </strong>{" "}
                Cancer cases missed by the model.
                </li>
            </ul>
            </div>

            {/* RIGHT */}
            <div className="p-6 rounded-xl border border-border dark:border-dark_border bg-primary/5">
            <h4 className="text-lg font-semibold text-MidnightNavyText dark:text-white mb-4">
                Medical Significance
            </h4>

            <p className="text-base text-SlateBlueText dark:text-opacity-80 leading-relaxed">
                In medical diagnosis, <strong>False Negatives</strong> are the most
                critical errors, as missing a cancer case can delay treatment and
                significantly impact patient survival.
            </p>

            <p className="mt-4 text-base text-SlateBlueText dark:text-opacity-80 leading-relaxed">
                Therefore, this project prioritizes{" "}
                <strong className="text-primary">
                high Recall (Sensitivity)
                </strong>{" "}
                over raw accuracy, ensuring that the CNN model detects as many cancer
                cases as possible.
            </p>
            </div>
        </div>

        {/* METRICS NOTE */}
        <div className="mt-10 p-6 rounded-xl border border-border dark:border-dark_border bg-white dark:bg-darklight">
            <h4 className="text-lg font-semibold text-MidnightNavyText dark:text-white mb-3">
            Relation to Performance Metrics
            </h4>

            <p className="text-base text-SlateBlueText dark:text-opacity-80">
            All core evaluation metrics used in this project are derived directly
            from the confusion matrix:
            </p>

            <ul className="mt-4 list-disc ps-6 text-base text-SlateBlueText dark:text-opacity-80 space-y-1">
            <li>Accuracy</li>
            <li>Precision</li>
            <li>Recall (Sensitivity)</li>
            <li>F1-Score</li>
            </ul>

            <p className="mt-4 text-sm italic text-SlateBlueText dark:text-opacity-70">
            Accuracy alone is insufficient for medical AI — interpretability
            through confusion matrix analysis is essential.
            </p>
        </div>
        </div>
    );
};
