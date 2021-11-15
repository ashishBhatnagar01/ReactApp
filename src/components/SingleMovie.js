/* eslint-disable eqeqeq */
/* eslint-disable array-callback-return */
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import data from "./movies.json";
import { useParams } from "react-router";
function SingleMovie(){
    const {movid}=useParams();
    console.log(movid);
    return (
    <div>
      <Container fluid style={{ padding: "5%", background: "pink" }}>
        <Row className="d-flex justify-content-center" style={{ textAlign: "center",maxWidth:"4000px" }}>
        {data.map((mov)=>{
            if(mov.id==movid){
                return(
                    <Col id={mov.id} xs={6} md={4} lg={3} className="mt-2">
                    <Card >
                    <Card.Img variant="top" src={mov.img} />
                    <Card.Body>
                        <Card.Title>{mov.title}</Card.Title>
                        <Card.Text>
                        {mov.actor}
                        </Card.Text>
                    </Card.Body>
                    </Card>
                </Col>
                )
            }
        })
        }
        

        </Row>
      </Container>
    </div>
  );
}
export default SingleMovie;