import Header from "@/components/Header";
import MainSection from "@/components/MainSection";
import ScrollAnimation from "@/services/ScrollAnimation";

export default function Home(): React.ReactElement {
  return (
    <>
      <ScrollAnimation />
      <Header />
      <MainSection />
    </>
  );
}
