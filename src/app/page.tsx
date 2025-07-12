import Header from "@/components/Header";
import MainSection from "@/components/MainSection";
import ScrollAnimation from "@/services/ScrollAnimation";
import AboutWhoAmI from "@/components/AboutWhoAmI";

export default function Home(): React.ReactElement {
  return (
    <>
      <ScrollAnimation />
      <Header />
      <MainSection />
      <AboutWhoAmI />
    </>
  );
}
