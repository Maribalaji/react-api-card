import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import NavbarHeader from './Navbar';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Banner from './Banner';


function App() {
    const [photo,setPhoto]=useState([])

    useEffect(()=>{
      fetch('https://api.tvmaze.com/shows/1/episodes')
      .then((res)=>{
        return res.json()

      })
      .then((data)=>setPhoto(data))

    },[])
    

  return (
    <div className="App">
      <NavbarHeader />
      <Banner/>

      
      <Container>
      <Row>
        

        {
        photo.map((photo)=>(
          
            <Col className='mb-2'>
            <div>
          

            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={photo.image.medium} />
              <Card.Body>
                <Card.Title>{photo.name}</Card.Title>
                <Card.Text>
                  <p> <i class="bi bi-star-fill" theme-colors="danger"></i> {photo.rating.average}</p>
                  <p>Season:{photo.season}</p>
                 <p>{photo.airdate}</p> 
                 
                </Card.Text>
              
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>

          
          
          </div>
          </Col>
        ))
      }

        
      </Row>
    </Container>
      
      
      

      
      

    </div>
  );
}

export default App;
