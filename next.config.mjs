import { withNextVideo } from "next-video/process";
/** @type {import('next').NextConfig} */
const nextConfig = (phase, { defaultConfig }) => {
  return { defaultConfig };
};

export default withNextVideo(nextConfig, {
  provider: "mux",
  providerConfig: {
    // Mux Video Token ID
    token: process.env.MUX_TOKEN_ID,
    // Mux Video Token Secret
    secret: process.env.MUX_TOKEN_SECRET,
    // Mux Video Playback ID
    playbackId: process.env.NEXT_PUBLIC_MUX_PLAYBACK_ID,
  },
});
