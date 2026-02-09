import { Icon } from "@iconify/react";

export const PackageStructure = () => {
  return (
    <section
      id="structure"
      className="md:scroll-m-[140px] scroll-m-28 mt-10"
    >
      {/* SECTION TITLE */}
      <h3 className="text-2xl font-semibold text-MidnightNavyText dark:text-white">
        Analytics Project Structure
      </h3>

      <p className="mt-2 text-SlateBlueText dark:text-opacity-80 max-w-3xl">
        This structure represents the complete pipeline of our Breast Cancer
        Detection system — from image input and CNN inference to analytics,
        visualization, and results interpretation.
      </p>

      {/* CARD */}
      <div className="mt-6 rounded-2xl border border-border dark:border-dark_border bg-white dark:bg-darklight p-6">

        {/* ROOT */}
        <div className="space-y-6 text-base text-SlateBlueText dark:text-opacity-80">

          <div className="flex items-center gap-3 font-semibold text-lg text-MidnightNavyText dark:text-white">
            <Icon icon="tabler:brain" className="text-primary" />
            Breast Cancer CNN Analytics System
          </div>

          {/* FRONTEND */}
          <div className="pl-6">
            <div className="flex items-center gap-3 font-medium text-MidnightNavyText dark:text-white">
              <Icon icon="tabler:layout-dashboard" className="text-primary" />
              Frontend – Analytics Interface (Next.js)
            </div>

            <ul className="pl-6 mt-3 space-y-2">
              <li className="flex items-center gap-3">
                <Icon icon="tabler:folder" className="text-primary" />
                <span>app/</span>
                <span className="text-sm">(Next.js App Router)</span>
              </li>

              <li className="pl-6 space-y-1">
                <div className="flex items-center gap-3">
                  <Icon icon="tabler:file-text" className="text-primary" />
                  <span>CnnModel/page.tsx</span>
                  <span className="text-sm">
                    – Image upload & prediction trigger
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <Icon icon="tabler:chart-bar" className="text-primary" />
                  <span>Analytics/page.tsx</span>
                  <span className="text-sm">
                    – Performance metrics & insights
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <Icon icon="tabler:clipboard-data" className="text-primary" />
                  <span>Documentation/</span>
                  <span className="text-sm">
                    – Methodology & explanation
                  </span>
                </div>
              </li>

              <li className="flex items-center gap-3">
                <Icon icon="tabler:components" className="text-primary" />
                <span>components/</span>
                <span className="text-sm">
                  – Charts, cards, loaders, UI blocks
                </span>
              </li>

              <li className="flex items-center gap-3">
                <Icon icon="tabler:palette" className="text-primary" />
                <span>styles & global.css</span>
              </li>
            </ul>
          </div>

          {/* BACKEND */}
          <div className="pl-6">
            <div className="flex items-center gap-3 font-medium text-MidnightNavyText dark:text-white">
              <Icon icon="tabler:server" className="text-primary" />
              Backend – Model Inference API
            </div>

            <ul className="pl-6 mt-3 space-y-2">
              <li className="flex items-center gap-3">
                <Icon icon="tabler:api" className="text-primary" />
                <span>api.py</span>
                <span className="text-sm">
                  – FastAPI prediction endpoint
                </span>
              </li>

              <li className="flex items-center gap-3">
                <Icon icon="tabler:settings" className="text-primary" />
                <span>train_cnn.py</span>
                <span className="text-sm">
                  – CNN training & evaluation
                </span>
              </li>

              <li className="flex items-center gap-3">
                <Icon icon="tabler:database" className="text-primary" />
                <span>trained_model.h5</span>
                <span className="text-sm">
                  – Saved CNN weights
                </span>
              </li>
            </ul>
          </div>

          {/* DATA & ANALYTICS */}
          <div className="pl-6">
            <div className="flex items-center gap-3 font-medium text-MidnightNavyText dark:text-white">
              <Icon icon="tabler:activity" className="text-primary" />
              Data, Metrics & Analytics
            </div>

            <ul className="pl-6 mt-3 space-y-2">
              <li className="flex items-center gap-3">
                <Icon icon="tabler:folder" className="text-primary" />
                <span>dataset/</span>
                <span className="text-sm">
                  – Cancer & Non-Cancer images
                </span>
              </li>

              <li className="flex items-center gap-3">
                <Icon icon="tabler:chart-line" className="text-primary" />
                <span>accuracy_loss.png</span>
              </li>

              <li className="flex items-center gap-3">
                <Icon icon="tabler:table" className="text-primary" />
                <span>confusion_matrix.png</span>
              </li>

              <li className="flex items-center gap-3">
                <Icon icon="tabler:report" className="text-primary" />
                <span>prediction_logs.json</span>
              </li>
            </ul>
          </div>

          {/* CONFIG */}
          <div className="pl-6">
            <div className="flex items-center gap-3 font-medium text-MidnightNavyText dark:text-white">
              <Icon icon="tabler:adjustments" className="text-primary" />
              Configuration
            </div>

            <ul className="pl-6 mt-3 space-y-2">
              <li>package.json</li>
              <li>tailwind.config.ts</li>
              <li>tsconfig.json</li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
};
