import { Container, Card, Row, Col, Button } from "react-bootstrap";
import '../styles/Pricing.css'


export default function Pricing() {
return (
<Container className="pricing-section">
  <h2 className="text-center mb-5">Pricing 💰</h2>
  <Row className="g-4">
    {[{title:"Basic",price:"₹499"},
      {title:"Premium",price:"₹999"},
      {title:"Luxury",price:"₹1999"}].map((p,i)=>(
      <Col md={4} key={i}>
        <Card className={`pricing-card text-center ${i === 1 ? "featured" : ""}`}>
          <Card.Body>
            <Card.Title>{p.title}</Card.Title>
            <h2>{p.price}</h2>
            <Button>Get Started</Button>
          </Card.Body>
        </Card>
      </Col>
    ))}
  </Row>
</Container>

);
}