"use client";

import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import type { ISourceOptions } from "@tsparticles/engine";

export default function StarParticles() {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const options: ISourceOptions = useMemo(
    () => ({
      fullScreen: false,
      fpsLimit: 60,
      particles: {
        number: {
          value: 25,
          density: {
            enable: true,
          },
        },
        color: {
          value: ["#f0b429", "#f5c542", "#e9a820"],
        },
        shape: {
          type: "star",
          options: {
            star: {
              sides: 5,
              inset: 2,
            },
          },
        },
        opacity: {
          value: { min: 0.4, max: 1 },
          animation: {
            enable: true,
            speed: 0.5,
            sync: false,
          },
        },
        size: {
          value: { min: 3, max: 12 },
          animation: {
            enable: true,
            speed: 1,
            sync: false,
          },
        },
        shadow: {
          enable: true,
          color: "#f5c542",
          blur: 15,
        },
        move: {
          enable: true,
          speed: { min: 0.1, max: 0.35 },
          direction: "none",
          random: true,
          straight: false,
          outModes: {
            default: "out",
          },
          drift: 0.1,
        },
        twinkle: {
          particles: {
            enable: true,
            frequency: 0.05,
            opacity: 1,
          },
        },
      },
      interactivity: {
        events: {
          onHover: {
            enable: false,
          },
        },
      },
      detectRetina: true,
    }),
    []
  );

  if (!init) return null;

  return (
    <Particles
      id="star-particles"
      className="pointer-events-none"
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        overflow: 'visible',
        filter: "drop-shadow(0 0 8px rgba(245, 197, 66, 0.6))",
      }}
      options={options}
    />
  );
}
