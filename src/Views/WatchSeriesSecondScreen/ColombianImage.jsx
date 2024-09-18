import VideoPlayer from "./VideoComponent";

const ColombianImage = () => {
  return (
    <div className="w-full flex flex-col items-start gap-3">
      {/* back  */}
      <span className="text-bluePrimary flex items-center justify-center gap-2">
        <img src="/Back.jpg" className="w-4 h-4 object-cover" alt="" />
        back
      </span>
      {/*  */}
      <VideoPlayer />
    </div>
  );
};

export default ColombianImage;
