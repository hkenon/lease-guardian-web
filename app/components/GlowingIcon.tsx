"use client";

import { useEffect, useRef } from "react";

interface GlowingIconProps {
  children: React.ReactNode;
  isActive: boolean;
  color?: string;
}

export default function GlowingIcon({
  children,
  isActive,
  color = "#ef4444",
}: GlowingIconProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const gl = canvas.getContext("webgl");
    if (!gl) return;

    // Vertex shader
    const vertexShaderSource = `
      attribute vec2 a_position;
      varying vec2 v_uv;
      void main() {
        v_uv = a_position * 0.5 + 0.5;
        gl_Position = vec4(a_position, 0.0, 1.0);
      }
    `;

    // Fragment shader - creates intense distortion and glow effect
    const fragmentShaderSource = `
      precision mediump float;
      varying vec2 v_uv;
      uniform float u_time;
      uniform float u_active;
      uniform vec3 u_color;

      // Noise function for organic distortion
      float noise(vec2 p) {
        return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453);
      }

      void main() {
        vec2 center = vec2(0.5, 0.5);
        vec2 uv = v_uv;

        // Wave distortion - more pronounced
        float wave1 = sin(uv.y * 12.0 + u_time * 3.0) * 0.03;
        float wave2 = cos(uv.x * 10.0 + u_time * 2.5) * 0.025;
        float wave3 = sin((uv.x + uv.y) * 8.0 + u_time * 4.0) * 0.02;
        uv.x += (wave1 + wave3) * u_active;
        uv.y += (wave2 + wave3) * u_active;

        float dist = distance(uv, center);

        // Pulsing glow with multiple layers
        float pulse1 = sin(u_time * 2.5) * 0.15 + 0.85;
        float pulse2 = sin(u_time * 4.0 + 1.5) * 0.1 + 0.9;
        float pulse3 = sin(u_time * 1.5) * 0.2 + 0.8;

        // Multiple glow layers for depth
        float glow1 = smoothstep(0.5, 0.0, dist) * pulse1;
        float glow2 = smoothstep(0.35, 0.0, dist) * pulse2 * 1.2;
        float glow3 = smoothstep(0.2, 0.0, dist) * pulse3 * 1.5;
        float glow = glow1 + glow2 * 0.5 + glow3 * 0.3;

        // Rotating energy beams
        float angle = atan(uv.y - 0.5, uv.x - 0.5);
        float beams = sin(angle * 6.0 + u_time * 2.0) * 0.5 + 0.5;
        beams = pow(beams, 3.0) * (1.0 - dist * 1.5);

        // Electric arcs
        float arc = noise(uv * 5.0 + u_time);
        arc = step(0.85, arc) * (1.0 - dist * 2.0);

        // Chromatic aberration / color split
        float chromatic = sin(dist * 20.0 - u_time * 3.0) * 0.1;

        // Color variations
        vec3 color1 = u_color;
        vec3 color2 = u_color * vec3(1.2, 0.8, 1.4); // Shifted hue
        vec3 color3 = u_color * vec3(0.8, 1.2, 1.0); // Another shift

        vec3 finalColor = mix(color1, color2, beams);
        finalColor = mix(finalColor, color3, chromatic + 0.3);
        finalColor += vec3(arc * 0.3);

        // Intensity boost
        finalColor *= 1.0 + glow * 0.5;

        // Apply active state with stronger effect
        float alpha = (glow * 0.7 + beams * 0.2 + arc * 0.1) * u_active;
        alpha = min(alpha, 0.85);

        gl_FragColor = vec4(finalColor, alpha);
      }
    `;

    // Compile shaders
    const vertexShader = gl.createShader(gl.VERTEX_SHADER)!;
    gl.shaderSource(vertexShader, vertexShaderSource);
    gl.compileShader(vertexShader);

    const fragmentShader = gl.createShader(gl.FRAGMENT_SHADER)!;
    gl.shaderSource(fragmentShader, fragmentShaderSource);
    gl.compileShader(fragmentShader);

    // Create program
    const program = gl.createProgram()!;
    gl.attachShader(program, vertexShader);
    gl.attachShader(program, fragmentShader);
    gl.linkProgram(program);
    gl.useProgram(program);

    // Set up geometry
    const positionBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
    gl.bufferData(
      gl.ARRAY_BUFFER,
      new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]),
      gl.STATIC_DRAW
    );

    const positionLocation = gl.getAttribLocation(program, "a_position");
    gl.enableVertexAttribArray(positionLocation);
    gl.vertexAttribPointer(positionLocation, 2, gl.FLOAT, false, 0, 0);

    // Get uniform locations
    const timeLocation = gl.getUniformLocation(program, "u_time");
    const activeLocation = gl.getUniformLocation(program, "u_active");
    const colorLocation = gl.getUniformLocation(program, "u_color");

    // Parse color
    const parseColor = (hex: string) => {
      const r = parseInt(hex.slice(1, 3), 16) / 255;
      const g = parseInt(hex.slice(3, 5), 16) / 255;
      const b = parseInt(hex.slice(5, 7), 16) / 255;
      return [r, g, b];
    };

    const colorValues = parseColor(color);

    // Enable blending for transparency
    gl.enable(gl.BLEND);
    gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);

    // Animation loop
    let startTime = Date.now();
    let currentActive = 0;

    const render = () => {
      const time = (Date.now() - startTime) / 1000;

      // Smooth transition for active state
      const targetActive = isActive ? 1 : 0;
      currentActive += (targetActive - currentActive) * 0.08;

      gl.viewport(0, 0, canvas.width, canvas.height);
      gl.clearColor(0, 0, 0, 0);
      gl.clear(gl.COLOR_BUFFER_BIT);

      gl.uniform1f(timeLocation, time);
      gl.uniform1f(activeLocation, currentActive);
      gl.uniform3fv(colorLocation, colorValues);

      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);

      animationRef.current = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationRef.current);
      gl.deleteProgram(program);
      gl.deleteShader(vertexShader);
      gl.deleteShader(fragmentShader);
    };
  }, [isActive, color]);

  return (
    <div className="relative inline-flex items-center justify-center">
      {/* WebGL canvas for glow effect */}
      <canvas
        ref={canvasRef}
        width={512}
        height={512}
        className="absolute pointer-events-none"
        style={{
          width: "600px",
          height: "600px",
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)"
        }}
      />
      {/* Icon container with subtle pulse when active */}
      <div
        className={`relative z-10 transition-all duration-500 ${
          isActive ? "scale-125 drop-shadow-[0_0_30px_rgba(239,68,68,0.7)]" : "scale-100"
        }`}
      >
        {children}
      </div>
    </div>
  );
}
