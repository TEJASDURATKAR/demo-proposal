import { Row, Col } from "react-bootstrap";


export function PhotoGallery() {
return (
<Row className="g-3">
{[1, 2, 3, 4, 5, 6].map((img) => (
<Col md={4} sm={6} key={img}>
<div className="gallery-box">Memory {img}</div>
</Col>
))}
</Row>
);
}