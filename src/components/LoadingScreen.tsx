import { useEffect, useState } from 'react';

interface LoadingScreenProps {
  onFinished: () => void;
}

export default function LoadingScreen({ onFinished }: LoadingScreenProps) {
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // Start fade-out after 2 seconds
    const fadeTimer = setTimeout(() => setFadeOut(true), 2000);
    // Notify parent to unmount after fade animation (0.6s)
    const doneTimer = setTimeout(() => onFinished(), 2600);
    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(doneTimer);
    };
  }, [onFinished]);

  return (
    <div
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#0d0d14] transition-opacity duration-600 ${
        fadeOut ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
      style={{ transitionDuration: '600ms' }}
    >
      {/* Logo / Name */}
      <div className="mb-8 text-center">
        <span className="text-4xl font-bold tracking-tight text-white">
          Vince<span className="text-indigo-400">.</span>
        </span>
      </div>

      {/* Animated ring spinner */}
      <div className="relative flex items-center justify-center">
        <div className="h-14 w-14 rounded-full border-4 border-indigo-500/20" />
        <div className="absolute h-14 w-14 rounded-full border-4 border-transparent border-t-indigo-400 animate-spin" />
      </div>

      {/* Subtle tagline */}
      <p className="mt-6 text-sm tracking-widest text-indigo-300/60 uppercase">
        Loading portfolio…
      </p>
    </div>
  );
}
