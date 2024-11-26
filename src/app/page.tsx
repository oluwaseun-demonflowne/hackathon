import Benefit from "@/components/Main/Benefit";
import FAQ from "@/components/Main/FAQ";
import Hero from "@/components/Main/Hero";
import RegisterNow from "@/components/Main/RegisterNow";
import TextUnderVideo from "@/components/Main/TextUnderVideo";
import Videos from "@/components/Main/Video";
import Why from "@/components/Main/Why";

export default function Home() {
  return (
    <>
      <Hero />
      <Why />
      <Videos />
      <TextUnderVideo />
      <Benefit />
      <FAQ />
      <RegisterNow />
    </>
  );
}
