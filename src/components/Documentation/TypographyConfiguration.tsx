"use client";

import Image from "next/image";

export const TypographyConfiguration= () => {
return (
        <div
        id="metrics"
        className="md:scroll-m-[180px] scroll-m-28 pb-16"
        >
        <h3 className="text-2xl font-semibold mt-8 dark:text-white text-MidnightNavyText">
            Accuracy & Loss
        </h3>

        <p className="mt-4 text-base font-medium text-SlateBlueText dark:text-opacity-80">
            Accuracy and loss curves illustrate how effectively the CNN model learns
            breast cancer patterns during training and how well it generalizes to
            unseen medical images.
        </p>

        <div className="mt-6 p-6 rounded-2xl border border-border dark:border-dark_border bg-white dark:bg-darklight shadow">
            <h4 className="text-lg font-semibold text-MidnightNavyText dark:text-white mb-4">
            Accuracy Curve
            </h4>

            <p className="text-base text-SlateBlueText dark:text-opacity-80 mb-6">
            The accuracy curve compares training accuracy and validation accuracy
            across epochs. A close alignment between both curves indicates strong
            generalization with minimal overfitting.
            </p>

            <Image
            src="/images/accuracy_curve.png"
            alt="CNN Accuracy Curve"
            width={1000}
            height={500}
            className="rounded-xl mx-auto border border-border dark:border-dark_border"
            />

            <ul className="mt-6 list-disc ps-6 text-base text-SlateBlueText dark:text-opacity-80 space-y-2">
            <li>
                <strong className="dark:text-white text-MidnightNavyText">
                Training Accuracy:
                </strong>{" "}
                Increases steadily as the CNN learns feature representations.
            </li>
            <li>
                <strong className="dark:text-white text-MidnightNavyText">
                Validation Accuracy:
                </strong>{" "}
                Closely follows training accuracy, indicating reliable performance.
            </li>
            </ul>
        </div>

        <div className="mt-6 p-6 rounded-2xl border border-border dark:border-dark_border bg-white dark:bg-darklight shadow">
            <h4 className="text-lg font-semibold text-MidnightNavyText dark:text-white mb-4">
            Loss Curve
            </h4>

            <p className="text-base text-SlateBlueText dark:text-opacity-80 mb-6">
            Loss represents prediction error. A stable validation loss curve
            ensures that the CNN model avoids overfitting and remains medically
            reliable.
            </p>

            <Image
            src="/images/accuracy_curve.png"
            alt="CNN Loss Curve"
            width={1000}
            height={500}
            className="rounded-xl mx-auto border border-border dark:border-dark_border"
            />

            <ul className="mt-6 list-disc ps-6 text-base text-SlateBlueText dark:text-opacity-80 space-y-2">
            <li>Training loss decreases rapidly during early epochs.</li>
            <li>Validation loss stabilizes, confirming generalization.</li>
            </ul>
        </div>

        <div className="mt-6 p-6 rounded-xl bg-primary/5 border border-border dark:border-dark_border">
            <h4 className="text-lg font-semibold text-MidnightNavyText dark:text-white mb-3">
            Medical Importance
            </h4>

            <p className="text-base text-SlateBlueText dark:text-opacity-80">
            In breast cancer diagnosis, consistent validation accuracy with low
            loss is more important than peak accuracy. This ensures the model
            remains dependable in real clinical scenarios.
            </p>
        </div>
        </div>
);
};
