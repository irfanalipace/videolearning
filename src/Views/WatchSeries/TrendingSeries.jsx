import CookingColombian from "./CookingColombian";
import ContinueWatching from "./ContinueWatching";
import RecentDownloadWatch from "./RecentDownload&Watch";
import PaginationButton from "./PaginationButton";
const TrendingSeries = () => {
  return (
    <div className="grid grid-cols-12 gap-3">
      <div className="col-span-9">
        <div className="flex flex-col gap-6 w-full">
          <CookingColombian />
          <ContinueWatching />
        </div>
      </div>
      <div className="col-span-3">
        <div>
          <RecentDownloadWatch />
        </div>
      </div>
    </div>
  );
};

export default TrendingSeries;
