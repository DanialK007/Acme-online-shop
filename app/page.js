// "use client";
import { Ecommerce } from "@/components/component/ecommerce";
// import Lenis from "@studio-freight/lenis";
// import { useEffect, useRef } from "react";

export default function Home() {
  // const lenisRef = useRef(null);

  // useEffect(() => {
  //   // Initialize Lenis with the desired settings
  //   const lenis = new Lenis({
  //     duration: 1.5, // Increase duration for smoother scroll
  //     easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Ease out exponential
  //     smoothWheel: true,
  //     smoothTouch: false,
  //   });

  //   lenisRef.current = lenis;

  //   // Create a request animation frame loop
  //   const raf = (time) => {
  //     lenis.raf(time);
  //     requestAnimationFrame(raf);
  //   };

  //   // Start the animation frame loop
  //   requestAnimationFrame(raf);

  //   // Clean up Lenis instance on component unmount
  //   return () => {
  //     lenis.destroy();
  //   };
  // }, []);

  return (
    <main>
      <Ecommerce />
    </main>
  );
}
