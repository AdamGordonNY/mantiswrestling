import React from "react";

import BackgroundVideo from "next-video/background-video";

export async function VideoComponent() {
  return (
    <BackgroundVideo
      className="aspect-video md:w-[80%] md:h-[60%] "
      controls={false}
      src={`https://stream.mux.com/t3EdNOB9tsmV2Dg9vzk8u5pGvGuHuR77p96y9kL022p00.m3u8`}
      autoPlay
      loop
    />
  );
}

export default VideoComponent;
