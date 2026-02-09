import '@/Style/style.css';
import FooterContent from '@/components/Home/FooterContent';
import Schedules from "@/components/Home/Schedules";
import HeroSub from "@/components/SharedComponent/HeroSub";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Schedules | Symposium",
};

const page = () => {
  const breadcrumbLinks = [
    { href: "/", text: "Home" },
    { href: "/Project", text: "About The Project" },
  ];
  return (
    <>
      <HeroSub
        title="About The Project"
        description="A structured overview of our deep learning–based breast cancer detection system, from data preparation to model evaluation."
        breadcrumbLinks={breadcrumbLinks}
      />
      <section className="dark:bg-darkmode">  
        <div className="container upcoming">
          <Schedules/>
        </div>
      </section>
      <div>
        <FooterContent/>
      </div>
    </>
  );
};

export default page;
