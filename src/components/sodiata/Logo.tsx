"use client";

import { useTheme } from "@/lib/theme";

interface LogoProps {
  className?: string;
  showWordmark?: boolean;
}

export function Logo({ className, showWordmark = true }: LogoProps) {
  const { theme } = useTheme();
  const wordmarkColor = theme === "dark" ? "#FFFFFF" : "#0F172A";

  return (
    <svg
      viewBox={showWordmark ? "0 0 164 40" : "0 0 48 40"}
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      role="img"
      aria-label="Sodiata"
    >
      <defs>
        {/* Main gradient: bright cyan → deep ocean */}
        <linearGradient
          id="sdi-grad"
          x1="2"
          y1="2"
          x2="48"
          y2="38"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0%" stopColor="#67E8F9" />
          <stop offset="40%" stopColor="#38BDF8" />
          <stop offset="100%" stopColor="#0369A1" />
        </linearGradient>
        {/* Secondary gradient: circuit trace accent */}
        <linearGradient
          id="sdi-grad-accent"
          x1="22"
          y1="4"
          x2="46"
          y2="36"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0%" stopColor="#22D3EE" />
          <stop offset="100%" stopColor="#0EA5E9" />
        </linearGradient>
        {/* Glow filter for accent node */}
        <radialGradient id="sdi-node-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#38BDF8" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#38BDF8" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* ============================================
          ICON MARK — Angular pentagon / chevron
          ============================================ */}
      <g>
        {/* Container fill (low opacity tint) */}
        <path
          d="M5 3 L35 3 L47 20 L35 37 L5 37 Z"
          fill="url(#sdi-grad)"
          fillOpacity="0.10"
        />
        {/* Container stroke (crisp border) */}
        <path
          d="M5 3 L35 3 L47 20 L35 37 L5 37 Z"
          fill="none"
          stroke="url(#sdi-grad)"
          strokeWidth="2"
          strokeLinejoin="round"
        />

        {/* Inner structural accent — top-left edge highlight */}
        <path
          d="M5 3 L35 3"
          stroke="#67E8F9"
          strokeWidth="2.5"
          strokeLinecap="round"
          opacity="0.5"
        />

        {/* Circuit trace connector (zigzag between S and DA) */}
        <path
          d="M23 8 L25.5 14 L23 20 L25.5 26 L23 32"
          stroke="url(#sdi-grad-accent)"
          strokeWidth="1.3"
          fill="none"
          opacity="0.40"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* S — Bold dominant letter, left side */}
        <text
          x="8"
          y="28.5"
          fontFamily="Inter, -apple-system, sans-serif"
          fontSize="27"
          fontWeight="700"
          fill="url(#sdi-grad)"
        >
          S
        </text>

        {/* D — right section, top */}
        <text
          x="27"
          y="19"
          fontFamily="Inter, -apple-system, sans-serif"
          fontSize="14.5"
          fontWeight="700"
          fill="url(#sdi-grad)"
        >
          D
        </text>

        {/* A — right section, bottom */}
        <text
          x="27"
          y="34"
          fontFamily="Inter, -apple-system, sans-serif"
          fontSize="14.5"
          fontWeight="700"
          fill="url(#sdi-grad)"
        >
          A
        </text>

        {/* Accent node at center — outer glow */}
        <circle cx="24" cy="20" r="6" fill="url(#sdi-node-glow)" />
        {/* Accent node — solid core */}
        <circle cx="24" cy="20" r="2.5" fill="#38BDF8" />
        {/* Accent node — bright center highlight */}
        <circle cx="24" cy="20" r="1" fill="#FFFFFF" opacity="0.7" />
      </g>

      {/* ============================================
          WORDMARK — Theme-aware
          ============================================ */}
      {showWordmark && (
        <text
          x="58"
          y="27.5"
          fontFamily="Inter, -apple-system, sans-serif"
          fontSize="18.5"
          fontWeight="700"
          fill={wordmarkColor}
          letterSpacing="3.2"
        >
          SODIATA
        </text>
      )}
    </svg>
  );
}