import Navbar from "./components/Navbar";
import HeroSlider from "./components/HeroSlider";
import PlatformFeatures from "./components/PlatformFeatures";
import DigitalNarratives from "./components/DigitalNarratives";

export default function Home() {
  return (
    <div>
      <Navbar />

      <main style={{ padding: "40px", textAlign: "center" }}>
        <HeroSlider />
        <PlatformFeatures />
        <DigitalNarratives />
      </main>
    </div>
  );
}