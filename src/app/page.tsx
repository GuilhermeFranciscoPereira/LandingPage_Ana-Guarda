import Header from "@/components/Header";
import AboutWhoAmI from "@/Sections/AboutWhoAmI";
import MainSection from "@/Sections/MainSection";
import ScrollAnimation from "@/services/ScrollAnimation";
import RealClassVideo from "@/Sections/RealClassVideo";
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
    </>
  );
}
