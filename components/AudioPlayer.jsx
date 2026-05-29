'use client';

import { useEffect, useRef, useState } from 'react';
import { Volume2, VolumeX } from 'lucide-react';

export default function AudioPlayer() {
  // Explicitly passing null inside the hook clears the React 19 runtime error
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const startAudio = () => {
      audio.play()
        .then(() => {
          setIsPlaying(true);
          removeInteractionListeners();
        })
        .catch((err) => {
          console.log("Autoplay blocked. Waiting for user interaction.");
          console.error("Playback failed:", err);
        });
    };

    const handleInteraction = () => {
      startAudio();
    };

    const removeInteractionListeners = () => {
      window.removeEventListener('click', handleInteraction);
      window.removeEventListener('touchstart', handleInteraction);
      window.removeEventListener('scroll', handleInteraction);
    };

    window.addEventListener('click', handleInteraction);
    window.addEventListener('touchstart', handleInteraction);
    window.addEventListener('scroll', handleInteraction);

    startAudio();

    return () => {
      removeInteractionListeners();
    };
  }, []);

  const toggleMute = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      audio.play()
        .then(() => setIsPlaying(true))
        .catch((err) => console.error("Playback failed:", err));
    }
  };

  return (
    <>
      {/* Native audio element */}
      <audio ref={audioRef} src="/Vachindamma.mp3" loop />

      {/* Fixed Speaker Icon Button */}
      <button
        onClick={toggleMute}
        className="fixed bottom-4 right-4 z-50 flex h-10 w-10 items-center justify-center rounded-full bg-white/80 dark:bg-black/80 backdrop-blur-md shadow-lg transition-transform hover:scale-110 active:scale-95 border border-neutral-200 dark:border-neutral-800"
        aria-label={isPlaying ? "Mute music" : "Play music"}
      >
        {isPlaying ? (
          <Volume2 className="h-4 w-4 text-neutral-800 dark:text-neutral-200 animate-pulse" />
        ) : (
          <VolumeX className="h-4 w-4 text-neutral-400" />
        )}
      </button>
    </>
  );
}