import  Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

function Footer() {
    return (
        <div style={{background:"black",color:"white"}}>
            <Container>
                <Row style={{padding:"5%"}}>
                    <Col>
                        COlumn 1
                    </Col>
                    <Col>
                        Column 2
                    </Col>
                    <Col>
                        <Button style={{float:"right"}}>Contact Us</Button>
                    </Col>
                </Row>
                <Row style={{textAlign:"center", padding:"3%"}}>
                    <Col>
                        COlumn 1
                    </Col>
                    <Col>
                        Column 2
                    </Col>
                    <Col>
                        Column 3
                    </Col>
                </Row>
            </Container>
        </div>
    );
  }
  
  export default Footer;
  