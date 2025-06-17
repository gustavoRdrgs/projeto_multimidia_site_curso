import Carousel from "../components/Carousel";
import SocialBar from "../components/SocialBar";
import ExternalLinks from "../components/ExternalLinks";

export default function Home() {
  return (
    <div style={{ padding: 0, margin: 0 }}>
      <Carousel />
      <SocialBar />
      <ExternalLinks />
    </div>
  );
}
