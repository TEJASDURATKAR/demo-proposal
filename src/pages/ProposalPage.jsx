import { useState, useRef } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import "../styles/ProposalPage.css";

export default function ProposalPage() {
  const [accepted, setAccepted] = useState(false);
  const [noPosition, setNoPosition] = useState({});
  const audioRef = useRef(null);

  const moveNoButton = () => {
    setNoPosition({
      position: "relative",
      left: Math.random() * 140 - 70 + "px",
      top: Math.random() * 100 - 50 + "px",
    });
  };

  const handleYes = () => {
    setAccepted(true);
    audioRef.current.play();
  };

  return (
    <>
      {/* HERO */}
      <section className="hero-section">
        <Container className="text-center">
          <h1 className="typing-text">Hey Monika ❤️</h1>
          <p className="fade-in">
            I have something very special to ask you…
          </p>
        </Container>
      </section>

      {/* STORY */}
      <section className="story-section">
        <Container>
          <h2 className="section-title">Our Story 💕</h2>
          <Row className="g-4">
            {[
              "The Day We Met",
              "Our First Conversation",
              "When I Knew It Was You",
            ].map((item, index) => (
              <Col md={4} key={index}>
                <Card className="story-card hover-rise">
                  <Card.Body>
                    <Card.Title>{item}</Card.Title>
                    <Card.Text>
                      A moment that made my heart choose you forever ❤️
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* GALLERY */}
      <section className="gallery-section">
  <Container>
    <h2 className="section-title">Sweet Memories 📸</h2>

    <Row className="g-3">
      {[
        "https://images.pexels.com/photos/7588993/pexels-photo-7588993.jpeg",
        "https://images.pexels.com/photos/18252221/pexels-photo-18252221.jpeg",
        "https://images.pexels.com/photos/34187156/pexels-photo-34187156.jpeg",
        "https://images.pexels.com/photos/19569601/pexels-photo-19569601.jpeg",
      ].map((img, index) => (
        <Col md={3} sm={6} key={index}>
          <div className="gallery-box hover-zoom">
            <img
              src={img}
              alt={`Memory ${index + 1}`}
              className="gallery-img"
            />
          </div>
        </Col>
      ))}
    </Row>
  </Container>
</section>



{/* LOVE LETTER */}
<section className="letter-section">
  <Container>
    <h2 className="section-title">A Letter From My Heart 💌</h2>

    <Card className="letter-card">
      <Card.Body>
        <p>
          From the moment you entered my life, everything changed.
          You became my smile, my comfort, my home.
        </p>
        <p>
          I don’t promise perfection, but I promise honesty,
          loyalty, and a lifetime of love ❤️
        </p>
        <p><strong>Forever yours.</strong></p>
      </Card.Body>
    </Card>
  </Container>
</section>




      {/* PROPOSAL */}
      <section className="proposal-section">
        <Container className="text-center">
          {!accepted ? (
            <>
              <h1 className="proposal-title">
                Will You Marry Me? 💍
              </h1>

              <p className="proposal-sub">
                I want to spend every tomorrow with you ❤️
              </p>

              <div className="proposal-buttons">
                <Button
                  variant="light"
                  size="lg"
                  className="yes-btn"
                  onClick={handleYes}
                >
                  YES ❤️
                </Button>

                <Button
                  variant="outline-light"
                  size="lg"
                  className="no-btn"
                  style={noPosition}
                  onMouseEnter={moveNoButton}
                  onClick={moveNoButton}
                >
                  NO 🙈
                </Button>
              </div>
            </>
          ) : (
            <div className="celebration">
              <h1>She Said YES 😍💍</h1>
              <p>
                You just made me the luckiest person alive ❤️  
                I promise to love you forever.
              </p>
              <div className="confetti"></div>
            </div>
          )}
        </Container>
      </section>

      {/* BACKGROUND MUSIC */}
      <audio ref={audioRef} loop>
        <source src="/romantic-music.mp3" type="audio/mp3" />
      </audio>
    </>
  );
}
