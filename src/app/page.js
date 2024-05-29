import Footer from "@/components/Footer";
import Destinations from "./destination/page";
import Facilities from "./facelities/page";
import Hero from "./landingPage/page";
import Packages from "./packages/page";
import Reviews from "./reviews/page";
import ContactUs from "./contact/page";


export default function Home() {
  return (
   <>
   <Hero />
   <Facilities/>
   <Destinations/>
   <Packages/>
   <Reviews/>
   <ContactUs/>
   </>
  );
}
