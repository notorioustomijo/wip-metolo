import { DotLottieReact } from "@lottiefiles/dotlottie-react";

export const PageLoader = () => {
  return (
    <DotLottieReact 
      src="/animations/loader2.lottie"
      loop
      autoplay
      style={{ width: 200, height: 200 }}
    />
  )
}