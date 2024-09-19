"use server";
import Mux from "@mux/mux-node";
const mux = new Mux({
  tokenId: process.env.MUX_TOKEN_ID,
  tokenSecret: process.env.MUX_TOKEN_SECRET,
});

await mux.video.assets.retrieve(
  "KF5Yyu01bGs02i9YpuxhJYe5AACwh52IZEpSwjSKSLKc00"
);
