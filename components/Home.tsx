"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function HomePage() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="min-h-screen zen-gradient flex items-center justify-center relative overflow-hidden">
      {/* Enhanced bokeh particles with more variety */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="bokeh-particle absolute rounded-full blur-sm"
            style={{
              background:
                i % 3 === 0
                  ? "radial-gradient(circle, rgba(255,215,0,0.3) 0%, rgba(255,215,0,0.1) 70%, transparent 100%)"
                  : i % 3 === 1
                    ? "radial-gradient(circle, rgba(138,43,226,0.2) 0%, rgba(138,43,226,0.05) 70%, transparent 100%)"
                    : "radial-gradient(circle, rgba(70,130,180,0.25) 0%, rgba(70,130,180,0.08) 70%, transparent 100%)",
              width: Math.random() * 12 + 6 + "px",
              height: Math.random() * 12 + 6 + "px",
              left: Math.random() * 100 + "%",
              top: Math.random() * 100 + "%",
              animationDelay: Math.random() * 8 + "s",
              animationDuration: Math.random() * 6 + 8 + "s",
            }}
          />
        ))}
      </div>

      {/* Floating accent elements */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <div
            key={`accent-${i}`}
            className="absolute w-1 h-1 bg-white/20 rounded-full"
            style={{
              left: Math.random() * 100 + "%",
              top: Math.random() * 100 + "%",
              animation: `float ${Math.random() * 4 + 10}s ease-in-out infinite`,
              animationDelay: Math.random() * 5 + "s",
            }}
          />
        ))}
      </div>

      {/* Main content */}
      <div className="text-center z-10 px-8 max-w-3xl mx-auto space-y-16">
        {/* Game title with enhanced glow */}
        <div className="space-y-4">
          <h1 className="font-serif font-thin text-6xl md:text-7xl lg:text-8xl text-white/95 title-glow leading-none tracking-wider">
            How Deep Will You Go?
          </h1>
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent mx-auto"></div>
        </div>

        {/* Enhanced tagline */}
        <p className="font-sans font-light text-xl md:text-2xl text-white/75 italic leading-relaxed tracking-wide max-w-lg mx-auto">
          One question at a time.
          <br />
          <span className="text-white/60">One truth at a time.</span>
        </p>

        {/* Enhanced start button */}
        <div className="pt-12">
          <Link href="/question">
            <Button
              size="lg"
              className="font-sans font-light text-xl px-16 py-6 bg-white/8 hover:bg-white/15 text-white border border-white/25 hover:border-white/40 rounded-full backdrop-blur-md transition-all duration-500 hover:shadow-2xl hover:shadow-white/20 hover:scale-110 group relative overflow-hidden"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <span
                className={`relative transition-all duration-500 ${isHovered ? "drop-shadow-2xl text-shadow" : ""}`}
              >
                Start Game
              </span>
            </Button>
          </Link>
        </div>
      </div>

      {/* Enhanced depth overlay with subtle texture */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/5 via-transparent to-black/15 pointer-events-none" />

      <div className="absolute top-8 left-8 w-16 h-16 border-l border-t border-white/10 pointer-events-none"></div>
      <div className="absolute top-8 right-8 w-16 h-16 border-r border-t border-white/10 pointer-events-none"></div>
      <div className="absolute bottom-8 left-8 w-16 h-16 border-l border-b border-white/10 pointer-events-none"></div>
      <div className="absolute bottom-8 right-8 w-16 h-16 border-r border-b border-white/10 pointer-events-none"></div>
    </div>
  );
}
