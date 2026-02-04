import { useState, useRef, useEffect } from "react";
import { Button } from "react-bootstrap";
import "../styles/Music.css";

export default function MusicPlayer() {
  const [playing, setPlaying] = useState(false);
  const [showButton, setShowButton] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.volume = 0.7;
    audio.muted = true;

    const playAudio = async () => {
      try {
        await audio.play();
        setPlaying(true);

        // Auto started muted, now wait for user interaction to unmute
        setShowButton(true);
      } catch (err) {
        // autoplay blocked
        setShowButton(true);
      }
    };

    playAudio();

    // When user clicks anywhere -> unmute + play
    const enableSound = async () => {
      try {
        audio.muted = false;
        await audio.play();
        setPlaying(true);
        setShowButton(false);
      } catch (err) {}

      document.removeEventListener("click", enableSound);
      document.removeEventListener("touchstart", enableSound);
    };

    document.addEventListener("click", enableSound);
    document.addEventListener("touchstart", enableSound);

    return () => {
      document.removeEventListener("click", enableSound);
      document.removeEventListener("touchstart", enableSound);
    };
  }, []);

  const toggleMusic = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (playing) {
      audio.pause();
      setPlaying(false);
    } else {
      audio.muted = false;
      audio.play();
      setPlaying(true);
    }
  };

  return (
    <div className="music-player">
      <audio ref={audioRef} src="/music.mp3" loop />

      <Button size="sm" variant="danger" onClick={toggleMusic}>
        {playing ? "Pause 🎵" : "Play Music 🎵"}
      </Button>

      {/* Optional: show small hint button if autoplay blocked */}
      {showButton && (
        <p style={{ color: "white", fontSize: "12px", marginTop: "5px" }}>
          Tap anywhere to enable sound 🔊
        </p>
      )}
    </div>
  );
}
