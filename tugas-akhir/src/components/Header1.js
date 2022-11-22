import { Col, Container, Row } from "react-bootstrap";
const Header1 = () => {
  return (
    <div className="text_header">
      <Container className="text-white text-center d-flex justify-content-center align-items-end">
        <Row>
          <Col>
            <div className="title">SHARFARAZ</div>
            <div className="title">CAFE</div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Header1;
