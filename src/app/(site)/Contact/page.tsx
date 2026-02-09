import ContactInfo from "@/components/Contact/ContactInfo";
import ContactForm from "@/components/Contact/Form";
import Location from "@/components/Contact/OfficeLocation";
import TicketSection from "@/components/Home/FooterContent";
import HeroSub from "@/components/SharedComponent/HeroSub";
import { Metadata } from "next";
export const metadata: Metadata = {
    title: "Contact | Symposium",
};

const page = () => {
  const breadcrumbLinks = [
    { href: "/", text: "Home" },
    { href: "/contact", text: "Contact" },
  ];
  return (
    <>
      <HeroSub
        title="Contact Us"
        description="This project was built with purpose. If you have questions, feedback, or ideas to improve early breast cancer detection, we’d love to hear from you."
        breadcrumbLinks={breadcrumbLinks}
      />
      <ContactInfo />
      <ContactForm />
      <Location />
      <TicketSection/>
    </>
  );
};

export default page;
