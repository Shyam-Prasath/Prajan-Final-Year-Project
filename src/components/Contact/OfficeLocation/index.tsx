import Link from "next/link";

const Location = () => {
return (
        <>
        <section className="md:py-24 py-10 dark:bg-darkmode">
            <div className="container">
            <div>

                {/* MEMBER 1 */}
                <div className="grid lg:grid-cols-9 md:grid-cols-6 grid-cols-1 xl:gap-30 gap-0 border-b border-solid border-white border-opacity-50 pb-11 dark:border-dark_border">
                <div className="col-span-3">
                    <h2 className="text-secondary dark:text-white sm:text-[40px] sm:leading-[3.4rem] text-[28px] leading-[2.25rem] font-bold">
                    Prajan Gowtham
                    </h2>
                </div>

                <div className="col-span-3">
                    <p className="sm:text-2xl text-xl text-secondary dark:text-darktext font-normal leading-10">
                    Project Lead & ML Engineer  
                    <br />
                    CNN Model Design & Integration
                    </p>
                </div>

                <div className="col-span-3">
                    <Link
                    href="mailto:pg5113@srmist.edu.in"
                    className="sm:text-2xl text-xl text-secondary dark:text-SereneSky font-medium underline hover:dark:text-white hover:text-RegalBlue"
                    >
                    pg5113@srmist.edu.in
                    </Link>
                    <Link
                    href="tel:+918825626967"
                    className="sm:text-2xl text-xl text-secondary dark:text-primary flex items-center gap-2 w-fit hover:dark:text-white"
                    >
                    <span className="text-primary">Call</span> +91 88256 26967
                    </Link>
                </div>
                </div>

                {/* MEMBER 2 */}
                <div className="grid lg:grid-cols-9 md:grid-cols-6 grid-cols-1 gap-30 pt-12 border-b border-solid border-white border-opacity-50 pb-11 dark:border-dark_border">
                <div className="col-span-3">
                    <h2 className="text-secondary dark:text-white sm:text-[40px] sm:leading-[3.4rem] text-[28px] leading-[2.25rem] font-bold">
                    Pradeep Kumar
                    </h2>
                </div>

                <div className="col-span-3">
                    <p className="sm:text-2xl text-xl text-secondary dark:text-darktext font-normal leading-10">
                    Backend & API Developer  
                    <br />
                    FastAPI · Model Deployment
                    </p>
                </div>

                <div className="col-span-3">
                    <Link
                    href="mailto:kk0057@srmist.edu.in"
                    className="sm:text-2xl text-xl text-secondary dark:text-SereneSky font-medium underline hover:dark:text-white hover:text-RegalBlue"
                    >
                    kk0057@srmist.edu.in
                    </Link>
                    <Link
                    href="tel:+917339632333"
                    className="sm:text-2xl text-xl text-secondary dark:text-primary flex items-center gap-2 w-fit hover:dark:text-white"
                    >
                    <span className="text-primary">Call</span> +91 73396 32333
                    </Link>
                </div>
                </div>

                {/* MEMBER 3 */}
                <div className="grid lg:grid-cols-9 md:grid-cols-6 grid-cols-1 gap-30 pt-12">
                <div className="col-span-3">
                    <h2 className="text-secondary dark:text-white sm:text-[40px] sm:leading-[3.4rem] text-[28px] leading-[2.25rem] font-bold">
                    Harish Kumar
                    </h2>
                </div>

                <div className="col-span-3">
                    <p className="sm:text-2xl text-xl text-secondary dark:text-darktext font-normal leading-10">
                    Frontend Developer  
                    <br />
                    UI · UX · Data Visualization
                    </p>
                </div>

                <div className="col-span-3">
                    <Link
                    href="mailto:hv4239@srmist.edu.in"
                    className="sm:text-2xl text-xl text-secondary dark:text-SereneSky font-medium underline hover:dark:text-white hover:text-RegalBlue"
                    >
                    hv4239@srmist.edu.in
                    </Link>
                    <Link
                    href="tel:+919361710322"
                    className="sm:text-2xl text-xl text-secondary dark:text-primary flex items-center gap-2 w-fit hover:dark:text-white"
                    >
                    <span className="text-primary">Call</span> +91 93617 10322
                    </Link>
                </div>
                </div>

            </div>
            </div>
        </section>
        </>
  );
};

export default Location;
