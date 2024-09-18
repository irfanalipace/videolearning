const ButtonsFlex = () => {
  return (
    <div className="flex flex-col gap-5">
      {" "}
      <div className="flex items-center justify-between">
        <h1 className="text-black text-lg font-bold">
          Cooking Colombian Dishes
        </h1>
        <div className="grid grid-cols-3 gap-3">
          <button className="bg-bluePrimary/30 p-3 rounded-md flex items-center gap-1 justify-center font-semibold text-sm">
            <img src="/eye.jpg" alt="" />
            <span>Marked as Watched</span>
          </button>
          <button className="bg-bluePrimary/30 p-3 rounded-md flex items-center gap-1 justify-center font-semibold text-sm">
            <img src="/addList.jpg" alt="" />
            <span>Add to My List</span>
          </button>
          <button className="bg-bluePrimary/30 p-3 rounded-md flex items-center gap-1 justify-center font-semibold text-sm">
            <img src="/download.jpg" alt="" />
            <span>Download</span>
          </button>
        </div>
      </div>{" "}
      <hr className="border-recommendationBorder border-[1px] w-full" />
      <p className="text-[12px] font-medium text-black/40">
        Lorem ipsum dolor sit amet consectetur lorem ipsum dolor sit amet
        connsectetur lorem ipsum dolor sit amet consectetur lorem ipsum dolor
        sit amet consectetur lorem ipsum dolor sit amet connsectetur lorem ipsum
        dolor sit amet lorem ipsum dolor sit amet consectetur lorem ipsum dolor
        sit amet connsectetur ipsum dolor sit.
      </p>
    </div>
  );
};

export default ButtonsFlex;
