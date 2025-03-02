import Header from "@/components/header";
import Menu from "@/components/menu";
import Faq from "@/components/faq";
import Plans from "@/components/plans";
import CTA1 from "@/components/cta_section1";
import CTA2 from "@/components/cta_section2";
import Contact from "@/components/contact";
import About from "@/components/about";
import Banner from "@/components/banner";

export default function Home() {
  return (
    <>
      <Menu />
      <Header />
      <Plans />
      <CTA1 />
      <About />
      <Faq />
      <Contact />
      <CTA2 />
      <Banner />
    </>
  );
}
