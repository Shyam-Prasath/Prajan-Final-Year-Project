"use client";

import { Icon } from "@iconify/react";
import Image from "next/image";
import { useState } from "react";
import { DocNavigation } from "./DocNavigation";
export const Introduction = () => {
  const [docNavbarOpen, setDocNavbarOpen] = useState(false);

  const AnalyticsStack = [
    {
      id: 1,
      title: "Convolutional Neural Network",
      subtitle: "Deep Learning Model",
      img: "/images/cnn.png",
      description:
        "CNN trained on breast histopathology images to classify cancerous and non-cancerous samples.",
    },
    {
      id: 2,
      title: "TensorFlow & Keras",
      subtitle: "Model Training",
      img: "/images/tensorflow.png",
      description:
        "Used for building, training, and validating the CNN architecture.",
    },
    {
      id: 3,
      title: "FastAPI",
      subtitle: "Backend Inference API",
      img: "/images/fastapi.png",
      description:
        "Serves the trained CNN model and handles prediction requests.",
    },
    {
      id: 4,
      title: "Next.js",
      subtitle: "Analytics Dashboard",
      img: "/images/nextjs.png",
      description:
        "Frontend interface for image upload, predictions, and analytics visualization.",
    },
    {
      id: 5,
      title: "Medical Image Dataset",
      subtitle: "Input Data",
      img: "/images/dataset.png",
      description:
        "Labeled breast cancer images used for training and evaluation.",
    },
  ];

  return (
    <>
      <section
        id="overview"
        className="md:scroll-m-[180px] scroll-m-28"
      >
        {docNavbarOpen && (
          <div
            className="fixed inset-0 bg-black/50 z-40"
            onClick={() => setDocNavbarOpen(false)}
          />
        )}
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-2xl font-semibold text-MidnightNavyText dark:text-white">
            Analytics Overview
          </h3>

          <button
            onClick={() => setDocNavbarOpen(true)}
            className="lg:hidden block"
          >
            <Icon icon="gg:menu-right" className="text-3xl" />
          </button>
        </div>
        <p className="text-base text-SlateBlueText dark:text-opacity-80 max-w-4xl mb-8">
          This analytics module documents the architecture, technology stack, and
          reasoning behind our <strong>Breast Cancer Detection System</strong>.
          The project integrates deep learning, medical imaging, and a modern
          analytics dashboard to assist in early-stage cancer identification.
        </p>

        <div className="grid lg:grid-cols-5 md:grid-cols-2 grid-cols-1 gap-6">
          {AnalyticsStack.map((item) => (
            <div
              key={item.id}
              className="rounded-2xl border border-border dark:border-dark_border bg-white dark:bg-darklight p-6 hover:shadow-lg transition"
            >
              <Image
                src={item.img}
                alt={item.title}
                width={64}
                height={64}
                className="mb-4"
              />

              <h4 className="text-lg font-semibold text-MidnightNavyText dark:text-white">
                {item.title}
              </h4>

              <p className="text-sm text-primary font-medium mb-2">
                {item.subtitle}
              </p>

              <p className="text-sm text-SlateBlueText dark:text-opacity-80">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-10 rounded-2xl bg-primary/5 border-l-4 border-primary p-6">
          <h4 className="text-lg font-semibold text-MidnightNavyText dark:text-white mb-2">
            Why This Analytics System?
          </h4>

          <p className="text-base text-SlateBlueText dark:text-opacity-80">
            The goal of this analytics layer is not just prediction, but
            <strong> understanding model behavior</strong>. By visualizing
            confidence scores, performance metrics, and outcomes, the system
            supports transparency and clinical decision assistance.
          </p>
        </div>
      </section>

      <div
        className={`lg:hidden fixed top-0 right-0 h-full w-full max-w-xs bg-white dark:bg-darkmode shadow-xl z-50 transform transition-transform duration-300 ${
          docNavbarOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between p-4 border-b border-border dark:border-dark_border">
          <h2 className="text-lg font-bold dark:text-white">
            Analytics Menu
          </h2>

          <button onClick={() => setDocNavbarOpen(false)}>
            <Icon icon="mdi:close" className="text-2xl dark:text-white" />
          </button>
        </div>

        <div className="p-4">
          <DocNavigation />
        </div>
      </div>
    </>
  );
};
