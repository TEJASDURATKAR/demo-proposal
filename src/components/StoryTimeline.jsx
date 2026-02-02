import { Row, Col, Card } from "react-bootstrap";


export function StoryTimeline() {
return (
<Row className="g-4">
{["We Met", "First Chat", "First Date", "Fell In Love"].map((step, i) => (
<Col md={3} key={i}>
<Card className="story-card">
<Card.Body>
<Card.Title>{step}</Card.Title>
<Card.Text>One of my favorite memories 💖</Card.Text>
</Card.Body>
</Card>
</Col>
))}
</Row>
);
}