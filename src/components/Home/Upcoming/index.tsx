"use client";

import { fetchCancerNews } from "@/lib/fetchCancerNews";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import BoxSlider from "../../SharedComponent/BoxSlider";

const Upcoming = () => {
  const [allNews, setAllNews] = useState<any[]>([]);
  const [news, setNews] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const loadInitialNews = async () => {
      setLoading(true);
      try {
        const articles = await fetchCancerNews();
        console.log("📰 Initial cancer news loaded:", articles);
        setAllNews(articles);
        setNews(articles); // show all initially
      } catch (err) {
        console.error("❌ Initial fetch failed:", err);
      } finally {
        setLoading(false);
      }
    };

    loadInitialNews();
  }, []);

  const handleDateChange = (selectedDate: Date) => {
    console.log("📅 Date clicked:", selectedDate);

    const start = new Date(selectedDate);
    const end = new Date(selectedDate);

    start.setUTCHours(0, 0, 0, 0);
    end.setUTCHours(23, 59, 59, 999);

    const filtered = allNews.filter((article) => {
      if (!article.publishedAt) return false;
      const published = new Date(article.publishedAt);
      return published >= start && published <= end;
    });

    console.log("🧪 Filtered result:", filtered);

    setNews(filtered);
  };

  return (
    <section className="upcoming dark:bg-darkmode">
      <div className="max-w-1068 m-auto">
        <div className="container">

          <h2 className="text-center pb-10">
            Breast Cancer News & Research Updates
          </h2>

          <BoxSlider onDateChange={handleDateChange} />

          <div className="mt-10 border rounded-22 px-6 md:px-14">

            {loading && (
              <p className="py-10 text-center">
                Loading cancer-related news…
              </p>
            )}

            {!loading && news.length === 0 && (
              <p className="py-10 text-center">
                No cancer-related news for the selected date.
              </p>
            )}

            {news.map((article, index) => (
              <div
                key={index}
                className="flex flex-wrap justify-between items-center py-8 border-b last:border-b-0 gap-4"
              >
                <div className="max-w-[65%]">
                  <h6 className="text-[22px] font-bold text-secondary dark:text-white">
                    {article.title}
                  </h6>

                  <p className="text-SlateBlueText mt-2">
                    {article.source ?? "Unknown Source"} •{" "}
                    {article.publishedAt
                      ? new Date(article.publishedAt).toDateString()
                      : "Date unavailable"}
                  </p>
                </div>

                <div className="flex items-center gap-4">
                  {article.thumbnail ? (
                    <Image
                      src={article.thumbnail}
                      alt="Cancer news"
                      width={80}
                      height={80}
                      className="rounded-lg object-cover"
                      unoptimized
                    />
                  ) : null}

                  <Link
                    href={article.link}
                    target="_blank"
                    className="btn_outline btn-2 hover-outline-slide-down"
                  >
                    <span>Read More</span>
                  </Link>
                </div>
              </div>
            ))}

          </div>
        </div>
      </div>
    </section>
  );
};

export default Upcoming;
