import { ColorConfiguration } from "./ColorConfiguration";
import { LogoConfiguration } from "./LogoConfiguration";
import { TypographyConfiguration } from "./TypographyConfiguration";

const Configuration = () => {
  return (
    <>
      <section id="confusion" className="pb-10 scroll-mt-[180px]">
        <h3 className="text-2xl font-semibold dark:text-white">
          Confusion Matrix
        </h3>
        <ColorConfiguration />
      </section>

      <section id="metrics" className="pb-10 scroll-mt-[180px]">
        <h3 className="text-2xl font-semibold dark:text-white">
          Accuracy & Loss
        </h3>
        <TypographyConfiguration />
      </section>

      <section id="predictions" className="pb-10 scroll-mt-[180px]">
        <h3 className="text-2xl font-semibold dark:text-white">
          Prediction Analysis
        </h3>
        <LogoConfiguration />
      </section>

        <section
          id="limitations"
          className="pb-14 scroll-mt-[180px]"
        >
          <h3 className="text-2xl font-semibold dark:text-white text-MidnightNavyText">
            Limitations
          </h3>

          <p className="mt-4 text-base text-SlateBlueText dark:text-opacity-80 max-w-3xl">
            While the CNN-based breast cancer detection model demonstrates strong
            performance, certain practical and dataset-related limitations affect its
            real-world applicability.
          </p>

          <div className="mt-8 grid md:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl border border-border dark:border-dark_border bg-white dark:bg-darklight">
              <h4 className="text-lg font-semibold dark:text-white text-MidnightNavyText mb-2">
                Limited Dataset Size
              </h4>
              <p className="text-SlateBlueText dark:text-opacity-80 text-base">
                The model was trained on a relatively limited number of labeled breast
                images. Small datasets can restrict generalization and increase the risk
                of overfitting, especially in medical imaging tasks.
              </p>
            </div>

            <div className="p-6 rounded-xl border border-border dark:border-dark_border bg-white dark:bg-darklight">
              <h4 className="text-lg font-semibold dark:text-white text-MidnightNavyText mb-2">
                Class Imbalance
              </h4>
              <p className="text-SlateBlueText dark:text-opacity-80 text-base">
                Cancer and non-cancer classes are not perfectly balanced. This may bias
                the model toward the majority class and affect precision or recall,
                especially for minority cancer cases.
              </p>
            </div>

            <div className="p-6 rounded-xl border border-border dark:border-dark_border bg-white dark:bg-darklight">
              <h4 className="text-lg font-semibold dark:text-white text-MidnightNavyText mb-2">
                Image Quality Variations
              </h4>
              <p className="text-SlateBlueText dark:text-opacity-80 text-base">
                Differences in resolution, noise, contrast, and imaging devices can
                reduce prediction consistency. Low-quality or early-stage cancer images
                remain challenging.
              </p>
            </div>

            <div className="p-6 rounded-xl border border-border dark:border-dark_border bg-white dark:bg-darklight">
              <h4 className="text-lg font-semibold dark:text-white text-MidnightNavyText mb-2">
                No Clinical Context
              </h4>
              <p className="text-SlateBlueText dark:text-opacity-80 text-base">
                The model relies only on image data and does not consider patient age,
                genetic history, or clinical reports, which are important factors in
                real medical diagnosis.
              </p>
            </div>
          </div>
        </section>

        <section
          id="future"
          className="pb-16 scroll-mt-[180px]"
        >
          <h3 className="text-2xl font-semibold dark:text-white text-MidnightNavyText">
            Future Improvements
          </h3>

          <p className="mt-4 text-base text-SlateBlueText dark:text-opacity-80 max-w-3xl">
            To enhance reliability, scalability, and clinical usefulness, the following
            improvements are planned for future versions of this project.
          </p>

          <div className="mt-8 grid md:grid-cols-2 gap-6">

            <div className="p-6 rounded-xl border border-border dark:border-dark_border bg-primary/5">
              <h4 className="text-lg font-semibold dark:text-white text-MidnightNavyText mb-2">
                Larger & Diverse Datasets
              </h4>
              <p className="text-SlateBlueText dark:text-opacity-80 text-base">
                Training with larger, multi-source datasets will improve generalization
                across different hospitals, scanners, and patient demographics.
              </p>
            </div>

            <div className="p-6 rounded-xl border border-border dark:border-dark_border bg-primary/5">
              <h4 className="text-lg font-semibold dark:text-white text-MidnightNavyText mb-2">
                Advanced CNN & Hybrid Models
              </h4>
              <p className="text-SlateBlueText dark:text-opacity-80 text-base">
                Incorporating deeper CNN architectures or hybrid CNN–Transformer models
                can capture more complex spatial and contextual features.
              </p>
            </div>

            <div className="p-6 rounded-xl border border-border dark:border-dark_border bg-primary/5">
              <h4 className="text-lg font-semibold dark:text-white text-MidnightNavyText mb-2">
                Explainable AI (XAI)
              </h4>
              <p className="text-SlateBlueText dark:text-opacity-80 text-base">
                Integrating techniques like Grad-CAM will visually highlight affected
                regions, improving doctor trust and interpretability.
              </p>
            </div>

            <div className="p-6 rounded-xl border border-border dark:border-dark_border bg-primary/5">
              <h4 className="text-lg font-semibold dark:text-white text-MidnightNavyText mb-2">
                Clinical Decision Support
              </h4>
              <p className="text-SlateBlueText dark:text-opacity-80 text-base">
                Combining image predictions with clinical metadata can transform this
                system into a full decision-support tool rather than a standalone model.
              </p>
            </div>
          </div>
        </section>
    </>
  );
};

export default Configuration;
