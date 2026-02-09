import Configuration from "./Configuration";
import { DocNavigation } from "./DocNavigation";
import { Introduction } from "./Introduction";
import { PackageStructure } from "./PackageStructure";
import { QuickStart } from "./QuickStart";

export const Documentation = () => {
  return (
    <div className="dark:bg-darkmode">
      <div className="container p-6 lg:mt-16 mt-16 !pt-10">
        <div className="grid grid-cols-12 gap-6">

          {/* LEFT NAV */}
          <div className="lg:col-span-3 col-span-12 lg:block hidden">
            <DocNavigation />
          </div>

          {/* CONTENT */}
          <div className="lg:col-span-9 col-span-12 space-y-20">

            {/* Analytics Overview */}
            <section id="overview" className="scroll-mt-[180px]">
              <Introduction />
            </section>

            {/* Dataset Insights */}
            <section id="dataset" className="scroll-mt-[180px]">
              <PackageStructure />
            </section>

            {/* Model Performance */}
            <section id="performance" className="scroll-mt-[180px]">
              <QuickStart />
            </section>

            {/* Remaining Analytics Sections */}
            <Configuration />

          </div>
        </div>
      </div>
    </div>
  );
};
