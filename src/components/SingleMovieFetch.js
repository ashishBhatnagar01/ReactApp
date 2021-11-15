import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
// 
import { useParams } from "react-router";
import axios from "axios";
import { useState,useEffect } from "react";
function SingleMovieFetch(){
    const {movid}=useParams();
    console.log(movid);
    const [data,setData]=useState([]);
    useEffect(async ()=>{
        try{
          const response=await axios.get(`http://localhost:5000/movies/${movid}`);
          console.log(response.data);
          setData([response.data]);
        } 
        catch(err)
        {
          console.error(err);
        }
    },[]);
    return(
        <div>
      <Container fluid style={{ padding: "5%", background: "pink" }}>
        <Row style={{ textAlign: "center",maxWidth:"4000px" }}>
        {data.map((mov)=>
            <Col id={mov._id} xs={6} md={4} lg={3} className="mt-5">
            <Card onClick={()=>window.location.href="/movies/"+mov._id} style={{cursor:"pointer"}}>
            <Card.Img variant="top" src={mov.imageUrl} />
            <Card.Body>
                <Card.Title>{mov.title}</Card.Title>
                <Card.Text>
                {mov.actor}
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
export default SingleMovieFetch;