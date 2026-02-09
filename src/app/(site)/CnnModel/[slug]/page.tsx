import TicketSection from "@/components/Home/FooterContent";
import { format } from "date-fns";
import Image from "next/image";
import { notFound } from "next/navigation";

const POSTS: Record<string, any> = {
  project1: {
    title: "Why We Built This Breast Cancer Detection Project",
    date: "2024-02-10",
    author: "Prajan & Team",
    authorImage: "/images/Prajan.jpg",
    coverImage: "/images/Chandresh.jpeg",
    contentHtml: `
        Idhu oru academic project illa. Idhu oru <strong>valiyila porandha project</strong>.
    
        Indha project start aagumbodhu, nanga mark pathala, grade pathala, conference pathala. Nanga paathadhu onnu dhan – <strong>oru uyir pogaradhu</strong>. 
        
        Nanga ellarum oru gang. Bayam na enna nu theriyatha pasanga. <strong>Naan – Prajan, Senthil – Harish, Gunna – Pradeep, Velu – Bala, Anbu – Revanth.</strong> 
        
        College life, fun, sirippu, project, assignment – ellame smooth-aa poitu irundhudhu. Appo oru naal… oru phone call. Andha call-ku appram, 
        
        engaloda life-la silence mattum dhan irundhudhu. <strong>Rajan. Enga friend. Enga brother. Chandresh. Avan name sonnale innum nenjula oru heavy feel varudhu.
        
        “Avan illa.” Rendu vaarthai. Aana adhu engaluku oru full stop. Reason? <strong>Breast Cancer.</strong> <strong>Avan marana la avan maarbu thirandha maadhiri 
        
        en kannukulla varudhu.</strong> Andha image repeat aagudhu. Avan death engala hunt pannudhu – daily hunt pannudhu. Andha naal la irundhu innum oru scene repeat aagudhu.
        
        Avan siricha face. Avan pesuna style. Avan irundha place ellame kaali. Avan illama irukkura reality dhan engala hunt pannudhu. Rendu naal sapadu illa. Thanni illa. 
        
        Thookam illa. Udambu irundhudhu, manasu illa. Saaptadhu na non-veg, kudichadhu na marakka. Aana marakka mudiyala. <strong>Avan death engala hunt pannudhu.</strong> Sirichom.
        
        Aana adhu sirippu illa. Velila strong-aa nadichom, ullukulla ellarum udanjirundhom. Avan pogumbodhu theriyala… pogara apram dhan purinjadhu, <strong>late-aa therinja disease 
        
        evlo periya damage pannum nu.</strong> <blockquote> “Late-aa kandupidicha disease-ku, late-aa dhan ellame nadakkum da.”</blockquote> 
        
        Andha line dhan engala ezhupi ukkandha vechuduchu. Chandresh death engala daily hunt pannudhu. <strong>Avan marana la avan maarbu thirandha maadhiri en 
        
        kannukulla varudhu</strong> – hospital bed, open chest, silence. Avan amma azhudha sound, avan pesaama irundha andha silence – ellame innum kannukulla irukku. 
        
        Avan death engala hunt pannudhu. <h3>Why Breast Cancer?</h3> Theriyama illa. 
        
        Care illa nu illa. Aana therinjum romba peru late-aa dhan detect pannuraanga. 
        
        Symptoms ignore aagudhu. Reports delay aagudhu. Andha delay dhan oru life-aa thooki pogudhu. Appo yosichom – manushan tired aagalam, 
        
        bayapadalaam, miss pannalam. Aana <strong>machine-ku bayam illa, tired illa, emotion illa.</strong> <blockquote> “Machine continuous-aa paakum. Miss pannadhu illama.” </blockquote> 
        
        <h3>From Grief to Code</h3> Azha vendiya tears-aa code-aa maathinom. Bayathaa model-aa maathinom. Chandresh death engala thalli thalli push pannudhu. <strong>Avan death engala hunt pannudhu.</strong> 
        
        CNN. Images. Data. Training. Fail. Retrain. Improve. Accuracy romba perusa illa. Aana intention romba clear. <ul> <li>Early detection</li> <li>Delay reduce pannradhu</li> <li>Doctors-ku support</li> <li>Innoruthar Chandresh-aaga koodaadhu</li> </ul>
        
        <h3>This Project Is For Chandresh</h3> Indha project-la irukkura ovvoru line-um, ovvoru model-um, ovvoru prediction-um – avana nyabagam pannum. Avan death engala innum hunt pannudhu. 
        
        <strong>Avan marana la avan maarbu thirandha maadhiri en kannukulla varudhu</strong> – every single day. 
        
        Aana andha hunting dhan engala stop pannaama work panna vechudhu. If indha system oru person-ukku kooda early-aa cancer kandupidikka help pannina… Chandresh jeichutaan. Idhu mark-ku illa. Degree-ku illa. <strong>Idhu oru thozhanukaga. Avan death engala hunt pannudhu – forever.</strong> ,`
}, };


export async function generateMetadata(
    { params }: { params: Promise<{ slug: string }> }
    ) {
    const { slug } = await params;
    const post = POSTS[slug];

    if (!post) {
        return { title: "Not Found" };
    }

    return {
        title: post.title,
        robots: { index: true, follow: true },
    };
}

export default async function Post(
    { params }: { params: Promise<{ slug: string }> }
    ) {
    const { slug } = await params;
    const post = POSTS[slug];

    if (!post) notFound();

    const blocks = post.contentHtml
    .split(/\n\s*\n/)
    .map((block: string) => {
        const trimmed = block.trim();

        // If already a block element, keep it
        if (
            trimmed.startsWith("<h3>") ||
            trimmed.startsWith("<blockquote>") ||
            trimmed.startsWith("<ul>")
        ) {
        return trimmed;
    }

    // Otherwise wrap as paragraph
    return `<p>${trimmed}</p>`;
    })
    .filter(Boolean);


return (
        <>
        {/* HEADER */}
        <section className="relative pt-44">
            <div className="container mx-auto">
            <div className="grid md:grid-cols-12 gap-8 items-center">
                <div className="col-span-8">
                <span className="text-sm tracking-wide text-gray-500 uppercase">
                    {format(new Date(post.date), "dd MMM yyyy")}
                </span>
                <h1 className="pt-4 text-4xl md:text-5xl font-extrabold dark:text-white">
                    {post.title}
                </h1>
                </div>

                <div className="col-span-4 flex items-center gap-4 bg-white/60 dark:bg-darklight/60 backdrop-blur rounded-2xl p-4 shadow">
                <Image
                    src={post.authorImage}
                    alt="author"
                    width={70}
                    height={70}
                    className="rounded-full"
                />
                <div>
                    <p className="font-semibold dark:text-white">{post.author}</p>
                    <p className="text-sm text-gray-500">Final Year Project Team</p>
                </div>
                </div>
            </div>
            </div>
        </section>

        {/* COVER */}
        <section className="py-14">
            <div className="container mx-auto">
            <Image
                src={post.coverImage}
                alt="cover"
                width={1200}
                height={600}
                className="rounded-3xl w-full object-cover shadow-2xl"
            />
            </div>
        </section>

        {/* STORY */}
        <section className="pb-24 relative">
            <div className="absolute inset-0 -z-10 bg-gradient-to-b from-slate-100/60 via-white to-slate-100/60 dark:from-darkmode dark:via-darkmode dark:to-darkmode" />

            <div className="container mx-auto max-w-4xl space-y-6">
            {blocks.map((block: string, index: number) => {
                const isQuote = block.includes("<blockquote>");
                const isList = block.includes("<ul>");
                const isHeading = block.startsWith("<h3>");

                return (
                <div
                    key={index}
                    className={`
                    rounded-2xl px-6 py-5 shadow
                    ${
                        isQuote
                        ? "bg-primary/5 border-l-4 border-primary italic"
                        : isHeading
                        ? "bg-transparent shadow-none px-0"
                        : "bg-white dark:bg-darklight"
                    }
                    `}
                >
                    <div
                    className="
                        prose prose-lg
                        prose-strong:font-bold
                        prose-ul:list-disc prose-ul:pl-6
                        prose-blockquote:border-l-4
                        prose-blockquote:border-primary
                        prose-blockquote:bg-primary/10
                        prose-blockquote:px-6
                        prose-blockquote:py-4
                        prose-blockquote:rounded-xl
                        dark:prose-invert
                        max-w-none
                    "
                    dangerouslySetInnerHTML={{ __html: block }}
                    />
                </div>
                );
            })}
            </div>
        </section>

        {/* DIVIDER */}
        <div className="container mx-auto my-12">
            <div className="h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-700 to-transparent" />
        </div>

        <TicketSection />
        </>
    );
}

export async function generateStaticParams() {
    return Object.keys(POSTS).map((slug) => ({ slug }));
}
