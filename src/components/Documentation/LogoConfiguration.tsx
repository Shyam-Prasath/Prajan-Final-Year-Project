"use client";

import Image from "next/image";

export const LogoConfiguration = () => {
return (
        <>
        {/* TITLE */}
        <h3 className="text-xl font-semibold mt-8 dark:text-white text-MidnightNavyText">
            Prediction Analysis
        </h3>

        {/* OVERVIEW */}
        <div className="p-6 rounded-md border mt-4 border-border dark:border-dark_border bg-white dark:bg-darklight">
            <p className="text-base font-medium text-SlateBlueText dark:text-opacity-80">
                Prediction analysis evaluates how the CNN model behaves on individual
                breast medical images by comparing its predicted output with the
                original ground truth labels. This ensures transparency and clinical
                reliability.
            </p>
        </div>

        {/* PREDICTED vs ORIGINAL COMPARISON */}
        <div className="p-6 rounded-md border mt-6 border-border dark:border-dark_border bg-white dark:bg-darklight">
            <h4 className="text-lg font-semibold text-MidnightNavyText dark:text-white mb-4">
                Predicted vs Ground Truth Comparison
            </h4>

            <div className="grid md:grid-cols-2 gap-6">
            {/* CORRECT PREDICTION */}
            <div className="rounded-xl border border-border dark:border-dark_border p-4">
                <Image
                src="/images/compare2.png"
                alt="Correct Prediction Example"
                width={500}
                height={400}
                className="rounded-lg"
                />

                <div className="mt-4 space-y-1">
                <p className="text-sm text-SlateBlueText dark:text-opacity-80">
                    Original Label:
                    <span className="font-semibold text-green-600 ms-2">
                        Cancer
                    </span>
                </p>
                <p className="text-sm text-SlateBlueText dark:text-opacity-80">
                    Model Prediction:
                    <span className="font-semibold text-green-600 ms-2">
                        Cancer
                    </span>
                </p>
                <p className="text-sm text-SlateBlueText dark:text-opacity-70">
                    Confidence: 96.8%
                </p>
                </div>
            </div>

            {/* INCORRECT / CHALLENGING CASE */}
            <div className="rounded-xl border border-border dark:border-dark_border p-4">
                <Image
                src="/images/compare1.png"
                alt="Incorrect Prediction Example"
                width={500}
                height={400}
                className="rounded-lg"
                />

                <div className="mt-4 space-y-1">
                <p className="text-sm text-SlateBlueText dark:text-opacity-80">
                    Original Label:
                    <span className="font-semibold text-red-600 ms-2">
                        Cancer
                    </span>
                </p>
                <p className="text-sm text-SlateBlueText dark:text-opacity-80">
                    Model Prediction:
                    <span className="font-semibold text-yellow-600 ms-2">
                        Normal
                    </span>
                </p>
                <p className="text-sm text-SlateBlueText dark:text-opacity-70">
                    Confidence: 61.3%
                </p>
                </div>
            </div>
            </div>
        </div>

        {/* INTERPRETATION */}
        <div className="p-6 rounded-md border mt-6 border-border dark:border-dark_border bg-primary/5">
            <h4 className="text-lg font-semibold text-MidnightNavyText dark:text-white mb-3">
                Interpretation
            </h4>

            <ul className="list-disc ps-6 text-base text-SlateBlueText dark:text-opacity-80 space-y-2">
            <li>
                Correct predictions indicate strong feature extraction by the CNN.
            </li>
            <li>
                Incorrect predictions usually occur in early-stage cancer or
                low-contrast images.
            </li>
            <li>
                Lower confidence scores highlight uncertain predictions requiring
                medical review.
            </li>
            </ul>
        </div>

        {/* CLINICAL SIGNIFICANCE */}
        <div className="p-6 rounded-md border mt-6 border-border dark:border-dark_border bg-white dark:bg-darklight">
            <h4 className="text-lg font-semibold text-MidnightNavyText dark:text-white mb-3">
                Clinical Significance
            </h4>

            <p className="text-base text-SlateBlueText dark:text-opacity-80">
                Comparing predicted outputs with original ground truth labels ensures
                the model is safe for assisting early breast cancer screening. False
                negatives are carefully analyzed to reduce the risk of missed
                diagnoses.
            </p>
        </div>
        </>
);
};
