import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../styles/Home.css";
import FloatingHearts from "../components/FloatingHearts";

export default function Home() {
  return (
    <>
    <FloatingHearts />
      {/* HERO */}
<section className="home-hero">
  <Container className="text-center">
    <h1 className="home-title typing-text">
      Proposal Page Website 💍
    </h1>
    <p className="home-subtitle fade-in">
      Turn your love story into a beautiful proposal website ❤️
    </p>

    <div className="hero-buttons">
      <Link to="/proposal">
        <Button variant="danger" size="lg">
          View Demo Proposal
        </Button>
      </Link>
    </div>
  </Container>
</section>


      {/* WHY CHOOSE */}
      <section className="why-section">
        <Container>
          <h2 className="section-title">
            Why Choose a Proposal Website? 💖
          </h2>
          <Row className="g-4">
            {[
              "Unique & Memorable",
              "Perfect for Long Distance",
              "Shareable Link",
              "Fully Customizable",
            ].map((item, index) => (
              <Col md={3} key={index}>
                <Card className="why-card hover-rise">
                  <Card.Body className="text-center">
                    <h5>{item}</h5>
                    <p>
                      Make your proposal unforgettable with a personal touch.
                    </p>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* FEATURES */}
      <section className="features-section">
        <Container>
          <h2 className="section-title">What You Get 💝</h2>
          <Row className="g-4">
            {[
              { title: "Romantic Animations", emoji: "✨" },
              { title: "Music Background", emoji: "🎵" },
              { title: "Mobile Friendly", emoji: "📱" },
              { title: "Private & Secure", emoji: "🔒" },
              { title: "Custom Photos & Text", emoji: "🖼️" },
              { title: "One-Click Share Link", emoji: "🔗" },
            ].map((item, index) => (
              <Col md={4} key={index}>
                <Card className="feature-card hover-rise text-center">
                  <Card.Body>
                    <div className="feature-emoji">{item.emoji}</div>
                    <h5>{item.title}</h5>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

     {/* HOW IT WORKS */}
<section className="steps-section">
  <Container>
    <h2 className="section-title">How Your Love Story Unfolds ✨</h2>

    <Row className="g-4 text-center">
      {[
        "Choose a Beautiful Template",
        "Pour Your Heart Into Words",
        "Get Your Magical Proposal Link",
        "She Says YES 😍",
      ].map((step, index) => (
        <Col md={3} key={index}>
          <div className="step-box hover-rise">
            <div className="step-circle">
              <span className="step-number">{index + 1}</span>
            </div>
            <p className="step-text">{step}</p>
          </div>
        </Col>
      ))}
    </Row>
  </Container>
</section>


      {/* LOVE STORY */}
      <section className="story-section">
        <Container className="text-center">
          <h2 className="section-title">
            Because Love Deserves More ❤️
          </h2>
          <p className="story-text">
            Flowers fade. Messages get lost.
            <br />
            But a proposal website stays forever — a memory you both can revisit anytime.
          </p>
        </Container>
      </section>

      

      {/* FINAL CTA */}
      <section className="home-cta">
        <Container className="text-center">
          <h1>One Question. One Moment. Forever ❤️</h1>
          <p>
            Don’t just ask —
            <strong> create a memory she’ll cherish forever 💍</strong>
          </p>
          <Link to="/pricing">
            <Button variant="light" size="lg">
              Create My Proposal
            </Button>
          </Link>
        </Container>
      </section>

      {/* TESTIMONIALS */}
      <section className="testimonials-section">
        <Container>
          <h2 className="section-title">Happy Love Stories 💑</h2>
          <Row className="g-4">
            {[
              {
                name: "Aman & Riya",
                text: "She cried happy tears 😭❤️ Best decision ever!",
              },
              {
                name: "Rahul",
                text: "My long-distance proposal became magical ✨",
              },
              {
                name: "Sneha",
                text: "Everyone loved the design and animations 💕",
              },
            ].map((t, index) => (
              <Col md={4} key={index}>
                <Card className="testimonial-card hover-rise">
                  <Card.Body>
                    <p>“{t.text}”</p>
                    <h6>— {t.name}</h6>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </>
  );
}
