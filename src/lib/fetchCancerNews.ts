export async function fetchCancerNews() {
    const rssUrl =
        "https://news.google.com/rss/search?q=breast+cancer&hl=en-IN&gl=IN&ceid=IN:ta";

    const proxyUrl =
        "https://api.rss2json.com/v1/api.json?rss_url=" + encodeURIComponent(rssUrl);

    const res = await fetch(proxyUrl);

    if (!res.ok) {
        throw new Error("Failed to fetch cancer news");
    }

    const data = await res.json();

    const articles = data.items.map((item: any) => ({
        title: item.title,
        link: item.link,
        publishedAt: item.pubDate,
        source: data.feed.title,
        thumbnail: item.thumbnail,
    }));

    console.log("📰 Cancer news (RSS proxy):", articles);

    return articles;
}
