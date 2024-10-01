import { useRef, useState } from "react";

const VideoPlayer = ({ video }) => {
  const iframeRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayPause = () => {
    const iframeWindow = iframeRef.current.contentWindow;
    if (isPlaying) {
      iframeWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
    } else {
      iframeWindow.postMessage('{"event":"command","func":"playVideo","args":""}', '*');
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="relative w-full">
      {/* Embedded iframe for video */}
      <iframe
        ref={iframeRef}
        className="rounded-lg w-full"
        src={`https://www.youtube.com/embed/${video.video}?enablejsapi=1`}
        title={video.title}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>

      {/* Play/Pause button */}
      {/* <div className="absolute bottom-6 left-4 flex items-center space-x-4">
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
      </div> */}
    </div>
  );
};

export default VideoPlayer;
