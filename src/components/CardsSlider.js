import Carousel from "react-bootstrap/Carousel";
import Card from "react-bootstrap/Card";
import  CardGroup  from "react-bootstrap/CardGroup";
function CardsSlider() {
  return (
    <div style={{width:"100%",margin:"0px auto",background:"grey",padding:"5%"}}>
      <Carousel variant="light" indicators={false}>
        <Carousel.Item>
          <CardGroup style={{display:"flex",gap:"40px",justifyContent:"flex-end"}}>  
            <Card className="bg-dark text-white" style={{borderRadius:"10px"}}>
                <Card.Img src="./logo512.png" alt="Card image" />
                <Card.ImgOverlay>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                </Card.Text>
                <Card.Text>Last updated 3 min ago</Card.Text>
                </Card.ImgOverlay>
            </Card>
            <Card className="bg-dark text-white">
                <Card.Img src="./logo512.png" alt="Card image" />
                <Card.ImgOverlay>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                </Card.Text>
                <Card.Text>Last updated 3 min ago</Card.Text>
                </Card.ImgOverlay>
            </Card>
            <Card className="bg-dark text-white">
                <Card.Img src="./logo512.png" alt="Card image" />
                <Card.ImgOverlay>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                </Card.Text>
                <Card.Text>Last updated 3 min ago</Card.Text>
                </Card.ImgOverlay>
            </Card>
            <Card className="bg-dark text-white">
                <Card.Img src="./logo512.png" alt="Card image" />
                <Card.ImgOverlay>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                </Card.Text>
                <Card.Text>Last updated 3 min ago</Card.Text>
                </Card.ImgOverlay>
            </Card>
            
            </CardGroup>
        </Carousel.Item>
        <Carousel.Item>
        <CardGroup style={{display:"flex",gap:"40px",justifyContent:"flex-end"}}>  
            <Card className="bg-dark text-white" style={{borderRadius:"10px"}}>
                <Card.Img src="./logo512.png" alt="Card image" />
                <Card.ImgOverlay>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                </Card.Text>
                <Card.Text>Last updated 3 min ago</Card.Text>
                </Card.ImgOverlay>
            </Card>
            <Card className="bg-dark text-white">
                <Card.Img src="./logo512.png" alt="Card image" />
                <Card.ImgOverlay>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                </Card.Text>
                <Card.Text>Last updated 3 min ago</Card.Text>
                </Card.ImgOverlay>
            </Card>
            <Card className="bg-dark text-white">
                <Card.Img src="./logo512.png" alt="Card image" />
                <Card.ImgOverlay>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                </Card.Text>
                <Card.Text>Last updated 3 min ago</Card.Text>
                </Card.ImgOverlay>
            </Card>
            <Card className="bg-dark text-white">
                <Card.Img src="./logo512.png" alt="Card image" />
                <Card.ImgOverlay>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                </Card.Text>
                <Card.Text>Last updated 3 min ago</Card.Text>
                </Card.ImgOverlay>
            </Card>
            
            </CardGroup>
        </Carousel.Item>
        <Carousel.Item>
        <CardGroup style={{display:"flex",gap:"40px",justifyContent:"flex-end"}}>  
            <Card className="bg-dark text-white" style={{borderRadius:"10px"}}>
                <Card.Img src="./logo512.png" alt="Card image" />
                <Card.ImgOverlay>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                </Card.Text>
                <Card.Text>Last updated 3 min ago</Card.Text>
                </Card.ImgOverlay>
            </Card>
            <Card className="bg-dark text-white">
                <Card.Img src="./logo512.png" alt="Card image" />
                <Card.ImgOverlay>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                </Card.Text>
                <Card.Text>Last updated 3 min ago</Card.Text>
                </Card.ImgOverlay>
            </Card>
            <Card className="bg-dark text-white">
                <Card.Img src="./logo512.png" alt="Card image" />
                <Card.ImgOverlay>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                </Card.Text>
                <Card.Text>Last updated 3 min ago</Card.Text>
                </Card.ImgOverlay>
            </Card>
            <Card className="bg-dark text-white">
                <Card.Img src="./logo512.png" alt="Card image" />
                <Card.ImgOverlay>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                </Card.Text>
                <Card.Text>Last updated 3 min ago</Card.Text>
                </Card.ImgOverlay>
            </Card>
            
            </CardGroup>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default CardsSlider;
