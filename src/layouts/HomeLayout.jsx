import BannerSlider from "../components/BannerSlider";
import OurMission from "../components/OurMission";

const HomeLayout = () => {
  return (
    <>
      <BannerSlider />
      <div className="w-11/12 mx-auto">
      <OurMission/>
      </div>
    </>
  );
};

export default HomeLayout;
