import { useState, useRef, useEffect } from "react";
import { Button } from "react-bootstrap";
import "../styles/Music.css";

export default function MusicPlayer() {
  const [playing, setPlaying] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    // Try autoplay muted (may work in some browsers)
    audio.muted = true;
    audio.play().catch(() => {
      // autoplay blocked, show play button
      setPlaying(false);
    });
  }, []);

  const toggleMusic = () => {
    if (!audioRef.current) return;

    if (!playing) {
      audioRef.current.muted = false; // unmute
      audioRef.current.play().catch(() => {});
    } else {
      audioRef.current.pause();
    }

    setPlaying(!playing);
  };

  return (
    <div
      className="music-player"
      style={{
        position: "fixed",
        bottom: "20px",
        right: "20px",
        zIndex: 2000,
      }}
    >
      <audio ref={audioRef} src="/music.mp3" loop />
      <Button size="sm" variant="danger" onClick={toggleMusic}>
        {playing ? "Pause 🎵" : "Play Music 🎵"}
      </Button>
    </div>
  );
}
