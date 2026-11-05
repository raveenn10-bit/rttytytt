"use client";

import { useEffect, useRef } from "react";

type VantaEffect = { destroy: () => void };

export default function FooterVanta() {
  const layerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const layer = layerRef.current;
    if (!layer) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const memory = (navigator as Navigator & { deviceMemory?: number }).deviceMemory;
    const shouldUseStaticFallback =
      reducedMotion.matches ||
      window.innerWidth < 768 ||
      (typeof memory === "number" && memory <= 4);

    if (shouldUseStaticFallback) return;

    let effect: VantaEffect | null = null;
    let cancelled = false;

    const initialize = async () => {
      try {
        const [fogModule, THREE] = await Promise.all([
          import("vanta/dist/vanta.fog.min"),
          import("three"),
        ]);
        if (cancelled || !layerRef.current) return;

        const createFog = fogModule.default as unknown as (options: Record<string, unknown>) => VantaEffect;
        effect = createFog({
          el: layerRef.current,
          THREE,
          mouseControls: true,
          touchControls: false,
          gyroControls: false,
          minHeight: 200,
          minWidth: 200,
          highlightColor: 0x9d1635,
          midtoneColor: 0x3b0714,
          lowlightColor: 0x090005,
          baseColor: 0x080005,
          blurFactor: 0.46,
          speed: 0.55,
          zoom: 0.72,
        });
      } catch {
        // The client-selected image and CSS gradient remain as the static fallback.
      }
    };

    const timer = window.setTimeout(initialize, 180);
    return () => {
      cancelled = true;
      window.clearTimeout(timer);
      effect?.destroy();
    };
  }, []);

  return <div ref={layerRef} className="footer-vanta-layer" aria-hidden="true" />;
}
