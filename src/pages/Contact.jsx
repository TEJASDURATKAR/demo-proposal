import { Container, Form, Button } from "react-bootstrap";


export default function Contact() {
return (
<Container className="py-5" style={{ maxWidth: "600px" }}>
<h2 className="text-center text-danger mb-4">Contact Us 📩</h2>
<Form>
<Form.Control className="mb-3" placeholder="Your Name" />
<Form.Control className="mb-3" placeholder="Email" />
<Form.Control as="textarea" rows={4} placeholder="Your Message" />
<Button variant="danger" className="mt-3 w-100">Send Message</Button>
</Form>
</Container>
);
}