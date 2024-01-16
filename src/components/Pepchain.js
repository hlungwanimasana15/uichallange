import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import image1 from '../assets/Screenshot 2023-12-03 201712.png';
import image2 from '../assets/Screenshot 2023-12-03 201749.png';
import image3 from '../assets/Screenshot 2023-12-03 201814.png';
import image4 from '../assets/Screenshot 2023-12-03 201834.png';
import myImg from '../assets/1st.png'
import Table from 'react-bootstrap/Table';
import { Card } from 'react-bootstrap';
import { Row, Col } from 'react-bootstrap';
import Accordion from 'react-bootstrap/Accordion';
import { CiTwitter } from 'react-icons/ci';
import { PiTelegramLogoLight } from "react-icons/pi";
import logoImage from '../assets/pepechainLogo.png';
import { FaStar } from "react-icons/fa6";
import happyfrog from '../assets/happyfrog.png';
import sadfrog from '../assets/sadfrog.png';


const Pepchain = () => {



  return (
    <>
      <div style={{ padding: '24px', background: '#103d19', boxShadow: '0 0 10px rgba(0, 128, 0, 0.3)' }}>
        {/* header */}
        <div style={{ background: '#103d19' }}>
          <Navbar className="bg-body-tertiary" >
            <Container>
              <Navbar.Brand href="#home" style={{ marginRight: '20px' }}>
                <img
                  src={logoImage}
                  width="300"
                  height="60"
                  className="d-inline-block align-top"
                  alt="Your Logo"
                />
              </Navbar.Brand>
              <Navbar.Toggle />
              <Navbar.Collapse className="justify-content-end">
                <Navbar.Text style={{ marginRight: '10px' }}>
                  <a href="#home">HOME</a>
                </Navbar.Text>
                <Navbar.Text style={{ marginRight: '10px' }}>
                  <a href="#login">ABOUT</a>
                </Navbar.Text>
                <Button variant="outline-success" style={{ marginRight: '10px' }}>
                  <CiTwitter />  TWITTER
                </Button>{' '}
                <Button variant="outline-warning"><PiTelegramLogoLight />TELEGRAM</Button>{' '}
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </div>
        {/* secondheader */}
        <div style={{ textAlign: 'center', marginBottom: '10px', marginLeft: '40px' }}>
          <h4 style={{ fontSize: '44px', textAlign: 'left', marginTop: '90px', paddingLeft: '210px' }}>
            USHERING THE
          </h4>
          <p style={{ fontSize: '14px', lineHeight: '1.6', color: 'white' }}>
            Aww yeah, you successfully read this important alert message. This example<br></br>
            text is going to run a bit longer so that you can see how spacing within an<br></br>
            alert works with this kind of content.
          </p>
        </div>
        <h1 style={{ fontSize: '44px', paddingRight: '50px', marginTop: '20px', textAlign: 'center', marginBottom: '10px', marginLeft: '40px', color: 'white' }}>
          MEME ECONOMY TO THE NEXT
          <br />
          LEVEL PEPECHAIN
        </h1>
        <div style={{ flexDirection: 'row', display: 'flex' }}>
          <img src={myImg} alt='head' style={{ padding: '10px' }} />

          <h1><div>LEVEL</div> PEPECHAIN</h1>

          <table className='table1' style={{ paddingTop: '160px', paddingLeft: '280px' }}>

            <tbody>
              <tr>
                <th rowSpan={2}>4 <br />buy TAX</th>
                <th rowSpan={2}>4 <br />sell TAX</th>
                <th rowSpan={2}>100% <br />LOCKED LIQUDITY</th>
                <th rowSpan={2}>1000000000 <br />TOTAL SUPPLY</th>

                <td className='drops'>
                  {/* <img src={Symbol}/><input type="text" id="head-input" /> */}
                  <select>
                    <option value="">ETH</option>
                  </select>
                </td>

                <td className='drops2'>
                  {/* <img src={Symbol}/><input type="text" id="head-input" /> */}
                  <select>
                    <option value="">PC</option>
                  </select>
                  <Button>Connect wallet</Button>
                </td>
              </tr>
            </tbody>
          </table>

        </div>
        <div style={{
          display: 'block',
          justifyContent: 'center',
          alignItems: 'center'
        }}

        >
          <h3 style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>FEATURES</h3>
          <h1 style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>WHY SHOULD YOU BUILD OR USE THE PEPECHAIN?</h1>
        </div>
        <div style={{ display: 'flex', flexDirection: 'row' }}>
          <Card style={{ width: '48rem', marginRight: '35px', display: 'flex', flexDirection: 'row', height: '300px', marginTop: '35px', padding: '36px',backgroundColor: 'rgba(0, 128, 0, 0.3)'  }} className="d-flex">
            <Card.Img variant="top" src={image4} width={200} height={200} />
            <Card.Body className="flex-row">
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>

          <Card style={{ width: '48rem', marginRight: '35px', display: 'flex', flexDirection: 'row', height: '300px', marginTop: '35px', padding: '36px',backgroundColor: 'rgba(0, 128, 0, 0.3)'  }} className="d-flex">
            <Card.Img variant="top" src={image1} width={200} height={200} />
            <Card.Body className="flex-row">
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div style={{ display: 'flex', flexDirection: 'row' }}>
          <Card style={{ width: '48rem', marginRight: '35px', display: 'flex', flexDirection: 'row', height: '300px', marginTop: '35px', padding: '36px',backgroundColor: 'rgba(0, 128, 0, 0.3)'  }} className="d-flex">
            <Card.Img variant="top" src={image2} width={200} height={200} />
            <Card.Body className="flex-row">
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>

            </Card.Body>
          </Card>

          <Card style={{ width: '48rem', marginRight: '35px', display: 'flex', flexDirection: 'row', height: '300px', marginTop: '35px', padding: '36px',backgroundColor: 'rgba(0, 128, 0, 0.3)'  }} className="d-flex">
            <Card.Img variant="top" src={image3} width={200} height={200} />
            <Card.Body className="flex-row">
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>

        </div>

        <h1 style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '30px' }}>ROADMAP</h1>
        <h1 style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>HOW IT ALL START</h1>
        <Table >
          <div style={{ display: 'flex', flexDirection: 'row', borderTop: '1px solid #000', padding: '16px' }}>
            <h1>Q1</h1>
            <div >
              <h1> Lauching</h1>
              <p>pipechain is reshaping the meme economy,we create a conductive</p>
            </div>
            <div style={{ display: 'flex', flexDirection: 'row', marginRight: '60px' }}>
              <div style={{ display: 'flex', flexDirection: 'column', marginRight: '20px' }}>
                <FaStar />papechain beta release
                <FaStar />pepechain maintan realese
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', marginRight: '60px' }}>
                <FaStar /> formating the DOF
                <FaStar /> Listing of SPASPD
              </div>
            </div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'row', borderTop: '1px solid #000', padding: '16px' }}>
            <h1>Q1</h1>
            <div >
              <h1> Lauching</h1>
              <p>pipechain is reshaping the meme economy,we create a conductive</p>
            </div>
            <div style={{ display: 'flex', flexDirection: 'row', marginRight: '60px' }}>
              <div style={{ display: 'flex', flexDirection: 'column', marginRight: '20px' }}>
                <FaStar />papechain beta release
                <FaStar />pepechain maintan realese
              </div>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <FaStar /> formating the DOF
                <FaStar /> Listing of SPASPD
              </div>
            </div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'row', borderTop: '1px solid #000', padding: '16px' }}>
            <h1>Q1</h1>
            <div >
              <h1> Lauching</h1>
              <p>pipechain is reshaping the meme economy,we create a conductive</p>
            </div>
            <div style={{ display: 'flex', flexDirection: 'row', marginRight: '60px' }}>
              <div style={{ display: 'flex', flexDirection: 'column', marginRight: '20px' }}>
                <FaStar />papechain beta release
                <FaStar />pepechain maintan realese
              </div>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <FaStar /> formating the DOF
                <FaStar /> Listing of SPASPD
              </div>
            </div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'row', borderTop: '1px solid #000', padding: '16px' }}>
            <h1>Q1</h1>
            <div >
              <h1> Lauching</h1>
              <p>pipechain is reshaping the meme economy,we create a conductive</p>
            </div>
            <div style={{ display: 'flex', flexDirection: 'row', marginRight: '60px' }}>
              <div style={{ display: 'flex', flexDirection: 'column', marginRight: '20px' }}>
                <FaStar />papechain beta release
                <FaStar />pepechain maintan realese
              </div>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <FaStar /> formating the DOF
                <FaStar /> Listing of SPASPD
              </div>
            </div>
          </div>

        </Table >
        <br></br>
        <Container style={{ width: '100%', marginBottom: '50px' }}>
          <Row>
            <Col xs={6} style={{ backgroundColor: '#043e1a' }} ><h1>ABOUT US</h1></Col>
            <Col xs={6} style={{ backgroundColor: '#077731' }}><h1>THE LAYER  1 BLOCK CHAIN ECOSYSTEM FOR MEME</h1><p>pepechain is reshaping the meme econony is percieved .we create conductive environment for web3 founders to build and launch innovetive projects</p></Col>
          </Row>
          <Row>
            <Col xs={2}><img src={happyfrog} alt='happyfrog' /></Col>
            <Col xs={6} style={{ backgroundColor: "#09953e" }}><h1>THE LAYER  1 BLOCK CHAIN ECOSYSTEM FOR MEME</h1><p>pepechain is reshaping the meme econony is percieved .we create conductive environment for web3 founders to build and launch innovetive projects</p></Col>
            <Col xs={2}><img src={sadfrog} alt='sadfrog' /></Col>
          </Row>
        </Container>

        <Accordion>
          <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
              <Navbar.Brand href="#home">FAQ</Navbar.Brand>
            </Container>
          </Navbar>
          <Accordion.Item eventKey="0">
            <Accordion.Header>I SOLD MY PEPCHAIN ,WHERE IS MY BNB</Accordion.Header>
            <Accordion.Body>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
              minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
              pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
              culpa qui officia deserunt mollit anim id est laborum.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>HOW CAN I LIST MY PEPECHAIN ON THE MARKET?</Accordion.Header>
            <Accordion.Body>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
              minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
              pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
              culpa qui officia deserunt mollit anim id est laborum.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>WHAT ARE THE FEES</Accordion.Header>
            <Accordion.Body>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
              minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
              pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
              culpa qui officia deserunt mollit anim id est laborum.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>

        <br></br>
        <Navbar className="bg-body-tertiary">
          <Container>
            <Navbar.Brand href="#home" style={{ marginRight: '20px' }}>
              <img
                src={logoImage}
                width="300"
                height="60"
                className="d-inline-block align-top"
                alt="Your Logo"
              />
            </Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">
              <Navbar.Text style={{ marginRight: '10px' }}>
                <a href="#home">HOME</a>
              </Navbar.Text>
              <Navbar.Text style={{ marginRight: '10px' }}>
                <a href="#login">ABOUT</a>
              </Navbar.Text>
              <Button variant="outline-success" style={{ marginRight: '10px' }}>
                <CiTwitter />  TWITTER
              </Button>{' '}
              <Button variant="outline-warning"><PiTelegramLogoLight />TELEGRAM</Button>{' '}
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div >
    </>
  );
};

export default Pepchain;
