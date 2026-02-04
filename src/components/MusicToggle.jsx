import { useState,useEffect } from "react";
import { Button } from "react-bootstrap";

export function MusicToggle() {
  const [playing, setPlaying] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
  const audio = audioRef.current;
  if (!audio) return;

  audio.volume = 0.7;
  audio.muted = true;

  audio.play()
    .then(() => {
      setPlaying(true);
    })
    .catch(() => {
      setPlaying(false);
    });

  const enableSound = () => {
    audio.muted = false;
    audio.play();
    setPlaying(true);

    document.removeEventListener("click", enableSound);
    document.removeEventListener("touchstart", enableSound);
  };

  document.addEventListener("click", enableSound);
  document.addEventListener("touchstart", enableSound);
}, []);


  return (
    <Button
      variant="dark"
      className="music-btn"
      onClick={() => setPlaying(!playing)}
    >
      {playing ? "Pause Music 🔇" : "Play Music 🎵"}
    </Button>
  );
}
