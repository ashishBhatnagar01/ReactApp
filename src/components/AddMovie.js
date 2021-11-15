import Button from "react-bootstrap/Button"

function AddMovie(){
    function add(){
        window.location.href="/register";
    }
    return (
        <div style={{display:"flex",justifyContent:"end",margin:"0px auto",background:"pink",paddingTop:"40px",paddingRight:"80px"}}>
            <Button onClick={add}>Add Movie</Button>
        </div>
    )
}
export default AddMovie;