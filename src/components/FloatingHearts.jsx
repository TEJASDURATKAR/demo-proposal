import { useEffect } from "react";
import "../styles/FloatingHearts.css";

export default function FloatingHearts() {
  useEffect(() => {
    const createHeart = (e) => {
      const heart = document.createElement("span");
      heart.className = "floating-heart";
      heart.innerHTML = "❤️";

      heart.style.left = e.pageX + "px";
      heart.style.top = e.pageY + "px";

      document.body.appendChild(heart);

      setTimeout(() => {
        heart.remove();
      }, 2000);
    };

    window.addEventListener("mousemove", createHeart);

    return () => {
      window.removeEventListener("mousemove", createHeart);
    };
  }, []);

  return null;
}
