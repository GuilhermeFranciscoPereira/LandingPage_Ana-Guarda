import Header from "@/components/Header";
import AboutWhoAmI from "@/components/AboutWhoAmI";
import MainSection from "@/components/MainSection";
import ScrollAnimation from "@/services/ScrollAnimation";
import RealClassVideo from "@/components/RealClassVideo";
import WhyTakeClassWithMe from "@/components/WhyTakeClassWithMe";

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
