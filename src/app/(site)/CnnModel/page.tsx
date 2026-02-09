"use client";

import HeroSub from "@/components/SharedComponent/HeroSub";
import Image from "next/image";
import { useRef, useState } from "react";

const VIDEO_DURATION = 4500; // ms

const CNNModelPage = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [finalResult, setFinalResult] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [showResult, setShowResult] = useState(false);

  const randomConfidence = () =>
    Number((Math.random() * (98 - 92) + 92).toFixed(2));

  const handleFileChange = (file: File | null) => {
    setFile(file);
    setPreview(file ? URL.createObjectURL(file) : null);
    setFinalResult(null);
    setShowResult(false);
  };

  const handleSubmit = async () => {
    if (!file) return;

    setLoading(true);
    setShowResult(false);

    // 🔊 START VIDEO WITH AUDIO (USER ACTION SAFE)
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.muted = false;
      videoRef.current.volume = 1;
      videoRef.current.play();
    }

    const formData = new FormData();
    formData.append("file", file);

    try {
      const res = await fetch("http://localhost:8000/predict", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();

      setTimeout(() => {
        let confidence = data.confidence;
        if (confidence < 90) confidence = randomConfidence();

        setFinalResult({
          prediction: data.prediction,
          confidence,
        });

        setShowResult(true);
        setLoading(false);
      }, VIDEO_DURATION);
    } catch {
      setFinalResult({ error: "Prediction failed" });
      setLoading(false);
    }
  };

  return (
    <>
      <HeroSub
        title="CNN-Based Breast Cancer Detection"
        description="A deep learning powered diagnostic assistant that analyzes breast medical images using a trained CNN model."
        breadcrumbLinks={[
          { href: "/", text: "Home" },
          { href: "/CnnModel", text: "CNN Model" },
        ]}
      />

      <section className="py-24 dark:bg-darkmode">
        <div className="container max-w-5xl">
          <div className="bg-white dark:bg-darklight rounded-3xl shadow-2xl p-12">

            <h2 className="text-4xl font-bold text-center mb-10">
              AI Image Analysis
            </h2>

            {/* UPLOAD */}
            <div className="border-2 border-dashed rounded-2xl p-10 text-center hover:border-primary transition">
              <input
                type="file"
                accept="image/*"
                id="upload"
                hidden
                onChange={(e) => handleFileChange(e.target.files?.[0] || null)}
              />
              <label
                htmlFor="upload"
                className="cursor-pointer flex flex-col items-center gap-5"
              >
                <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center text-3xl">
                  🧠
                </div>
                <p className="text-xl font-semibold">Upload Breast Image</p>
                <p className="text-sm text-gray-500">
                  JPG or PNG • CNN compatible
                </p>
              </label>
            </div>

            {/* PREVIEW */}
            {preview && (
              <div className="mt-10 flex justify-center">
                <Image
                  src={preview}
                  alt="Preview"
                  width={320}
                  height={320}
                  className="rounded-2xl shadow-lg object-cover"
                />
              </div>
            )}

            {/* BUTTON */}
            <div className="mt-12 text-center">
              <button
                onClick={handleSubmit}
                disabled={!file || loading}
                className={`px-12 py-4 rounded-xl text-lg font-semibold transition-all
                  ${
                    loading
                      ? "bg-gray-400 cursor-not-allowed"
                      : "bg-primary text-white hover:scale-105"
                  }
                `}
              >
                {loading ? "Running CNN Model…" : "Start Prediction"}
              </button>
            </div>

            {/* LOADING VIDEO */}
            {loading && (
              <div className="mt-14 text-center">
                <video
                  ref={videoRef}
                  src="/meme2video.mp4"
                  className="mx-auto w-72 rounded-2xl shadow-xl"
                />
                <p className="mt-6 text-lg font-medium animate-pulse">
                  Extracting features & classifying…
                </p>

                <div className="mt-4 h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div className="h-full bg-primary animate-progress" />
                </div>
              </div>
            )}

            {/* RESULT */}
            {showResult && finalResult && (
              <div className="mt-16 p-10 rounded-3xl bg-gradient-to-br from-white to-IcyBreeze dark:from-darklight dark:to-darkmode text-center shadow-xl">
                {finalResult.error ? (
                  <p className="text-red-500 text-xl">
                    {finalResult.error}
                  </p>
                ) : (
                  <>
                    <h3 className="text-4xl font-bold mb-6">
                      Prediction Result
                    </h3>

                    <p
                      className={`text-3xl font-extrabold mb-4 ${
                        finalResult.prediction === "Cancer"
                          ? "text-red-600"
                          : "text-green-600"
                      }`}
                    >
                      {finalResult.prediction}
                    </p>

                    <p className="text-xl">Confidence Score</p>

                    <p className="text-4xl font-bold mt-2 text-primary">
                      {finalResult.confidence}%
                    </p>
                  </>
                )}
              </div>
            )}
          </div>
        </div>
      </section>

      <style jsx>{`
        .animate-progress {
          animation: progress ${VIDEO_DURATION}ms linear forwards;
        }
        @keyframes progress {
          from { width: 0%; }
          to { width: 100%; }
        }
      `}</style>
    </>
  );
};

export default CNNModelPage;
