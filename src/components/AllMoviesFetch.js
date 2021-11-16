import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import axios from "axios";
import { useState, useEffect } from "react";
function AllMoviesFetch() {
  const [data,setData]=useState([]);
  useEffect(async ()=>{
        const response=await axios.get('https://bms-backend2.herokuapp.com/movies');
        console.log(response.data);
        setData(response.data);
  },[]);
  return (
    <div>
      <Container fluid style={{ paddingBottom: "5%", background: "pink" }}>
        <Row style={{ textAlign: "center",maxWidth:"4000px" }}>
        {data.map((mov)=>
            <Col id={mov._id} xs={6} md={4} lg={3} className="mt-5">
            <Card onClick={()=>window.location.href="/movies/"+mov._id} style={{cursor:"pointer"}}>
            <Card.Img variant="top" src={mov.imageUrl} />
            <Card.Body>
                <Card.Title>{mov.title}</Card.Title>
                <Card.Text>
                {mov.actors}
                </Card.Text>
            </Card.Body>
            </Card>
        </Col>
        )}
        </Row>
      </Container>
    </div>
  );
}

export default AllMoviesFetch;
