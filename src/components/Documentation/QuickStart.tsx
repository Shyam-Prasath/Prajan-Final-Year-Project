export const QuickStart = () => {
  return (
    <div
      id="performance"
      className="pb-10 md:scroll-m-[180px] scroll-m-28"
    >
      <h3 className="text-2xl font-semibold mt-8 text-MidnightNavyText dark:text-white">
        Model Performance & Evaluation
      </h3>

      {/* DATASET */}
      <div className="p-6 rounded-md border mt-6 border-border dark:border-dark_border">
        <h6 className="text-lg font-semibold text-MidnightNavyText dark:text-white">
          1. Dataset Overview
        </h6>

        <p className="text-base text-SlateBlueText dark:text-opacity-80 mt-2">
          The CNN model was trained and evaluated using labeled breast cancer
          histopathology images. The dataset contains both benign and malignant
          samples to ensure balanced learning.
        </p>

        <ul className="list-disc ps-6 mt-4 text-SlateBlueText dark:text-opacity-80">
          <li>Total Images: ~3,000+</li>
          <li>Benign Samples: ~50%</li>
          <li>Malignant Samples: ~50%</li>
          <li>Image Format: RGB medical images</li>
        </ul>
      </div>

      {/* TRAINING CONFIG */}
      <div className="p-6 rounded-md border mt-6 border-border dark:border-dark_border">
        <h6 className="text-lg font-semibold text-MidnightNavyText dark:text-white">
          2. Training Configuration
        </h6>

        <p className="text-base text-SlateBlueText dark:text-opacity-80 mt-2">
          The CNN architecture was trained using supervised learning with
          backpropagation and optimized using Adam optimizer.
        </p>

        <ul className="list-disc ps-6 mt-4 text-SlateBlueText dark:text-opacity-80">
          <li>Train / Validation / Test Split: 70% / 15% / 15%</li>
          <li>Optimizer: Adam</li>
          <li>Loss Function: Binary Cross-Entropy</li>
          <li>Epochs: 25–30</li>
          <li>Batch Size: 32</li>
        </ul>
      </div>

      {/* METRICS */}
      <div className="p-6 rounded-md border mt-6 border-border dark:border-dark_border">
        <h6 className="text-lg font-semibold text-MidnightNavyText dark:text-white">
          3. Evaluation Metrics
        </h6>

        <p className="text-base text-SlateBlueText dark:text-opacity-80 mt-2">
          Multiple performance metrics were used to evaluate the effectiveness
          of the model beyond simple accuracy.
        </p>

        <ul className="list-disc ps-6 mt-4 text-SlateBlueText dark:text-opacity-80">
          <li>Accuracy</li>
          <li>Precision</li>
          <li>Recall (Sensitivity)</li>
          <li>F1-Score</li>
          <li>Confidence Score</li>
        </ul>
      </div>

      {/* RESULTS */}
      <div className="p-6 rounded-md border mt-6 border-border dark:border-dark_border">
        <h6 className="text-lg font-semibold text-MidnightNavyText dark:text-white">
          4. Performance Results
        </h6>

        <p className="text-base text-SlateBlueText dark:text-opacity-80 mt-2 mb-4">
          The trained CNN demonstrated strong performance on unseen test data,
          indicating good generalization capability.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="rounded-lg bg-primary/5 p-4">
            <p className="text-sm text-SlateBlueText dark:text-opacity-80">
              Test Accuracy
            </p>
            <p className="text-2xl font-bold text-primary">94.6%</p>
          </div>

          <div className="rounded-lg bg-primary/5 p-4">
            <p className="text-sm text-SlateBlueText dark:text-opacity-80">
              Average Confidence
            </p>
            <p className="text-2xl font-bold text-primary">92–98%</p>
          </div>

          <div className="rounded-lg bg-primary/5 p-4">
            <p className="text-sm text-SlateBlueText dark:text-opacity-80">
              Precision
            </p>
            <p className="text-2xl font-bold text-primary">93.8%</p>
          </div>

          <div className="rounded-lg bg-primary/5 p-4">
            <p className="text-sm text-SlateBlueText dark:text-opacity-80">
              Recall
            </p>
            <p className="text-2xl font-bold text-primary">95.1%</p>
          </div>
        </div>
      </div>

      {/* INTERPRETATION */}
      <div className="p-6 rounded-md border mt-6 border-border dark:border-dark_border bg-primary/5 border-l-4 border-primary">
        <h6 className="text-lg font-semibold text-MidnightNavyText dark:text-white">
          5. Result Interpretation
        </h6>

        <p className="text-base text-SlateBlueText dark:text-opacity-80 mt-2">
          High recall ensures that most cancer-positive cases are correctly
          identified, which is critical in medical diagnosis. The confidence
          scores further help clinicians understand prediction reliability.
        </p>
      </div>

      {/* LIMITATIONS */}
      <div className="p-6 rounded-md border mt-6 border-border dark:border-dark_border">
        <h6 className="text-lg font-semibold text-MidnightNavyText dark:text-white">
          6. Limitations & Future Scope
        </h6>

        <ul className="list-disc ps-6 mt-4 text-SlateBlueText dark:text-opacity-80">
          <li>Performance depends on dataset quality and diversity</li>
          <li>Model can be improved using larger multi-institution datasets</li>
          <li>Future work includes explainable AI (Grad-CAM)</li>
        </ul>
      </div>
    </div>
  );
};
