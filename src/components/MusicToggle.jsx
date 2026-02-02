import { useState } from "react";
import { Button } from "react-bootstrap";

export function MusicToggle() {
  const [playing, setPlaying] = useState(false);

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
