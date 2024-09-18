import React from "react";

import BackgroundVideo from "next-video/background-video";
import action from "@/videos/action.mp4";
export async function VideoComponent() {
  return (
    <BackgroundVideo
      className="aspect-video md:w-[80%] md:h-[60%] "
      controls={false}
      src={action}
      autoPlay
      loop
    />
  );
}

export default VideoComponent;
