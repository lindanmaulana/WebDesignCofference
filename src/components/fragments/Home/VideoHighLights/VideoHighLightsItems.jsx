const VideoHighLightsItems = () => {
  return (
    <div className="px-[15px] w-full lg:w-1/2">
      <iframe
        className="w-full min-h-[315px]"
        src="https://www.youtube.com/embed/XDPwXQjAlB0?si=xkfEnTbVmBfjhSGQ"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
    </div>
  );
};

export default VideoHighLightsItems;
