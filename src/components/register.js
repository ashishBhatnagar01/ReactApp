import  Row  from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button"
import  Form  from "react-bootstrap/Form";
import { useState } from "react";
import axios from "axios";
import swal from "sweetalert";
function Register() {
    const [movieTitle,setMovieTitle]=useState("");
    const [actor,setActor]=useState("");
    const [url,setUrl]=useState("");
    // console.log(movieTitle,actor,url);
    async function submit(){
        console.log(movieTitle,actor,url);
        const movieData={
            "imageUrl":url,
            "title":movieTitle,
            "actors":actor
        }
        // console.log(movieData);
        const response= await axios.post('https://bms-backend2.herokuapp.com//addmovies',movieData);
        console.log(response);
        swal({
            title: "Movie Added!",
            text: "Movie Added Success!",
            icon: "success",
            button: "Aww yiss!",
          }).then(function(){
              window.location="/movies"
          })
    }
    return(
        <div className="p-5" style={{width:"50%",display:"flex",justifyContent:"center",margin:"0px auto"}}>
            <Form>
        `<Row className="mb-3">
            <Form.Group as={Col} controlId="formTitle">
            <Form.Label>Movie Title </Form.Label>
            <Form.Control type="text" value={movieTitle} onChange={(e)=>setMovieTitle(e.target.value)} placeholder="Enter Movie Title" />
            </Form.Group>

            <Form.Group as={Col} controlId="formName">
            <Form.Label>Actor</Form.Label>
            <Form.Control type="text" value={actor} onChange={(e)=>setActor(e.target.value)} placeholder="Enter Actor Name" />
            </Form.Group> 
        </Row>

        <Form.Group className="mb-3" controlId="formUrl">
            <Form.Label>Poster URL</Form.Label>
            <Form.Control type="text" value={url} onChange={(e)=>setUrl(e.target.value)} placeholder="Poster URL" />
        </Form.Group>

        <Button variant="primary" style={{display:"flex",justifyContent:"center",margin:"0px auto"}} onClick={submit}>
            Submit
        </Button>
        </Form>`
        </div>
    )
}
export default Register;