"use server";
import Mux from "@mux/mux-node";
const mux = new Mux({
  tokenId: process.env.MUX_TOKEN_ID,
  tokenSecret: process.env.MUX_TOKEN_SECRET,
});

await mux.video.assets.retrieve("bsTvTZbgcKn8gee43nYyBM5a6yIYNNaRgSp8n7DHIyk");
