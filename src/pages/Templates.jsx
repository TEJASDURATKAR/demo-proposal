import { Container, Card, Row, Col, Button } from "react-bootstrap";


export default function Templates() {
return (
<Container className="py-5">
<h2 className="text-center text-danger mb-4">Proposal Templates 💌</h2>
<Row className="g-4">
{[1, 2, 3].map((t) => (
<Col md={4} key={t}>
<Card className="shadow-sm">
<Card.Body className="text-center">
<Card.Title>Template {t}</Card.Title>
<Card.Text>Romantic & elegant design</Card.Text>
<Button variant="danger">Preview</Button>
</Card.Body>
</Card>
</Col>
))}
</Row>
</Container>
);
}