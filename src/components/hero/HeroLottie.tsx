"use client";

import { DotLottieReact } from "@lottiefiles/dotlottie-react";

export function HeroLottie() {
  return (
    <div className="mx-auto w-full max-w-md">
      <DotLottieReact
        src="https://lottie.host/5a1518c7-3df7-443a-aeda-666eb0dc5a13/uUyLa2a46b.lottie"
        loop
        autoplay
        style={{ width: "100%", height: "100%" }}
      />
    </div>
  );
}
