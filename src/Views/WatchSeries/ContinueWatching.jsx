import { useNavigate } from "react-router-dom";
import ContinueSelect from "./ContinueSelect";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
const ContinueWatching = () => {
  const navigate = useNavigate();
  const watchingArray = [
    { image: "/blond-girl.jpg", title: "Trying Colombia’s..." },
    { image: "/ice-cream.jpg", title: "Lets try these tiny cocu..." },
    {
      image: "/pizza.jpg",
      title: "Quiz Time with Andrés",
    },
  ];

  return (
    <div className="flex flex-col gap-4">
      <ContinueSelect />
      <div className="grid grid-cols-3 gap-4">
        {watchingArray.map((watch, index) => (
          <div
            key={index}
            style={{ backgroundImage: `url(${watch.image})` }}
            className="h-[270px] relative contain bg-cover bg-center rounded-xl cursor-pointer transition-all duration-300"
          >
            <div className="absolute w-full rounded-xl bg-black/50 h-full flex flex-col justify-end pl-5 gap-9 text-white pb-5">
              <div>
                <h1 className=" font-bold text-sm  font-poppins">
                  Cooking Colombian....
                </h1>
                <div className="grid grid-cols-3 gap-4 text-gray-100">
                  <span className="text-[11px] font-poppins font-thin ">
                    11 Episodes
                  </span>
                  <span className="text-[11px] font-poppins font-thin ">
                    183 Minutes
                  </span>
                  <span className="text-[11px] font-poppins font-thin ">
                    Actions
                  </span>
                </div>
              </div>

              {/* buttons  */}

              <div className="flex items-center justify-between pr-9">
                <button
                  className="bg-bluePrimary rounded-3xl px-3 pb-2 pt-1 text-white"
                  onClick={() => navigate("/watch-series-phase-two")}
                >
                  Watch Now
                </button>

                <button className="bg-white/40 rounded-full w-10 h-10 text-[20px] font-semibold text-white flex items-center justify-center px-3 pb-2 pt-1">
                  +
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex items-end justify-end">
        <div className="flex gap-2">
          <FaAngleLeft />
          <FaAngleRight />
        </div>
      </div>
    </div>
  );
};

export default ContinueWatching;
