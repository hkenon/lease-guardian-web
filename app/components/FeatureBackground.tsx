"use client";

interface FeatureBackgroundProps {
  progress: number; // 0-1 scroll progress
}

export default function FeatureBackground({ progress }: FeatureBackgroundProps) {
  // Calculate color based on progress
  const hue = 220 + progress * 40; // Shifts from blue-ish to purple-ish
  const saturation = 5 + progress * 10;
  const lightness = 95 - progress * 5;

  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Animated gradient orbs */}
      <div
        className="absolute w-[800px] h-[800px] rounded-full blur-3xl opacity-30 animate-pulse"
        style={{
          background: `radial-gradient(circle, hsl(${hue}, ${saturation}%, ${lightness}%) 0%, transparent 70%)`,
          top: `${20 + progress * 20}%`,
          left: `${10 + progress * 30}%`,
          transform: `scale(${1 + progress * 0.3})`,
          transition: "all 0.5s ease-out",
        }}
      />
      <div
        className="absolute w-[600px] h-[600px] rounded-full blur-3xl opacity-20"
        style={{
          background: `radial-gradient(circle, hsl(${hue + 30}, ${saturation + 5}%, ${lightness - 5}%) 0%, transparent 70%)`,
          bottom: `${10 + progress * 15}%`,
          right: `${5 + progress * 25}%`,
          transform: `scale(${1.2 - progress * 0.2})`,
          transition: "all 0.5s ease-out",
        }}
      />
      <div
        className="absolute w-[500px] h-[500px] rounded-full blur-3xl opacity-15"
        style={{
          background: `radial-gradient(circle, hsl(${hue - 20}, ${saturation}%, ${lightness + 2}%) 0%, transparent 70%)`,
          top: `${50 - progress * 20}%`,
          right: `${30 + progress * 10}%`,
          transform: `scale(${0.8 + progress * 0.4})`,
          transition: "all 0.5s ease-out",
        }}
      />

      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0,0,0,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,0,0,0.1) 1px, transparent 1px)
          `,
          backgroundSize: "50px 50px",
        }}
      />

      {/* Base white overlay */}
      <div className="absolute inset-0 bg-white/60" />
    </div>
  );
}
