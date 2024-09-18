import ButtonsFlex from "./ButtonsFlex";
import ColombianImage from "./ColombianImage";
import Recommendations from "./Recommendations";
import RecommendedVideos from "./RecommendedVideos";

const WatchSeriesSecondScreen = () => {
  return (
    <div className="grid grid-cols-12 gap-7">
      <div className="col-span-9">
        <div className="flex flex-col gap-6 w-full">
          <ColombianImage />
          <ButtonsFlex />
          <RecommendedVideos />
        </div>
      </div>
      <div className="col-span-3">
        <Recommendations />
      </div>
    </div>
  );
};

export default WatchSeriesSecondScreen;
