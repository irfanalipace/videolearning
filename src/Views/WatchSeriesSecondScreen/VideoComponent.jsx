import { useRef, useState } from "react";

const VideoPlayer = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayPause = () => {
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="relative w-full">
      {/* Video element */}
      <video
        ref={videoRef}
        className="rounded-lg w-full"
        controls
        src="https://www.w3schools.com/html/mov_bbb.mp4" // Replace with your own video URL
      ></video>

      {/* Play/Pause button */}
      <div className="absolute bottom-6 left-4 flex items-center space-x-4">
        <button
          onClick={handlePlayPause}
          className="text-white bg-black/50 p-2 rounded-full focus:outline-none"
        >
          {isPlaying ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.5 6.75v10.5m3-10.5v10.5"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5.25 5.25l13.5 6.75-13.5 6.75V5.25z"
              />
            </svg>
          )}
        </button>

        {/* Time and Fullscreen Button */}
        <div className="flex items-center text-white">
          <span className="text-sm">0:51</span>
          <span className="mx-2">/</span>
          <span className="text-sm">2:31:48</span>
        </div>
      </div>
    </div>
  );
};

export default VideoPlayer;
