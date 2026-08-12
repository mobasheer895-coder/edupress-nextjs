import Catagories from "@/components/catagories/catagories";
import FeatureCourses from "@/components/featureCourses/featureCourses";
import Hero from "@/components/hero/hero";
import InfoSection from "@/components/infoSection/InfoSection";
import JoinBanner from "@/components/JoinBanner/JoinBanner";
import PromoSection from "@/components/PromoSection/PromoSection";
import StateSection from "@/components/stateSection/stateSection";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <main>
        <Hero/>
        <Catagories/>
        <FeatureCourses/>
        <PromoSection/>
        <StateSection/>
        <InfoSection/>
        <JoinBanner/>
      </main>
    </div>
  );
}
