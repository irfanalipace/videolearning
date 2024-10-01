import { useNavigate } from "react-router-dom";
import ContinueSelect from "./ContinueSelect";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import { request } from "../../services/axios";

const ContinueWatching = ({ series }) => {
  const data = series[0]?.videos;
  console.log(data, 'hhhhh')
  const navigate = useNavigate();


  const handleDownloadClick = (video_id) => {
    sendVideoData(video_id, "series_video");
  };

  const sendVideoData = async (video_id, type) => {
    try {
      const options = {
        method: "post",
        url: "api/download/list",
        data: {
          video_id,
          type,
        },
      };

      const response = await request(options);
      console.log("Response:", response);
    } catch (error) {
      console.error("Error in sendVideoData:", error);
    }
  };

  return (
    <div className="flex flex-col gap-4">
      <ContinueSelect />
      <div className="grid grid-cols-3 gap-4">
        {data?.map((watch, index) => (
          <div key={index} className=" rounded-xl cursor-pointer transition-all duration-300  bg-a-800">
            {/* Embed the iframe for the video */}
            <iframe
              src={`https://www.youtube.com/embed/${watch.video}`} // Ensure 'watch.video' contains the correct YouTube video ID
              title={watch.title}
              className="h-[100px] w-full rounded-t-xl" // Rounded top corners
              frameBorder="0"
              allowFullScreen
            />
            {/* Card content */}
            <div className="py-4 px-4 bg-black rounded-b-xl flex flex-col justify-end h-full text-white z-0">
              <div>
                <h1 className="font-bold text-sm font-poppins">{watch.title}</h1>
                <h1 className="font-normal text-xs font-poppins mt-1">{watch.description}</h1>
                <div className="grid grid-cols-3 gap-4 text-gray-300 mt-2">
                  <span className="text-[11px] font-poppins font-thin">{watch.episodes} Episodes</span>
                  <span className="text-[11px] font-poppins font-thin">{watch.duration} Minutes</span>
                  <span className="text-[11px] font-poppins font-thin">Actions</span>
                </div>
              </div>

              {/* buttons */}
              <div className="flex items-center justify-between mt-3">
                <button
                  className="bg-blue-500 rounded-3xl px-4 py-1 text-white hover:bg-blue-600 transition-all"
                  onClick={() => navigate("/watch-series-phase-two")}
                >
                  Watch Now
                </button>

                <button onClick={() => handleDownloadClick(watch.id)} className="bg-white/40 rounded-full w-10 h-10 text-[20px] font-semibold text-white flex items-center justify-center">
                  +
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex items-end justify-end">
        <div className="flex gap-2">
          <FaAngleLeft className="cursor-pointer" />
          <FaAngleRight className="cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default ContinueWatching;
