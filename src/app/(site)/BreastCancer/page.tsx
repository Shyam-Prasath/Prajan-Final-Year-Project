import FooterContent from "@/components/Home/FooterContent";
import HeroSub from "@/components/SharedComponent/HeroSub";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Breast Cancer Awareness & AI-Based Diagnosis",
};

const page = () => {
  const breadcrumbLinks = [
    { href: "/", text: "Home" },
    { href: "/BreastCancer", text: "Breast Cancer" },
  ];

  return (
    <>
      <HeroSub
        title="Breast Cancer Awareness & Intelligent Analysis"
        description="An AI-driven initiative focused on breast cancer awareness, data-driven diagnosis, and early-stage detection support."
        breadcrumbLinks={breadcrumbLinks}
      />

      <section className="bg-white dark:bg-darkmode py-20">
        <div className="container max-w-6xl grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-secondary dark:text-white mb-6">
              Understanding Breast Cancer
            </h2>

            <p className="text-lg text-SlateBlueText dark:text-opacity-80 mb-6">
              Breast cancer develops when cells in breast tissue grow abnormally
              and uncontrollably. These cells can form tumors and may spread to
              other parts of the body if not detected early.
            </p>

            <p className="text-lg text-SlateBlueText dark:text-opacity-80">
              Awareness, screening, and intelligent diagnostic systems play a
              critical role in improving survival outcomes.
            </p>
          </div>

          <Image
            src="/images/awareness.png"
            alt="Breast Cancer Awareness"
            width={500}
            height={400}
            className="rounded-22 shadow-md"
          />
        </div>
      </section>

      <section className="bg-white dark:bg-darkmode py-20">
        <div className="container max-w-6xl">
          <h2 className="text-3xl font-bold text-secondary dark:text-white mb-10">
            Global Impact & Statistics
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { value: "2.3M+", text: "New cases diagnosed globally every year" },
              { value: "85%+", text: "Survival rate with early detection" },
              { value: "40%", text: "Late-stage diagnosis due to limited screening" },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white dark:bg-darkmode rounded-22 p-8 shadow-md"
              >
                <h3 className="text-4xl font-bold text-primary mb-2">
                  {item.value}
                </h3>
                <p className="text-SlateBlueText dark:text-opacity-80">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white dark:bg-darkmode py-20">
        <div className="container max-w-6xl grid md:grid-cols-2 gap-12 items-center">
          <Image
            src="/images/histopathology.png"
            alt="Histopathology Samples"
            width={500}
            height={400}
            className="rounded-22 shadow-md"
          />

          <div>
            <h2 className="text-3xl font-bold text-secondary dark:text-white mb-6">
              Types of Breast Cancer
            </h2>

            <ul className="space-y-4 text-SlateBlueText dark:text-opacity-80">
              <li><strong>Benign Tumors:</strong> Non-cancerous but require monitoring</li>
              <li><strong>Malignant Tumors:</strong> Aggressive cancerous growth</li>
              <li><strong>Invasive Ductal Carcinoma:</strong> Most common type</li>
              <li><strong>Lobular Carcinoma:</strong> Harder to detect via imaging</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-white dark:bg-darkmode py-20">
        <div className="container max-w-6xl grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-secondary dark:text-white mb-6">
              Artificial Intelligence in Diagnosis
            </h2>

            <p className="text-lg text-SlateBlueText dark:text-opacity-80 mb-6">
              Deep learning models analyze medical images to identify subtle
              cancer indicators, assisting clinicians with faster and more
              consistent decisions.
            </p>

            <ul className="list-disc pl-6 space-y-3 text-SlateBlueText dark:text-opacity-80">
              <li>CNN-based image classification</li>
              <li>Automated feature extraction</li>
              <li>Reduced diagnostic variability</li>
              <li>Scalable screening support</li>
            </ul>
          </div>

          <Image
            src="/images/ai-healthcare.png"
            alt="AI in Healthcare"
            width={500}
            height={400}
            className="rounded-22 shadow-md"
          />
        </div>
      </section>

      <section className="bg-white dark:bg-darkmode py-20">
        <div className="container max-w-6xl">
          <h2 className="text-3xl font-bold text-secondary dark:text-white mb-10">
            Model Results & Performance
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-8 rounded-22 shadow-md bg-white dark:bg-darkmode">
              <h4 className="text-xl font-semibold mb-3">Validation Accuracy</h4>
              <p className="text-SlateBlueText dark:text-opacity-80">
                Achieved an overall validation accuracy of <strong>58.30%</strong>
                on unseen test data.
              </p>
            </div>

            <div className="p-8 rounded-22 shadow-md bg-white dark:bg-darkmode">
              <h4 className="text-xl font-semibold mb-3">Confusion Matrix Insight</h4>
              <p className="text-SlateBlueText dark:text-opacity-80">
                Balanced predictions reveal strengths and highlight opportunities
                for future model improvements.
              </p>
            </div>
          </div>
        </div>
      </section>

      <FooterContent />
    </>
  );
};

export default page;
