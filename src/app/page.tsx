import Faq from "@/Sections/Faq";
import Plans from "@/Sections/Plans";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Students from "@/Sections/Students";
import Schedule from "@/Sections/Schedule";
import MainSection from "@/Sections/MainSection";
import AboutWhoAmI from "@/Sections/AboutWhoAmI";
import Methodology from "@/Sections/Methodology";
import RealClassVideo from "@/Sections/RealClassVideo";
import TargetAudience from "@/Sections/TargetAudience";
import ScrollAnimation from "@/services/ScrollAnimation";
import WhyTakeClassWithMe from "@/Sections/WhyTakeClassWithMe";

export default function Home(): React.ReactElement {
  return (
    <>
      <ScrollAnimation />
      <Header />
      <MainSection />
      <AboutWhoAmI />
      <WhyTakeClassWithMe />
      <RealClassVideo />
      <TargetAudience />
      <Methodology />
      <Students />
      <Schedule />
      <Plans />
      <Faq />
      <Footer />
    </>
  );
}
