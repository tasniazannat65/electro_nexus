import Banner from "@/components/home/Banner";
import Categories from "@/components/home/Categories";
import CTA from "@/components/home/CTA";
import HowItWorks from "@/components/home/HowItWorks";
import LatestItems from "@/components/home/LatestItems";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import Image from "next/image";

export default function Home() {
  return (
   <div>
    <section>
      <Banner/>
    </section>
    <section>
      <LatestItems/>
    </section>
    <section>
      <WhyChooseUs/>
    </section>
    <section>
      <HowItWorks/>
    </section>
    <section>
      <Categories/>
    </section>
    <section>
      <CTA/>
    </section>


   </div>
  );
}
