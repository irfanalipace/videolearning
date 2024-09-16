import { Stack } from "@mui/material";

const CookingColombian = () => {
  return (
    <div
      style={{ backgroundImage: "url('/colombian-background.jpg')" }}
      className="h-[400px] relative cover bg-cover bg-center rounded-xl"
    >
      {/* beginner text */}
      <span className="absolute top-0 left-0 rounded-tl-xl text-white font-bold bg-bluePrimary px-[16px] py-[15px]">
        Beginner
      </span>

      <div className="pl-9 h-full flex flex-col  justify-center gap-6 text-white">
        {/* Cooking Grids */}
        <div className="w-[690px]  flex flex-col justify-center gap-2 ">
          <h1 className=" font-bold text-[20px] font-poppins">
            Cooking Colombian Dishes
          </h1>
          <div className="grid grid-cols-5">
            <span className="text-sm font-poppins font-normal text-white">
              11 Episodes
            </span>
            <span className="text-sm font-poppins font-normal text-white">
              183 Minutes
            </span>
            <span className="text-sm font-poppins font-normal text-white">
              Actions
            </span>
            <span className="text-sm font-poppins font-normal text-white">
              Adventure
            </span>
            <span className="text-sm font-poppins font-normal text-white">
              Science Fiction
            </span>
          </div>
        </div>

        <p className="font-light text-sm">
          Lorem ipsum dolor sit amet consectetur lorem ipsum dolor sit amet
          connsectetur lorem ipsum dolor sit amet consectetur lorem ipsum dolor
          sit amet consectetur lorem ipsum dolor sit amet connsectetur lorem
          ipsum dolor sit amet consectetur lorem ipsum dolor sit amet
          consectetur lorem ipsum dolor sit amet connsectetur lorem ipsum dolor
          sit amet consectetur lorem ipsum sit amet consectetur lorem ipsum
          dolor sit amet connsectetur lorem ipsum dolor sit amet consectetur
          lorem ipsum dolor sit amet consectetur lorem ipsum dolor sit amet
          connsectetur lorem ipsum dolor sit amet consectetur sit amet
          consectetur lorem ipsum dolor sit amet consectetur lorem ipsum dolor
          sit amet connsectetur lorem ipsum dolor sit amet consectetur lorem
          ipsum sit amet consectetur lorem ipsum dolor sit .
        </p>
      </div>
    </div>
  );
};

export default CookingColombian;
